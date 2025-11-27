const { encodeWAV } = require('./wav-encoder');

describe('WAV Encoder', () => {
  // Helper to read a string from a DataView
  const readString = (view, offset, length) => {
    let str = '';
    for (let i = 0; i < length; i++) {
      str += String.fromCharCode(view.getUint8(offset + i));
    }
    return str;
  };

  test('should create a valid WAV header for a mono recording', () => {
    const samples = new Float32Array(100); // 100 samples
    const sampleRate = 44100;
    const numChannels = 1;

    const buffer = encodeWAV(samples, { sampleRate, numChannels });
    const view = new DataView(buffer);

    // RIFF Header
    expect(readString(view, 0, 4)).toBe('RIFF');
    expect(view.getUint32(4, true)).toBe(36 + samples.length * 2); // File size - 8
    expect(readString(view, 8, 4)).toBe('WAVE');

    // fmt chunk
    expect(readString(view, 12, 4)).toBe('fmt ');
    expect(view.getUint32(16, true)).toBe(16); // PCM format chunk size
    expect(view.getUint16(20, true)).toBe(1); // PCM audio format
    expect(view.getUint16(22, true)).toBe(numChannels);
    expect(view.getUint32(24, true)).toBe(sampleRate);
    expect(view.getUint32(28, true)).toBe(sampleRate * numChannels * 2); // Byte rate
    expect(view.getUint16(32, true)).toBe(numChannels * 2); // Block align
    expect(view.getUint16(34, true)).toBe(16); // Bits per sample

    // data chunk
    expect(readString(view, 36, 4)).toBe('data');
    expect(view.getUint32(40, true)).toBe(samples.length * numChannels * 2); // Data size
  });

  test('should correctly encode sample data', () => {
    // A simple ramp from -1 to 1
    const samples = new Float32Array([-1.0, -0.5, 0.0, 0.5, 1.0]);
    const buffer = encodeWAV(samples);
    const view = new DataView(buffer);

    // Check the 16-bit integer values at the data offset (44)
    expect(view.getInt16(44, true)).toBe(-32768); // -1.0 maps to -32768
    expect(view.getInt16(46, true)).toBe(-16384); // -0.5 maps to -16384
    expect(view.getInt16(48, true)).toBe(0);       // 0.0 maps to 0
    expect(view.getInt16(50, true)).toBe(16383);  // 0.5 maps to 16383 (approx)
    expect(view.getInt16(52, true)).toBe(32767);  // 1.0 maps to 32767
  });

  test('should handle stereo channels correctly in header', () => {
    const samples = new Float32Array(100);
    const sampleRate = 16000;
    const numChannels = 2;

    const buffer = encodeWAV(samples, { sampleRate, numChannels });
    const view = new DataView(buffer);

    expect(view.getUint16(22, true)).toBe(numChannels);
    expect(view.getUint32(24, true)).toBe(sampleRate);
    // Byte rate = 16000 * 2 channels * 2 bytes/sample
    expect(view.getUint32(28, true)).toBe(sampleRate * numChannels * 2);
    // Block align = 2 channels * 2 bytes/sample
    expect(view.getUint16(32, true)).toBe(numChannels * 2);
    // Data size = 100 samples * 2 channels * 2 bytes/sample
    expect(view.getUint32(40, true)).toBe(samples.length * numChannels * 2);
  });
});
