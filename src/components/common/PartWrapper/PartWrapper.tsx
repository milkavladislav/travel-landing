import React from "react";
import "./PartWrapper.css";

interface IPartWrapper {
  subtitle: string;
  title: string;
  id: string;
  children: JSX.Element;
}

const PartWrapper = ({ subtitle, title, id, children }: IPartWrapper) => {
  return (
    <section id={id} className="part__wrapper">
      <h5>{subtitle}</h5>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default PartWrapper;
