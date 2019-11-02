import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import WriteButton from './WriteButton';
import {withAppContext} from './AppContext';

const TweetButton = ({words}) => {
  const href = `https://twitter.com/intent/tweet?text=I+wrote+${words}+words+using+The+Most+Dangerous+Writing+App+-+until+it+deleted+everything+.+%23MDWA&url=http%3A%2F%2Fwww.themostdangerouswritingapp.com`;
  console.log(href)
  const label = `在迷失前你写了 ${words} 个字 .`;
  return <a className="tweet" href={href}>{label}</a>;
}

const Failure = ({onReset, toggleHelp, limit, type, lost, words }) => {
  return (
    <CSSTransitionGroup
      transitionName="failure"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={100}
    >
    { lost && (
      <div className='failure' key="failScreen">
        <a className="navButton helpButton white" onClick={toggleHelp}>帮助</a>
        <div className="inner">
          <h3>你迷失了.</h3>
          <TweetButton words={words} />
          <WriteButton
            ghost
            noPanel
            color="white"
            label="大侠请重新来过."
            type={type}
            limit={limit}
          />
        </div>
      </div>
      )}
    </CSSTransitionGroup>
  )
}

export default withAppContext(Failure);
