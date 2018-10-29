import repoGit from './githubFuncs/githubForm.js';
import showRepoGit from './githubFuncs/gitHubRepos.js';
import './public/stylesheets/application.scss'

angular.module('mainGit', [repoGit.name, showRepoGit.name])

.controller('mainCtrl', function($scope){
    $scope.hello = "Search a repository";
    $scope.repos = [];
})