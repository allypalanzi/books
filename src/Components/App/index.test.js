import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './';

jest.mock('../../services');

describe('<App/ >', () => {
  const renderedComponent = renderer.create(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  });

  it('renders correctly', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
