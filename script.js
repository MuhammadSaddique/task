let students = [];

function addStudent() {
    
    let name = document.getElementById("name").value;
    let mark = parseFloat(document.getElementById("mark").value);

    
    students.push({ name, mark });

    
    document.getElementById("name").value = "";
    document.getElementById("mark").value = "";


    displayResults();
}

function displayResults() {
    
    let maxMarkStudent = students.reduce((max, student) => (student.mark > max.mark ? student : max), students[0]);

    
    let minMarkStudent = students.reduce((min, student) => (student.mark < min.mark ? student : min), students[0]);


    let resultsElement = document.getElementById("results");
    resultsElement.innerHTML = `<h3>Student with Maximum Marks:</h3>
                                <p>Name: ${maxMarkStudent.name}</p>
                                <p>Marks: ${maxMarkStudent.mark}</p>
                                <h3>Student with Minimum Marks:</h3>
                                <p>Name: ${minMarkStudent.name}</p>
                                <p>Marks: ${minMarkStudent.mark}</p>
                                <h3>All Students' Marks:</h3>`;

    
    students.forEach((student, index) => {
        resultsElement.innerHTML += `<p>Student ${index + 1}: ${student.mark}</p>`;
    });
}




