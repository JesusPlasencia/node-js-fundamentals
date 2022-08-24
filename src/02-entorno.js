#!ENVIROMENT VARIABLES (UPPER CASE)
let nombre = process.env.NOMBRE || 'Mr. Blue Sky';
let web = process.env.WEB || 'www.mrbluesky.com';
console.log('Hello:', nombre);
console.log('My web page:', web);