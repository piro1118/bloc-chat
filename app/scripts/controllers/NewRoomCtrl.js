(function() {
    function NewRoomCtrl(Room, $uibModalInstance) {
        var modal = this;
        modal.chatRoomArray = Room.all;
        modal.statusBar = "Enter a room name";

        modal.addData = function(){
            if(modal.inputData){
                Room.add(modal.inputData);
                modal.cancel();
            } else {
                alert("Room name should not be empty.");
            }
        };

        modal.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };

    };

    angular
        .module('blocChat')
        .controller('NewRoomCtrl', ['Room', '$uibModalInstance', NewRoomCtrl]);
})();
