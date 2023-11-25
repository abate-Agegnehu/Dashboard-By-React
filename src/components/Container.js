import React from 'react';
import './cont.css';
import MainContainer from './MainContainer';
import TopContainer from './TopContainer';

function Container() {
  return (
    <div className='cont'> 
    <TopContainer/>
    <MainContainer/>
    </div>
  )
}

export default Container
