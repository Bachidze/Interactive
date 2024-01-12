import React from 'react'
import style from './Card.module.css'

const Card = ({
            imgUrl ='error',
            name ='error',
            desc = 'error',
            hover ='error',
            button ='error',
            number1 ='error',
            number2 ='error',
            number3 ='derror',
            number4 ='error',
            number5='error',
            }) => {   
  return (

    <div className={style.carddiv}>

        <div className={style.starround}>

        <img src={imgUrl} alt="StarImg" />

        </div>

        <h1 className={style.title}>{name}</h1>

        <p className={style.paragraph}>{desc}</p>

        <div className={style.flex}>

        <div className={`${style.round} ${style[hover]}`}>{number1}</div>    
        <div className={`${style.round} ${style[hover]}`}>{number2}</div>    
        <div className={`${style.round} ${style[hover]}`}>{number3}</div>    
        <div className={`${style.round} ${style[hover]}`}>{number4}</div>    
        <div className={`${style.round} ${style[hover]}`}>{number5}</div> 

        </div>
        <form className={style.form} >
        <button className={`${style.submit} ${style[hover]}`}>{button}</button>
        </form>

    </div>
  )
}

export default Card