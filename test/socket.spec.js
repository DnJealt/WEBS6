describe('SocketService', function(){
    
    var ListController;
    var socketService;
    var httpService;
	var createNewController;
	var httpBackend;
	var scope;
    var http;
	
    beforeEach(function(){
        //Je angular mahjong app opvragen, ng-app='week1'
        module('Webs6');
        
        inject(function($rootScope, $controller, $httpBackend, $injector, $http){
            // The scope for the controller
            scope = $rootScope.$new();
            http = $http;
            // Get the service which will be injected
            socketService = $injector.get('SocketService');
            httpService = $injector.get('HttpService');

            // For mocking the backend
            httpBackend = $httpBackend;

            // This is the controller we're going to test
            // ListController = $controller('ListController', { $scope: scope });
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


    // it('should subscribe to a game', function(done){
    //     // Arrange
    //     this.timeout(10000);

    //     var didRecieveSocketMessage = false;
    //     var gameId = '5761692044620011003ae5ee'; 

    //     socketService.listen(gameId);              

    //     // Act
    //     httpService.get('http://mahjongmayhem.herokuapp.com/Games', function(result) {
    //             socketService.onStart(function(){
    //                 console.log('kaas');
                    
    //                 didRecieveSocketMessage = true;
    //                 expect(didRecieveSocketMessage).to.equal(true);
    //                 done();
    //         });
    //     });
    //     // .then(function(result){
    //     //     console.log('hoi' + result);         
    //     // }, function(error){
    //     //     console.log('error' + error);
    //     //     done();
    //     // });   

    //     // Assert
    //     // expect(didRecieveSocketMessage).to.equal(true);
    // });





});
