import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { addToDo, deleteToDo, getAllTodo, updatodo } from './Utils/HandleApi';

function App() {
  const [toDo, setToDo] = useState([]);

  const [text, setText] = useState('');

  const [isUpdate, setIsUpdate] = useState(false);

  const [toDoid, setTodoid] = useState("");

  useEffect(() => {
    getAllTodo(setToDo);
  },[]);

  const updateMode = (_id, text) => {
    setIsUpdate(true)
    setText(text)
    setTodoid(_id)
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>M.E.R.N  ToDo App</h1>
        <div className='top'>
          <input type='text' placeholder='Add ToDo...' value={text} onChange={(e) => setText(e.target.value)} />
          <div className='add' onClick={isUpdate ? () => updatodo(toDoid,text,setIsUpdate,setText,setToDo) : () => addToDo(text, setText, setToDo)}>{isUpdate ? "Update" : "Add" } </div>
        </div>
        <div className='lists'>
          { toDo.map((item) => <Todo key={item._id} text={item.text} updateMode = {() => updateMode(item._id, item.text)} deleteMode = {() => deleteToDo(item._id, setToDo)} />)} 
        </div>
      </div>
    </div>
  );
}

export default App;
