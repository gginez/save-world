(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(7200); }

        function getPeople() {
            var people = [
                { firstName: 'Bengi', lastName: 'Coder', tenure: 15, location: 'New Jersey' },
                { firstName: 'The', lastName: 'Ginez', tenure: 11, location: 'California' },
                { firstName: 'The', lastName: 'Hutch', tenure: 21, location: 'New York' },
                { firstName: 'Johnny', lastName: 'O', tenure: 8, location: 'Oregon' },
                { firstName: 'The', lastName: 'Tran', tenure: 10, location: 'Vietnam' },
                { firstName: 'Zara', lastName: 'Katze', tenure: 2, location: 'California' },
                { firstName: 'Doc', lastName: 'Wes', tenure: 5, location: 'Arizona' }
            ];
            return $q.when(people);
        }
    }
})();