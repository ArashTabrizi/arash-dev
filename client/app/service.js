todoApp.factory('mainService', function ($http) {
    return {
        getNotes: function() {
            return $http.get('/api/todos');
        },
            getById : function(id) {
                return $http.get('/api/todos/'+id);
            },
            //search : function() {
            //    return $http.post('/api/todos/search');
            //},
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            //delete : function(id) {
            //    return $http.delete('/api/todos/' + id);
            //}
        }
    });