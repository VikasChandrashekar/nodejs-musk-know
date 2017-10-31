var specialNumber = process.env.specialNumber;
console.log(typeof(specialNumber));
// -> "string"
console.log(typeof(parseInt(specialNumber, 10)));
// -> "number"