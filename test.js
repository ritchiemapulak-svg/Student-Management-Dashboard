import {getStudentsAPI, addStudentsAPI} from "./api.js";

// Test 1: display the initial populated database
console.log("Test 1");
console.log(getStudentsAPI());

// Test 2: create a new student and 
// display the saved object returned by the API
console.log(`
Test 2  `);
const newStudent = addStudentsAPI({
firstName : "Joseph",
lastName : "Albarina",
email : "joseph.albarina@awsys-i.com",
});
console.log(`Returned Saved Object : ` , newStudent);

// Test 3: display the updated database 
// (should now include the new student)
console.log(`
Test 3 `)
console.log(`Updated DB State : `, getStudentsAPI());









