import React from 'react';
import './index.css';

export const MainContainer = (props) => {
  return(
    <div className="main-container">
      {props.children}
    </div>
  )
};

export const SectionContainer = (props) => {
  return (
    <section className="section-container">
      {props.children}
    </section>
  )
};

export const CenterContainer = (props) => {
  return(
    <div className="center-container">
      {props.children}
    </div>
  )
};
