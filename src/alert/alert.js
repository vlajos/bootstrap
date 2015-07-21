angular.module('ui.bootstrap.alert', [])

.controller('AlertController', ['$scope', '$attrs', function ($scope, $attrs) {
  $scope.closeable = !!$attrs.close;
  this.close = $scope.close;
}])

.directive('alert', function () {
  return {
    restrict:'EA',
    controller:'AlertController',
    templateUrl:'template/alert/alert.html',
    transclude:true,
    replace:true,
    scope: {
      type: '@',
      close: '&'
    }
  };
})

.directive('dismissOnTimeout', ['$interval', function($interval) {
  return {
    require: 'alert',
    link: function(scope, element, attrs, alertCtrl) {
      $interval(alertCtrl.close, parseInt(attrs.dismissOnTimeout, 10), 1);
    }
  };
}]);
