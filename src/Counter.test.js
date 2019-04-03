import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { incrementCounter } from './actions';
import counterReducer from './reducer';

describe('<Counter />', () => {
    describe('render()', () => {
      test('renders a <button>', () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper.find('button').exists()).toBe(true);
      });
    });
  });

  describe('Counter redux pieces', () => {
    let store;
  
    beforeEach(() => {
      const mockStore = configureMockStore();
      store = mockStore({});
    });
  
    it('sends an increment counter action', () => {
      store.dispatch(incrementCounter());
      expect(store.getActions()).toEqual(
        [
          { type: 'INCREMENT_COUNTER' },
        ]);
    })
  });

  it('applies the counter reducer for increment correctly', () => {
    // given
    const beforeState = {count: 0};
    const action = {type: 'INCREMENT_COUNTER'};
    // when
    const afterState = counterReducer(beforeState, action);
    // then
    expect(afterState).toEqual({count: 0});
  });