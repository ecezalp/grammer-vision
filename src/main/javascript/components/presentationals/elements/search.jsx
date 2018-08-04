import React from 'react';
import PropTypes from 'prop-types';

import {TextField} from "material-ui";
import Button from '@material-ui/core/Button';

export default function Search({search, handleInputChange, searchInput, toggleSearchSwitch, isSearchShowing, tokenString}) {

  const switcher =
    <div className="switcher"
         onClick={toggleSearchSwitch}>
      {isSearchShowing ? "HIDE" : "SEARCH"}
    </div>;

  const icon = <i className="fas fa-2x fa-search"/>;

  const textField =
    <TextField
      floatingLabelText={"@username"}
      value={searchInput}
      onChange={handleInputChange}
    />;

  const submit =
    <Button size={"small"} onClick={() => search(searchInput, tokenString)}>
      {icon}
    </Button>;

  const searchIfShowing = isSearchShowing &&
    <div className="search-container">
      {textField}
      {submit}
    </div>;

  return <div className="search-top-container">
    {switcher}
    {searchIfShowing}
  </div>;
}

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  toggleSearchSwitch: PropTypes.func.isRequired,
  isSearchShowing: PropTypes.bool,
  tokenString: PropTypes.string.isRequired,
};