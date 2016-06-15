module.exports = function  ($http) {

    var factory = {};

    factory.game;
    factory.tileList = {};
    factory.selectedFirst;
    factory.selectedSecond;

    factory.getMatch = function(id, callback) {

        $http.get("https://mahjongmayhem.herokuapp.com/Games/" + id)
            .then(function (result) {
                factory.game = result.data;
                callback(factory.game._id);
            });

    }

    factory.initializeMatch = function(game) {
        $http.get("https://mahjongmayhem.herokuapp.com/Games/" + game._id + "/Tiles?matched=false")
            .then(function (result) {   
                factory.tileList = result.data;
            });
    };

    
    factory.removeTile = function(id) {
        
        var index;
        
        for(var i = 0; i < factory.tileList.length; i++) {
            
            if(factory.tileList[i]._id == id) {
                index = i;
            }
            
        }

        if(index) {
            factory.tileList.splice(index, 1);     
        }
        
        
    }
    
    factory.getTile = function(x, y, z) {
         
        var result = null;
          
        factory.tileList.forEach(function(tile) {
                                    
           if(tile.xPos == x && tile.yPos == y && tile.zPos == z) {
               result = tile;
           } 
            
        });
        
        return result;
        
    }
    
    
    return factory;

}