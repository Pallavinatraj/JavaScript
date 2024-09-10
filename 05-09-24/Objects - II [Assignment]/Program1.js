 //Problem-1 User Age Filter**
//Given a list of user data with name and age, create a list of key-value pairs from the input
//From the generated data, print the users whose age is more than 30
//Sample Input
function userAgeFilter(name, age){
    let obj={};
    for(let i=0; i<name.length;i++){
        let names = name[i];
        obj[names] = age[i];
    }
    for(let key in obj){
        if(obj[key]>=30){
            console.log(key+'-'+obj[key]);
        }
    }
}
userAgeFilter(["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"],[32, 30, 26, 28, 44]);
