import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Mobile } from './Components/Pages/Mobile/Mobile';
// import { CityDate } from './Components/Layout/CityDate/CityDate';

it('should render CityDate', () => {
  const wrapper = shallow(<App />);
  const mobile = wrapper.find(Mobile);

  expect(mobile.exists()).toBe(true);
});
