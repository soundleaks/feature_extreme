'use strict';

angular.module('featureEctreme')
  .controller('MainCtrl', function ($scope, $http) {

    var getSongListImg = function(songList){
      return songList[0].picture;
    }

    $http.get('assets/songs.json').
    success(function(data, status, headers, config) {
      $scope.songLists = data;
      fillAllListImg();
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      alert("加载出错啦")
    });

    var fillAllListImg = function() {
      angular.forEach($scope.songLists, function(songlist){
        songlist.img = getSongListImg(songlist.songs);
        console.log(songlist.img)
      })
    }

  });
