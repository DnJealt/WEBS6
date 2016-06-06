module.exports = function($scope, $rootScope, $location, $window) {
    
    function init() {
        $window.localStorage.setItem('user', $location.search().username);
        $window.localStorage.setItem('token', $location.search().token);
        
        $location.$$search = {};
        $location.path('/');
    }
    
    init();

}