const materiasGrafica = [
  { id: "intro_com", nombre: "Introducción a la comunicación", semestre: 1 },
  { id: "foto", nombre: "Fotografía", semestre: 1 },
  { id: "taller1", nombre: "Taller gráfico I", semestre: 2, prerequisitos: ["foto"] },
  // Continúa con las demás...
];

const materiasAudiovisual = [
  { id: "intro_com", nombre: "Introducción a la comunicación", semestre: 1 },
  { id: "leng1", nombre: "Lenguajes audiovisuales I", semestre: 2 },
  { id: "real_doc", nombre: "Realización documental", semestre: 3, prerequisitos: ["leng1"] },
  // Continúa con las demás...
];

function mostrarMalla(tipo) {
  document.getElementById("grafica").style.display = tipo === "grafica" ? "flex" : "none";
  document.getElementById("audiovisual").style.display = tipo === "audiovisual" ? "flex" : "none";

  const container = document.getElementById(tipo);
  container.innerHTML = "";

  const materias = tipo === "grafica" ? materiasGrafica : materiasAudiovisual;

  materias.forEach(materia => {
    const div = document.createElement("div");
    div.className = "materia";
    div.id = materia.id;
    div.innerText = materia.nombre;
    if (!materia.prerequisitos) div.classList.add("activa");
    container.appendChild(div);
  });
}

