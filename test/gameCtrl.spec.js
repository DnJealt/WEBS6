describe('GameController', function(){
    
    var GameController;
    var authService;
	var createNewController;
	var httpBackend;
	var scope;
	
    var jelte = {_id: 'jlmtartw@student.avans.nl', name: 'Jelte van Tartwijk'};

    beforeEach(function(){
        module('Webs6');
        
        inject(function($rootScope, $controller, $httpBackend, $injector){
            // The scope for the controller
            scope = $rootScope.$new();
            // Get the service which will be injected
            authService = $injector.get('AuthService');
            // For mocking the backend
            httpBackend = $httpBackend;
            
            // expect van getUser werkt dus niet als ik de authService stub.
            authService.getUser = sinon.stub();
            authService.getUser.returns("jlmtartw@student.avans.nl");

            // This is the controller we're going to test
            GameController = $controller('GameController', { $scope: scope, AuthService: authService });
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
    
    describe('AuthService', function(){
        it('should have a defined user in the AuthService', function(){ 
            expect(GameController.AuthService.getUser()).to.equal('jlmtartw@student.avans.nl');      
                       
        });
    });
    
    describe('gameJoinable', function(){
         it('should return true if current user not in game', function(){
            var game = {
                players: [],
                minPlayers: 2,
                maxPlayers: 16,
                state: "open"
            }
            expect(GameController.gameJoinable(game)).to.be.equal(true);
         });
         
         it('should return false if current user is in game', function(){
              var game = {
                players: [jelte],
                minPlayers: 2,
                maxPlayers: 16,
                state: "open"
            }
            expect(GameController.gameJoinable(game)).to.be.equal(false);
         });
         
         it('should return false if game is full', function(){
             var game = {
                players: [{},{},{}],
                minPlayers: 2,
                maxPlayers: 3,
                state: "open"
             }
             expect(GameController.gameJoinable(game)).to.be.equal(false);
         });

         it('should return false if the game is in another state than "open"', function(){
              var game = {
                players: [{},{},{}],
                minPlayers: 2,
                maxPlayers: 4,
                state: "playing"
             }

             expect(GameController.gameJoinable(game)).to.be.equal(false);

         });
     });
});