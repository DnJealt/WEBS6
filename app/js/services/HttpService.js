module.exports = function($http){

    var self = this;
    
    self.get = function(url, callback) {

        $http.get(url).then(function(result) {
            callback(result);
        });

    }

    return self;
    
    
    
}