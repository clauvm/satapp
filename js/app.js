// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngResource', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

   .state('tab.users', {
    url: '/users',
    views: {
      'tab-users': {
        templateUrl: 'templates/users.html',
        controller: 'usersCtrl'
      }
    }
  })

    .state('tab.userDetail', {
    url: '/users/:userID',
    views: {
      'tab-users': {
        templateUrl: 'templates/usersDetail.html',
        controller: 'usersCtrl'
      }
    }
  })

    .state('tab.reportes', {
    url: '/reportes',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/reportes.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.listaTodos', {
    url: '/listaTodos',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/listaTodos.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.ultimaSemana', {
    url: '/ultimaSemana',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/ultimaSemana.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.enero', {
    url: '/enero',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/enero.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.febrero', {
    url: '/febrero',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/febrero.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.marzo', {
    url: '/marzo',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/marzo.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.abril', {
    url: '/abril',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/abril.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.mayo', {
    url: '/mayo',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/mayo.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.junio', {
    url: '/junio',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/junio.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.julio', {
    url: '/julio',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/julio.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.agosto', {
    url: '/agosto',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/agosto.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.septiembre', {
    url: '/septiembre',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/septiembre.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.octubre', {
    url: '/octubre',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/octubre.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.noviembre', {
    url: '/noviembre',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/noviembre.html',
        controller: 'ReportesCtrl'
      }
    }
  })

   .state('tab.diciembre', {
    url: '/diciembre',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/diciembre.html',
        controller: 'ReportesCtrl'
      }
    }
  })

    .state('tab.reporteDetail', {
    url: '/reportes/:reporteID',
    views: {
      'tab-reportes': {
        templateUrl: 'templates/reporteDetail.html',
        controller: 'ReportesCtrl'
      }
    }
  })
  .state('tab.grafica', {
      url: '/grafica',
      views: {
        'tab-grafica': {
          templateUrl: 'templates/grafica.html',
          controller: 'graficaCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
