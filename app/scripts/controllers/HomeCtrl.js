(function() {
    function HomeCtrl($scope, $interval, $filter) {

		//Initialize variables
		$scope.count = 5; //1500;
    $scope.breakSession = 4; //300//1800
    $scope.Timer = null;
    $scope.onBreak = false;
    $scope.onWork = true;
    $scope.num_workSessions = 0;


		$scope.start = function() {
      $scope.onWork = true;
      $scope.onBreak = false;
      $scope.num_workSessions += 1;
      startWork = $interval(function() {
        if($scope.count <= 0) {
  			     $interval.cancel(startWork);
             $scope.take_break();
             return;
  			}
          $scope.count--;
          console.log("start work!")

  	  }, 1000);
      console.log("Work Session #: " + $scope.num_workSessions);
    }

		$scope.stop = function() {
      $scope.onWork = false;
        if (angular.isDefined($scope.Timer)) {
            $interval.cancel(startWork);
            $scope.Timer = null;
          }
		};

		$scope.reset = function() {
       $scope.onWork = false;
			 $interval.cancel(startWork);
			 $scope.count = 3;
		}

    $scope.take_break = function() {
       $scope.onBreak = true;
       $scope.breakSession = 3;
       startBreak = $interval(function() {
         if($scope.breakSession <= 0) {
  			     $interval.cancel(startBreak);
             $scope.onBreak = false;
             $scope.onWork = true;
             console.log("cancel break start");
             return;
         } else if($scope.num_workSessions % 4 == 0) {
             console.log("long break!")
             $scope.breakSession = 4;
             $scope.onWork = false;
             $scope.onBreak = true;
             $scope.breakSession--;
             $scope.num_workSessions = 0;
         } else {
           console.log("short break!")
           $scope.breakSession--;
         }
    	 }, 1000);
     }
   };

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
