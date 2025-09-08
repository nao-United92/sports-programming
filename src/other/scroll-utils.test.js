// This file is for browser environment.
// You should run this file in browser.
const assert = require('assert');
const { scrollToElement } = require('./scroll-utils.js');

const runTests = async () => {
  // Setup: Create some elements to scroll to
  document.body.innerHTML = `
    <div style="height: 1500px;"></div>
    <div id="target-element" style="height: 200px; background: lightblue;">Target Element</div>
    <div style="height: 1500px;"></div>
  `;

  // Test 1: Basic scroll to element
  await new Promise(resolve => {
    window.scrollTo(0, 0); // Scroll to top first
    setTimeout(() => { // Give a moment for scroll to settle
      scrollToElement('target-element');
      // Cannot directly assert scroll position due to 'smooth' behavior and async nature
      // Manual verification is needed for smooth scroll.
      // For 'auto' behavior, we could check window.pageYOffset after a short delay.
      console.log('Test 1: Scrolled to target-element (smooth). Please verify manually.');
      resolve();
    }, 100);
  });

  // Test 2: Scroll with offset
  await new Promise(resolve => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      scrollToElement('target-element', 50);
      console.log('Test 2: Scrolled to target-element with 50px offset (smooth). Please verify manually.');
      resolve();
    }, 100);
  });

  // Test 3: Scroll with 'auto' behavior
  await new Promise(resolve => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      scrollToElement('target-element', 0, 'auto');
      // For 'auto' behavior, we can assert more reliably
      setTimeout(() => {
        const targetElement = document.getElementById('target-element');
        const expectedScrollTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        assert.ok(Math.abs(window.pageYOffset - expectedScrollTop) < 5, 'Test 3 Failed: Auto scroll position incorrect');
        console.log('Test 3: Scrolled to target-element (auto). Verified automatically.');
        resolve();
      }, 50); // Small delay for 'auto' scroll to complete
    }, 100);
  });

  // Test 4: Element not found
  const originalWarn = console.warn;
  let warnCalled = false;
  console.warn = (msg) => {
    if (msg.includes('Element with ID "non-existent" not found.')) {
      warnCalled = true;
    }
  };
  scrollToElement('non-existent');
  assert.ok(warnCalled, 'Test 4 Failed: Should warn if element not found');
  console.warn = originalWarn; // Restore original warn

  console.log('All scroll-utils tests completed. Manual verification may be required for smooth behavior.');
};

runTests();