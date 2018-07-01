import React from 'react';
import Spinner from 'react-spinkit';

export default function ReduxLanding({tokenString, isFetchingToken, getInstaToken}) {

  const spinner = isFetchingToken && <Spinner name="wave" />;

  const landingTitle = <div className="landing-title">
    what do you really see?
  </div>;

  const inputHelper = [["instagram tag", "#"], ["number of images", "1 - 10"], ["number of vision tags", "1 - 10"]];
  const landingOptionsHelper = ["about", "credits", "contact"];

  const getInput = (label, placeHolder, index) => {
    return <div className="solo-input-container" key={`landing-input-${index}`}>
      <div className="solo-input-title">{label}</div>
      <input className="landing-input"
             type="text"
             value={""}
             onChange={() => {}}
             placeholder={placeHolder}/>
    </div>
  };

  const submitButton = <div className="submit-button" onClick={tokenString === "" && getInstaToken}>Submit</div>;

  const landingForm = <div className="landing-form">
    {inputHelper.map((input, i) => getInput(input[0], input[1], i))}
    {submitButton}
  </div>;

  const landingOptions = <div className="options-container">
    {landingOptionsHelper.map((option, i) =>
      <div className="landing-option"
           key={`landing-option-${i}`}>
        {option}
      </div>)}
  </div>;


  return <div className="landing-container">
    {landingTitle}
    {spinner}
    {landingForm}
    {landingOptions}
  </div>;
}