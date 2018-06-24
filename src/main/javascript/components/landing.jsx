import React from 'react';

export default class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputs: ['', '', ''],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  landingTitle() {
    return <div className="landing-title">
      what do you really see?
    </div>
  }

  landingForm() {
    let inputHelper = [["instagram tag", "#"], ["number of images", "1 - 10"], ["number of vision tags", "1 - 10"]];
    return <div className="landing-form">
      {inputHelper.map((input, i) => this.getInput(input[0], input[1], i))}
      {this.submitButton()}
    </div>;
  }

  getInput(label, placeHolder, index) {
    return <div className="solo-input-container" key={`landing-input-${index}`}>
      <div className="solo-input-title">{label}</div>
      <input className="landing-input"
             type="text"
             value={this.state.inputs[index]}
             onChange={(e) => this.handleInputChange(e.target.value, index)}
             placeholder={placeHolder}/>
    </div>
  }

  handleInputChange(value, index) {
    let inputs = this.state.inputs;
    inputs[index] = value;
    this.setState({inputs});
  }

  submitButton() {
    return <div className="submit-button" onClick={this.handleSubmit}>Submit</div>
  }

  handleSubmit() {
    this.props.dataRepository.getHashtagData(this.getSubmitPayload());
    this.setState({inputs: ["", "", ""]});
  }

  getSubmitPayload() {
    let payload = {};
    payload["name"] = this.state.inputs[0];
    payload["picCount"] = this.state.inputs[1];
    payload["tagCount"] = this.state.inputs[2];
    return payload;
  }

  landingOptions() {
    let options = ["about", "credits", "contact"];
    let optionDivs = options.map((option, i) =>
      <div className="landing-option"
           key={`landing-option-${i}`}>
        {option}
      </div>);
    return <div className="options-container">{optionDivs}</div>;
  }

  render() {
    return <div className="landing-container">
      {this.landingTitle()}
      {this.landingForm()}
      {this.landingOptions()}
    </div>;
  }
}