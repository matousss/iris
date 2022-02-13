import React from 'react';
//import './MainPage.css'
import Sidebar from '../Sidebar/Sidebar';

export default function MainPage() {
  return (
    <>
      <Sidebar />
      <div className='main-container'>
        <div className='title-container'>
          <span className='display-5 user-name'>user1</span>
        </div>
        <div className='form-container'>
          <div className='form-group'>
            <div className='form'></div>
            <div className='button'>
              <img src='https://img.icons8.com/ios/344/send-letter--v1.png' width='40px'></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
