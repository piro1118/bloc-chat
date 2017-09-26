(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        var main = this;
        main.chatRoomArray = Room.all;

        main.openNewRoom = function(){
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/new_room_modal.html',
                controller: 'NewRoomCtrl',
                controllerAs: 'modal'
            });
        };

        main.currentRoomId = undefined;

        main.setCurrentRoom = function(room){
            main.messageArray = Message.getByRoomId(room.$id);
            //console.log(room.$value);
            main.currentRoomId = room.$id;
            main.currentRoomTitle = room.$value;
        };

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
