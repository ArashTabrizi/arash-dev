var Todo = require('./model/todo');

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

    app.put('/api/todos/:id', function(req, res) {
        var id = req.params.id;
        Todo.update({_id: id}, req, {upsert: true}, function (err) {
                if (err) throw err;
                res.json(req);
            });
    });

    app.post('/api/todos/search', function(req, res) {
        Todo.find({text:'arash' }, function(err, todos) {
            if (err)
                res.send(err)
             res.json(todos); 
        });
            });
    
    app.get('/api/todos/:id', function(req, res) {
        var id = req.params.id;
        Todo.findById(id, function(err, todos) {
            if (err)
                res.send(err)
             res.json(todos); 
        });
            });
    
    // delete a todo
    app.delete('/api/todos/:id', function(req, res) {
        Todo.remove({
            _id : req.body.id
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
};