/***
 * This serives handles vehicle api calls
 * @author: felixgondwe
 */
(function(){
    'use strict';
    angular.module('fella').service('vehicleServices',vehicleServices);

    function vehicleServices($http){
        /**
         * Gets all the cars from http://edmunds.mashery.com/
         * @param {none} 
         * @return {promise} 
         */
        this.getAllCars = function(){
            return $http.get('https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=2014&view=basic&fmt=json&api_key=yxfmfzrcg3nrvudv7hj2pbr2');
        };
    }

})();