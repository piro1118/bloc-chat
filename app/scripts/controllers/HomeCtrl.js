(function() {
    function HomeCtrl(Room, $uibModal) {
        var main = this;
        main.chatRoomArray = Room.all;

        main.openNewRoom = function(){
            var modalInstance = $uibModal.open({
                templateurl: '/templates/new_room_modal.html',
                controller: 'NewRoomCtrl',
                controllerAs: 'modal'
            });
        };


    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
