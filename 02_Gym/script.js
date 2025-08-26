document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  const backToTop = document.getElementById('backToTop');
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const authModal = document.getElementById('authModal');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 100);
    backToTop.classList.toggle('visible', window.scrollY > 300);
  });

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

  function openAuthModal(type) {
    authModal.classList.remove('hidden');
    authModal.innerHTML = getAuthForm(type);
    authModal.querySelector('.close-btn').onclick = () => authModal.classList.add('hidden');
  }
  loginBtn.onclick = () => openAuthModal('login');
  registerBtn.onclick = () => openAuthModal('register');

  authModal.onclick = e => {
    if (e.target === authModal) authModal.classList.add('hidden');
  };

  function getAuthForm(type) {
    const isLogin = type === 'login';
    return `
      <div class="form">
        <button class="close-btn">&times;</button>
        <h2>${isLogin ? 'Login' : 'Register'}</h2>
        ${!isLogin ? `<div class="input-group">
            <input type="text" id="username" placeholder=" " required>
            <label>Username</label>
          </div>` : ''}
        <div class="input-group">
          <input type="email" id="email" placeholder=" " required>
          <label>Email</label>
        </div>
        <div class="input-group">
          <input type="password" id="password" placeholder=" " required>
          <label>Password</label>
        </div>
        <button class="btn">${isLogin ? 'Login' : 'Register'}</button>
        <div class="toggle-link">${isLogin ? "Don't have an account? Register" : "Already have an account? Login"}</div>
      </div>`;
  }
});
