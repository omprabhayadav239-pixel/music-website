const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector(".password-toggle");
const loginForm = document.querySelector("#login-form");
const loginMessage = document.querySelector("#login-message");

passwordToggle.addEventListener("click", () => {
  const revealPassword = passwordInput.type === "password";
  passwordInput.type = revealPassword ? "text" : "password";
  passwordToggle.setAttribute("aria-pressed", String(revealPassword));
  passwordToggle.setAttribute("aria-label", revealPassword ? "Hide password" : "Show password");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!loginForm.reportValidity()) return;
  loginMessage.textContent = "Welcome in. Your VYBE is ready.";
  window.setTimeout(() => {
    window.location.href = "index.html";
  }, 350);
});
