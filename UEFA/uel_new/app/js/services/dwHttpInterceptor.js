'use strict';

angular.module('dw-ng-commons')
.factory('DwHttpInterceptor', [

        '$q', 'Loading', '$rootScope', '$timeout',
function($q,   Loading,   $rootScope,   $timeout)
{
    var pending = 0;
    var delay = 500;

    return {
        classify: function(name)
        {
            return {
                'has-error': validation[name] !== undefined
            }
        },
        messages: function(name)
        {
            return validation[name];
        },

        // On request success
        request: function(config)
        {
            pending++;
            $timeout(function()
            {
                if (pending > 0) {
                    Loading(true);
                }
            }, delay);

            // Return the config or wrap it in a promise if blank.
            return config || $q.when(config);
        },

        // On request failure
        requestError: function(rejection)
        {
            // console.log(rejection); // Contains the data about the error on the request.

            // Return the promise rejection.
            return $q.reject(rejection);
        },

        // On response success
        response: function(response)
        {
            if (--pending == 0) {
                Loading(false);
            }

            // Return the response or promise.
            return response || $q.when(response);
        },

        // On response failure
        responseError: function(rejection)
        {
            if (--pending == 0) {
                Loading(false);
            }

            var data = rejection.data;
            if (data.alert) {
                $rootScope.$emit('alert', data.alert);
            }
            else if (data.validation) {
                $rootScope.$emit('validation', data.validation);
            }
            else if (rejection.status == 404) {
                $rootScope.$emit('404', rejection.config.url);
            }
            else {
                $rootScope.$emit('alert', 'Something went wrong.');
            }

            return $q.reject(rejection);
        },

        setLoadingDelay: function(ms)
        {
            delay = parseInt(ms);
        }
    };
}]);
