describe('MatchController', function(){
    
    var MatchController;
	var createNewController;
	var httpBackend;
    var matchFactory;
	var scope;

    beforeEach(function(){
        module('Webs6');
        
        inject(function($rootScope, $controller, $httpBackend, $injector){
            // The scope for the controller
            scope = $rootScope.$new();
            // Get the service which will be injected
            matchFactory = $injector.get('MatchFactory');

            // For mocking the backend
            httpBackend = $httpBackend;
            

            // matchFactory.tileList = sinon.stub();
            matchFactory.tileList = tileList;


            // This is the controller we're going to test
            MatchController = $controller('MatchController', { $scope: scope, MatchFactory: matchFactory });
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

    describe('canTileClick', function(){
        it('should be able to click a tile that is free', function(){
            // This tile is based on a fresh Ram board.
            var freeTile = {xPos: 27, yPos: 9, zPos: 2};

            expect(MatchController.canTileClick(freeTile)).to.equal(true);

        });

        it('should not be able to click a tile that is not free', function(){
            // This tile is based on a fresh Ram board.
            var notFreeTile = {xPos: 9, yPos: 9, zPos: 0};

            expect(MatchController.canTileClick(notFreeTile)).to.equal(false);
        });
    });







    //ignore this
    var tileList = {"_id":"Ram","__v":0,"tiles":[{"xPos":4,"yPos":1,"zPos":0,"_id":"5541019ccd22e511004ab0bd"},{"xPos":6,"yPos":1,"zPos":0,"_id":"5541019ccd22e511004ab0be"},{"xPos":8,"yPos":1,"zPos":0,"_id":"5541019ccd22e511004ab0bf"},{"xPos":22,"yPos":1,"zPos":0,"_id":"5541019ccd22e511004ab0c0"},{"xPos":24,"yPos":1,"zPos":0,"_id":"5541019ccd22e511004ab0c1"},{"xPos":26,"yPos":1,"zPos":0,"_id":"5541019ccd22e511004ab0c2"},{"xPos":1,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0c3"},{"xPos":3,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0c4"},{"xPos":5,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0c5"},{"xPos":7,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0c6"},{"xPos":9,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0c7"},{"xPos":11,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0c8"},{"xPos":13,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0c9"},{"xPos":15,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0ca"},{"xPos":17,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0cb"},{"xPos":19,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0cc"},{"xPos":21,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0cd"},{"xPos":23,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0ce"},{"xPos":25,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0cf"},{"xPos":27,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0d0"},{"xPos":29,"yPos":3,"zPos":0,"_id":"5541019ccd22e511004ab0d1"},{"xPos":1,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0d2"},{"xPos":3,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0d3"},{"xPos":5,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0d4"},{"xPos":7,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0d5"},{"xPos":9,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0d6"},{"xPos":13,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0d7"},{"xPos":15,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0d8"},{"xPos":17,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0d9"},{"xPos":21,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0da"},{"xPos":23,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0db"},{"xPos":25,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0dc"},{"xPos":27,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0dd"},{"xPos":29,"yPos":5,"zPos":0,"_id":"5541019ccd22e511004ab0de"},{"xPos":1,"yPos":7,"zPos":0,"_id":"5541019ccd22e511004ab0df"},{"xPos":3,"yPos":7,"zPos":0,"_id":"5541019ccd22e511004ab0e0"},{"xPos":7,"yPos":7,"zPos":0,"_id":"5541019ccd22e511004ab0e1"},{"xPos":9,"yPos":7,"zPos":0,"_id":"5541019ccd22e511004ab0e2"},{"xPos":12,"yPos":7,"zPos":0,"_id":"5541019ccd22e511004ab0e3"},{"xPos":15,"yPos":7,"zPos":0,"_id":"5541019ccd22e511004ab0e4"},{"xPos":18,"yPos":7,"zPos":0,"_id":"5541019ccd22e511004ab0e5"},{"xPos":21,"yPos":7,"zPos":0,"_id":"5541019ccd22e511004ab0e6"},{"xPos":23,"yPos":7,"zPos":0,"_id":"5541019ccd22e511004ab0e7"},{"xPos":27,"yPos":7,"zPos":0,"_id":"5541019ccd22e511004ab0e8"},{"xPos":29,"yPos":7,"zPos":0,"_id":"5541019ccd22e511004ab0e9"},{"xPos":1,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0ea"},{"xPos":3,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0eb"},{"xPos":5,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0ec"},{"xPos":7,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0ed"},{"xPos":9,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0ee"},{"xPos":13,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0ef"},{"xPos":15,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0f0"},{"xPos":17,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0f1"},{"xPos":21,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0f2"},{"xPos":23,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0f3"},{"xPos":25,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0f4"},{"xPos":27,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0f5"},{"xPos":29,"yPos":9,"zPos":0,"_id":"5541019ccd22e511004ab0f6"},{"xPos":3,"yPos":11,"zPos":0,"_id":"5541019ccd22e511004ab0f7"},{"xPos":5,"yPos":11,"zPos":0,"_id":"5541019ccd22e511004ab0f8"},{"xPos":7,"yPos":11,"zPos":0,"_id":"5541019ccd22e511004ab0f9"},{"xPos":14,"yPos":11,"zPos":0,"_id":"5541019ccd22e511004ab0fa"},{"xPos":16,"yPos":11,"zPos":0,"_id":"5541019ccd22e511004ab0fb"},{"xPos":23,"yPos":11,"zPos":0,"_id":"5541019ccd22e511004ab0fc"},{"xPos":25,"yPos":11,"zPos":0,"_id":"5541019ccd22e511004ab0fd"},{"xPos":27,"yPos":11,"zPos":0,"_id":"5541019ccd22e511004ab0fe"},{"xPos":14,"yPos":13,"zPos":0,"_id":"5541019ccd22e511004ab0ff"},{"xPos":16,"yPos":13,"zPos":0,"_id":"5541019ccd22e511004ab100"},{"xPos":15,"yPos":15,"zPos":0,"_id":"5541019ccd22e511004ab101"},{"xPos":5,"yPos":1,"zPos":1,"_id":"5541019ccd22e511004ab102"},{"xPos":7,"yPos":1,"zPos":1,"_id":"5541019ccd22e511004ab103"},{"xPos":23,"yPos":1,"zPos":1,"_id":"5541019ccd22e511004ab104"},{"xPos":25,"yPos":1,"zPos":1,"_id":"5541019ccd22e511004ab105"},{"xPos":3,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab106"},{"xPos":5,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab107"},{"xPos":7,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab108"},{"xPos":9,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab109"},{"xPos":11,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab10a"},{"xPos":13,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab10b"},{"xPos":15,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab10c"},{"xPos":17,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab10d"},{"xPos":19,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab10e"},{"xPos":21,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab10f"},{"xPos":23,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab110"},{"xPos":25,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab111"},{"xPos":27,"yPos":3,"zPos":1,"_id":"5541019ccd22e511004ab112"},{"xPos":2,"yPos":5,"zPos":1,"_id":"5541019ccd22e511004ab113"},{"xPos":4,"yPos":5,"zPos":1,"_id":"5541019ccd22e511004ab114"},{"xPos":6,"yPos":5,"zPos":1,"_id":"5541019ccd22e511004ab115"},{"xPos":8,"yPos":5,"zPos":1,"_id":"5541019ccd22e511004ab116"},{"xPos":13,"yPos":5,"zPos":1,"_id":"5541019ccd22e511004ab117"},{"xPos":15,"yPos":5,"zPos":1,"_id":"5541019ccd22e511004ab118"},{"xPos":17,"yPos":5,"zPos":1,"_id":"5541019ccd22e511004ab119"},{"xPos":22,"yPos":5,"zPos":1,"_id":"5541019ccd22e511004ab11a"},{"xPos":24,"yPos":5,"zPos":1,"_id":"5541019ccd22e511004ab11b"},{"xPos":26,"yPos":5,"zPos":1,"_id":"5541019ccd22e511004ab11c"},{"xPos":28,"yPos":5,"zPos":1,"_id":"5541019ccd22e511004ab11d"},{"xPos":2,"yPos":7,"zPos":1,"_id":"5541019ccd22e511004ab11e"},{"xPos":8,"yPos":7,"zPos":1,"_id":"5541019ccd22e511004ab11f"},{"xPos":12,"yPos":7,"zPos":1,"_id":"5541019ccd22e511004ab120"},{"xPos":15,"yPos":7,"zPos":1,"_id":"5541019ccd22e511004ab121"},{"xPos":18,"yPos":7,"zPos":1,"_id":"5541019ccd22e511004ab122"},{"xPos":22,"yPos":7,"zPos":1,"_id":"5541019ccd22e511004ab123"},{"xPos":28,"yPos":7,"zPos":1,"_id":"5541019ccd22e511004ab124"},{"xPos":2,"yPos":9,"zPos":1,"_id":"5541019ccd22e511004ab125"},{"xPos":4,"yPos":9,"zPos":1,"_id":"5541019ccd22e511004ab126"},{"xPos":6,"yPos":9,"zPos":1,"_id":"5541019ccd22e511004ab127"},{"xPos":8,"yPos":9,"zPos":1,"_id":"5541019ccd22e511004ab128"},{"xPos":14,"yPos":9,"zPos":1,"_id":"5541019ccd22e511004ab129"},{"xPos":16,"yPos":9,"zPos":1,"_id":"5541019ccd22e511004ab12a"},{"xPos":22,"yPos":9,"zPos":1,"_id":"5541019ccd22e511004ab12b"},{"xPos":24,"yPos":9,"zPos":1,"_id":"5541019ccd22e511004ab12c"},{"xPos":26,"yPos":9,"zPos":1,"_id":"5541019ccd22e511004ab12d"},{"xPos":28,"yPos":9,"zPos":1,"_id":"5541019ccd22e511004ab12e"},{"xPos":4,"yPos":11,"zPos":1,"_id":"5541019ccd22e511004ab12f"},{"xPos":6,"yPos":11,"zPos":1,"_id":"5541019ccd22e511004ab130"},{"xPos":15,"yPos":11,"zPos":1,"_id":"5541019ccd22e511004ab131"},{"xPos":24,"yPos":11,"zPos":1,"_id":"5541019ccd22e511004ab132"},{"xPos":26,"yPos":11,"zPos":1,"_id":"5541019ccd22e511004ab133"},{"xPos":15,"yPos":13,"zPos":1,"_id":"5541019ccd22e511004ab134"},{"xPos":15,"yPos":15,"zPos":1,"_id":"5541019ccd22e511004ab135"},{"xPos":4,"yPos":3,"zPos":2,"_id":"5541019ccd22e511004ab136"},{"xPos":6,"yPos":3,"zPos":2,"_id":"5541019ccd22e511004ab137"},{"xPos":15,"yPos":3,"zPos":2,"_id":"5541019ccd22e511004ab138"},{"xPos":24,"yPos":3,"zPos":2,"_id":"5541019ccd22e511004ab139"},{"xPos":26,"yPos":3,"zPos":2,"_id":"5541019ccd22e511004ab13a"},{"xPos":3,"yPos":5,"zPos":2,"_id":"5541019ccd22e511004ab13b"},{"xPos":5,"yPos":5,"zPos":2,"_id":"5541019ccd22e511004ab13c"},{"xPos":7,"yPos":5,"zPos":2,"_id":"5541019ccd22e511004ab13d"},{"xPos":14,"yPos":5,"zPos":2,"_id":"5541019ccd22e511004ab13e"},{"xPos":16,"yPos":5,"zPos":2,"_id":"5541019ccd22e511004ab13f"},{"xPos":23,"yPos":5,"zPos":2,"_id":"5541019ccd22e511004ab140"},{"xPos":25,"yPos":5,"zPos":2,"_id":"5541019ccd22e511004ab141"},{"xPos":27,"yPos":5,"zPos":2,"_id":"5541019ccd22e511004ab142"},{"xPos":3,"yPos":9,"zPos":2,"_id":"5541019ccd22e511004ab143"},{"xPos":5,"yPos":9,"zPos":2,"_id":"5541019ccd22e511004ab144"},{"xPos":7,"yPos":9,"zPos":2,"_id":"5541019ccd22e511004ab145"},{"xPos":15,"yPos":9,"zPos":2,"_id":"5541019ccd22e511004ab146"},{"xPos":23,"yPos":9,"zPos":2,"_id":"5541019ccd22e511004ab147"},{"xPos":25,"yPos":9,"zPos":2,"_id":"5541019ccd22e511004ab148"},{"xPos":27,"yPos":9,"zPos":2,"_id":"5541019ccd22e511004ab149"},{"xPos":5,"yPos":5,"zPos":3,"_id":"5541019ccd22e511004ab14a"},{"xPos":15,"yPos":5,"zPos":3,"_id":"5541019ccd22e511004ab14b"},{"xPos":25,"yPos":5,"zPos":3,"_id":"5541019ccd22e511004ab14c"}],"id":"Ram"};

});