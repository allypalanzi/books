# Application Notes

👋 Hello! This app uses [create react app](https://github.com/facebook/create-react-app). You should be able to get it going with a `yarn install` and then a `yarn start`. 🤞

Every component used within the app is in the `Components` directory. You'll find each components test and styles in there as well.

`index.js` is the main entry point for the application where everything is initalized. 

`services.js` includes every service used to call the Google Books API, there are two functions in there:
- `getBooks()` which will get 20 science books from the API
- `getBook(id)` which will get a single book from the API when the ID is provided.

At a high level, the application renders a `Books` component each with a `Book`. They then link to a `BookInfo` component providing the user with more information. There's more detailed comments within each component.

## 🤔 Considerations
- Accessibility: Considered colors, keyboard interactions, and tested the page with VoiceOver to ensure a screen reader could successfully read the page.
- Ensuring direct links to book information pages don't pull any more data than necessary; call the endpoint for just the book with that ID.
- Performance: Storing data in session storage to limit API calls and using system fonts to have fewer loaded resources

## ✨ Enhancements if more time
- Pagination to show more books!
- Use pretty URLs for book pages instead of ugly IDs
- Would probably want to use Sass if the application was bigger so I could have better shared variables for colors, breakpoints, spacing, etc.
- Add more failsafes if data is missing or the model from the API changes so the app does not crash
- There can always be more test 😃

## ❓ Questions
- What information would be most useful to a user? Google API gives us a lot of stuff!
