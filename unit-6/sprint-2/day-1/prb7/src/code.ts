import { IPerson } from "./interface";

// This is the class that should use the interface
class Person implements IPerson {
    first_name: string;
    last_name: string;
    email: string;
    phone: number;

    constructor(first_name: string, last_name: string, email: string, phone: number) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
    }

    PrintFullName(): string {
        return this.first_name + ' ' + this.last_name;
    }
}

export default Person;