//https://students.masaischool.com/assignments/10651?tab=assignmentDetails



//If the number is divisible by 3, print a "multiple of 3"
let number = 21;
if(number/3==0){
    console.log('multiple of 3');
}


//If a person is allowed to drive in India print "Apply for a license" or "NA".
let age = 21;
if(age>=18){
    console.log('A person is allowed to drive in INDIA');
}
else{
    console.log('NA');
}


//Given 2 numbers a and b print which is greater or "both equal".
let a = 12;
let b = 4;
if(a>b){
    console.log('a is greater than b');
}
else if(b>a){
    console.log('b is greater than a');
}
else if(a==b){
    console.log('both are equal');
}


//Given stored username and password and input username and password, Print if the user can login or not
let username = 'Pallavi_natraj';
let password = 'Pallavi6789';
let inputuser = prompt('Enter User Name:' );
let Userpassword = prompt('Enter Password:');
if (username==inputuser){
    if(password==Userpassword){
        console.log('Login Successfully ');
    }
    else{
        console.log('Password invalid');
    }}
 else{
    console.log('Invalid Username!');
}





