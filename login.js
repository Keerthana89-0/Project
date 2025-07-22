//login.js (frontend)
document.getElementById("loginBtn").addEventListener("click", async () => {
  const phone = document.getElementById("loginPhone").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, password }),
  });

  const data = await res.json();
  if (data.success) {
    localStorage.setItem("user", JSON.stringify(data.user));
    alert("Login successful!");
    window.location.href = "index1.html"; // redirect to home
  } else {
    alert("Invalid credentials");
  }
});