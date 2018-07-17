import React from 'react';
import Spinner from 'react-spinkit';

export default function Landing(props) {

  props.setStateFromLocalStorage();

  const {isFetchingToken, getInstaToken, setInputValue, input, toggleActiveInputField} = props;

  const spinner = isFetchingToken && <Spinner name="wave"/>;

  const landingTitle = <div className="landing-title">
    <div className="headline-container">
    <div className="title-1">Google Vision</div>
    <div className="title-2">with</div>
    </div>
    <div className="byline-container">Instagram</div>
  </div>;

  const handleSubmitClick = ({tokenString, isFetchingToken, input}) => {
    if (tokenString === "") {
      getInstaToken({
        tokenString,
        isFetchingToken,
        input,
      })
    }
  };

  const getInput = (input, index) =>
    <div className="solo-input-container" key={`landing-input-${index}`}>
      <input type="radio"
             checked={input.isSelected}
             value={input.label}
             onChange={toggleActiveInputField}/>
      <div className="solo-input-title">{input.label}</div>
      <input className="landing-input"
             type="text"
             value={input.value}
             onChange={e => setInputValue(e, input.label)}
             disabled={!input.isSelected}
             placeholder={input.placeholder}/>
    </div>;

  const getInputs = Object.keys(input).map((key, index) => getInput(input[key], index));

  const submitButton = <input type="submit"
                              className="submit-button"
                              onClick={() => handleSubmitClick(props)}
                              label="Enter"/>;

  const landingForm = <div className="landing-form">
    {getInputs}
    {submitButton}
  </div>;

  const source = <a href="https://github.com/ecezalp/grammer-vision">source</a>;

  return <div className="landing-container">
    {landingTitle}
    {spinner}
    {landingForm}
    {source}
  </div>;
}