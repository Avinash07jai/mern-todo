import axios from 'axios';

const baseUrl = "http://localhost:5001"

const getAllTodo = (setToDo) => {
    axios.get(baseUrl)
        .then(({ data }) => {
            console.log("data ->", data);
            setToDo(data);
        })
}

const addToDo = (text, setText, setToDo) => {
    axios.post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data)
            setText('')
            getAllTodo(setToDo)
        }).catch((err) => console.log(err))
}

const updatodo = (toDoid, text, setToDo, setText, setIsUpdate) => {
    axios.post(`${baseUrl}/updated`, { _id: toDoid, text })
        .then((data) => {
            setText('')
            setIsUpdate(false)
            getAllTodo(setToDo)
        }).catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo ) => {
    axios.post(`${baseUrl}/deleted`, { _id })
        .then((data) => {
            getAllTodo(setToDo)
        }).catch((err) => console.log(err))
}

export { getAllTodo, addToDo, updatodo, deleteToDo }