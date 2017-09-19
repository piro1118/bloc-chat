(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(roomname) {
        rooms.$add(roomname).then(function(ref) {
            var id = ref.key;
            console.log("added "+ roomname + " with id " + id);
            rooms.$indexFor(id);
        });
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
