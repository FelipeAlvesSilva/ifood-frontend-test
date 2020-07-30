import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

// test('renders learn react link', () => {
//   const { getByText } = render(<Home />);
//   const linkElement = getByText(/spotifood/i);
//   expect(linkElement).toBeInTheDocument();
// });


/**
 * shallow option
 * 
 *  import React from 'react';
    import { shallow } from 'enzyme';
    import App from './App';
    it('renders welcome message', () => {
      const wrapper = shallow(<App />);
      const welcome = <h2>Welcome to React</h2>;
      expect(wrapper.contains(welcome)).toEqual(true);
    });
 */