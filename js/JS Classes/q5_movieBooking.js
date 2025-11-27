function validateBookingForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const seats = document.getElementById('seats').value;
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatsRegex = /^[1-9]$|^10$/;
    if(!nameRegex.test(name)) return alert("Invalid Name");
    if(!emailRegex.test(email)) return alert("Invalid Email");
    if(!seatsRegex.test(seats)) return alert("Seats must be 1 to 10");
    const booking = { name, email, seats: Number(seats) };
    console.log("Ticket Booked:", booking);
}
document.getElementById('bookingForm').addEventListener('submit', validateBookingForm);