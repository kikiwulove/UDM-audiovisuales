document.addEventListener('DOMContentLoaded', () => {
  const materias = document.querySelectorAll('[data-prereq]');
  materias.forEach(materia => {
    const prereqId = materia.getAttribute('data-prereq');
    const prereq = document.getElementById(prereqId);
    if (prereq && prereq.classList.contains('unlocked')) {
      materia.classList.remove('locked');
      materia.classList.add('unlocked');
    }
  });
});
