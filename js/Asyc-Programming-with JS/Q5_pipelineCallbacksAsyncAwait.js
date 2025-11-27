/*
Q5 – Frontend Rush: Avoiding Callback Hell
Part A: Nested callbacks (callback hell)
Part B: Rewritten with async/await for readability
*/

// Helper to simulate a stage with 1s delay
function stage(name, cb) {
  setTimeout(() => {
    console.log('Stage:', name);
    cb && cb();
  }, 1000);
}

// Callback hell version
function pipelineWithCallbacks() {
  stage('design', () => {
    stage('build', () => {
      stage('test', () => {
        stage('deploy', () => {
          stage('celebrate', () => {
            console.log('Pipeline complete (callbacks)');
          });
        });
      });
    });
  });
}

// Async/await version - each stage returns a Promise
function stagePromise(name) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Stage:', name);
      resolve(name);
    }, 1000);
  });
}

async function pipelineWithAsyncAwait() {
  try {
    await stagePromise('design');
    await stagePromise('build');
    await stagePromise('test');
    await stagePromise('deploy');
    await stagePromise('celebrate');
    console.log('Pipeline complete (async/await)');
  } catch (err) {
    console.error('Pipeline error:', err);
  }
}

/*
Why async/await improves readability:
- Avoids deep nesting of callbacks.
- Allows writing asynchronous steps in a linear, top-to-bottom style.
- Easier to add try/catch for centralized error handling.
*/

// Run both to demonstrate (callbacks first, then async/await after a pause)
pipelineWithCallbacks();
setTimeout(() => pipelineWithAsyncAwait(), 7000); // wait so logs don't interleave too much

if (typeof module !== 'undefined') module.exports = { pipelineWithCallbacks, pipelineWithAsyncAwait };
