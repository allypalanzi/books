import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Loader from './';

describe('<Loader/ >', () => {
  const component = (<Loader />);
  const renderedComponent = renderer.create(component);

  it('renders correctly', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
