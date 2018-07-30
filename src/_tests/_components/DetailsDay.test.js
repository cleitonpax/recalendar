import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import DetailsDay from '../../_components/DetailsDay';

const props = (day, holiday, info) => ({
  item: {
    day,
    holiday,
    info
  }
});

const ordinaryDay = props(7, {}, 'Info');

const holiday = props(7, { name: 'Xmas' }, 'Info');

const wrapperOrdinaryDay = shallow(
  <DetailsDay {...ordinaryDay} />
);

const wrapperHoliday = shallow(
  <DetailsDay {...holiday} />
);

test('its a div', () => {
  expect(wrapperOrdinaryDay.find('.DetailsDay')).toHaveLength(1);
});

test('its a h6', () => {
  expect(wrapperOrdinaryDay.find('.DetailsDay').children().find('h6')).toHaveLength(1);
});

test('its not holiday', () => {
  expect(wrapperOrdinaryDay.find('.DetailsDay').children().find('h6').children().find('.holiday-info')).toHaveLength(0);
});

test('its holiday', () => {
  expect(wrapperHoliday.find('.DetailsDay').children().find('h6').children().find('.holiday-info')).toHaveLength(1);
});

test('its a info', () => {
  expect(wrapperOrdinaryDay.find('.DetailsDay').children().find('.info')).toHaveLength(1);
});
