import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello', 'hi', 'whats up']);
  const [username, setUsername] = useState(initialState)

  useEffect(() => {
      setUsername(prompt('Please enter your name'));
  },[])

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages,input]);
    setInput('');
  };
  
  return (
    <div className="App">
      <h1>Hello World</h1>

      <form>
        <FormControl>
          <InputLabel >Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" onClick={sendMessage}>Send</Button>
        </FormControl>
      </form>

      {
        messages.map(message => 
          <Message text={message}/>
        )
      }
    </div>

    
  );
}

export default App;
