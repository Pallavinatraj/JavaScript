//
let employee = ["Sam", "John", "Mark", "Peter", "Simon"]
let department = ["Sales", "Marketting", "Operation", "Finance", "Tech"]
let salary = [40000, 60000, 50000, 60000, 70000]
data =[];
for(let i=0 ; i<employee.length; i++ ){
    let obj ={
        name : employee[i],
        department:department[i],
        salary:salary[i]
    };
    data.push(obj);
   
}
console.log(data);
for(let j=0; j<data.length;j++){
    console.log(data[j].name);
}
let simon = data.find(emp => emp.name === "Simon");
console.log(simon);
