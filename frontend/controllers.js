var snailBucketApp = angular.module('snailBucketApp', ['ui.router']);

snailBucketApp.config(function($stateProvider, $urlRouterProvider) {
  // Default.
  $urlRouterProvider.otherwise('/main');

  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'main.html'
    })
    .state('howtojoin', {
      url: '/howtojoin',
      templateUrl: 'howtojoin.html'
    })
    .state('archive', {
      url: '/archive',
      templateUrl: 'archive.html'
    })
    .state('standings', {
      url: '/:tournId/standings',
      templateUrl: 'standings.html',
      controller: function($scope, $stateParams) {
        $scope.currTournId = $stateParams.tournId;
      }
    })
    .state('pairings', {
      url: '/:tournId/pairings/:round',
      templateUrl: 'pairings.html',
      controller: function($scope, $stateParams) {
        $scope.currTournId = $stateParams.tournId;
        $scope.currRound = $stateParams.round;
      }
    })
    ;
});

snailBucketApp.filter('toFlag', function() {
  return function(val) {
    country = val
    if (val.search('fl:') == 0) {
      country = val.substring(3);
    }
    return 'images/flags/' + country + '.png';
  }
});

snailBucketApp.controller('TournamentsCtrl', function ($scope) {
  // Replace with reading from the backend.
  $scope.tournaments = [
    {
      'id': 3,
      'name': 'Snail Bucket Monthly 2015',
      'rounds': ['1']
    },
    {
      'id': 4,
      'name': 'Snail Bucket 4',
      'rounds': []
    },
  ];

  // Replace with reading from the backend.
  $scope.standings = [
    {
      'tournId': 3,
      'name': 'Snail Bucket Monthly 2015',
      'headers': [
        {'text': 'No', 'width': '30px'},
        {'text': 'Ctr', 'width': '20px'},
        {'text': 'Name', 'width': '250px'},
        {'text': 'Pts', 'width': '40px'},
        {'text': 'Buch', 'width': '40px'},
        {'text': 'Gams', 'width': '40px'}
      ],
      'buckets':
      [{
        'name': 'Havana',
        'rows': 
        [
          ['1', 'fl:--', 'yoyoman', '2.0', '1.0', '2'],
          ['2', 'fl:us', 'PeterSanderson', '2.0', '1.0', '2'],
          ['3', 'fl:gb', 'oakwell', '2.0', '0.5', '2'],
          ['4', 'fl:pl', 'PankracyRozumek', '0.5', '0.5', '1']
        ]
      },
      {
        'name': 'Reykjavik',
        'rows': 
        [
          ['1', 'fl:us', 'RoyRogersC', '2.0', '1.0', '2'],
          ['2', 'fl:by', 'crem', '2.0', '1.0', '2'],
          ['3', 'fl:de', 'ciedan', '2.0', '0.5', '2'],
          ['4', 'fl:ca', 'Nitreb', '0.5', '0.5', '1']
        ]
      }]
    },
    {
      'tournId': 4,
      'name': 'Snail Bucket 4',
      'headers': [
        {'text': 'No', 'width': '30px'},
        {'text': 'Ctr', 'width': '20px'},
        {'text': 'Name', 'width': '250px'},
        {'text': 'Pts', 'width': '40px'},
        {'text': 'Wins', 'width': '40px'},
        {'text': 'Whit', 'width': '40px'},
        {'text': 'Gams', 'width': '40px'}
      ],
      'buckets':
      [{
        'name': 'Alekhine',
        'rows': 
        [
          ['1', 'fl:--', 'yoyoman', '2.0', '2', '0', '2'],
          ['2', 'fl:us', 'PeterSanderson', '2.0', '2', '1', '2'],
          ['3', 'fl:gb', 'oakwell', '2.0', '2', '1', '2'],
          ['4', 'fl:pl', 'PankracyRozumek', '0.5', '0', '2', '1']
        ]
      },
      {
        'name': 'Botvinnik',
        'rows': 
        [
          ['1', 'fl:us', 'RoyRogersC', '2.0', '2', '1', '2'],
          ['2', 'fl:by', 'crem', '2.0', '2', '1', '2'],
          ['3', 'fl:de', 'ciedan', '2.0', '', '1', '2'],
          ['4', 'fl:ca', 'Nitreb', '0.5', '0', '1', '1']
        ]
      }]
    }
  ];

  // Replace with reading from the backend.
  $scope.pairings = [
    {
      'tournId' : 3,
      'name': 'Snail Bucket Monthly 2015',
      'round': 1,
      'buckets':
      [
      {
        'name': 'Havana',
        'games': [
          {
            'white': 'PankracyRozumek',
            'black': 'pchesso',
            'whCountry': 'pl',
            'blCountry': 'de',
            'result': '1/2-1/2',
            'date': '',
            'forum': ''
          },
          {
            'white': 'BethanyGrace',
            'black': 'Nitreb',
            'whCountry': 'us',
            'blCountry': 'ca',
            'result': '',
            'date': '2015-09-30 12:34',
            'forum': ''
          }
        ]
      },
      {
        'name': 'Reykjavik',
        'games': [
          {
            'white': 'crem',
            'black': 'nitedozer',
            'whCountry': 'by',
            'blCountry': 'us',
            'result': '',
            'date': '',
            'forum': ''
          },
          {
            'white': 'RoyRogersC',
            'black': 'marjohn',
            'whCountry': 'us',
            'blCountry': 'gr',
            'result': '+:-',
            'date': '',
            'forum': ''
          }
        ]
      }
      ]
    }
  ];
});

snailBucketApp.controller('NewsCtrl', function ($scope, $sce) {
  // Replace with reading from the backend.
  $scope.newsitems = [
    { 'date': 'Wed, 9th Sep 2015',
      'text': $sce.trustAsHtml('We have generated Round 2 pairings. We would like to thank you for your patience, and ask you to report any problems to us. The initial deadline will be 12th September.') },
    { 'date': 'Sat, 5th Sep 2015',
      'text': $sce.trustAsHtml('We have a major software problem and cannot currently create new pairings for the Monthly. The start of round 2 will be delayed by one week. We\'d like to apologize to all participants.')},
    { 'date': 'Mon, 3rd Aug 2015',
      'text': $sce.trustAsHtml('Round 1 pairings for the SB Monthly 2015 have been posted. We ask that you take a look at the <a href="/wiki/SBMonthlyTourneyGuide#Scheduling" title="SBMonthlyTourneyGuide">scheduling deadlines</a>, if you have not yet done so; they differ from both Teamleague and our regular SB tourneys. Sadly, a persistent bug keeps Game forum posts from being emailed to you. Please access your Game forum regularly, until we solve this annoying problem. <b>Update</b>: An encouraging number of users reports that email forwarding is now working.') },
    { 'date': 'Tue, 28 Jul 2015',
      'text': $sce.trustAsHtml('<b>New members</b>: We have some problems with sending activation emails. If you join us, and don&#39;t get your activation email in 10 minutes, please email tds@snailbucket.org.') },
    { 'date': 'Wed, 15 Jul 2015',
      'text': $sce.trustAsHtml('We invite you to and look forward to the <font color="green"><b>SB Monthly 2015</b></font> very much, a 5-round tournament with one game per month! You may sign up until Jul 29th at 0300 GMT; the tournament is scheduled to begin on Aug 3rd. If you have created an account on our website already and your name <a class="externallink" href="http://snailbucket.org/members" rel="nofollow" title="http://snailbucket.org/members">is in this list</a>, simply log in and <a class="externallink" href="http://snailbucket.org/tourney/signup/monthly15" rel="nofollow" title="http://snailbucket.org/tourney/signup/monthly15">sign up</a> to the tourney. If you have not yet created an account, please do so first, following the instructions in the <a href="/wiki/SBMonthlyTourneyGuide" title="SBMonthlyTourneyGuide">Tourney Guide</a>.') }
  ];
});

