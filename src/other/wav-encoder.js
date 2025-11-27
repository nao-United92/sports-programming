/**
 * Encodes a Float32Array of audio samples into a WAV file format ArrayBuffer.
 *
 * @param {Float32Array} samples The audio samples, typically ranging from -1.0 to 1.0.
 * @param {object} [options={}] Configuration for the WAV file.
 * @param {number} [options.sampleRate=44100] The sample rate of the audio.
 * @param {number} [options.numChannels=1] The number of audio channels.
 * @returns {ArrayBuffer} An ArrayBuffer containing the WAV file data.
 */
function encodeWAV(samples, options = {}) {
  const sampleRate = options.sampleRate || 44100;
  const numChannels = options.numChannels || 1;
  const bitsPerSample = 16;
  const bytesPerSample = bitsPerSample / 8;
  const dataSize = samples.length * numChannels * bytesPerSample;
  const fileSize = 44 + dataSize;

  const buffer = new ArrayBuffer(fileSize);
  const view = new DataView(buffer);

  function writeString(offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  // RIFF header
  writeString(0, 'RIFF');
  view.setUint32(4, fileSize - 8, true); // file length - 8
  writeString(8, 'WAVE');

  // fmt chunk
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true); // format chunk size
  view.setUint16(20, 1, true); // audio format (1 = PCM)
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * bytesPerSample, true); // byte rate
  view.setUint16(32, numChannels * bytesPerSample, true); // block align
  view.setUint16(34, bitsPerSample, true);

  // data chunk
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  // Write the PCM samples
  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    // Convert to 16-bit integer
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }

  return buffer;
}

module.exports = { encodeWAV };
