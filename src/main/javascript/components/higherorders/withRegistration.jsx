import React from 'react';

export default function withRegistration(BaseContainer) {
  const welcomeProps = {
    readmeProps: {
      defaultPanel: <h1> this is rego </h1>,
      formAlternative: <h1 className="magenta">Alternate conto</h1>,
    }
  };
  return <BaseContainer {...welcomeProps} />;
}