"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Restaurant {
    name;
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    acceptOrder() {
        console.log(`${this.name} accepted an order.`);
    }
}
class PizzaRestaurant extends Restaurant {
    bakePizza() {
        console.log(`${this.name} is baking a pizza!`);
    }
}
const restaurant1 = new Restaurant("KFC", "3 Akowonjo Rd");
const restaurant2 = new Restaurant("Chicken Republic", "5 Idimu Rd");
const pizza = new PizzaRestaurant("Domino Pizza", "10 Akowonjo Road");
console.log(pizza.acceptOrder());
function notifyCustomer(type, message) {
    let notification;
    if (type === "sms") {
        notification = new SMSNotification();
    }
    else {
        notification = new EmailNotification();
    }
    notification.send(message);
}
notifyCustomer("email", "Hey I am sending an Email");
class EmailNotification {
    send(message) {
        console.log(`Sening email: ${message}`);
    }
}
class SMSNotification {
    send(message) {
        console.log(`Sending SMS: ${message}`);
    }
}
class NotificationCreator {
    sendNotification(message) {
        const notification = this.createNotification();
        notification.send(message);
    }
}
class EmailNotificationCreator extends NotificationCreator {
    createNotification() {
        return new EmailNotification();
    }
}
class SMSNotificationCreator extends NotificationCreator {
    createNotification() {
        return new SMSNotification();
    }
}
console.log(this);
//# sourceMappingURL=index.js.map