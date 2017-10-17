todoApp.controller('mainController', function ($scope, $http, mainService, $location) {
    $scope.test = "aa";
    $scope.note = {
        _id: '1',
        state: 'incomplete',
        text: 'note1'
    }

    $scope.searchState = '';
    $scope.gotoEdit = function (id) {
        $location.path('/edit/'+id);
    }

    $scope.addNote = function () {
        $scope.notes.push({
            _id: $scope.notes.length + 1,
            text: $scope.txtSearch,
            state: 'incomplete'
        });
        $scope.txtSearch = '';
    }

    $scope.activeClass = 'all';
    $scope.searchText = '';
    $scope.notes = [];

    //$http.get('/data/notes.json')

    //.success(function (data) {

    //    $scope.notes = data;

    //})

    //.error(function (data) {

    //    console.log('Error: ' + data);

    //});


    mainService.getNotes().then(function (res) {


console.log(res.data);
        $scope.notes = res.data;



    });



    $scope.formData = {};


    //$http.get('/api/todos')

    //        .success(function(data) {

    //                $scope.todos = data;

    //        })

    //        .error(function(data) {

    //                console.log('Error: ' + data);

    //        });


    //$scope.createTodo = function() {

    //        $http.post('/api/todos', $scope.formData)

    //                .success(function(data) {

    //                        $scope.formData = {}; 

    //                        $scope.todos = data;

    //                })

    //                .error(function(data) {

    //                        console.log('Error: ' + data);

    //                });

    //};


    //$scope.findToDo = function() {

    //        $http.post('/api/todos/search', $scope.formData)

    //                .success(function(data) {

    //                        console.log(data);

    //                        $scope.formData = {}; 

    //                        $scope.todos = data;

    //                })

    //                .error(function(data) {

    //                        console.log('Error: ' + data);

    //                });

    //};


    //$scope.deleteTodo = function(id) {

    //        $http.delete('/api/todos/' + id)

    //                .success(function(data) {

    //                        $scope.todos = data;

    //                })

    //                .error(function(data) {

    //                        console.log('Error: ' + data);

    //                });

    //};


});



todoApp.controller('editController', function ($scope, mainService, $routeParams, $location) {
    $scope.addNote = function (form) {
        if (form.$valid) {
            mainService.create({text:$scope.note}).then(function (res) {
                console.log(res.data);
                $scope.message = "Successfully Added";
                $location.path('/');                
            });
        } else {
            alert('please enter note');
        }
    }

    $scope.editNote = function (form) {
        if (form.$valid) {
            $location.path('/');
        } else {
            alert('please enter note');
        }
    };
    $scope.here = "EditCtrl";
    $scope.param = $routeParams.id;
    if ($routeParams.id != undefined) {
        mainService.getById($routeParams.id)
            .then(function (res) {
                var data = res.data;
                $scope.note = data.text;
                $scope.id = data.id;
                $scope.state = data.state;
            });
        $scope.isEdit = true;
    }
});