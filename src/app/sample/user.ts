export class User {
    id!: number;
    name!: string;
    email!: string;
    username!: string;
    phone!: string;
    website!: string;
    address!: Address;
    company!: Company;
}

export class Address {
    street!: string;
    suite!: string;
    city!: string;
    zipcode!: string;
    geo!: Geo;
}

export class Company {
    name!: string;
    catchPhrase!: string;
    bs!: string;
}

export class Geo {
    lat!: string;
    lng!: string;
}