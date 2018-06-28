import { getBooks, getBook } from './services';
 
describe('getBooks', () => {
  it('returns items from successful call', async function () {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => { return { items: 'some books' } }
      })
    );
    const response = await getBooks();
    expect(response).toBe('some books');
  });
  
  it('returns an error from an unsuccessful call', async function () {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );
    try {
      const response = await getBooks();
    } catch (err) {
      expect(err).toEqual(new Error('Error fetching books'));
    }
  });
});

describe('getBook', () => {
  it('returns a book from successful call', async function () {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => { return { items: ['some book'] } }
      })
    );
    const response = await getBook(12);
    expect(response).toBe('some book');
  });
  
  it('returns an error from an unsuccessful call', async function () {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );
    try {
      const response = await getBook(5);
    } catch (err) {
      expect(err).toEqual(new Error('Error fetching book with ID 5'));
    }
  });
});