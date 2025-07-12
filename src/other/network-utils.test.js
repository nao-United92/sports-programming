import { getJSON, postJSON } from './network-utils.js';

global.fetch = jest.fn();

describe('network-utils', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  describe('getJSON', () => {
    it('should fetch JSON data from a URL', async () => {
      const mockData = { message: 'Success' };
      fetch.mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(mockData) });

      const data = await getJSON('https://example.com/data.json');
      expect(data).toEqual(mockData);
      expect(fetch).toHaveBeenCalledWith('https://example.com/data.json');
    });

    it('should throw an error for a non-OK response', async () => {
      fetch.mockResolvedValueOnce({ ok: false, status: 404 });

      await expect(getJSON('https://example.com/nonexistent.json')).rejects.toThrow('HTTP error! status: 404');
    });
  });

  describe('postJSON', () => {
    it('should post JSON data to a URL', async () => {
      const mockData = { message: 'Success' };
      const postData = { name: 'test' };
      fetch.mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(mockData) });

      const data = await postJSON('https://example.com/data.json', postData);
      expect(data).toEqual(mockData);
      expect(fetch).toHaveBeenCalledWith('https://example.com/data.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
    });

    it('should throw an error for a non-OK response', async () => {
      const postData = { name: 'test' };
      fetch.mockResolvedValueOnce({ ok: false, status: 500 });

      await expect(postJSON('https://example.com/error.json', postData)).rejects.toThrow('HTTP error! status: 500');
    });
  });
});
