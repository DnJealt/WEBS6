require('angular/angular.min');
require('angular-route/angular-route.min');
var route = require('angular-ui-router/release/angular-ui-router.min');

var app = angular.module('Webs6', [route]);

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('AuthService');
});

app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('games', {
            url: "/games",
            templateUrl: 'partials/games.html',
            controller: 'GameController',
            controllerAs: 'gc',
            resolve: {
                games: function (GameFactory, $q) {

                    var deferred = $q.defer();

                    GameFactory.getAllGames(function () {
                        deferred.resolve(GameFactory.allGames);
                    });

                    return deferred.promise;

                },
                myGames: function(GameFactory, $q) {
                    
                    var deferred = $q.defer();
                    
                    GameFactory.getMyGames(function() {
                       deferred.resolve(GameFactory.myGames); 
                    });
                    
                    return deferred.promise;
                    
                }
            }
        })
        .state('games.all', {
            url: '/all',
            templateUrl: 'partials/games.all.html'
        })
        .state('games.my', {
            url: "/my",
            templateUrl: "partials/games.my.html"
        })
        .state('games.my.board', {
            url: "/board/:id",
            templateUrl: "partials/games.my.board.html",
            controller: "MatchController",
            controllerAs: "mc"            
        })
        .state('games.my.finished', {
            url: "/finished/:id",
            templateUrl: "partials/games.my.finished.html",
            controller: "MatchController",
            controllerAs: "mc"
        })
        .state('login', {
            url: "/login",
            template: 'Logging in',
            controller: 'LoginController'
        });

});

app.filter('orderObjectBy', function(){
 return function(input, attribute) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
        array.push(input[objectKey]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
    });
    return array;
 }
});

var gameController = require('./controllers/GameController');
var loginController = require('./controllers/LoginController');
var mainController = require('./controllers/MainController');
var matchController = require('./controllers/MatchController');

var gameFactory = require('./services/GameFactory');
var matchFactory = require('./services/MatchFactory');
var authService = require('./services/AuthService');
var socketService = require('./services/SocketService');

app.service('SocketService', socketService);
app.service('AuthService', authService);
app.factory('GameFactory', gameFactory);
app.factory('MatchFactory', matchFactory);

app.controller('GameController', gameController);
app.controller('LoginController', loginController);
app.controller('MainController', mainController);
app.controller('MatchController', matchController);
