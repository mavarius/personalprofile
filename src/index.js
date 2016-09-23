// MVP
// DONE: Use flux to manage data
// TODO: Display profile information on a page
    // NAME, PHOTO, BIO, PLACES VISITED, LIKES/DISLIKES, HOBBIES, SOCIAL LINKS
// DONE: Be able to enter and edit data on the page
// TODO: Make it pretty
// TODO: Managed data must include an OBJECT and an ARRAY

import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import './css/stylesheet.css';

render (
  <App/>,
  document.getElementById('root')
);
