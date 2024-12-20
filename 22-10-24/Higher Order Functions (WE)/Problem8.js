// You have an array of objects that stores firstName and lastName and place values of your friends as follows:

// let users = [
//   { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
//   { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
//   { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
// ];
// use filter along with map() method to iterate over the array and output the names who lives in Banglore Output should look like

// ["Nrupul Dev", "Prateek Shukla"]
let sampleInput = [
{ firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
{ firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
{ firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];
let sampleOutput = sampleInput.filter(function(el){
return el.place === "Banglore";
}).map(function(el){
    return el.firstName+el.lastName;
});
console.log(sampleOutput);