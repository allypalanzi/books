import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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

  it('shows an error message when books are not returned', () => {
    const component = shallow(<Books />);
    component.setState({ books: undefined, loading: false });
    expect(component.find('.test-error').length).toEqual(1);
  })
  
  it('shows Loader when state is loading', () => {
    const component = shallow(<Books />);
    component.setState({ books: undefined, loading: true });
    expect(component.find('Loader').length).toEqual(1);
  })
});
