import React from 'react';
//import './UserCard.css'

export default function UserCard(props) {
  return (
    <div className='user-card'>
        <a href='#' className='card-link'>
            <img id={props.imgId} className='card-image' src={props.url} alt = {props.name}/>
            <span className='card-text'>{props.name}</span>
        </a>
    </div>
  );
}
