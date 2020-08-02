import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from '../firebse';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'mario', text: 'hey'},
    {username: 'yoshi', text: 'hi'},
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
      setUsername(prompt('Please enter your name'));
  },[])

  useEffect(() => {
    db.collection('messsages').onSnapshot()
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages,{username: username, text: input}]);
    setInput('');
  };
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel >Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button type='submit' disabled={!input} variant="contained" color="primary" onClick={sendMessage}>Send</Button>
        </FormControl>

      </form>

      {
        messages.map(message => 
          <Message username={username} message={message}/>
        )
      }
    </div>

    
  );
}

export default App;
