class Cart {
    constructor() { this.items = []; }
    addItem(name, price, quantity) { this.items.push({ name, price, quantity }); }
    getTotal() { return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0); }
    applyCoupon(coupon) {
        const couponRegex = /^(SAVE|DISC)(\d{2})$/;
        const match = coupon.match(couponRegex);
        if(match) return this.getTotal() * (1 - Number(match[2])/100);
        else { console.log("Invalid coupon"); return this.getTotal(); }
    }
}
const myCart = new Cart();
myCart.addItem("Laptop", 1500, 1);
myCart.addItem("Mouse", 50, 2);
console.log("Total:", myCart.getTotal());
console.log("Total after coupon SAVE10:", myCart.applyCoupon("SAVE10"));