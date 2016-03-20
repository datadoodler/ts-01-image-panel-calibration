angular.module('app')
    .directive('imagesListImage', function () {
        return {
            restrict: 'E',
            scope: {
                src: '@',
                clickimage: '&',
                updateslot: '&'
            },
            template: '<span class="image-in-container"> \n    <span>\n        <input type="radio" ng-model="slot" value="1">\n        <input type="radio" ng-model="slot" value="2">\n        <input type="radio" ng-model="slot" value="3">\n        <input type="radio" ng-model="slot" value="4">\n        <input type="radio" ng-model="slot" value="5">\n        <input type="radio" ng-model="slot" value="6">\n        <input type="radio" ng-model="slot" value="7">\n        <input type="radio" ng-model="slot" value="8">\n    </span>\n    <img src="{{src}}" ng-click="clickImage()"\n                                       title="{{src}}">\n<span>assigned to: </span>    \n</span>',

            controller: function ($scope) {

                $scope.clickImage = function () {
                    console.log("imageList directive clickImage", $scope)
                    $scope.clickimage({src: $scope.src});
                };

                $scope.$watch('slot', function (val) {
                    console.log("$watch value", val);
                    $scope.updateslot({slotId: val, src: $scope.src})
                })
            }
        }
    })