angular
    .module('app', [])
    .controller('ctrl', function ($scope) {
        $scope.imageList = [
            {index: '0', href: './image0.jpg', description: 'Image at index 0'},
            {index: '1', href: './image1.jpg', description: 'Image at index 1'},
            {index: '2', href: './image2.jpg', description: 'Image at index 2'},
            {index: '3', href: './image3.jpg', description: 'Image at index 3'},
            {index: '4', href: './image4.jpg', description: 'Image at index 4'},
            {index: '5', href: './image5.jpg', description: 'Image at index 5'},
            {index: '6', href: './image6.jpg', description: 'Image at index 6'},
            {index: '7', href: './image7.jpg', description: 'Image at index 7'}]

        $scope.targets = [
            {id: 'front-left', imageIndex: '', href: ''},
            {id: 'front-middle', imageIndex: '', href: ''},
            {id: 'front-right', imageIndex: '', href: ''},
            {id: 'side-right', imageIndex: '', href: ''},
            {id: 'back-right', imageIndex: '', href: './image6.png'},
            {id: 'back-middle', imageIndex: '', href: ''},
            {id: 'back-left', imageIndex: '', href: ''},
            {id: 'side-left', imageIndex: '', href: ''}
        ];

        $scope.slots=[
            {slotId:"1",src:"none"}
        ]

        $scope.selectedImage = {href: 'none'};

        $scope.clickImageList = function (src) {
            if (src) {
                for (var i = 0; i < $scope.imageList.length; i++) {
                    if ($scope.imageList[i].href === src) {
                        $scope.selectedImage = $scope.imageList[i];
                        //angular.copy($scope.imageList[i], $scope.selectedImage)
                    }
                }
                console.log('src', src)
            }
        };
        $scope.updateSlot=function(slotId,src){
            for(var i = 0; i < $scope.slots.length; i ++){
                console.log('app.js updateSlot slotId, src',$scope.slots[i].slotId,slotId,src)
                if( $scope.slots[i].slotId==slotId){
                    $scope.slots[i].src=src;
                }
            }


        };

        $scope.clickTarget = function (position) {
            if (position) {
                console.log('clickTarget', position)
                $scope.selectedImage = {href: 'none'};
            }
        }
    })

