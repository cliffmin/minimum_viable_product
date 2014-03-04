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
            },
            {
                "title": 'Feel Good Fridays: Weekly guided meditation for stress relief',
                "description": 'Need a break? Want to unwind before the weekend? This drop-in group is an opportunity to be led through a powerful guided meditation to undo your stress, soothe your nervous system, and feel good. Please arrive on time so the meditation is not disturbed. There will be no late admittance.',
                "start": '03/07/2014 12:10',
                "end": '03/07/2014 12:40',
                "location": '2249 Willard Loop Drive, CO 80305',
                "location-name": 'C4C, JD Abrams Lounge (3rd Floor)'
            },
            {
                "title": 'Extreme Bowling Fridays',
                "description": 'Enjoy the energy of bowling with black lights, colored lane lights and colored pins. It\'s the ONLY Extreme Bowling in Boulder -- and fun for all! Every Friday and Saturday night from 7pm-close at the Connection Bowling, Billiards & Games. Prizes for Color Head Pin Strikes!! Note: must tell the Connection Staff before bowling.',
                "start": '03/07/2014 19:00',
                "end": '03/07/2014 24:00',
                "location": '1669 Euclid Ave Boulder, CO',
                "location-name": 'UMC Connection'
            }
        ];
//        $scope.groups = [
//            {
//                title: "Dynamic Group Header - 1",
//                content: "Dynamic Group Body - 1"
//            },
//            {
//                title: "Dynamic Group Header - 2",
//                content: "Dynamic Group Body - 2"
//            }
//        ];
//
//        $scope.items = ['Item 1', 'Item 2', 'Item 3'];
//
//        $scope.addItem = function () {
//            var newItemNo = $scope.items.length + 1;
//            $scope.items.push('Item ' + newItemNo);
//        };
    });
