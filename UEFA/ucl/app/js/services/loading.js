'use strict';

angular.module('dw-ng-commons')
.factory('Loading', [

function()
{
    var loading = false;

    return function Loading(bool)
    {
        if (bool != undefined) {
            loading = bool;
        }
        return loading;
    }
}]);
