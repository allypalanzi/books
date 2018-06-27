# Application Notes

## 🤔 Considerations
- Accessibility. Considered mostly with colors, tested the page with VoiceOver to ensure a screen reader could read the page.
- Ensuring links shared to book information pages don't pull any more data than necessary, call the endpoint for just the book with that ID.
- Performance. Storing data in session storage to limit API calls, using system fonts

## ✍️ Testing Notes
- Installed `enzyme` and `react-test-renderer` for react component testing that I'm familiar with, like using snapshots

## ✨ Enhancements if more time
- Pagination to show more books!
- Use pretty URLs for book pages instead of ugly IDs
- Would probably want to use Sass if the application was bigger so I could have better shared variables for colors, breakpoints, spacing, etc.
- Add more failsafes if data is missing or the model from the API changes so the app does not crash
- There can always be more test 😃

## ❓ Questions
- What information would be most useful to a user?
