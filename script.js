function submitTopic() {
  const topicInput = document.getElementById("topicInput");
  const topic = topicInput.value.trim();
  if (topic === "") {
    alert("Vul eerst een onderwerp in voordat je verdergaat.");
    return;
  }
  document.getElementById("topicSection").style.display = "none";
  document.getElementById("appContent").style.display = "block";
  document.getElementById("topicTitle").textContent = topic;
  document.getElementById("itemInput").focus();
}

function addItem(type) {
  const input = document.getElementById("itemInput");
  const text = input.value.trim();
  if (text === "") return;

  renderItem(text, type);
  input.value = "";
  input.focus();
  updateScore();
}

function renderItem(text, type) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  li.appendChild(span);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Verwijderen";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => {
    li.remove();
    updateScore();
  };
  li.appendChild(deleteBtn);
  document.getElementById(type + "List").appendChild(li);
}

function updateScore() {
  const prosCount = document.getElementById("prosList").children.length;
  const consCount = document.getElementById("consList").children.length;
  const scoreboard = document.getElementById("scoreboard");
  let verdict = "Laten we beslissen!";
  if (prosCount > consCount) verdict = "De voordelen winnen!";
  else if (consCount > prosCount) verdict = "De nadelen winnen!";
  else if (prosCount > 0) verdict = "Het is gelijkspel!";
  scoreboard.innerHTML = `Voordelen: ${prosCount} | Nadelen: ${consCount}<br> ${verdict}`;
}

// Alles leegmaken en terug naar het begin
function startOver() {
  document.getElementById("prosList").innerHTML = "";
  document.getElementById("consList").innerHTML = "";
  document.getElementById("topicInput").value = "";
  document.getElementById("appContent").style.display = "none";
  document.getElementById("topicSection").style.display = "block";
  updateScore();
  document.getElementById("topicInput").focus();
}

// Met Enter het onderwerp starten
document.getElementById("topicInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") submitTopic();
});
