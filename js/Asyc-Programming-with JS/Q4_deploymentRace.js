/*
Q4 – DevOps Delay: Async Timeout Race
- Server A: 2s response
- Server B: 3s response
- Use Promise.all() and Promise.race()
- Random failure simulated.
*/

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server A failed'));
      resolve('Server A: deployment OK (2s)');
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server B failed'));
      resolve('Server B: deployment OK (3s)');
    }, 3000);
  });
}

// Promise.all - wait for all
Promise.all([serverA(), serverB()])
  .then(results => {
    console.log('Deployment completed for all servers');
    console.table(results);
  })
  .catch(err => {
    console.error('Deployment error (all):', err.message);
  });

// Promise.race - fastest response
Promise.race([serverA(), serverB()])
  .then(fastest => {
    console.log('Fastest response:', fastest);
  })
  .catch(err => {
    console.error('Deployment error (race):', err.message);
  });

if (typeof module !== 'undefined') module.exports = { serverA, serverB };
