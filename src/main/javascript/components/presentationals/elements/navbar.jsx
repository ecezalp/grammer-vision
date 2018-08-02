import React from 'react';

export default function Navbar() {

  const colorfulGoogle = <div className="google">
    <span className="blue">G</span>
    <span className="red">o</span>
    <span className="yellow">o</span>
    <span className="blue">g</span>
    <span className="green">l</span>
    <span className="red">e</span>
  </div>;

  const title = <div className="title">
    <div className="title-1">{colorfulGoogle} Vision</div>
    <div className="title-2">&</div>
    <div className="title-3">Instagram</div>
  </div>;

  return <a href="/" className="navbar">
    {title}
  </a>;
}