import React from 'react';
import Spinner from 'react-spinkit';

export default function ReduxLanding(props) {

  props.setStateFromLocalStorage();

  const {tokenString, isFetchingToken, getInstaToken, setInputValue} = props;

  const spinner = isFetchingToken && <Spinner name="wave"/>;

  const landingTitle = <div className="landing-title">
    what do you really see?
  </div>;

  const handleSubmitClick = ({tokenString, isFetchingToken, tagName, pictureCount, visionTagCount}) => {
    if (tokenString === "") {
      getInstaToken({
        tokenString,
        isFetchingToken,
        tagName,
        pictureCount,
        visionTagCount,
      })
    }
  };

  const inputHelper = [
    {label: "instagram tag", placeholder: "#", type: "tagName"},
    {label: "number of images", placeholder: "1 - 10", type: "pictureCount"},
    {label: "number of vision tags", placeholder: "1 - 10", type: "visionTagCount"},
  ];

  const landingOptionsHelper = ["about", "credits", "contact"];

  const getInput = (input, index) =>
    <div className="solo-input-container" key={`landing-input-${index}`}>
      <div className="solo-input-title">{input.label}</div>
      <input className="landing-input"
             type="text"
             value={props[input.type] || ""}
             onChange={e => setInputValue(e, input.type)}
             placeholder={input.placeholder}/>
    </div>;

  const getOption = (option, index) =>
    <div className="landing-option" key={`landing-option-${index}`}>{option}</div>;

  const submitButton = <div className="submit-button" onClick={() => handleSubmitClick(props)}>Submit</div>;

  const landingForm = <div className="landing-form">
    {inputHelper.map(getInput)}
    {submitButton}
  </div>;

  const landingOptions = <div className="options-container">
    {landingOptionsHelper.map(getOption)}
  </div>;

  return <div className="landing-container">
    {landingTitle}
    {spinner}
    {landingForm}
    {landingOptions}
  </div>;
}