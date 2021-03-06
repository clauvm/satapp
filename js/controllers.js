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
      $scope.movimiento;
      $scope.humedad;
      var repo = Reportes.get({reporteID : $stateParams.reporteID});

       $scope.reporte=Reportes.get({reporteID : $stateParams.reporteID});
       if(repo.humedad>=0&&repo.humedad<=341){
        $scope.humedad='alta';
    }
    else if(repo.humedad>=342&&repo.humedad<=683){
        $scope.humedad='normal';
    }
    else{
        $scope.humedad='baja';
    }
    if(repo.movi>=126&&repo.movi<=300)
    {
        $scope.movimiento='bajo';
    }
    else if(repo.movi>=301&&repo.movi<=800){
        $scope.movimiento='medio';
    }
    else{
        $scope.movimiento='alto';
    }
  }; 
   
   $scope.ultimaSemana = function (date) {
     var fecha = moment(date); 
     var fecha1 = moment(fecha).format('YYYY-MM-DD');
     var fecha2 = moment().format('YYYY-MM-DD');
     var fecha3 = moment(fecha2).subtract(7, 'days');
    return moment(fecha).isBetween(fecha3, fecha2);
};

$scope.enero = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-01-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

$scope.febrero = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-02-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

$scope.marzo = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-03-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

$scope.abril = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-04-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

$scope.mayo = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-05-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

$scope.junio = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-06-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

$scope.julio = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-07-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

$scope.agosto = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-08-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

$scope.septiembre = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-09-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

$scope.octubre = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-10-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

$scope.noviembre = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-11-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

$scope.diciembre = function (date) {
     var fecha = moment(date); 
     var fecha1=moment(fecha).format('MM');
     var fecha2=moment('2016-12-01');
     var fecha3=moment(fecha2).format('MM');
    return moment(fecha1).isSame(fecha3);
};

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

.controller('graficaHumCtrl', function ($scope) {
var pubnub = PUBNUB.init({
  publish_key: 'pub-c-0bc83ee5-cdfd-4615-964f-0fa183fe86a9',
  subscribe_key: 'sub-c-981320b8-08cc-11e6-8c3e-0619f8945a4f'
});
var channel = 'humi';
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
          text: 'Humedad',
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
      humedad: m.humedad
    }}
  }
});

})

.controller('mineriaCtrl', function ($scope, $http) {
   $scope.resultado = "esperando...";
   $scope.prueba="";
   console.log($scope.prueba);
   $scope.valorSuelo = function (data) {
     $http(
     {
      url: 'http://satdeslizamientos-cavm.rhcloud.com/mineriaDatos',
      method: 'POST',
      data: {
        suelo: data
      }
     }).
     then(function (response) {
       $scope.resultado=response.data;
       console.log(response.data);
     }, 
     function (response) {
       console.log('fallo');
     });
   };
   $scope.suelos=["grava", "arcilla", "compacto"]; 
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
