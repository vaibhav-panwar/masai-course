interface AddressTypes {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonDetailsType {
    prefix?: string;
    phones: number[];
    addresses: AddressTypes[];
    email?: string;
    firstName:string;
    middleName?:string;
    lastName:string
}
const Data: any[] = [];
const PhoneBook = (PersonDetails: PersonDetailsType) => {
    Data.push(PersonDetails);
};
export { PhoneBook, Data }; // Make no changes here
