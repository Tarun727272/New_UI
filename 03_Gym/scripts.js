document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const authModal = document.getElementById("authModal");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Scroll effects
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 100);
    backToTop.classList.toggle("visible", window.scrollY > 300);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Auth modal logic
  loginBtn.addEventListener("click", () => showAuthModal("login"));
  registerBtn.addEventListener("click", () => showAuthModal("register"));
  authModal.addEventListener("click", (e) => {
    if (e.target === authModal) authModal.classList.add("hidden");
  });

  function showAuthModal(type) {
    authModal.classList.remove("hidden");
    authModal.innerHTML = getAuthForm(type);
    authModal.querySelector(".close-btn").onclick = () =>
      authModal.classList.add("hidden");
  }

  function getAuthForm(type) {
    const isLogin = type === "login";
    return `
      <div class="form">
        <button class="close-btn">&times;</button>
        <h2>${isLogin ? "Login" : "Register"}</h2>
        ${
          !isLogin
            ? `<input type="text" placeholder="Username" required />`
            : ""
        }
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button class="btn">${isLogin ? "Login" : "Sign Up"}</button>
        <p class="toggle-link">${
          isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"
        }</p>
      </div>`;
  }
});
