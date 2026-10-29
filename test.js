import {getStudentsAPI, addStudentsAPI} from "./api.js";

//Test 1 - Display the initial populated database.
console.log("Test 1");
console.log(getStudentsAPI());

//Test 2 - Display the newly added student.
console.log(`
Test 2  `);
const newStudent = addStudentsAPI({
firstName : "Joseph",
lastName : "Albarina",
email : "joseph.albarina@awsys-i.com",
});
console.log(`Returned Saved Object : ` , newStudent);

//Test 3 - Display the updated database.
console.log(`
Test 3 `)
console.log(`Updated DB State : `, getStudentsAPI());









