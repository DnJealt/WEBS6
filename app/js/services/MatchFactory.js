module.exports = function () {

    var factory = {};

    factory.tileList = {};
    factory.gameId;
    factory.selectedFirst;
    factory.selectedSecond;
    
    factory.removeTile = function(id) {
        
        var index;
        
        for(var i = 0; i < factory.tileList.length; i++) {
            
            if(factory.tileList[i]._id == id) {
                index = i;
            }
            
        }

        if(index)        
        factory.tileList.splice(index, 1);
        
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