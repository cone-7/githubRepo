export default angular.module('repoGitService', []).
    factory('connectGithub', function($http){
        return {
            getRepos: function(name) {
                return $http.get('https://api.github.com/search/repositories?q='+name);
            },
            getComments: function(url){
                return $http.get(url.split('{')[0]);
            }
        };
    });