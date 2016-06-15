describe('ListController', function(){
    
    var ListController;
	var requestService;
	var createNewController;
	var httpBackend;
	var scope;
	
    beforeEach(function(){
        //Je angular mahjong app opvragen, ng-app='week1'
        module('week1');
        
        inject(function($rootScope, $controller, $httpBackend, $injector){
            // The scope for the controller
            scope = $rootScope.$new();
            // Get the service which will be injected
            requestService = $injector.get('RequestService');
            // For mocking the backend
            httpBackend = $httpBackend;
            
            // expect van currentUser werkt dus niet als ik de requestService stub.
            requestService.getUserId = sinon.stub();
            requestService.getUserId.returns('jlmtartw@student.avans.nl');

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
}