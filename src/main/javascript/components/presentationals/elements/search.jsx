import React from 'react';
import PropTypes from 'prop-types';

import {TextField} from "material-ui";
import Button from '@material-ui/core/Button';

export default function Search({search, handleInputChange, input}) {

  const icon = <i className="fas fa-2x fa-search"/>;

  const textField =
    <TextField
      floatingLabelText={"@username"}
      value={input}
      onChange={handleInputChange}
    />;

  const submit =
    <Button size={"small"} onClick={() => search(input)}>
      {icon}
    </Button>;

  return <div className="search-container">
    {textField}
    {submit}
  </div>;
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func,
};