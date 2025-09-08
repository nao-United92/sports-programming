// This file is for browser environment.
// You should run this file in browser.
const { copyToClipboard } = require('./clipboard-utils.js');

const testClipboard = async () => {
    const textToCopy = `Hello, world! ${new Date().toISOString()}`;
    try {
        await copyToClipboard(textToCopy);
        console.log(`'${textToCopy}' has been copied to the clipboard.`);
        console.log('Please paste somewhere (e.g., a text editor) to verify the content.');

        // In a real test environment with clipboard permissions, you could do:
        // const textFromClipboard = await navigator.clipboard.readText();
        // const assert = require('assert');
        // assert.strictEqual(textFromClipboard, textToCopy);
        // console.log('Clipboard content verified automatically.');

    } catch (e) {
        console.error('Failed to copy text: ', e);
    }
};

testClipboard();