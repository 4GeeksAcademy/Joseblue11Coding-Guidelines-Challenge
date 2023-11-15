import "../style/index.css";
/**
 * EDITAR SÓLO DENTRO DE ESTA FUNCIÓN DE RENDER
 * Esta función se llama cada vez que el usuario cambia de tipo o cambia cualquier entrada
 *
    {
        includeCover: true, // si includeCover es true, el algoritmo debería mostrar la imagen de portada
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // esta es la URL de la imagen que se utilizará como fondo para la portada del perfil
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // esta es la URL del avatar del perfil
        socialMediaPosition: "derecha", // posición de la barra de redes sociales (izquierda o derecha)
        
        twitter: null, // nombres de usuario de redes sociales
        github: nulo,
        linkedin: nulo,
        instagram: nulo,

        nombre: nulo,
        apellido: nulo,
        rol: nulo,
        país: nulo,
        ciudad: nulo
    }
 */
    function render(variables = {}) {
        console.log("These are the current variables: ", variables);// imprimir en la consola
        // aquí hacemos las preguntas lógicas para tomar decisiones sobre cómo construir el html
        // si includeCover==false entonces restablecemos el código de portada sin la etiqueta <img> para que la portada sea transparente.
        let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
        if (variables.includeCover == false) cover = "<div class='cover'></div>";

    // restablecer el cuerpo del sitio web con la nueva salida html
    document.querySelector("#widget_content").innerHTML = `<div class="widget">
    ${cover}
  <img src="${variables.avatarURL}" class="photo" />
  <h1>Lucy Boilett</h1>
  <h2>Web Developer</h2>
  <h3>Miami, USA</h3>
  <ul class="position-right">
    <li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
    <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>
    <li><a href="https://linkedin.com/school/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>
    <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
  </ul>
</div>
`;
}
/**
 * No cambies ninguna de las líneas siguientes, aquí es donde hacemos la lógica para los menús desplegables.
 */
window.onload = function() {
  window.variables = {
    // si includeCover es verdadero, el algoritmo debería mostrar la imagen de portada
    includeCover: true,
    // esta es la URL de la imagen que se utilizará como fondo para la portada del perfil
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // esta es la URL del avatar del perfil
    socialMediaPosition: "position-left",
    // nombres de usuario de redes sociales
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);// renderiza la tarjeta por primera vez
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
        // <- agrega un oyente a cada entrada
        const attribute = e.target.getAttribute("for");// cuando cambia cualquier entrada, recopila el valor
        let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // renderizar nuevamente la tarjeta con nuevos valores
    });
  });
};