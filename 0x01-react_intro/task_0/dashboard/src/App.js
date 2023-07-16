import logo from './holberton_logo.jpeg'
import { getFullYear, getFooterCopy } from './utils.js'
import './App.css';

function App() {
  return (
    <>
    <div className='App-header'>
      <img src={logo} alt='' width='200' height='200'></img>
      <h1>School dashboard</h1>
    </div>
    <hr/>
    <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <label htmlFor='user_email'>Email: </label>
      <input type='email' id='user_email' name='user_email' />
      <label htmlFor='user_pwd'>Password: </label>
      <input type='password' id='user_pwd' name='user_pwd'/>
      <button type='submit'>OK</button>
    </div>
    <hr/>
    <div className='App-footer'>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
    </>
  );
}

export default App;
