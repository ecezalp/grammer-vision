import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({isChecked, handleClick}) {

  return <div className="checkbox-container coloured">
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onClick={() => handleClick(!isChecked)}
        />
          <span className="checkbox-material">
            <span className="check"/>
          </span>
          I'm already registered
      </label>
    </div>
  </div>
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

