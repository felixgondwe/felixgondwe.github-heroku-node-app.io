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
        
        $scope.text ="";
        vehicleServices.getAllCars().then(function(response){
               // $scope.text = response.data[0];
              $scope.cars = [];
            //  console.log(arr[0].name);
               _.forEach(response.data.makes, function(o){
                   console.log(o);
                    $scope.cars.push(o);
                  
                   
                });
                  console.log($scope.cars);
               
        },function(response){

        });
       
        

    }


})();