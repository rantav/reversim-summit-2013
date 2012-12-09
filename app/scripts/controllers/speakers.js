'use strict';

app.controller('SpeakersCtrl', ['$scope',function($scope) {
  $scope.people = [
    {
      'name': 'Roee Adler',
      'css': 'roee',
      'bio': "Roee is the chief product officer of Soluto, a high-tech startup aimed at helping people get more from their technology. Roee started programming at the age of 11. He went on to lead a software group in an elite R&D unit in the Israeli Defense Forces, after which he worked as a device driver developer for Envara, acquired by Intel in 2004. Since then, Roee has managed product design and development in several industries, including: water technology (Miya), location-based services (AeroScout), and music (Neocraft, where Roee was co-founder)."
    },
    {
      'name': 'Yoav Abrahami',
      'css': 'yoav',
      'bio': "Working with developers and operations on building wix future products as well as accelerating and improving development processes, Yoav takes the role of Chief Architect. Prior to joining Wix.com, Yoav was an Architect at Amdocs Cramer OSS division. Yoav has a MS in Physics and BS in Computer Science from Tel Aviv University"
    }
  ];

}]);
