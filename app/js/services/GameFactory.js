module.exports = function ($http, AuthService) {

    var factory = {};

    factory.allGames = {};
    factory.myGames = {};

    factory.getAllGames = function (callback) {
        
        $http.get("https://mahjongmayhem.herokuapp.com/Games")
            .then(function (result) {
                factory.allGames = result.data;
                callback();
            });

    }
    
    factory.getMyGames = function(callback) {
        
        $http.get("https://mahjongmayhem.herokuapp.com/Games?player=" + AuthService.getUser() + "")
            .then(function (result) {
                factory.myGames = result.data;
                callback();
            });
    }
    
    return factory;

}