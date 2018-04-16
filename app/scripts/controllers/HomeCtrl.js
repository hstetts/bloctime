(function() {
    function HomeCtrl($scope, $interval, $filter) {

		//Initialize variables
		$scope.count = 1500; //1500;
    $scope.breakSession = 300;
    $scope.Timer = null;
    $scope.onBreak = false;
    $scope.onWork = true;



		$scope.start = function() {
      $scope.onWork = true;
      $scope.onBreak = false;
      $scope.count = 1500;
      startWork = $interval(function() {
        if($scope.count <= 0) {
  			     $interval.cancel(startWork);
             $scope.onBreak = true;
             return;
  			}

  				$scope.count--;
  			}, 1000);
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
			 $scope.count = 1500;
		}

    $scope.takeBreak = function() {
       $scope.onBreak = true;
       $scope.breakSession = 300;
       startBreak = $interval(function() {
         if($scope.breakSession <= 0) {
  			     $interval.cancel(startBreak);
             $scope.onBreak = false;
             $scope.onWork = true;
             return;
    		 }
         else if($scope.count == 0) {
             $scope.onWork = false;
             $scope.onBreak = true;

      			 $scope.breakSession--;
         }
    	 }, 1000);
     }
  };

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
