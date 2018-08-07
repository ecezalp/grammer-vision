import React from 'react';

export default function withWelcome(BaseContainer) {
  const welcomeProps = {
    readmeProps: {defaultPanel},
  };
  return <BaseContainer {...welcomeProps} />;
}

const icon = <i key="i-magenta" className="far fa-gem magenta"/>;

const getText = (children) =>
  <div className="text">{children}</div>;

const getSandboxModeText = () => {
  let text = <span key="sandbox">This app is in <strong>sandbox</strong> mode.</span>;
  return getText([icon, text]);
};

const getRegisterOrDemoText = () => {
  let text = <span key="register">You must <a
    href="/register">register</a> to my sandbox, or click <strong>quick login</strong>!</span>;
  return getText([text]);
};

const defaultPanel =
  <div className="welcome-text">
    {getSandboxModeText()}
    <br/>
    {getRegisterOrDemoText()}
  </div>;