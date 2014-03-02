'use strict';

angular.module('minimumViableProductApp')
    .controller('MainCtrl', function ($scope) {
        $scope.events = [
            {
                "title": 'Fahrenheit 451 by Aquila Theatre',
                "description": 'Ray Bradbury\'s distrubingly prescient, dystopian, yet ultimately hopeful tale of censorship and the narcotic effects of media comes alive in this brilliant stage adaptation from New York\'s "classically trained, modernly hip" Aquila Theatre.',
                "start": '03/19/2014 19:30',
                "end": '03/19/2014 21:30',
                "location": '1595 Pleasant St Boulder, CO',
                "location-name": 'Main Campus - Macky Auditorium'
            }
        ];
        $scope.groups = [
            {
                title: "Dynamic Group Header - 1",
                content: "Dynamic Group Body - 1"
            },
            {
                title: "Dynamic Group Header - 2",
                content: "Dynamic Group Body - 2"
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function () {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };
    });
