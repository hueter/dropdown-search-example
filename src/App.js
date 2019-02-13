import React, { Component } from 'react';
import SearchForm from './SearchForm';
import DropdownTextSearch from './DropdownTextSearch';
import { searchColors } from './api';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm
          fetchData={searchColors}
          onSubmit={data => {
            console.log('Posted', data);
          }}
        >
          {({ searchFormState, fetchData, handleChange, handleSubmit }) => {
            return (
              <div className="row">
                <DropdownTextSearch
                  topic="CSS Colors"
                  searchFormState={searchFormState}
                  handleChange={handleChange}
                  fetchData={fetchData}
                />
                <button onClick={() => handleSubmit(searchFormState.term)}>
                  Submit
                </button>
              </div>
            );
          }}
        </SearchForm>
      </div>
    );
  }
}

export default App;
