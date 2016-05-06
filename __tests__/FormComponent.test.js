/* eslint-disable no-unused-vars */

jest.unmock('../FormComponent');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import FormComponent from '../FormComponent';

function props() {
  return {
    fields: {
      firstName: { touched: null, error: null, value: ''}
    },
    handleSubmit: () => {}
  };
}

describe('FormComponent', () => {

  it('renders a single input field', () => {

    const input = TestUtils.renderIntoDocument(
      <FormComponent fields={props().fields} handleSubmit={props().handleSubmit} />
    );

    const inputNode = ReactDOM.findDOMNode(input);

    expect(inputNode.length).toBe(1);
  });

});
