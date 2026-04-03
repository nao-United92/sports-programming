const morseToCharMap = {
  '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
  '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
  '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
  '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
  '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
  '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7',
  '---..': '8', '----.': '9'
};

/**
 * Converts Morse code to a string.
 * @param {string} morse - The Morse code to convert.
 * @returns {string} The original string.
 */
function stringFromMorseCode(morse) {
  return morse.split('   ').map(word => 
    word.split(' ').map(char => morseToCharMap[char] || '').join('')
  ).join(' ').trim();
}

module.exports = stringFromMorseCode;
