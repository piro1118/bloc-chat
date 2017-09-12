(function() {
  function Room($firebaseArray) {
    var room = {};

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    room.all = rooms;

    return room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
