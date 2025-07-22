// register.js
document.getElementById("registerBtn").addEventListener("click", async () => {
  const name = document.getElementById("regName").value;
  const phone = document.getElementById("regPhone").value;
  const password = document.getElementById("regPassword").value;

  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, password }),
  });

  const data = await res.json();
  if (data.success) {
    alert("Registration successful!");
    document.getElementById("registerModal").style.display = "none"; // close modal
  } else {
    alert("User already exists or error occurred.");
  }
});

// Close modal
document.getElementById("closeRegister").addEventListener("click", () => {
  document.getElementById("registerModal").style.display = "none";
});