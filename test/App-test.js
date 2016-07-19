import test from 'tape';
import React from 'react';
import App from '../src/App';

import { mount } from 'enzyme';

test('App counter', t => {
  t.test('it has an initial count of 0', t => {
    t.plan(1);
    const wrapper = mount(<App />);
    t.equal(wrapper.find('p').text(), '0');
  });

  t.test('clicking inc button to increment the count', t => {
    t.plan(1);
    const wrapper = mount(<App />);
    wrapper.find('.increment').simulate('click');
    t.equal(wrapper.find('p').text(), '1');
  });

  t.test('clicking dec button to decrement the count', t => {
    t.plan(1);
    const wrapper = mount(<App />);
    //wrapper.find('button').simulate('click');
    wrapper.find('.decrement').simulate('click');
    t.equal(wrapper.find('p').text(), '-1');
  });

});

