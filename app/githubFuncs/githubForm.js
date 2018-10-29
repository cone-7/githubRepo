import repoGitService from './gitHubService.js';

export default angular.module('repoGit', [repoGitService.name])
    .controller('githubCtrl', function($scope, connectGithub){
        $scope.titel = "Search";
		$scope.searchRepos = function(name){
            connectGithub.getRepos(name).then(function(res){ $scope.repos = res });
        }
    })
    .directive('searchRepos', function(){
		return {
			restrict: 'E',
			replace: true,
			scope: {
				repos: '='
			},
			templateUrl: './views/search.html',
			controller: 'githubCtrl'
		};
	})