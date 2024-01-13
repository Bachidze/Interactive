import React, { useState } from 'react';
import style from './Card.module.css';

const Card = ({
  imgUrl = 'error',
  name = 'error',
  desc = 'error',
  hover = 'error',
  button = 'error',
  number1 = 'error',
  number2 = 'error',
  number3 = 'error',
  number4 = 'error',
  number5 = 'error',
}) => {
  const [clickedNumber, setClickedNumber] = useState(null);

  const handleNumberClick = (number) => {
    setClickedNumber(number);
  };

  return (
    <div className={style.carddiv}>
      <div className={style.starround}>
        <img src={imgUrl} alt="StarImg" />
      </div>

      <h1 className={style.title}>{name}</h1>

      <p className={style.paragraph}>{desc}</p>

      <div className={style.flex}>
        <div
          style={{ backgroundColor: clickedNumber === number1 ? 'orange' : '' }}
          className={`${style.round} ${style[hover]}`}
          onClick={() => handleNumberClick(number1)}
        >
          {number1}
        </div>
        <div
          style={{ backgroundColor: clickedNumber === number2 ? 'orange' : '' }}
          className={`${style.round} ${style[hover]}`}
          onClick={() => handleNumberClick(number2)}
        >
          {number2}
        </div>
        <div
          style={{ backgroundColor: clickedNumber === number3 ? 'orange' : '' }}
          className={`${style.round} ${style[hover]}`}
          onClick={() => handleNumberClick(number3)}
        >
          {number3}
        </div>
        <div
          style={{ backgroundColor: clickedNumber === number4 ? 'orange' : '' }}
          className={`${style.round} ${style[hover]}`}
          onClick={() => handleNumberClick(number4)}
        >
          {number4}
        </div>
        <div
          style={{ backgroundColor: clickedNumber === number5 ? 'orange' : '' }}
          className={`${style.round} ${style[hover]}`}
          onClick={() => handleNumberClick(number5)}
        >
          {number5}
        </div>
      </div>

      <form className={style.form}>
        <button className={`${style.submit} ${style[hover]}`}>{button}</button>
      </form>
    </div>
  );
};

export default Card;
