"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Notification {
    send(message) {
        console.log(`Sending: ${message}`);
    }
    describe() {
        return "A generic notification";
    }
}
class EmailNotification extends Notification {
    describe() {
        return "An email notification";
    }
}
const email = new EmailNotification();
email.send("Class starts at 10am");
console.log(email.describe());
//# sourceMappingURL=examples.js.map