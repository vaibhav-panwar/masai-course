type vehicleTypeAlias = "Car" | "Bike" | "Bus";

export class Vehicle {
    vehicleType: vehicleTypeAlias;
    registrationNumber: number;
    color: string;
    constructor(vehicleType: vehicleTypeAlias, registrationNumber: number, color: string) {
        this.vehicleType = vehicleType;
        this.registrationNumber = registrationNumber;
        this.color = color;
    }
}

export class Bike extends Vehicle {
    constructor(registrationNumber: number, color: string) {
        super("Bike", registrationNumber, color)
    }
}
export class Bus extends Vehicle {
    constructor(registrationNumber: number, color: string) {
        super("Bus", registrationNumber, color)
    }
}
export class Car extends Vehicle {
    constructor(registrationNumber: number, color: string) {
        super("Car", registrationNumber, color)
    }
}

export class Slot {
    type: vehicleTypeAlias;
    isBooked: boolean;
    constructor(type: vehicleTypeAlias) {
        this.type = type;
        this.isBooked = false;
    }
}

export class ParkingSlot {
    maxLimit: number;
    parkingSpots: Slot[];

    constructor(maxLimit: number) {
        this.maxLimit = maxLimit;
        this.parkingSpots = [];
    }
    addSlots(Slot: Slot) {
        if (this.parkingSpots.length < this.maxLimit) {
            this.parkingSpots.push(Slot);
        }
        return this.parkingSpots.length;
    }

    availableSlot(vehicleType: vehicleTypeAlias) {
        let count = 0;
        for (const spot of this.parkingSpots) {
            if (spot.type === vehicleType && !spot.isBooked) {
                count++;
            }
        }
        return count;
    }

    bookSlot(vehicle: Car | Bike | Bus) {
        for (const spot of this.parkingSpots) {
            if (
                (vehicle instanceof Car && spot.type === "Car") ||
                (vehicle instanceof Bike && spot.type === "Bike") ||
                (vehicle instanceof Bus && spot.type === "Bus")
            ) {
                if (!spot.isBooked) {
                    spot.isBooked = true;
                    return true;
                }
            }
        }
        return false;
    }
}