describe('dismissOnTimeout', function () {

  var scope, $compile, $interval;

  beforeEach(module('ui.bootstrap.alert'));
  beforeEach(module('template/alert/alert.html'));
  beforeEach(inject(function ($rootScope, _$compile_, _$interval_) {
    scope = $rootScope;
    $compile = _$compile_;
    $interval = _$interval_;
  }));

  it('should close automatically if auto-dismiss is defined on the element', function () {
    scope.removeAlert = jasmine.createSpy();
    $compile('<alert close="removeAlert()" dismiss-on-timeout="500">Default alert!</alert>')(scope);
    scope.$digest();

    $interval.flush(500);
    expect(scope.removeAlert).toHaveBeenCalled();
  });
});
