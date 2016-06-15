module.exports = function($scope, $http, GameFactory, AuthService, MatchFactory) {
        
    var self = this;    
        
    self.GameFactory = GameFactory;
    self.AuthService = AuthService;
    self.matchFactory = MatchFactory;
    
     self.gameTemplates = ['Dragon', 'Monkey', 'Ox', 'Ram', 'Rooster', 'Snake', 'Shanghai'];
     self.selectedTemplate;
     self.minPlayers = 2;
     self.maxPlayers = 4;     

     self.gameJoinable = function(game){
       var canJoin = true;
        game.players.forEach(function(player){
           if(player._id == self.AuthService.getUser()){
               canJoin = false;
           }
       });
    
       return game.state == 'open' && game.players.length < game.maxPlayers && canJoin;
    }

    self.refreshGames = function() {

        GameFactory.getAllGames(function(){});
        GameFactory.getMyGames(function(){});

    }
    
    self.joinGame = function(game) {
        
        $http.post("https://mahjongmayhem.herokuapp.com/Games/" + game.id + "/Players")
            .then(function (result) {
                self.refreshGames();
            });        
    }
    
    self.createGame = function() {
        
         $http.post('http://mahjongmayhem.herokuapp.com/Games',
         {            
            templateName: self.selectedTemplate,
            minPlayers: self.minPlayers,
            maxPlayers: self.maxPlayers            
        }).success(function(response){
            self.refreshGames();
        });
        
    }

    self.deleteGame = function(game) {

        $http.delete("https://mahjongmayhem.herokuapp.com/Games/" + game._id)
            .then(function (result) {
                self.refreshGames();
            });  

    }
    
    self.startGame = function(game) {
        
        $http.post("https://mahjongmayhem.herokuapp.com/Games/" + game.id + "/Start")
            .then(function (result) {
            }); 
        
    }
       
    self.playGame = function(game) {
        
        self.matchFactory.tileList = null;
        self.matchFactory.gameId = null;

        if(game.state == 'playing') {
            self.matchFactory.initializeMatch(game);
            console.log("test");
        }

         
        
    }

}