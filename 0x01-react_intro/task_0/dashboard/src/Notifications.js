import { React } from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

export default function Notifications () {
  return (
  <div className='Notifications'>
    <button
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      border: 'none',
      padding: '0.5rem',
      lineHeight: '1rem',
      fontSize: '1.5rem',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'darkslategray'
    }}
    aria-label='Close'
    onClick={e => console.log('Close button has been clicked')}>
      x
    </button>
    <p>Here is the list of Notifications</p>
    <ul>
      <li data-priority='default'>New course available</li>
      <li data-priority='urgent'>New resume available</li>
      <li data-priority='urgent'
      dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
    </ul>
  </div>
  );
}