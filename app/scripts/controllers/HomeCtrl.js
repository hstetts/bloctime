(function() {
    function HomeCtrl($scope, $interval, $filter) {

		//Initialize variables
		$scope.count = 5; //1500;
    $scope.breakSession = 4; //300//1800
    $scope.Timer = null;
    $scope.onBreak = false;
    $scope.timerRunning = true;
    $scope.num_workSessions = 0;


		$scope.start = function() {
      $scope.timerRunning = true;
      $scope.count = 5;

      startWork = $interval(function() {
        $scope.count--;

        if($scope.count = 0) {
			     $interval.cancel(startWork);
           $scope.timerRunning = false;
           //console.log("Work Session #: " + $scope.num_workSessions);

          if(!$scope.onBreak) {
            $scope.num_workSessions++;
            $scope.onBreak = true;
            console.log("start work!")

              if($scope.num_workSessions % 4 == 0) {
                $scope.breakSession = 3; //1800
                $scope.timerRunning = false;
              } else {
                $scope.count = 2;
                $scope.timerRunning = false;
              }
          }

        $scope.onBreak = false;
        $scope.count = 5;

      }
    }, 1000);


		$scope.reset = function() {
			 $interval.cancel(startWork);
			 $scope.count = 5;
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

   //  $scope.take_break = function() {
   //     $scope.onBreak = true;
   //     startBreak = $interval(function() {
   //       if($scope.breakSession <= 0) {
  	// 		     $interval.cancel(startBreak);
   //           console.log("cancel break start");
   //           return;
   //         }
   //  		 else if($scope.num_workSessions % 4 == 0) {
   //         console.log("long break!")
   //         $scope.breakSession = 4;
   //         $scope.breakSession--;
   //       }
   //
   //         $scope.breakSession--;
   //         console.log("short break!")
   //  	 }, 1000);
   //   }
   // };

    // $scope.take_longBreak = function() {
    //     $scope.onBreak = true;
    //     $scope.breakSession = 3;
    //     start_longBreak = $interval(function() {
    //        if($scope.take_longBreak <= 0)
    //          $interval.cancel(start_longBreak);
    //        else if ($scope.num_workSessions % 4 == 0) {
    //          console.log("long break!")
    //          $scope.onWork = false;
    //          $scope.onBreak = true;
    //          $scope.breakSession--;
    //        }
    //       }, 1000);
    //   }
    //};

    // $scope.resetWork = function() {
    //   if (scope.count == 0 && scope.breakSession == 0) {
    //       $scope.onWork = true;
    //       $scope.start();
    //       $scope.count = 1500;
    //   }
    // }

    angular
        .module('blocTime')
        .controller('HomeCtrl', ['$scope', '$interval', HomeCtrl]);
})();
