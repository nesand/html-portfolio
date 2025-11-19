window.openVetForm = function(id) {
  document.getElementById('healthVetForm').style.display = 'none';
  document.getElementById('vbaVetForm').style.display = 'none';
  document.getElementById(id).style.display = 'block';
  window.scrollTo({ top: document.getElementById(id).offsetTop - 60, behavior: 'smooth' });
};

window.showVetHealthOptions = function(id) {
  document.getElementById('yesVetOptions').style.display = 'none';
  document.getElementById('noVetOptions').style.display = 'none';
  document.getElementById(id).style.display = 'block';
};

window.showVetVbaOptions = function(id) {
  document.getElementById('VeteranVetOptions').style.display = 'none';
  document.getElementById('FamilyVetOptions').style.display = 'none';
  document.getElementById(id).style.display = 'block';
};

window.onscroll = function() {
  const scrollBtn = document.getElementById('scrollTopVetBtn');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};

window.onload = function() {
  const scrollBtn = document.getElementById('scrollTopVetBtn');
  if (scrollBtn) {
    scrollBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }
  console.log('Veterans Tool loaded with banner header');
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('healthVetFormElem').addEventListener('submit', function(e) {
    e.preventDefault();
    const state = document.getElementById('stateHealthVet').value;
    const county = document.getElementById('countyHealthVet').value;
    const city = document.getElementById('cityHealthVet').value;
    const selected = document.querySelector('input[name="disability"]:checked');
    if (!state || !city || !selected) return;

    const options = selected.value === 'yes' ? '#yesVetOptions' : '#noVetOptions';
    const chosen = Array.from(document.querySelectorAll(options + ' input[type="checkbox"]:checked'))
      .map(cb => cb.name)
      .join(' ');
    const query = `${chosen} ${state} ${county} ${city}`;
    window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
  });

  document.getElementById('vbaVetFormElem').addEventListener('submit', function(e) {
    e.preventDefault();
    const state = document.getElementById('stateVbaVet').value;
    const county = document.getElementById('countyVbaVet').value;
    const city = document.getElementById('cityVbaVet').value;
    const selected = document.querySelector('input[name="relation"]:checked');
    if (!state || !city || !selected) return;

    const options = selected.value === 'Veteran' ? '#VeteranVetOptions' : '#FamilyVetOptions';
    const chosen = Array.from(document.querySelectorAll(options + ' input[type="checkbox"]:checked'))
      .map(cb => cb.name)
      .join(' ');
    const query = `${chosen} ${state} ${county} ${city}`;
    window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
  });
});
