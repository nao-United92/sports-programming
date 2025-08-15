
import { copyToClipboard, copyImageToClipboard } from './clipboard-utils.js';

describe('copyToClipboard', () => {
  // Mock the navigator.clipboard API
  const mockWriteText = jest.fn(() => Promise.resolve());
  const mockWrite = jest.fn(() => Promise.resolve());
  const originalNavigatorClipboard = navigator.clipboard;

  beforeAll(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: mockWriteText, write: mockWrite },
      writable: true,
      configurable: true,
    });
    global.ClipboardItem = jest.fn(item => item);
  });

  afterAll(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: originalNavigatorClipboard,
      writable: true,
      configurable: true,
    });
    delete global.ClipboardItem;
  });

  beforeEach(() => {
    mockWriteText.mockClear();
    mockWrite.mockClear();
  });

  test('should copy text to clipboard using navigator.clipboard.writeText', async () => {
    const textToCopy = 'Hello, clipboard!';
    await copyToClipboard(textToCopy);
    expect(mockWriteText).toHaveBeenCalledTimes(1);
    expect(mockWriteText).toHaveBeenCalledWith(textToCopy);
  });

  test('should reject if navigator.clipboard.writeText fails', async () => {
    const textToCopy = 'Error text';
    mockWriteText.mockImplementationOnce(() => Promise.reject(new Error('Permission denied')));

    await expect(copyToClipboard(textToCopy)).rejects.toThrow('Failed to copy text to clipboard using Clipboard API.');
    expect(mockWriteText).toHaveBeenCalledTimes(1);
    expect(mockWriteText).toHaveBeenCalledWith(textToCopy);
  });

  // Test for fallback mechanism (document.execCommand)
  describe('fallback to document.execCommand', () => {
    const originalExecCommand = document.execCommand;
    const originalCreateElement = document.createElement;
    const originalAppendChild = document.body.appendChild;
    const originalRemoveChild = document.body.removeChild;

    beforeAll(() => {
      // Temporarily remove navigator.clipboard to force fallback
      Object.defineProperty(navigator, 'clipboard', {
        value: undefined,
        writable: true,
        configurable: true,
      });

      // Mock document.execCommand
      Object.defineProperty(document, 'execCommand', {
        value: jest.fn(() => true),
        writable: true,
        configurable: true,
      });

      // Mock DOM manipulation for textarea
      document.createElement = jest.fn((tagName) => {
        if (tagName === 'textarea') {
          return {
            value: '',
            style: {},
            focus: jest.fn(),
            select: jest.fn(),
            remove: jest.fn(),
          };
        }
        return originalCreateElement(tagName);
      });
      document.body.appendChild = jest.fn();
      document.body.removeChild = jest.fn();
    });

    afterAll(() => {
      // Restore original implementations
      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: mockWriteText, write: mockWrite },
        writable: true,
        configurable: true,
      });
      Object.defineProperty(document, 'execCommand', {
        value: originalExecCommand,
        writable: true,
        configurable: true,
      });
      document.createElement = originalCreateElement;
      document.body.appendChild = originalAppendChild;
      document.body.removeChild = originalRemoveChild;
    });

    beforeEach(() => {
      document.execCommand.mockClear();
      document.createElement.mockClear();
      document.body.appendChild.mockClear();
    });

    test('should copy text using document.execCommand as fallback', async () => {
      const textToCopy = 'Fallback text';
      await copyToClipboard(textToCopy);

      expect(document.createElement).toHaveBeenCalledWith('textarea');
      expect(document.body.appendChild).toHaveBeenCalled();
      expect(document.execCommand).toHaveBeenCalledWith('copy');
    });

    test('should reject if document.execCommand fails', async () => {
      const textToCopy = 'Fallback error';
      document.execCommand.mockImplementationOnce(() => {
        throw new Error('ExecCommand failed');
      });

      await expect(copyToClipboard(textToCopy)).rejects.toThrow('Failed to copy text to clipboard using execCommand.');
      expect(document.execCommand).toHaveBeenCalledWith('copy');
    });
  });
});

describe('copyImageToClipboard', () => {
  const mockWrite = jest.fn(() => Promise.resolve());

  beforeAll(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { write: mockWrite },
      writable: true,
      configurable: true,
    });
    global.ClipboardItem = jest.fn(item => item);
  });

  beforeEach(() => {
    mockWrite.mockClear();
  });

  test('should copy an image blob to the clipboard', async () => {
    const imageBlob = new Blob(['image data'], { type: 'image/png' });
    await copyImageToClipboard(imageBlob);

    expect(global.ClipboardItem).toHaveBeenCalledWith({ 'image/png': imageBlob });
    expect(mockWrite).toHaveBeenCalledTimes(1);
    expect(mockWrite).toHaveBeenCalledWith([{
      'image/png': imageBlob
    }]);
  });

  test('should reject if clipboard.write fails', async () => {
    const imageBlob = new Blob(['image data'], { type: 'image/png' });
    mockWrite.mockImplementationOnce(() => Promise.reject(new Error('Write failed')));

    await expect(copyImageToClipboard(imageBlob)).rejects.toThrow('Failed to copy image to clipboard: Write failed');
  });
});
