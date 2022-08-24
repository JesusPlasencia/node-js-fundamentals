#!USING NODEMON (DEMON RUNNNIG YOUR CODE AFTER EVERY CHANGE)
let nombre = process.env.NOMBRE || 'Mr. Blue Sky';
let web = process.env.WEB || 'www.mrbluesky.com';
console.log('Hello:', nombre);
console.log('My web page:', web);

console.log('Other stuff');