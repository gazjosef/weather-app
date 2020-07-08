import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { CityDate } from './Components/Layout/CityDate/CityDate';

it('should render CityDate', () => {
  const wrapper = shallow(<App />);
  const cityDate = wrapper.find(CityDate);

  expect(cityDate.exists()).toBe(true);
});
