// Password Strength Checker
document.addEventListener("input", function (e) {
  if (e.target.id === "regPass") {
    const strength = document.getElementById("passStrength");
    const val = e.target.value;
    if (val.length < 6) {
      strength.textContent = "Weak password";
      strength.style.color = "red";
    } else if (val.length < 10) {
      strength.textContent = "Moderate password";
      strength.style.color = "orange";
    } else {
      strength.textContent = "Strong password";
      strength.style.color = "lightgreen";
    }
  }
});

// Profile Save Simulation
function saveProfile() {
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  localStorage.setItem("profile", JSON.stringify({ name, email }));
  document.getElementById("saveMsg").textContent = "Profile saved!";
}
