(function() {
    function TimerCtrl(Tasks, $scope, $interval, $filter) {

    $scope.tasks = Tasks;


    var mySound = new buzz.sound( "assets/sounds/timer_tune.mp3", {
        preload: true
    });


		//Initialize variables
    var workSession = 1500; //1500
    var short_breakSession = 300; //300
    var long_breakSession = 1800; //1800
		$scope.count = workSession;
    $scope.Timer = null;
    $scope.onBreak = false;
    $scope.timerRunning = true;
    $scope.num_workSessions = 0;


		$scope.start = function() {
      $scope.timerRunning = true;


      startWork = $interval(function() {
        $scope.count--;

        if($scope.count === 0) {
			     $interval.cancel(startWork);
           $scope.timerRunning = false;
           mySound.play();

          if(!$scope.onBreak) {
            $scope.num_workSessions++;
            $scope.onBreak = true;
            $scope.count = short_breakSession;


              if($scope.num_workSessions % 4 === 0) {
                console.log("Work Session #: " + $scope.num_workSessions);
                console.log("long break")
                $scope.count = long_breakSession;
                $scope.timerRunning = false;
              } else {
                $scope.count = short_breakSession;
                console.log("short break")
                $scope.timerRunning = false;
              }

          } else {
            $scope.onBreak = false;
            $scope.count = workSession;
          }
       }
     }, 1000);


		$scope.reset = function() {
			 $interval.cancel(startWork);
			 $scope.count = workSession;
       $scope.timerRunning = false;
		}
  }
};

// $scope.stop = function() {
//   $scope.onWork = false;
//     if (angular.isDefined($scope.Timer)) {
//         $interval.cancel(startWork);
//         $scope.Timer = null;
//       }
// };




    angular
        .module('blocTime')
        .controller('TimerCtrl', ['Tasks', '$scope', '$interval', TimerCtrl]);
})();
