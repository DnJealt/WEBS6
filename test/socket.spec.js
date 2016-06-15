describe('SocketController', function(){
    
    var ListController;
	var requestService;
	var createNewController;
	var httpBackend;
	var scope;
	
    beforeEach(function(){
        //Je angular mahjong app opvragen, ng-app='week1'
        module('Webs6');
        
        inject(function($rootScope, $controller, $httpBackend, $injector){
            // The scope for the controller
            scope = $rootScope.$new();
            // Get the service which will be injected
            authService = $injector.get('AuthService');
            // For mocking the backend
            httpBackend = $httpBackend;
            
            // expect van currentUser werkt dus niet als ik de requestService stub.
            authService.getUser = sinon.stub();
            authService.getUser.returns('jlmtartw@student.avans.nl');

            // This is the controller we're going to test
            ListController = $controller('ListController', { $scope: scope });
        });
    });
    
    function stub(){
         var self = this;
         
         
        return {
            returns: function(value){
                self.returnValue = value;
            }
        }
    }








});
