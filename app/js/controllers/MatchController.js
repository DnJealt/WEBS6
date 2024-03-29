module.exports = function ($scope, $http, MatchFactory, SocketService, $stateParams) {

    var self = this;

    self.matchFactory = MatchFactory;
    self.socket = SocketService;

    if($stateParams.id) {
        self.matchFactory.getMatch($stateParams.id, function(id) {
            self.socket.listen(id);
            self.socket = 
            self.bindSocket();
        });
    }

    self.bindSocket = function() {

        self.socket.onMatch(function (matchedArray) {

            console.log(matchedArray);

            matchedArray.forEach(function(match) {

            self.matchFactory.removeTile(match._id);

            });

            $scope.$apply();
            
        });

        self.socket.onEnd(function() {

            alert("The game has ended!");

        });

        self.socket.onStart(function() {
        
            self.matchFactory.initializeMatch(self.matchFactory.game);

        });


    }
    

    self.canTileClick = function (tile) {
        
        console.log(tile);

        var mc = self.matchFactory;
        var canClick = true;

        var x = tile.xPos;
        var y = tile.yPos;
        var z = tile.zPos;

        var topLeft = mc.getTile((x - 2), (y - 1), z);
        var left = mc.getTile((x - 2), y, z);
        var downLeft = mc.getTile((x - 2), (y + 1), z);
        var topRight = mc.getTile((x + 2), (y - 1), z);
        var right = mc.getTile((x + 2), y, z);
        var downRight = mc.getTile((x + 2), (y + 1), z);

        var leftArr = [topLeft, left, downLeft];
        var rightArr = [topRight, right, downRight];

        if (mc.getTile((x + 1), (y + 1), (z + 1))) {
            canClick = false;
        } else if (mc.getTile((x + 1), (y - 1), (z + 1))) {
            canClick = false;
        } else if (mc.getTile((x - 1), (y + 1), (z + 1))) {
            canClick = false;
        } else if (mc.getTile((x - 1), (y - 1), (z + 1))) {
            canClick = false;
        } else if (mc.getTile((x + 1), y, (z + 1))) {
            canClick = false;
        } else if (mc.getTile((x - 1), y, (z + 1))) {
            canClick = false;
        } else if (mc.getTile(x, (y - 1), (z + 1))) {
            canClick = false;
        } else if (mc.getTile(x, (y + 1), (z + 1))) {
            canClick = false;
        }

        leftArr.forEach(function (leftTile) {

            rightArr.forEach(function (rightTile) {

                if (leftTile && rightTile) {
                    canClick = false;
                }

            });

        });

        return canClick;

    }

    self.clickTile = function (tile) {

        if (self.canTileClick(tile)) {
            var tileOne = self.matchFactory.selectedFirst;
            var tileTwo = self.matchFactory.selectedSecond;

            if (!self.unselect(tile, tileOne, tileTwo)) {

                if (tileOne == null) {
                    self.matchFactory.selectedFirst = tile;
                    tileOne = tile;
                } else {
                    if(tileOne != tile) {
                        self.matchFactory.selectedSecond = tile;
                        tileTwo = tile;
                    }
                    
                }

                self.setOverlay(tile);

                if (tileOne != null && tileTwo != null) {

                    if (tileOne.tile.matchesWholeSuit == false) {

                        if (tileOne.tile.suit == tileTwo.tile.suit && tileOne.tile.name == tileTwo.tile.name) {
                            self.match(true, tileOne, tileTwo);
                        } else {
                            self.match(false, null, null);
                        }

                    } else {

                        if (tileOne.tile.suit == tileTwo.tile.suit) {
                            self.match(true, tileOne, tileTwo);
                        } else {
                            self.match(false, null, null);
                        }
                    }
                }
            }
        }
    }

    self.match = function (matched, tileOne, tileTwo) {

        if (!matched) {

            var elements = document.getElementsByClassName("selected");
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }

            self.matchFactory.selectedFirst = null;
            self.matchFactory.selectedSecond = null;

        } else {

            $http.post('http://mahjongmayhem.herokuapp.com/Games/' + self.matchFactory.game._id + '/Tiles/matches',
            {
                tile1Id: tileOne._id,
                tile2Id: tileTwo._id
            }).success(function (response) {
                console.log("posted");
                self.matchFactory.selectedFirst = null;
                self.matchFactory.selectedSecond = null;
                    
            }).error(function(response) {

                self.matchFactory.selectedFirst = null;
                self.matchFactory.selectedSecond = null;
        
            });

            self.matchFactory.removeTile(tileOne._id);
            self.matchFactory.removeTile(tileTwo._id);

        }

    }

    self.setOverlay = function (tile) {

        var elements = document.getElementsByClassName("x-" + tile.xPos + " y-" + tile.yPos);
        var em = document.createElement("div");
        em.className += "selected";

        for (var i = 0; i < elements.length; i++) {
            if (elements.item(i).style['z-index'] == tile.zPos) {
                elements.item(i).appendChild(em);
            }
        }

    }

    self.removeOverlay = function (tile) {

        var elements = document.getElementsByClassName("x-" + tile.xPos + " y-" + tile.yPos);

        for (var i = 0; i < elements.length; i++) {
            while (elements.item(i).firstChild) {
                elements.item(i).removeChild(elements.item(i).firstChild);
            }
        }

    }

    self.unselect = function (tile, tileOne, tileTwo) {

        if (tileOne != null && tile.tile.id == tileOne.tile.id) {
            self.matchFactory.selectedFirst = null;
            self.removeOverlay(tile);
            return true;
        } else if (tileTwo != null && tile.tile.id == tileTwo.tile.id) {
            self.matchFactory.selectedSecond = null;
            self.removeOverlay(tile);
            return true;
        }

        return false;

    }

}