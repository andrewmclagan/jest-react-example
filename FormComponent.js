import React from 'react';
import { createStore, combineReducers } from 'redux';
import { reduxForm, reducer as formReducer } from 'redux-form';

const reducer = combineReducers({ formReducer });
const store = createStore(reducer);

export class FormComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { handleSubmit, fields: { firstName }} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" {...firstName} />
      </form>
    );
  }
}

export default reduxForm({ form: 'form-component' })(FormComponent);