
function wrapInArray<T>(item: T): T[] {
    return [item];
}

const stringBox = wrapInArray<string>("Hello TypeScript");
const numberBox = wrapInArray(42);
const booleanBox = wrapInArray(true);

console.log("String Array:", stringBox);
console.log("Number Array:", numberBox);
console.log("Boolean Array:", booleanBox);

interface Identifiable {
    id: number;
    name: string;
}

function printUserDetails<T extends Identifiable>(entity: T): void {
    console.log(`ID: ${entity.id}, Name: ${entity.name}`);
}

const regularUser = { id: 101, name: "Alice" };
const premiumUser = {
    id: 102,
    name: "Bob",
    tier: "Gold",
    status: "Active"
};

printUserDetails(regularUser);
printUserDetails(premiumUser);

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const car = {
    brand: "Toyota",
    year: 2024
};

console.log("Brand:", getProperty(car, "brand"));
console.log("Year:", getProperty(car, "year"));

// tsc.cmd generics.ts
// node generics.js

// Output:
// String Array: [ 'Hello TypeScript' ]
// Number Array: [ 42 ]
// Boolean Array: [ true ]
// ID: 101, Name: Alice
// ID: 102, Name: Bob
// Brand: Toyota
// Year: 2024
