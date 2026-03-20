const loadBtn = document.getElementById("loadBtn");
const statusEl = document.getElementById("status");
const cardsEl = document.getElementById("cards");

function createCard(student) {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <h3>${student.name}</h3>
    <p><strong>ID:</strong> ${student.id}</p>
    <p><strong>Department:</strong> ${student.department}</p>
    <p><strong>CGPA:</strong> ${student.cgpa}</p>
  `;

  return card;
}

function renderStudents(students) {
  cardsEl.innerHTML = "";

  students.forEach((student) => {
    cardsEl.appendChild(createCard(student));
  });
}

function loadJsonData() {
  statusEl.textContent = "Loading data...";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);

  xhr.onload = function onLoad() {
    if (xhr.status >= 200 && xhr.status < 300) {
      const students = JSON.parse(xhr.responseText);
      renderStudents(students);
      statusEl.textContent = `Loaded ${students.length} records successfully.`;
    } else {
      statusEl.textContent = `Request failed with status ${xhr.status}.`;
    }
  };

  xhr.onerror = function onError() {
    statusEl.textContent = "Network error while loading JSON data.";
  };

  xhr.send();
}

loadBtn.addEventListener("click", loadJsonData);
