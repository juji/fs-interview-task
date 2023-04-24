const concurrently = require('concurrently');

const { result } = concurrently([
  "cd api && yarn dev",
  "cd frontend && yarn dev"
], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
  restartTries: 3,
})

result.then(
    function onSuccess(exitInfo) {
      // This code is necessary to make sure the parent terminates 
      // when the application is closed successfully.
      process.exit();
    },
    function onFailure(exitInfo) {
      // This code is necessary to make sure the parent terminates 
      // when the application is closed because of a failure.
      process.exit();
    }
  );