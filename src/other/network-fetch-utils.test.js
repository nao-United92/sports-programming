
import { fetchJson, postJson, putJson, deleteResource } from './network-fetch-utils';

describe('network-fetch-utils', () => {
  const MOCK_API_URL = 'https://api.example.com/data';

  // Mock the global fetch function
  beforeEach(() => {
    global.fetch = jest.fn((url, options) => {
      if (url === MOCK_API_URL) {
        if (options && options.method === 'POST') {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ id: 1, ...JSON.parse(options.body) }),
            text: () => Promise.resolve('Created'),
            status: 201,
          });
        } else if (options && options.method === 'PUT') {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ updated: true, ...JSON.parse(options.body) }),
            text: () => Promise.resolve('Updated'),
            status: 200,
          });
        } else if (options && options.method === 'DELETE') {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({}), // No content for delete
            text: () => Promise.resolve('No Content'),
            status: 204,
          });
        } else {
          // Default GET behavior
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ message: 'Success', data: [1, 2, 3] }),
            text: () => Promise.resolve('OK'),
            status: 200,
          });
        }
      }
      // Handle error cases
      if (url === 'https://api.example.com/error') {
        return Promise.resolve({
          ok: false,
          status: 404,
          text: () => Promise.resolve('Not Found'),
        });
      }
      return Promise.reject(new Error('Unknown URL'));
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('fetchJson', () => {
    test('should fetch and return JSON data', async () => {
      const data = await fetchJson(MOCK_API_URL);
      expect(data).toEqual({ message: 'Success', data: [1, 2, 3] });
      expect(fetch).toHaveBeenCalledWith(MOCK_API_URL, {});
    });

    test('should throw an error for non-OK responses', async () => {
      await expect(fetchJson('https://api.example.com/error')).rejects.toThrow('HTTP error! status: 404, message: Not Found');
    });
  });

  describe('postJson', () => {
    test('should post JSON data and return response', async () => {
      const postData = { name: 'test', value: 10 };
      const response = await postJson(MOCK_API_URL, postData);
      expect(response).toEqual({ id: 1, name: 'test', value: 10 });
      expect(fetch).toHaveBeenCalledWith(MOCK_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });
    });

    test('should throw an error for non-OK responses', async () => {
      const postData = { name: 'test' };
      await expect(postJson('https://api.example.com/error', postData)).rejects.toThrow('HTTP error! status: 404, message: Not Found');
    });
  });

  describe('putJson', () => {
    test('should put JSON data and return response', async () => {
      const putData = { id: 1, name: 'updated', value: 20 };
      const response = await putJson(MOCK_API_URL, putData);
      expect(response).toEqual({ updated: true, id: 1, name: 'updated', value: 20 });
      expect(fetch).toHaveBeenCalledWith(MOCK_API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(putData),
      });
    });

    test('should throw an error for non-OK responses', async () => {
      const putData = { id: 1 };
      await expect(putJson('https://api.example.com/error', putData)).rejects.toThrow('HTTP error! status: 404, message: Not Found');
    });
  });

  describe('deleteResource', () => {
    test('should send DELETE request and return empty object for 204 No Content', async () => {
      const response = await deleteResource(MOCK_API_URL);
      expect(response).toEqual({});
      expect(fetch).toHaveBeenCalledWith(MOCK_API_URL, { method: 'DELETE' });
    });

    test('should throw an error for non-OK responses', async () => {
      await expect(deleteResource('https://api.example.com/error')).rejects.toThrow('HTTP error! status: 404, message: Not Found');
    });
  });
});
