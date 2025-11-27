/*
Q1 – The Startup Morning: Async Coffee Maker
- Each step returns a Promise that resolves after 1–2 seconds.
- Uses Promise chaining (.then()).
- Random failure simulated with Math.random().
*/

function delay(ms) { return new Promise(res => setTimeout(res, ms)); }

function boilWater() {
  return new Promise(async (resolve, reject) => {
    await delay(1000 + Math.random() * 1000);
    if (Math.random() < 0.15) return reject(new Error('Boiler malfunction'));
    console.log('Step: Water boiled');
    resolve('Boiled water');
  });
}

function brewCoffee() {
  return new Promise(async (resolve, reject) => {
    await delay(1000 + Math.random() * 1000);
    if (Math.random() < 0.15) return reject(new Error('Coffee grounds ran out'));
    console.log('Step: Coffee brewed');
    resolve('Brewed coffee');
  });
}

function pourIntoCup() {
  return new Promise(async (resolve, reject) => {
    await delay(1000 + Math.random() * 1000);
    if (Math.random() < 0.1) return reject(new Error('Cup broke'));
    console.log('Step: Poured into cup');
    resolve('Coffee in cup');
  });
}

// Promise chaining
boilWater()
  .then(() => brewCoffee())
  .then(() => pourIntoCup())
  .then(() => {
    console.log('Coffee ready for the team!');
  })
  .catch(err => {
    console.error('Coffee process failed:', err.message);
  });

// Export for testing
if (typeof module !== 'undefined') module.exports = { boilWater, brewCoffee, pourIntoCup };
