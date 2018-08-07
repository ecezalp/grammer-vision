import React from 'react';

export default function withRegistration(BaseContainer) {
  const welcomeProps = {
    readmeProps: {defaultPanel},
  };
  return <BaseContainer {...welcomeProps} />;
}

const steps = [
  {
    text: "Enable developer account",
    link: 'https://instagram.com/developer',
    isTargetBlank: true,
  },
  {
    text: "Send developer username",
    link: 'mailto:ecezalp@gmail.com?subject=Vision Tags Sandbox&body=My developer username is: ',
    isTargetBlank: false,
  },
  {
    text: "Accept sandbox invite",
    link: 'https://www.instagram.com/developer/clients/sandbox_invites/',
    isTargetBlank: true,
  },
];

const getInnerText = (text) => text.split(" ").map((word, index) => <div key={`word-${index}`}>{word}</div>);

const getLink = (step, linkText) =>
  <a href={step.link} target={step.isTargetBlank ? "_blank" : ""}>
    {linkText}
  </a>;

const getCount = (index) => <div className="step-count magenta">{index + 1}</div>;

const getText = (step, linkText, text) =>
  <div className="step-text">
    <span>
      {getLink(step, linkText)}
      {getInnerText(text)}
    </span>
  </div>;

const getStep = (step, index) => {
  let splitStep = step.text.split(" ");
  let linkText = splitStep.shift();
  let text = splitStep.join(" ");

  return <div className="step" key={`step-${index}`}>
    {getCount(index)}
    {getText(step, linkText, text)}
  </div>;
};

const defaultPanel = <div className="steps-container">
  {steps.map(getStep)}
</div>;


