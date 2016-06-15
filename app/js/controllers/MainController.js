module.exports = function($scope, AuthService, $window) {

    var self = this;

    self.auth = AuthService;
    self.user = AuthService.getUser();
    $scope.theme = $window.localStorage.getItem('theme');    

    self.checkTheme = function() {
        if($window.localStorage.getItem('theme') == null) {
            $window.localStorage.setItem('theme', '1');
        }
    }

    self.changeTheme = function() {

        $window.localStorage.setItem('theme', ($window.localStorage.getItem('theme') == '1' ? '2' : '1'));
        $window.location.reload();
    }

    self.checkTheme();

}