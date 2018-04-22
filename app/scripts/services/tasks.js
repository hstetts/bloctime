(function() {
  function Tasks($firebaseArray) {

    var ref = firebase.database().ref().child("tasks");

    var tasks = $firebaseArray(ref);


    var addTask = function(text) {
		  tasks.$add({
			  tasklist: text,
        timestamp: Date.now()
		  });
	  }


    return {
         all: tasks,
          addTask: addTask
      };
}

angular
  .module('blocTime')
  .factory('Tasks', ['$firebaseArray', Tasks]);
})();
