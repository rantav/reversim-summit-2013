'use strict';

reversimSummit2013App.controller('AboutCtrl', ['$scope',function($scope) {
  $scope.people = [
    {
      'name': 'Ran Tavory',
      'image': 'ran-tavory.png',
      'bio': "Ran is a full stack developer and The Voice™, at reversim. Ran's interests are in slick and responsive web interfaces, iOS, nosql, web infrastructure, scaling, deployment automation, continuous deployment, programming languages, open source enthusiast (a contributor and creator of several projects). Ran is a drummer with a small band, a husband and a father of two"
    },
    {
      'name': 'Ori Lahav',
      'image': 'ori-lahav.jpeg',
      'bio': "Ori Lahav is a Co-founder and CTO of outbrain and The Voice™ at reversim. Ori like paddling his kayak through rough seas and sail a yacht when storms are out.            "
    }
  ];
}]);
