'use strict';

angular.module('dw-ng-commons')
.factory('Alert', [

        '$modal',
function($modal)
{
    return function(message, callback, title)
    {
        $modal.open({
            windowClass: 'dwalert alert',
            templateUrl: 'dwalert/alert.html',
            resolve: {
                title: function() { return title; },
                message: function() { return message; },
                callback: function() { return callback; }
            },
            controller: function($scope, $modalInstance, title, message, callback)
            {
                $scope.title = title ? title : 'Alert';
                $scope.message = message;
                $scope.callback = callback;

                $scope.ok = function() {
                    if ($scope.callback) {
                        $scope.callback();
                    }
                    $modalInstance.close();
                }
            }
        });
    };
}])

.run([
        '$templateCache',
function($templateCache)
{
    $templateCache.put('dwalert/alert.html',
  '<div class="modal-header">'
    + '<button type="button" ng-click="ok()" class="close">×</button>'
    + '<h3>{{title}}</h3>'
+ '</div>'
+ '<div class="modal-body">'
    + '<div class="confirm-message">{{message}}</div>'
+ '</div>'
+ '<div class="modal-footer">'
    + '<button type="button" class="btn btn-primary ok" ng-click="ok()">OK</button>'
+ '</div>'
    );
}]);
