angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('usersCtrl', function($scope, $stateParams, Users) {

    $scope.find=function () {
       $scope.users=Users.query();
    };

    $scope.findOne=function () {
       $scope.user=Users.get({userID : $stateParams.userID});
    };
})

.controller('ReportesCtrl', function($scope, $stateParams, Reportes) {
  $scope.find=function () {
       $scope.reportes=Reportes.query();
    };

    $scope.findOne=function () {
       $scope.reporte=Reportes.get({reporteID : $stateParams.reporteID});
  }; 
   
   $scope.ultimaSemana = function (date) {
     var fecha = moment(date); 
     var fecha1 = moment(fecha).format('YYYY-MM-DD');
     var fecha2 = moment().format('YYYY-MM-DD');
     var fecha3 = moment(fecha2).subtract(7, 'days');
    return moment(fecha).isBetween(fecha3, fecha2);
}
})

.controller('graficaCtrl', function ($scope) {
   var pubnub = PUBNUB.init({
    publish_key: 'pub-c-0bc83ee5-cdfd-4615-964f-0fa183fe86a9',
    subscribe_key: 'sub-c-981320b8-08cc-11e6-8c3e-0619f8945a4f'
    });
   var channel = 'imu-mpu6050';
    eon.chart({
    channel: channel,
    generate: {
    bindto: '#temp',
    data: {
      type: 'line',
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%H:%m:%S',
          fit: true
        },
        label: {
          text: 'Time',
        }
      },
      y: {
        label: {
          text: 'IMU',
          position: 'outer-middle'
        },
        tick: {
          format: function (d) {
            var df = Number( d3.format('.2f')(d) );
            return df;
          }
        }
      }
  }
},
//history:true,
pubnub: pubnub,
limit: 30,
transform: function(m) {
  return { eon: {
      accelx: m.accelx,
      accely: m.accely,
      accelz: m.accelz, 
        gyrox: m.gyrox,
        gyroy: m.gyroy,
        gyroz: m.gyroz
    }}
  }
});

})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
