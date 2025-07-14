
import { downloadFile, readFileAsText, readFileAsDataURL } from './file-handling-utils';

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
});
