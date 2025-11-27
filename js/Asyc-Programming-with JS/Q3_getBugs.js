/*
Q3 – Bug Tracker: Callback to Promise Migration
Converts the callback-based fetchBugs() into getBugs() returning a Promise.
Randomly simulates failure.
*/

function fetchBugs(callback) {
  setTimeout(() => callback(['UI glitch', 'API timeout', 'Login failure']), 1000);
}

// Promise version
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = Math.random() < 0.25; // 25% chance to fail
      if (isError) {
        reject(new Error('Failed to fetch bugs from server'));
      } else {
        resolve(['UI glitch', 'API timeout', 'Login failure']);
      }
    }, 1000);
  });
}

// Use the Promise-based function
getBugs()
  .then(bugs => {
    console.log('Bugs fetched:');
    console.table(bugs.map((b, i) => ({ id: i + 1, bug: b })));
  })
  .catch(err => {
    console.error('Error fetching bugs:', err.message);
  });

if (typeof module !== 'undefined') module.exports = { getBugs };
