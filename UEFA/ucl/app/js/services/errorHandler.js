'use strict';

angular.module('dw-ng-commons')
.factory('ErrorHandler', [

function()
{
    var validation = {};

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
        setValidationMessages: function(messages)
        {
            validation = messages;
        },
        clear: function()
        {
            validation = {};
        }
    };
}]);
