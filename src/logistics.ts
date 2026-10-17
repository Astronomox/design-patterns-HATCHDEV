// Factory Method

interface Transport {
    deliver(cargo: string): void;
    costPerKm(): number;
}

class Truck implements Transport {
    deliver(cargo: string): void {
        console.log(`Delivering ${cargo} by road`);
    }

    costPerKm(): number {
        return 2;
    }
}

class Ship implements Transport {
    deliver(cargo: string): void {
        console.log(`Delivering ${cargo} by sea`);
    }

    costPerKm(): number {
        return 1;
    }
}

abstract class Logistics {
    abstract createTransport(): Transport;

    planDelivery(cargo: string): void {
        console.log(`Planning delivery of ${cargo}...`);
        const transport = this.createTransport();
        transport.deliver(cargo);
        console.log("Delivery logged.\n");
    }

    estimateCost(km: number): number {
        const transport = this.createTransport();
        return km * transport.costPerKm();
    }
}

class RoadLogistics extends Logistics {
    override createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    override createTransport(): Transport {
        return new Ship();
    }
}

const road = new RoadLogistics();
road.planDelivery("cement");
console.log(`Road cost for 100km: ${road.estimateCost(100)}\n`);

const sea = new SeaLogistics();
sea.planDelivery("containers");
console.log(`Sea cost for 100km: ${sea.estimateCost(100)}`);
