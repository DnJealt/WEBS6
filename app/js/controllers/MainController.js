module.exports = function($scope, AuthService) {

    this.username = AuthService.getUser();

}