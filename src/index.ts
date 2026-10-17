// // I might do something like this...
// // I define the interface of a notifcation

// interface Notification {
//     send(message: string): void
// }

// // So now i can implement the interface for different tyoes of notification classes
// // 1. Email Notification class
// class EmailNotification implements Notification {
//     send(message: string): void {
//         console.log(`Sending an email: ${message}`)
//     }
// }

// // 2. SMS Notification class
// class SMSNotification implements Notification {
//     send(message: string): void {
//         console.log(`Sending an sms: ${message}`)
//     }
// }

// // Then I will have to do

// const email = new EmailNotification()
// email.send("Your order has been shipped!")
// const sms = new SMSNotification()
// sms.send("Your order has been shipped!")

// // What if the application needs to decide the kind of notification to send, might write something like

// function notifyCustomer(
//     type: "email" | "sms",
//     message: string
// ): void {
//     let notification: Notification 

//     if(type == "email") {
//         notification = new EmailNotification()
//     } else {
//         notification = new SMSNotification()
//     }

//     notification.send(message)
// }

// notifyCustomer("email", "Your order has been shipped!")

// // But in Factory Method, we start by creating a "creator" which is a superclass and serves as the foundation for the different types of notification creators

// abstract class NotificationCreator {
//     abstract createNotification(): void // so only methods prefixed with abstract 
// }







class Restaurant {
    name: string;
    address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    acceptOrder(): void {
        console.log(`${this.name} accepted an order.`)
    }
}

class PizzaRestaurant extends Restaurant {
    
   bakePizza(): void {
        console.log(`${this.name} is baking a pizza!`)
   }
}

const restaurant1 = new Restaurant("KFC", "3 Akowonjo Rd");
const restaurant2 = new Restaurant("Chicken Republic", "5 Idimu Rd");
const pizza = new PizzaRestaurant("Domino Pizza", "10 Akowonjo Road");
console.log(pizza.acceptOrder())






// const email = new EmailNotification()
// console.log(email.send("I am sending an Email"))

// const sms = new SMSNotification()
// console.log(email.send("I am sending an SMS"))

function notifyCustomer(
    type: "sms" | "email",
    message: string
): void {
    let notification: Notification;

    if(type === "sms") {
        notification = new SMSNotification()
    } else {
        notification = new EmailNotification()
    }

    notification.send(message);
}

notifyCustomer("email", "Hey I am sending an Email")

interface Notification {
    send(message: string): void;
}

class EmailNotification implements Notification {
    send(message: string): void {
        console.log(`Sening email: ${message}`)
    }
}

class SMSNotification implements Notification {
    send(message: string): void {
        console.log(`Sending SMS: ${message}`)
    }
}


abstract class NotificationCreator {
    abstract createNotification(): Notification;

    sendNotification(message: string): void {
        const notification = this.createNotification()
        notification.send(message)
    }
}

class EmailNotificationCreator extends NotificationCreator {
    createNotification(): Notification {
        return new EmailNotification()
    }
}

class SMSNotificationCreator extends NotificationCreator {
    createNotification(): Notification {
        return new SMSNotification()
    }
}
console.log(this)
// Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.


