import { copyToClipboard } from './clipboard-text-utils';

describe('Clipboard Text Utilities', () => {
  // Mock clipboard API
  const mockClipboard = {
    writeText: jest.fn(),
  };

  // Mock document.execCommand
  const mockExecCommand = jest.fn();

  beforeAll(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: mockClipboard,
      writable: true,
    });
    Object.defineProperty(document, 'execCommand', {
        value: mockExecCommand,
        writable: true,
    });
  });

  beforeEach(() => {
    mockClipboard.writeText.mockClear();
    mockExecCommand.mockClear();
  });

  it('should use clipboard.writeText if available', async () => {
    mockClipboard.writeText.mockResolvedValue(undefined);
    await copyToClipboard('hello');
    expect(mockClipboard.writeText).toHaveBeenCalledWith('hello');
  });

  it('should use execCommand as a fallback', async () => {
    // Temporarily remove clipboard API to test fallback
    Object.defineProperty(navigator, 'clipboard', { value: undefined, writable: true });
    mockExecCommand.mockReturnValue(true);
    await copyToClipboard('world');
    expect(mockExecCommand).toHaveBeenCalledWith('copy');
    // Restore clipboard API
    Object.defineProperty(navigator, 'clipboard', { value: mockClipboard, writable: true });
  });

  it('should reject if copy command fails', async () => {
    Object.defineProperty(navigator, 'clipboard', { value: undefined, writable: true });
    mockExecCommand.mockReturnValue(false);
    await expect(copyToClipboard('fail')).rejects.toThrow('Copy command was unsuccessful');
    Object.defineProperty(navigator, 'clipboard', { value: mockClipboard, writable: true });
  });
});
