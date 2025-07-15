document.addEventListener("click", (e) => {
  if (e.target.classList.contains("materia") && e.target.classList.contains("activa")) {
    e.target.style.backgroundColor = "#ffe6f0";
    e.target.style.borderColor = "#ff69b4";

    const id = e.target.id;
    document.querySelectorAll(".materia").forEach((el) => {
      const materia = materiasGrafica.concat(materiasAudiovisual).find(m => m.id === el.id);
      if (materia?.prerequisitos?.includes(id)) {
        const allMet = materia.prerequisitos.every(pr => 
          document.getElementById(pr)?.style.backgroundColor === "rgb(255, 230, 240)"
        );
        if (allMet) el.classList.add("activa");
      }
    });
  }
});
