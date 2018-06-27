import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BookInfo from './';
// MemoryRouter is needed for Link to work
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services');

describe('<BookInfo/ >', () => {
  const props = {
    location: {},
    match: {
      params: {
        id: 'NaB7oAkon9MC'
      }
    }
  }
  const component = (
    <MemoryRouter>
      <BookInfo {...props} />
    </MemoryRouter>
  );
  const renderedComponent = renderer.create(component);

  it('renders correctly', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
