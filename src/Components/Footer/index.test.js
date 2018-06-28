import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from './';

describe('<Footer/ >', () => {
  const component = (<Footer />);
  const renderedComponent = renderer.create(component);

  it('renders correctly', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
