/**
 * Represents vehicle module
 * Help display vehicle data
 * @author: felixgondwe
 */
(function(){
    'use strict';
    angular.module('fella').controller('VehicleCtrl',VehicleCtrl);

    function VehicleCtrl($scope,vehicleServices){
         $scope.sum = 2 + 2;
        $scope.cars = [];
        $scope.text ="";
        vehicleServices.getAllCars().then(function(response){
                $scope.text = response.data[0];
                $scope.cars = response.data;
              /*  _.forEach(response.data, function(o){
                    console.log(o[0]);
                });*/
               
        },function(response){

        });
       
        

    }


})();