import React from 'react';
import WriteButton from './WriteButton';
import Space from './Space';
import { Link } from "react-router-dom";


const Welcome = () => {
  return (
    <div className="Welcome">
      <Link to="/help" className="navButton helpButton">帮助</Link>
      <Space xl />
      <div>
        <div className="logo">
          <div className="mark"></div>
          <h1>
            <span>最</span>
            <span>心流</span>
            <span>写作</span>

          </h1>
        </div>
        <Space m />
        <h2>
          键盘不能停，不然所有内容都会丢失...<i className="caret icon-cursor" />
        </h2>
        <Space xl />
        <WriteButton ghost color="red" />
      </div>
      <div className="accolades" />
    </div>
  )
}

export default Welcome;
