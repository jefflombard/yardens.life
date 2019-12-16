import React from "react";
import './yardens.scss'

const Button = ({text, purpose}) =>{
    return (
      <section>
        <a className="button" target="_blank" href={purpose}>
          {text}
        </a>
      </section>
    );
};

export default Button;