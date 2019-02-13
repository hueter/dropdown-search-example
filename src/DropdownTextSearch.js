import React, { PureComponent } from 'react';

class DropdownTextSearch extends PureComponent {
  render() {
    return (
      <>
        <label htmlFor="term">Search for {this.props.topic}</label>
        <input
          name="term"
          type="text"
          onChange={this.props.handleChange}
          value={this.props.searchFormState.term}
        />
        {this.props.searchFormState.term.length > 0 && (
          <ul className="results-box" tabindex="-1">
            {this.props.searchFormState.data.map((item, idx) => {
              return (
                <li role="option" key={item.id || idx}>
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

DropdownTextSearch.defaultProps = {
  list: []
};

export default DropdownTextSearch;
