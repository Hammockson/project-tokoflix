import React from 'react';
import logofooter from '../assets/img/logowhite.png';
import {
    Typography
 } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
       <footer style={{ textAlign: 'center', height: 50, fontSize: 10, lineHeight: 5, marginTop: 100}}>
          <img src={logofooter}/>
          <p>
          Made with love to bring you joy anywhere anytime.
          </p>
        </footer>
      </div>
    );
  }
}