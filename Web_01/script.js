document.querySelector('#login-btn').onclick = () => openModal('login');
document.querySelector('#register-btn').onclick = () => openModal('register');
document.getElementById('modal').onclick = e => {
  if (e.target.id === 'modal') closeModal();
};

function openModal(type) {
  const modal = document.getElementById('modal');
  modal.classList.remove('hidden');
  modal.innerHTML = getFormHtml(type);
  document.querySelector('.toggle-link').onclick = () =>
    openModal(type === 'login' ? 'register' : 'login');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

function getFormHtml(type) {
  if (type === 'login') {
    return `
    <div class="form-container">
      <h2>Login</h2>
      <div class="input-group">
        <input type="email" placeholder=" " required />
        <label>Email</label>
      </div>
      <div class="input-group">
        <input type="password" placeholder=" " required />
        <label>Password</label>
      </div>
      <button class="btn">Login</button>
      <div class="toggle-row">
        Not on MyApp? <a class="toggle-link">Register here</a>
      </div>
    </div>`;
  } else {
    return `
    <div class="form-container">
      <h2>Register</h2>
      <div class="input-group">
        <input type="text" placeholder=" " required />
        <label>Username</label>
      </div>
      <div class="input-group">
        <input type="email" placeholder=" " required />
        <label>Email</label>
      </div>
      <div class="input-group">
        <input type="password" placeholder=" " required />
        <label>Password</label>
      </div>
      <button class="btn">Register</button>
      <div class="toggle-row">
        Already have account? <a class="toggle-link">Login here</a>
      </div>
    </div>`;
  }
}
