var Todo = require('./models/todo');

module.exports = function(app) {

    app.get('/api/todos', function(req, res) {

        Todo.find(function(err, todos) {
            if (err)
                res.send(err)

            res.json(todos); 
        });
    });

    app.post('/api/todos', function(req, res) {

        Todo.create({
            text : req.body.text,
            state : 0
        }, function(err, todo) {
            if (err)
                res.send(err);

            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });
};