import React from 'react';

import CheckboxContainer from '../containers/checkboxContainer';

export default function withWelcome(BaseContainer) {
  const welcomeProps = {
    readmeProps: {
      defaultPanel: welcome,
      formAlternative: <CheckboxContainer/>,
    }
  };
  return <BaseContainer {...welcomeProps} />;
}

const icon = <i className="far fa-gem magenta"/>;

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

const welcome =
  <div className="welcome-text">
    {getSandboxModeText()}
    <br/>
    {getRegisterOrDemoText()}
  </div>;