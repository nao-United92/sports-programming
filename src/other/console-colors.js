const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};

const colorize = (color, text) => {
    if (!colors[color] || typeof text !== 'string') {
        return text;
    }
    return `${colors[color]}${text}${colors.reset}`;
};

const red = (text) => colorize('red', text);
const green = (text) => colorize('green', text);
const yellow = (text) => colorize('yellow', text);
const blue = (text) => colorize('blue', text);
const magenta = (text) => colorize('magenta', text);
const cyan = (text) => colorize('cyan', text);
const white = (text) => colorize('white', text);

module.exports = {
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  colorize,
};
