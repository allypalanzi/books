import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Books from './';
// MemoryRouter is needed for Link to work
import { MemoryRouter } from 'react-router-dom';
jest.mock('../../services');

describe('<Books/ >', () => {
  const component = (
    <MemoryRouter>
      <Books />
    </MemoryRouter>
  );
  const renderedComponent = renderer.create(component);

  it('renders correctly', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
