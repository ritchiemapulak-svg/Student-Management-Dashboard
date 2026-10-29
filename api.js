export function getStudentsAPI(){ 
    return mockStudentDb;
}

export function addStudentsAPI(newStudentData){
    const savedStudent = {
        id: Date.now(),
        ...newStudentData
    };
    mockStudentDb.push(savedStudent);
    return savedStudent;
}

const mockStudentDb = [
    {
        id: Date.now() + 1,
        firstName : "Ritchie",
        lastName : "Mapulak",
        email : "ritchie.mapulak@awsys-i.com"
    } , 

    {
        id: Date.now() + 2,
        firstName : "Rosalie",
        lastName : "Carcueva",
        email : "rosalie.carcueva@awsys-i.com"
    }];









