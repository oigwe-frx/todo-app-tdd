const TodoModel = require('../model/todo.model');

exports.createTodo = (req, res, next) => {
    //req => what the client is sending the server
    //res => what the client is receiving from the server
    //next => used for middleware
    
    TodoModel.create(req.body);
};