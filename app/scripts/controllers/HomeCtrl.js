(function() {
    function HomeCtrl($scope, $interval, $filter) {

		//Initialize variables
		$scope.count = 1500;
    $scope.timerRunning = false;
    $scope.Timer = null;



		//Start button
		$scope.start = function() {
      $scope.timerRunning = true;
       $scope.Timer = $interval(function() {
        if($scope.count == 0) {
  			     $interval.cancel();
             return;
  			}

  				$scope.count--;
  			}, 1000);
  	  };



		$scope.stop = function() {
        $scope.timerRunning = false;
        if (angular.isDefined($scope.Timer)) {
              $interval.cancel($scope.Timer);
              $scope.Timer = null;
            }
		};


		$scope.reset = function() {
      $scope.timerRunning = false;
			$interval.cancel();
			$scope.count = 1500;
		}
  }



    angular
        .module('blocTime')
        .controller('HomeCtrl', ['$scope', '$interval', HomeCtrl]);
})();
