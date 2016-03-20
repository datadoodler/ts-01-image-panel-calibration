angular.module('app')
    .directive('target', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                position: '@',
                clicktarget: '&',
                selectedimage:'='
            },
            template: '<div ng-class="[\'image-order-camera\',position]" ng-click="clickTargetNoImage()" >\n    <img class="targetImage" ng-click="clickMe()" src="{{href}}" alt=""></div>',
            controller: function ($scope) {

                $scope.clickTargetNoImage = function () {
                    console.log('target directive', $scope.position);
                    $scope.href = $scope.selectedimage.href;
                    console.log('just set href to',$scope.href)
                    $scope.clicktarget({position: $scope.position});
                    angular.copy($scope.selectedImage,$scope.href);
                }
            }


        }
    })
