import React, { Component } from 'react';
import { debounce } from 'lodash';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      data: [],
      selected: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, async () => {
      this.setState({
        data: await this.props.fetchData(this.state.term)
      });
    });
  };

  handleSubmit = data => {
    return this.props.onSubmit(data);
  };

  render() {
    const { bounce } = this.props;

    return this.props.children({
      searchFormState: this.state,
      fetchData: this.props.bounce
        ? debounce(this.fetchData, bounce)
        : this.fetchData,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    });
  }
}

export default SearchForm;
