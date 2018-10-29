import repoGitService from './gitHubService.js';

export default angular.module('showRepoGit', [repoGitService.name])
    .controller('showGithubCtrl', function($scope, connectGithub){
        $scope.getComments = function(repo){
            $scope.selectedRepo = repo;
            connectGithub.getComments(repo.comments_url).then(function(res){
                $scope.comments = $scope.sortByDate(res.data)
            });
        }

        $scope.sortByDate = function(obj){
            return obj.sort(function(ant, next){
                return new Date(next.created_at) - new Date(ant.created_at);
            })
        }
    })
    .directive('showRepos', function(){
		return {
			restrict: 'E',
			replace: true,
            templateUrl: './views/showRepos.html',
            scope: {
                repos: '='
            },
            controller: 'showGithubCtrl'
		};
	})