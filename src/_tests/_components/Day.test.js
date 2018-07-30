import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import moment from "moment";
import Day from '../../_components/Day';
import { getMonthDays } from '../../_scripts';

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
  setState: (state) => setState(state, name)
});

const setState = (state, name) => {
  const nameProp = states[name];
  nameProp.isSelecting = state.isSelecting !== undefined ? state.isSelecting : nameProp.isSelecting;
  nameProp.selectedDays = state.selectedDays !== undefined ? state.selectedDays : nameProp.selectedDays;
};

states['propClickFalseTrue'] = props(false, true, firstDay, 'propClickFalseTrue');
const wrapperClickFalseTrue = shallow(
  <Day {...states['propClickFalseTrue']} item={states['propClickFalseTrue'].days[15]} />
);

test('is clicked, select false, multi true', () => {
  expect(wrapperClickFalseTrue.find('.day')).toHaveLength(1);
  wrapperClickFalseTrue.find('.day').simulate('click');
  expect(states['propClickFalseTrue'].isSelecting).toEqual(false);
  expect(states['propClickFalseTrue'].selectedDays).toEqual({ start: firstDay, end: firstDay });  
});

states['propClickTrueFalse'] = props(true, false, firstDay, 'propClickTrueFalse');
const wrapperClickTrueFalse = shallow(
  <Day {...states['propClickTrueFalse']} item={states['propClickTrueFalse'].days[15]} />
);

test('is clicked, select true, multi false', () => {
  wrapperClickTrueFalse.find('.day').simulate('click');
  expect(states['propClickTrueFalse'].isSelecting).toEqual(false);
  expect(states['propClickTrueFalse'].selectedDays).toEqual({ start: states['propClickTrueFalse'].days[15].formated, end: states['propClickTrueFalse'].days[15].formated });
});

states['propHover'] = props(true, true, firstDay, 'propHover');
const wrapperHover = shallow(
  <Day {...states['propHover']} item={states['propHover'].days[15]} />
);

test('is hover', () => {
  wrapperHover.find('.day').simulate('mouseover');
  expect(states['propHover'].isSelecting).toEqual(true);
  expect(states['propHover'].selectedDays).toEqual({ start: firstDay, end: states['propHover'].days[15].formated });  
});

states['propDown'] = props(false, true, firstDay, 'propDown');
const wrapperDown = shallow(
  <Day {...states['propDown']} item={states['propDown'].days[15]} />
);

test('is mouse down', () => {
  wrapperDown.find('.day').simulate('mousedown');
  expect(states['propDown'].isSelecting).toEqual(true);
  expect(states['propDown'].selectedDays).toEqual({ start: states['propDown'].days[15].formated, end: states['propDown'].days[15].formated });    
});

states['propUp'] = props(true, true, firstDay, 'propUp');
const wrapperUp = shallow(
  <Day {...states['propUp']} item={states['propUp'].days[15]} />
);

test('is mouse up', () => {
  wrapperUp.find('.day').simulate('mouseup');
  expect(states['propUp'].isSelecting).toEqual(false);
  expect(states['propUp'].selectedDays).toEqual({ start: firstDay , end: states['propUp'].days[15].formated });
});
