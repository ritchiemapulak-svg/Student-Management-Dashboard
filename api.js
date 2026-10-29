/**
 * api.js: mock backend for the Student Management Dashboard.
 * Simulates a server and database using an in-memory array.
 */

/**
 * Simulates a GET request.
 * @returns {Array} the current list of students
 */
export function getStudentsAPI(){ 
    return mockStudentDb;
}

/**
 * Simulates a POST request.
 * Adds a unique id to the student data, saves it, 
 * and returns the saved student.
 * @param {Object} newStudentData - { firstName, lastName, email }
 * @returns {Object} the saved student, including its generated id
 */
export function addStudentsAPI(newStudentData){
    const savedStudent = {
        id: Date.now(),
        ...newStudentData
    };
    mockStudentDb.push(savedStudent);
    return savedStudent;
}

// The mock database, pre-populated with 2 students
const mockStudentDb = [
    // {
    //     id: Date.now() + 1,
    //     firstName : "Ritchie",
    //     lastName : "Mapulak",
    //     email : "ritchie.mapulak@awsys-i.com"
    // } , 

    // {
    //     id: Date.now() + 2,
    //     firstName : "Rosalie",
    //     lastName : "Carcueva",
    //     email : "rosalie.carcueva@awsys-i.com"
    // }
    ];










