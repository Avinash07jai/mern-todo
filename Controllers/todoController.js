
const TodoModel = require('../Model/todoModel');

module.exports.getTodo = async (req, res) => {
    const toDo = await TodoModel.find();
    res.send(toDo)
}

module.exports.savetodo = async (req, res) => {
    const {text} = req.body

    TodoModel.create({text})
    .then((data) => {
        console.log("Added Data.");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateTodo = async ( req, res) => {
    const {_id, text} = req.body

    TodoModel.findByIdAndUpdate(_id, {text})
    .then(() => res.send("Updated Data"))
    .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body

    TodoModel.findByIdAndDelete(_id)
        .then(() => res.send("Deleted Data"))
        .catch((err) => console.log(err))
}