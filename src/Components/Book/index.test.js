import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Book from './';
// MemoryRouter is needed for Link to work
import { MemoryRouter } from 'react-router-dom';


describe('<Book/ >', () => {
  const props = {
    book: {
      "kind": "books#volume",
      "id": "NaB7oAkon9MC",
      "etag": "6BeU7+NZX/M",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/NaB7oAkon9MC",
      "volumeInfo": {
        "title": "Statistical Physics",
        "authors": [
          "Lev Davidovich Landau",
          "Evgeniĭ Mikhaĭlovich Lifshit︠s︡",
          "Lev Petrovich Pitaevskiĭ"
        ],
        "publisher": "Butterworth-Heinemann",
        "publishedDate": "1980",
        "description": "Part 2 of Statistical physics begins with an extensive discussion of the theory of quantum liquids, which was dealt with briefly in the second edition of Statistical physics, by Lev Landau and E.M. Lifshitz; part 1 of Statistical physics is now the third edition of volume 5 of the Course of theoretical physics, by L.D. Landau and E.M. Lifshitz.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0750626364"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780750626361"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 387,
        "printType": "BOOK",
        "categories": [
          "Science"
        ],
        "averageRating": 4.5,
        "ratingsCount": 8,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.0.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=NaB7oAkon9MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=NaB7oAkon9MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=NaB7oAkon9MC&printsec=frontcover&dq=id:NaB7oAkon9MC%7D&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=NaB7oAkon9MC&dq=id:NaB7oAkon9MC%7D&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Statistical_Physics.html?hl=&id=NaB7oAkon9MC"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=NaB7oAkon9MC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      }
    }
  };
  const component = (
  <MemoryRouter>
    <Book {...props} />
  </MemoryRouter>
);
  const renderedComponent = renderer.create(component);

  it('renders correctly', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
