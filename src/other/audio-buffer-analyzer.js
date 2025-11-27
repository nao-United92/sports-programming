/**
 * Calculates the Root Mean Square (RMS) of an audio buffer, which can be used
 * to measure the average volume or power of the audio signal.
 *
 * @param {number[]} audioBuffer An array of numbers representing audio samples (typically between -1.0 and 1.0).
 * @returns {number} The RMS value of the buffer. Returns 0 for an empty or invalid buffer.
 */
function calculateRMS(audioBuffer) {
  if (!audioBuffer || audioBuffer.length === 0) {
    return 0;
  }

  const sumOfSquares = audioBuffer.reduce((sum, sample) => {
    return sum + (sample * sample);
  }, 0);

  const meanSquare = sumOfSquares / audioBuffer.length;
  return Math.sqrt(meanSquare);
}

/**
 * Checks if an audio buffer is effectively silent by comparing its RMS value
 * against a given threshold.
 *
 * @param {number[]} audioBuffer The audio buffer to check.
 * @param {number} [threshold=0.001] The silence threshold. RMS values below this are considered silent.
 * @returns {boolean} True if the buffer is considered silent, false otherwise.
 */
function isSilent(audioBuffer, threshold = 0.001) {
  if (!audioBuffer || audioBuffer.length === 0) {
    return true;
  }
  const rms = calculateRMS(audioBuffer);
  return rms < threshold;
}

module.exports = { calculateRMS, isSilent };
