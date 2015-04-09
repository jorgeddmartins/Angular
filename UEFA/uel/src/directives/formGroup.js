'use strict';

angular.module('dw-ng-commons')
.directive('formGroup', [

function()
{
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            name: '@formGroup'
        },
        template: '<div class="form-group" ng-class="classes()">'
                    + '<div ng-transclude></div>'
                    + '<span class="help-block" ng-repeat="msg in messages()">{{msg}}</span>'
                + '</div>',
        controller: ['$scope', 'ErrorHandler', function($scope, ErrorHandler)
        {
            $scope.classes = function()
            {
                var names = $scope.name.split(',');
                var classes = {};
                for (var i in names) {
                    var res = ErrorHandler.classify(names[i]);
                    for (var x in res) {
                        if (res[x]) {
                            classes[x] = true;
                        }
                    }
                }

                return Object.keys(classes);
            }

            $scope.messages = function()
            {
                var names = $scope.name.split(',');
                var messages = [];
                for (var i in names) {
                    var msgs = ErrorHandler.messages(names[i]);
                    if (msgs) {
                        messages = messages.concat(msgs);
                    }
                }

                return messages;
            }
        }]
    }
}]);
