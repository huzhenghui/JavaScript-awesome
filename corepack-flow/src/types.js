// @flow

// https://flow.org/en/docs/types/

function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(123, 456));

function concat(a: string, b: string) {
    return a + b;
}
console.log(concat("Hello, ", "World!"));