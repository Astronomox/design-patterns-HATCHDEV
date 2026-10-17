"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Truck {
    deliver(cargo) {
        console.log(`Delivering ${cargo} by road`);
    }
    costPerKm() {
        return 2;
    }
}
class Ship {
    deliver(cargo) {
        console.log(`Delivering ${cargo} by sea`);
    }
    costPerKm() {
        return 1;
    }
}
class Logistics {
    planDelivery(cargo) {
        console.log(`Planning delivery of ${cargo}...`);
        const transport = this.createTransport();
        transport.deliver(cargo);
        console.log("Delivery logged.\n");
    }
    estimateCost(km) {
        const transport = this.createTransport();
        return km * transport.costPerKm();
    }
}
class RoadLogistics extends Logistics {
    createTransport() {
        return new Truck();
    }
}
class SeaLogistics extends Logistics {
    createTransport() {
        return new Ship();
    }
}
const road = new RoadLogistics();
road.planDelivery("cement");
console.log(`Road cost for 100km: ${road.estimateCost(100)}\n`);
const sea = new SeaLogistics();
sea.planDelivery("containers");
console.log(`Sea cost for 100km: ${sea.estimateCost(100)}`);
//# sourceMappingURL=logistics.js.map