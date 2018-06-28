export async function getBooks() {
  try {
    let response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject%3Ascience&maxResults=20');
    let data = await response.json();
    // TODO: error handling if items doesn't exist for some reason
    return data.items;
  } catch(err) {
    throw new Error('Error fetching books');
  }
};

export async function getBook(id) {
  try {
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=id%3A${id}`);
    let data = await response.json();
    // The single book is returned as an array within items, so lets just get the First
    // TODO: error handling if there aren't any lol
    return data.items[0];
  } catch(err) {
    throw new Error(`Error fetching book with ID ${id}`);
  }
};