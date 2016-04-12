( function() {

  angular.module('ACBank')
    .run(run);

  run.$inject = [ '$ionicPlatform' ];

  function run ($ionicPlatform) {
    ionicSetup($ionicPlatform);
  }

  function ionicSetup ($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }

})();