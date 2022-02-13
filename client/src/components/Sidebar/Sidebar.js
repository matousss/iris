import React from 'react';
//import './Sidebar.css'
import Card from '../Card/Card';

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <ul className='sidebar'>
        <li className='logo'>
          <div className='logo-card'>
            <img className='logo-img' src='https://cdn-icons-png.flaticon.com/512/129/129430.png' alt='iris' />
            <span className='iris display-2'>Iris</span>
          </div>
        </li>
        <li>
          <span className='list-title display-1'>Users</span>
        </li>
        <li>
          <ul className='items'>
            <li>
              <Card url='https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg' name='user1' />
              <Card url='https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg' name='user1' />
              <Card url='https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg' name='user1' />
              <Card url='https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg' name='user1' />
              <Card url='https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg' name='user1' />
              <Card url='https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg' name='user1' />
              <Card url='https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg' name='user1' />
              <Card url='https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg' name='user1' />
              <Card url='https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg' name='user1' />
              <Card url='https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg' name='user1' />
            </li>
          </ul>
        </li>
        <li id='second-list'>
          <span className='list-title display-1'>Servers</span>
        </li>
        <li>
          <ul className='items'>
            <li>
              <Card url='https://www.nicepng.com/png/detail/82-824233_class-group-chat-comments-group-chat-icon-free.png' name='server' />
              <Card url='https://www.nicepng.com/png/detail/82-824233_class-group-chat-comments-group-chat-icon-free.png' name='server' />
              <Card url='https://www.nicepng.com/png/detail/82-824233_class-group-chat-comments-group-chat-icon-free.png' name='server' />
              <Card url='https://www.nicepng.com/png/detail/82-824233_class-group-chat-comments-group-chat-icon-free.png' name='server' />
              <Card url='https://www.nicepng.com/png/detail/82-824233_class-group-chat-comments-group-chat-icon-free.png' name='server' />
              <Card url='https://www.nicepng.com/png/detail/82-824233_class-group-chat-comments-group-chat-icon-free.png' name='server' />
              <Card url='https://www.nicepng.com/png/detail/82-824233_class-group-chat-comments-group-chat-icon-free.png' name='server' />
              <Card url='https://www.nicepng.com/png/detail/82-824233_class-group-chat-comments-group-chat-icon-free.png' name='server' />
              <Card url='https://www.nicepng.com/png/detail/82-824233_class-group-chat-comments-group-chat-icon-free.png' name='server' />
              <Card url='https://www.nicepng.com/png/detail/82-824233_class-group-chat-comments-group-chat-icon-free.png' name='server' />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
