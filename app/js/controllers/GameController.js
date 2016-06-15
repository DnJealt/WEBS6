module.exports = function($scope, $http, GameFactory, AuthService, MatchFactory) {
        
    var self = this;    
        
    self.GameFactory = GameFactory;
    self.AuthService = AuthService;
    self.matchFactory = MatchFactory;
    
     self.gameTemplates = ['Dragon', 'Monkey', 'Ox', 'Ram', 'Rooster', 'Snake', 'Shanghai'];
     self.selectedTemplate;
     self.minPlayers = 2;
     self.maxPlayers = 4;     

    self.refreshGames = function() {

        GameFactory.getAllGames(function(){});
        GameFactory.getMyGames(function(){});

    }
    
    self.joinGame = function(game) {
        
        $http.post("https://mahjongmayhem.herokuapp.com/Games/" + game.id + "/Players")
            .then(function (result) {
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
        
         $http.get("https://mahjongmayhem.herokuapp.com/Games/" + game.id + "/Tiles?matched=false")
            .then(function (result) {
                  var x = 0; 
                  var y = 0;
                result.data.forEach(function(tile){
                                                          
                    if(tile.xPos > x) {
                        x = tile.xPos;
                    }
                    if(tile.yPos > y){
                        y = tile.yPos
                    }
                });
                                
                self.matchFactory.tileList = result.data;
                self.matchFactory.gameId = game.id;
            });
        
    }

}