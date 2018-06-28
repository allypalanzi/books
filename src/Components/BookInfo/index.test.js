import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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
  
  it('shows an error message when the book is not returned', () => {
    const component = shallow(<BookInfo {...props} />);
    component.setState({ book: undefined, loading: false });
    expect(component.find('.test-error').length).toEqual(1);
  });
  
  it('shows Loader when state is loading', () => {
    const component = shallow(<BookInfo {...props} />);
    component.setState({ book: undefined, loading: true });
    expect(component.find('Loader').length).toEqual(1);
  });
});
