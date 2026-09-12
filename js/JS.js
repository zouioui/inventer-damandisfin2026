<script>
    const btn = document.getElementById('darkModeBtn');
    const body = document.body;

    // Charger le thème sauvegardé
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      body.setAttribute('data-theme', 'dark');
      btn.textContent = '☀️';
    }

    // Au clic sur le bouton
    btn.addEventListener('click', () => {
      if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        btn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      } else {
        body.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      }
    });
    