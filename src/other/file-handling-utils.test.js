
import { downloadFile, readFileAsText, readFileAsDataURL, uploadFile, dragAndDropUpload } from './file-handling-utils';

// Mocking Browser APIs for Jest (Node.js environment)
global.URL.createObjectURL = jest.fn(() => 'blob:http://localhost/mock-url');
global.URL.revokeObjectURL = jest.fn();

global.FileReader = class {
  constructor() {
    this.onload = null;
    this.onerror = null;
    this.result = null;
    this.error = null;
  }

  readAsText(file) {
    if (file.name === 'error.txt') {
      this.error = new Error('Read error');
      if (this.onerror) this.onerror();
    } else {
      this.result = file.content;
      if (this.onload) this.onload();
    }
  }

  readAsDataURL(file) {
    if (file.name === 'error.png') {
      this.error = new Error('Read error');
      if (this.onerror) this.onerror();
    } else {
      this.result = `data:image/png;base64,${btoa(file.content)}`;
      if (this.onload) this.onload();
    }
  }
};

global.btoa = (str) => Buffer.from(str).toString('base64');

describe('file-handling-utils', () => {
  describe('downloadFile', () => {
    it('should create a link and trigger a download', () => {
      const link = { click: jest.fn() };
      document.createElement = jest.fn(() => link);
      document.body.appendChild = jest.fn();
      document.body.removeChild = jest.fn();

      const data = 'Hello, World!';
      const fileName = 'test.txt';
      const mimeType = 'text/plain';

      downloadFile(data, fileName, mimeType);

      expect(document.createElement).toHaveBeenCalledWith('a');
      expect(link.href).toBe('blob:http://localhost/mock-url');
      expect(link.download).toBe(fileName);
      expect(document.body.appendChild).toHaveBeenCalledWith(link);
      expect(link.click).toHaveBeenCalled();
      expect(document.body.removeChild).toHaveBeenCalledWith(link);
      expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:http://localhost/mock-url');
    });
  });

  describe('readFileAsText', () => {
    it('should read a file as text successfully', async () => {
      const file = { name: 'test.txt', content: 'file content' };
      const text = await readFileAsText(file);
      expect(text).toBe('file content');
    });

    it('should reject on a read error', async () => {
      const file = { name: 'error.txt' };
      await expect(readFileAsText(file)).rejects.toThrow('Read error');
    });
  });

  describe('readFileAsDataURL', () => {
    it('should read a file as a data URL successfully', async () => {
      const file = { name: 'test.png', content: 'image data' };
      const dataUrl = await readFileAsDataURL(file);
      expect(dataUrl).toBe(`data:image/png;base64,${btoa('image data')}`);
    });

    it('should reject on a read error', async () => {
      const file = { name: 'error.png' };
      await expect(readFileAsDataURL(file)).rejects.toThrow('Read error');
    });
  });

  describe('uploadFile', () => {
    it('should "upload" a file by reading its text content', async () => {
      const file = { name: 'upload.txt', content: 'upload content' };
      const content = await uploadFile(file);
      expect(content).toBe('upload content');
    });

    it('should handle error during "upload"', async () => {
      const file = { name: 'error.txt' };
      await expect(uploadFile(file)).rejects.toThrow('Read error');
    });
  });

  describe('dragAndDropUpload', () => {
    let dropArea;
    let onDropCallback;

    beforeEach(() => {
      dropArea = document.createElement('div');
      onDropCallback = jest.fn();
      dragAndDropUpload(dropArea, onDropCallback);
    });

    it('should prevent default on dragover and add drag-over class', () => {
      const event = new Event('dragover');
      event.preventDefault = jest.fn();
      dropArea.dispatchEvent(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(dropArea.classList.contains('drag-over')).toBe(true);
    });

    it('should remove drag-over class on dragleave', () => {
      dropArea.classList.add('drag-over');
      const event = new Event('dragleave');
      dropArea.dispatchEvent(event);
      expect(dropArea.classList.contains('drag-over')).toBe(false);
    });

    it('should call onDropCallback with files on drop', () => {
      const file1 = { name: 'file1.txt', content: 'content1' };
      const file2 = { name: 'file2.txt', content: 'content2' };
      const dataTransfer = { files: [file1, file2] };

      const event = new Event('drop');
      event.preventDefault = jest.fn();
      Object.defineProperty(event, 'dataTransfer', { value: dataTransfer });

      dropArea.dispatchEvent(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(dropArea.classList.contains('drag-over')).toBe(false);
      expect(onDropCallback).toHaveBeenCalledWith([file1, file2]);
    });

    it('should not call onDropCallback if no files are dropped', () => {
      const dataTransfer = { files: [] };
      const event = new Event('drop');
      event.preventDefault = jest.fn();
      Object.defineProperty(event, 'dataTransfer', { value: dataTransfer });

      dropArea.dispatchEvent(event);

      expect(onDropCallback).not.toHaveBeenCalled();
    });

    it('should log error if dropArea or onDropCallback is missing', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      dragAndDropUpload(null, jest.fn());
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  describe('getFileExtension', () => {
    test('should return the file extension', () => {
      expect(getFileExtension('document.pdf')).toBe('pdf');
      expect(getFileExtension('image.jpeg')).toBe('jpeg');
      expect(getFileExtension('archive.tar.gz')).toBe('gz');
    });

    test('should return an empty string if there is no extension', () => {
      expect(getFileExtension('file')).toBe('');
    });

    test('should return an empty string for invalid input', () => {
      expect(getFileExtension(null)).toBe('');
      expect(getFileExtension(undefined)).toBe('');
      expect(getFileExtension(123)).toBe('');
    });
  });
});
