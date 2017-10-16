angular.module('todoService', [])

    .factory('Todos', function($http) {
        return {
            get : function() {
                return $http.get('/api/todos');
            },
            search : function() {
                return $http.post('/api/todos/search');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    });