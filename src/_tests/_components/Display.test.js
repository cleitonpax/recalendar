import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Display from '../../_components/Display';

const props = (start, end) => ({
  days: {
    start, 
    end
  }
});

const firstDay = '2018-07-10';

const secondDay = '2018-07-20';

const sameDay = props(firstDay, firstDay);

const evenDays = props(firstDay, secondDay);

const wrapperSameDay = shallow(
  <Display {...sameDay} />
);

const wrapperEvenDays = shallow(
  <Display {...evenDays} />
);

test('its a div', () => {
  expect(wrapperSameDay.find('.Display')).toHaveLength(1);
});

test('its the same day', () => {
  expect(wrapperSameDay.find('.Display').children().find('span')).toHaveLength(0);
});

test('its even days', () => {
  expect(wrapperEvenDays.find('.Display').children().find('span')).toHaveLength(2);
});
