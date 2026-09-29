const btn = document.getElementById('btn');
const info = document.getElementById('info');

btn.addEventListener('click', () => {
  if (info.style.display === 'none' || info.style.display === '') {
    info.style.display = 'block';
    btn.textContent = 'Жасыру';
  } else {
    info.style.display = 'none';
    btn.textContent = 'Байланыс ақпаратын көрсету';
  }
});