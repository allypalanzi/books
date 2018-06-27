export async function getBooks() {
  try {
    let response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject%3Ascience&maxResults=20');
    let data = await response.json();
    return data.items;
  } catch(err) {
    new Error('Error fetching books');
  }
};

export async function getBook(id) {
  try {
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=id%3A${id}`);
    let data = await response.json();
    return data.items[0];
  } catch(err) {
    new Error(`Error fetching book with ID ${id}`);
  }
};