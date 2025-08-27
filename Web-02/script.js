// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
let dark = true;

toggle.addEventListener("click", () => {
  dark = !dark;
  document.documentElement.style.setProperty(
    "--bg-color",
    dark ? "#0f0f0f" : "#ffffff"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    dark ? "#ffffff" : "#111111"
  );
  document.documentElement.style.setProperty(
    "--card-bg",
    dark ? "#1a1a1a" : "#f1f1f1"
  );
});

// Optional: add mousemove parallax
const heroContent = document.querySelector(".hero-content");

document.querySelector(".hero").addEventListener("mousemove", (e) => {
  const { width, height } = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - width / 2;
  const y = e.clientY - height / 2;

  heroContent.style.transform = `rotateX(${y * -0.01}deg) rotateY(${
    x * 0.01
  }deg)`;
});

document.querySelector(".hero").addEventListener("mouseleave", () => {
  heroContent.style.transform = "rotateX(0) rotateY(0)";
});
