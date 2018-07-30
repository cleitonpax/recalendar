import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import moment from "moment";
import MonthHeader from '../../_components/MonthHeader';
import IconButton from '../../_components/IconButton';
import { getMonthDays, formatRangeDays, initDay } from '../../_scripts';

const firstDay = '2018-07-10';
const secondDay = '2018-07-20';
const today = new Date(secondDay);
const todayFormated = moment(today).format("YYYY-MM-DD");
let states = {};
  
const props = (isSelecting, multiSelect, day, name) => ({
  today: todayFormated,
  day: today.getDate(),
  month: today.getMonth(),
  year: today.getFullYear(),
  isSelecting,
  multiSelect,
  selectedDays: { start: day, end: day },
  days: getMonthDays(today.getFullYear(), today.getMonth()),
  setState: (state) => setState(state, name),
  onChange: sinon.spy()
});

const onChange = (name) => sinon.spy(states[name], 'onChange');

const setState = (state, name) => {
  const nameProp = states[name];
  nameProp.isSelecting = state.isSelecting !== undefined ? state.isSelecting : nameProp.isSelecting;
  nameProp.selectedDays = state.selectedDays !== undefined ? state.selectedDays : nameProp.selectedDays;
};

states['propIcons'] = props(false, true, firstDay, 'propIcons');

states['propSelect'] = props(false, true, firstDay, 'propSelect');

const wrapperPropIcons = shallow(
  <MonthHeader {...states['propIcons']} />
);

const wrapperPropSelect = mount(
  <MonthHeader {...states['propSelect']} />
);

test('has a header', () => { 
  const header = wrapperPropIcons.find('.Header');
  expect(header).toHaveLength(1);
}); 

test('click prev month', () => { 
  const left = wrapperPropIcons.find('.Header-container').childAt(0).find(IconButton).dive().find('.left');
  expect(left).toHaveLength(1);
  left.simulate('click');
  expect(states['propIcons'].selectedDays).toEqual(formatRangeDays('2018-06-01'));
}); 

test('click next month', () => { 
  const right = wrapperPropIcons.find('.Header-container').childAt(2).find(IconButton).dive().find('.right');
  expect(right).toHaveLength(1);
  right.simulate('click');
  expect(states['propIcons'].selectedDays).toEqual(formatRangeDays('2018-08-01'));
}); 

test('select month dropdown', () => {
  const month = wrapperPropSelect.find('.selectors').find('.month-dropdown');
  month.simulate('change', { value: 1, label: 'February' } );
  expect(month.find(Select).find(Option).at(0).props().isSelected).toHaveLength(1);
});

test('select year dropdown', () => {
  const year = wrapperPropSelect.find('.selectors').children().find('.year-dropdown');
  expect(year).toHaveLength(1);
});
 