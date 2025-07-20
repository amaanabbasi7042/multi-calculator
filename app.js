
function toggleMenu() {
  const menuList = document.getElementById('menuList');
  menuList.classList.toggle('hidden');
}

function showCalc(type) {
  const container = document.getElementById('calculatorContainer');
  container.innerHTML = '<p>Loading ' + type + ' calculator...</p>';
  // Placeholder: add actual calculator content here
}
