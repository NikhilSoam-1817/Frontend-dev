/*
Q10 – The Final Delivery: Async Pipeline Debugger
- Steps: takeOrder → prepare → pack → dispatch → deliver
- Each returns a Promise with random 1–2s delay and success/failure
- runPipeline() uses async/await and try/catch
*/

function randomDelay() {
  return 1000 + Math.random() * 1000; // 1-2s
}

function stepFactory(stepName) {
  return function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.15) return reject(new Error(stepName + ' failed'));
        console.log('Step:', stepName);
        resolve(stepName + ' done');
      }, randomDelay());
    });
  };
}

const takeOrder = stepFactory('Order taken');
const prepare = stepFactory('Food prepared');
const pack = stepFactory('Package ready');
const dispatch = stepFactory('Out for delivery');
const deliver = stepFactory('Delivery completed');

async function runPipeline() {
  console.log('Start Pipeline');
  try {
    await takeOrder();   // Step 1
    await prepare();     // Step 2
    await pack();        // Step 3
    await dispatch();    // Step 4
    await deliver();     // Delivery completed
    console.log('Delivery completed!');
  } catch (err) {
    console.error('Pipeline failed!', err.message);
  }
}

runPipeline();

if (typeof module !== 'undefined') module.exports = { runPipeline };
