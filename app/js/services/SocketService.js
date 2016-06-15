module.exports = function(){

    var self = this;
    self.socket;
        
    self.listen = function(id){
        self.socket = io('http://mahjongmayhem.herokuapp.com?gameId=' +id);
    }
    
    self.onStart = function(event){
        self.socket.on('start', event);
    }

    self.onMatch = function(event) {
        self.socket.on('match', event);
    }

    self.onEnd = function(event) {
        self.socket.on('end', event);
    }

    self.onPlayerJoined = function(event) {
        self.socket.on('playerjoin', event);
    }

    return self;
    
    
    
}