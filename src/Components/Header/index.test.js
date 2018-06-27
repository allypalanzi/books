import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './';
// MemoryRouter is needed for Link to work
import { MemoryRouter } from 'react-router-dom';

describe('<Header/ >', () => {
  const component = (
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const renderedComponent = renderer.create(component);

  it('renders correctly', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
