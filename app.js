import { getStudentsAPI, addStudentsAPI } from "./api.js";

// Local copy of the students currently shown on the page
let localStudent = [];

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

/**
 * Draws the students table.
 * Clears the old rows first, then builds one <tr> per student.
 * Shows a "No student records found." row when the array is empty.
 * @param {Array} dataArray - the list of student objects to display
 */
const renderTable = (dataArray) => {
  // Remove old rows so we don't append duplicates on every refresh
  studentTableBody.innerHTML = "";

  // Empty state
  if (!dataArray || dataArray.length === 0) {
    studentTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center;
         color: #666; font-style: italic; padding: 20px;">
          No student records found.
        </td>
      </tr>
    `;
    return;
  }

  // Build one row per student: #, first name, last name, email
  dataArray.forEach((student, index) => {
    const row = document.createElement("tr");

    const values = [
      index + 1,
      student.firstName,
      student.lastName,
      student.email,
    ];

    values.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value; // plain text, never parsed as HTML
      row.appendChild(cell);
    });

    studentTableBody.appendChild(row);
  });
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Handles the "Submit Record" button.
studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const studentData = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
  };

  if (!studentData.firstName || !studentData.lastName ||
     !studentData.email) {
    alert("Please fill out all input fields");
    return;
  }

  if (!emailPattern.test(studentData.email)) {
    alert("Please enter a valid email address (e.g. name@example.com)");
    return;
  }

  const savedStudent = addStudentsAPI(studentData);
  localStudent.push(savedStudent);
  renderTable(localStudent);
  studentForm.reset();
});

/**
 * Starts the app: loads the initial students 
 * from the API and displays them.
 * The spread ([...]) makes a copy, so localStudent
 * and the API's array stay separate.
 */
const initApp = () => {
  localStudent = [...getStudentsAPI()];
  renderTable(localStudent);
};

// Entry point: run once when the page loads
initApp();
