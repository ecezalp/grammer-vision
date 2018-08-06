import React from 'react';

export default function DemoLoginInfo() {

  const username = <div className="demo-account-username-container">
    <div className="username-label magenta">username</div>
    <div className="username">vision.tags.demo</div>
  </div>;

  const password = <div className="demo-account-password-container">
    <div className="password-label magenta">password</div>
    <div className="password">visiontagsdemo</div>
  </div>;

  return <div className="demo-account-container">
    <div className="demo-account-info">
      {username}
      {password}
    </div>
  </div>;
};
