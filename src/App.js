import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import Refsdemo from './components/Refsdemo';

const App = () =>{
  const [todos , setTodos ] = useState([]);
  const [input , setInput ] = useState('');
  
  useEffect(() =>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id , todo:doc.data().todo})))})
  }, [])

  const addTodo =(e) =>{
    e.preventDefault();
    setTodos([...todos , input]);
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
   // addToDatabase(input);
  };


//  const addToDatabase = (value) =>{
//    db.ref('todos/').set({todo :value});
//  }

  return(
    <div className='mx-auto' style={{width:'400px'}}>
      <h1> TOdO's To DO </h1>
      <form>
        <input type='text' value={input} onChange={(e)=> setInput(e.target.value)} />
        <Button type="submit"  disabled={!input} onClick={addTodo} variant="contained" color="primary" disableElevation>Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo =>{
          return <Refsdemo todo={todo.todo} id={todo.id} />
        })}
      </ul>
    </div>
  );
}


export default App;