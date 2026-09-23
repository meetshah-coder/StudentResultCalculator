document.getElementById("resultForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const javaMarks = Number(document.getElementById("java").value);
  const dbmsMarks = Number(document.getElementById("dbms").value);
  const dsMarks = Number(document.getElementById("ds").value);
  const mathsMarks = Number(document.getElementById("maths").value);

  const totalMarks = javaMarks + dbmsMarks + dsMarks + mathsMarks;
  const percentage = (totalMarks / 400) * 100;

  // Determine grade
  let grade;
  if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 40) {
    grade = "C";
  } else {
    grade = "F";
  }

  // Determine Pass/Fail
  const pass = (javaMarks >= 40 && dbmsMarks >= 40 && dsMarks >= 40 && mathsMarks >= 40);
  const result = pass ? "PASS" : "FAIL";

  // Display result
  const outputDiv = document.getElementById("resultOutput");
  outputDiv.innerHTML = `
    <h2>Result</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Roll Number:</strong> ${roll}</p>
    <p><strong>Total Marks:</strong> ${totalMarks} / 400</p>
    <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
    <p><strong>Grade:</strong> ${grade}</p>
    <p><strong>Result:</strong> ${result}</p>
  `;
});
