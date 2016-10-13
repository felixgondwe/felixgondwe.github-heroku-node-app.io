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

    }


})();