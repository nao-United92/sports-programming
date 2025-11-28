const { audioBufferToWav } = require('./audio-wav-converter');

// Mock AudioBuffer for Node.js environment where AudioBuffer is not available.
class MockAudioBuffer {
  constructor({ numberOfChannels, length, sampleRate, channelData }) {
    this.numberOfChannels = numberOfChannels;
    this.length = length;
    this.sampleRate = sampleRate;
    this._channelData = channelData;
  }

  getChannelData(channel) {
    return this._channelData[channel];
  }
}

describe('audioBufferToWav', () => {
  test('should return a Blob by default', () => {
    const config = {
      numberOfChannels: 1,
      length: 1,
      sampleRate: 44100,
      channelData: [new Float32Array(1)],
    };
    const mockBuffer = new MockAudioBuffer(config);
    const result = audioBufferToWav(mockBuffer);
    expect(result).toBeInstanceOf(Blob);
    expect(result.type).toBe('audio/wav');
  });

  test('should correctly format a mono buffer to a WAV ArrayBuffer', () => {
    const config = {
      numberOfChannels: 1,
      length: 10,
      sampleRate: 44100,
      channelData: [new Float32Array(10).map(() => Math.random() * 2 - 1)],
    };
    const mockBuffer = new MockAudioBuffer(config);

    const arrayBuffer = audioBufferToWav(mockBuffer, { asBlob: false });
    expect(arrayBuffer).toBeInstanceOf(ArrayBuffer);

    const expectedSize = 44 + config.length * config.numberOfChannels * 2;
    expect(arrayBuffer.byteLength).toBe(expectedSize);

    const view = new DataView(arrayBuffer);
    expect(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer.slice(0, 4)))).toBe('RIFF');
    expect(view.getUint32(4, true)).toBe(expectedSize - 8);
    expect(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer.slice(8, 12)))).toBe('WAVE');
    expect(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer.slice(12, 16)))).toBe('fmt ');
    expect(view.getUint16(22, true)).toBe(config.numberOfChannels);
    expect(view.getUint32(24, true)).toBe(config.sampleRate);
  });

  test('should correctly format a stereo buffer to a WAV ArrayBuffer', () => {
    const config = {
      numberOfChannels: 2,
      length: 10,
      sampleRate: 22050,
      channelData: [
        new Float32Array(10).fill(0.5),
        new Float32Array(10).fill(-0.5),
      ],
    };
    const mockBuffer = new MockAudioBuffer(config);

    const arrayBuffer = audioBufferToWav(mockBuffer, { asBlob: false });
    const expectedSize = 44 + config.length * config.numberOfChannels * 2;
    expect(arrayBuffer.byteLength).toBe(expectedSize);

    const view = new DataView(arrayBuffer);
    expect(view.getUint16(22, true)).toBe(2); // Check for stereo
    expect(view.getUint32(24, true)).toBe(22050);
  });
});
