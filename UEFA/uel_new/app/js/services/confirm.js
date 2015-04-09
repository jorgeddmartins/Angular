'use strict';

angular.module('dw-ng-commons')
.factory('Confirm', [

        '$modal',
function($modal)
{
    return function(message, callback)
    {
        $modal.open({
            windowClass: 'dwalert confirm',
            templateUrl: 'views/confirm.html',
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

                $scope.yes = function() {
                    if ($scope.callback) {
                        $scope.callback();
                    }
                    $modalInstance.close();
                }

                $scope.no = function() {
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
    $templateCache.put('dwalert/confirm.html',
  '<div class="modal-header">'
    + '<button type="button" ng-click="no()" class="close">×</button>'
    + '<h3>{{title}}</h3>'
+ '</div>'
+ '<div class="modal-body">'
    + '<div class="confirm-message">{{message}}</div>'
+ '</div>'
+ '<div class="modal-footer">'
    + '<button type="button" class="btn btn-primary yes" ng-click="yes()">Yes</button>'
    + '<button type="button" class="btn btn-default no" ng-click="no()">No</button>'
+ '</div>'
    );
}]);
