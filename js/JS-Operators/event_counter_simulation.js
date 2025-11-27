let count = 0;

function increment() {
    function update() {
        count++;
        console.log("Count:", count);
    }
    update();
}

function decrement() {
    function update() {
        count--;
        console.log("Count:", count);
    }
    update();
}

// Simulated clicks
increment();
increment();
decrement();
