angular.module('starter.services', [])

.factory('Users', function($resource) {
    return $resource('http://satdeslizamientos-cavm.rhcloud.com/users/:userID', {
      userID:'@_id'
    }, {
      update:{
        method:'PUT'
      }
    })
  }).
  factory('Reportes', function($resource){
    return $resource('http://satdeslizamientos-cavm.rhcloud.com/reportes/:reporteID', {
       reporteID:'@_id'
    }, {
      update:{
        method: 'PUT'
      }
    })
  });

