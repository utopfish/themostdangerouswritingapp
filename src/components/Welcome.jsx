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
          键盘不能停，否则你会失去所有...<i className="caret icon-cursor" />
        </h2>
        <Space xl />
        <WriteButton ghost color="red" />
      </div>
      <div className="accolades" />
    </div>
  )
}
//全屏模式下选择重新开始，会出bug
export default Welcome;
