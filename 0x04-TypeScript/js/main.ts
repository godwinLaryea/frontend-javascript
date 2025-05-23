interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Godwin",
  lastName: "Laryea",
  age: 27,
  location: "Accra",
}

const student2: Student = {
  firstName: "Naadu",
  lastName: "Mills",
  age: 30,
  location: "Kumasi",
}

const studentsList: Student[] = [student1, student2];
console.log(studentsList);

const table: HTMLTableElement = document.createElement("table");
table.style.width = "50%";
table.style.borderCollapse = "collapse";

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "0.75rem";

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "0.75rem";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
