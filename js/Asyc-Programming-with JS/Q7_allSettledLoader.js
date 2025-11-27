/*
Q7 – The Lazy Loader: Promise.allSettled()
- Load profile, posts, and messages at different speeds
- Randomly reject one promise
- Print which modules succeeded or failed and total time taken
*/

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) return reject(new Error('Profile failed to load'));
      resolve('Profile Loaded');
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) return reject(new Error('Posts failed to load'));
      resolve('Posts Loaded');
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) return reject(new Error('Messages failed to load'));
      resolve('Messages Loaded');
    }, 1000);
  });
}

async function runAllSettledDemo() {
  const start = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const end = Date.now();
  results.forEach((res, idx) => {
    const name = ['Profile','Posts','Messages'][idx];
    if (res.status === 'fulfilled') {
      console.log(name + ': Success ->', res.value);
    } else {
      console.log(name + ': Failed ->', res.reason.message);
    }
  });
  console.log('Total time (ms):', end - start);
}

runAllSettledDemo();

if (typeof module !== 'undefined') module.exports = { runAllSettledDemo };
