module.exports = function($window) {
    var self = this;
    
    self.getUser = function() {
        
        return $window.localStorage.getItem('user');
        
    }
    
    self.getToken = function() {
        
        return $window.localStorage.getItem('token');
        
    }
    
    self.request =  function (config) {
        
      config.headers['x-username'] = $window.localStorage.getItem("user");
      config.headers['x-token'] = $window.localStorage.getItem('token');


      return config;
      
    }
}