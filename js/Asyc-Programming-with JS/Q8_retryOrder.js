/*
Q8 – Order Processing Flow: Async Retry Mechanism
- submitOrder(): 50% chance to fail
- processOrder(): tries up to 3 times using await and loop
*/

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error('Network/Server error'));
      } else {
        resolve('Order submitted successfully');
      }
    }, 500 + Math.random() * 1000);
  });
}

async function processOrder(maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await submitOrder();
      console.log('Attempt', attempt + ': Success');
      return res;
    } catch (err) {
      console.log('Attempt', attempt + ': Failed');
      if (attempt === maxRetries) {
        throw new Error('Order could not be processed');
      }
      await new Promise(r => setTimeout(r, 500));
    }
  }
}

(async () => {
  try {
    await processOrder(3);
    console.log('Order processing finished successfully.');
  } catch (err) {
    console.error(err.message);
  }
})();

if (typeof module !== 'undefined') module.exports = { submitOrder, processOrder };
