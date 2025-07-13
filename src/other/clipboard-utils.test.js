
import { copyToClipboard } from './clipboard-utils';

describe('copyToClipboard', () => {
  // Mock the navigator.clipboard API
  const mockWriteText = jest.fn(() => Promise.resolve());
  const originalNavigatorClipboard = navigator.clipboard;

  beforeAll(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: mockWriteText },
      writable: true,
      configurable: true,
    });
  });

  afterAll(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: originalNavigatorClipboard,
      writable: true,
      configurable: true,
    });
  });

  beforeEach(() => {
    mockWriteText.mockClear();
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
        value: originalNavigatorClipboard,
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
