const [preguntaInput, respuestaText, gifImage, botonPreguntar] = 
    ["pregunta", "respuesta", "gif", "btnpregunta"].map(id => document.getElementById(id));

botonPreguntar.addEventListener("click", async (event) => {
	event.preventDefault();

	try {
		const response = await fetch("https://yesno.wtf/api");
		const data = await response.json();

		const texto = { yes: "Sí", no: "No" }[data.answer];
		respuestaText.textContent = texto;
		gifImage.src = data.image;
	} catch (error) {
		respuestaText.textContent = "Algo salió mal. Inténtalo de nuevo.";
		console.error(error);
	}
});

