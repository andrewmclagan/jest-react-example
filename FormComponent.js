import React from 'react';
import { reduxForm } from 'redux-form';

export class FormComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const handleSubmit = this.props.handleSubmit;

    const firstName = this.props.fields.firstName;

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" touched={firstName.touched} error={firstName.error} value={firstName.value} />
      </form>
    );
  }
}

export default reduxForm({ form: 'form-component' })(FormComponent);