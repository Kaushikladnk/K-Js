const kname ="kauhsik"
const repo = 20

//console.log(kname + repo); dont use this 

//console.log(`Hello my name is ${kname} and my repo count is ${repo}`);

const gameName = new String('Kauhsik lad sam')

//console.log(gameName[0]);
//console.log(gameName.__proto__); 

//console.log(gameName.length);

//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('k'));


const newString = gameName.substring(0,5)
//console.log(newString); 

const otherString = gameName.slice(-8,2) // nagative value use in slice only
//console.log(otherString);

const newStrinOne = "   kauhsik lad sam gamil "
//console.log(newStrinOne);
//console.log(newStrinOne.trim());  // remove white space from string 

const url = "https://kauhsik%20lad.com"

//console.log(url.replace('%20','-'));  // Replace value

//console.log(url.includes('primex'));

console.log(gameName.split('-'));