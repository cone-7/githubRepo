describe('connectGithub factory', function() {
        var connectGithub;
      
        // Before each test load our api.users module
        beforeEach(angular.mock.module('repoGitService'));
      
        // Before each test set our injected Users factory (_Users_) to our local Users variable
        beforeEach(inject(function(_connectGithub_) {
          connectGithub = _connectGithub_;
        }));
      
        // A simple test to verify the Users factory exists
        it('should exist', function() {
          expect(connectGithub).toBeDefined();
        });

        it('get the repos', function(){
          connectGithub.getRepos('sistema-liga').then(function(res){
            expect(res.data.total_count).toEqual(26);
          })
        })
});