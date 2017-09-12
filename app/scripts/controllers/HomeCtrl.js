(function() {
    function HomeCtrl(Room) {
        var main = this;
        main.chatRoomArray = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
