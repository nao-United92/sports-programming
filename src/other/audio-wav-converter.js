/**
 * Encodes an AudioBuffer into a WAV file format Blob.
 * For testing purposes, it can also return the ArrayBuffer.
 * @param {AudioBuffer} buffer The AudioBuffer to encode.
 * @param {object} [options] Options object.
 * @param {boolean} [options.asBlob=true] If true, returns a Blob. If false, returns the ArrayBuffer.
 * @returns {Blob|ArrayBuffer} A Blob or ArrayBuffer representing the WAV file.
 */
const audioBufferToWav = (buffer, { asBlob = true } = {}) => {
  const numOfChan = buffer.numberOfChannels;
  const length = buffer.length * numOfChan * 2 + 44;
  const arrayBuffer = new ArrayBuffer(length);
  const view = new DataView(arrayBuffer);
  const channels = [];
  let i;
  let sample;
  let offset = 0;
  let pos = 0;

  const writeString = (v, o, s) => {
    for (let i = 0; i < s.length; i++) {
      v.setUint8(o + i, s.charCodeAt(i));
    }
  };

  // RIFF chunk descriptor
  writeString(view, pos, 'RIFF'); pos += 4;
  view.setUint32(pos, length - 8, true); pos += 4;
  writeString(view, pos, 'WAVE'); pos += 4;

  // FMT sub-chunk
  writeString(view, pos, 'fmt '); pos += 4;
  view.setUint32(pos, 16, true); pos += 4; // Sub-chunk size
  view.setUint16(pos, 1, true); pos += 2; // Audio format (1 = PCM)
  view.setUint16(pos, numOfChan, true); pos += 2;
  view.setUint32(pos, buffer.sampleRate, true); pos += 4;
  view.setUint32(pos, buffer.sampleRate * 2 * numOfChan, true); pos += 4; // Byte rate
  view.setUint16(pos, numOfChan * 2, true); pos += 2; // Block align
  view.setUint16(pos, 16, true); pos += 2; // Bits per sample

  // Data sub-chunk
  writeString(view, pos, 'data'); pos += 4;
  view.setUint32(pos, length - pos - 4, true); pos += 4;

  for (i = 0; i < numOfChan; i++) {
    channels.push(buffer.getChannelData(i));
  }

  offset = pos;
  for (i = 0; i < buffer.length; i++) {
    for (let ch = 0; ch < numOfChan; ch++) {
      sample = Math.max(-1, Math.min(1, channels[ch][i]));
      sample = (sample < 0 ? sample * 0x8000 : sample * 0x7FFF) | 0;
      view.setInt16(offset, sample, true);
      offset += 2;
    }
  }

  if (asBlob) {
    return new Blob([view], { type: 'audio/wav' });
  }
  return arrayBuffer;
};

module.exports = { audioBufferToWav };
