const pronoun = ["mi", "tu"];
const adj = ["peludo", "suave"];
const noun = ["ciempies", "gatito"];
const domains = ["com", "es"];

function generateDomains() {
  const list = document.getElementById("domainList");                              // Selecciona el <ul> o <ol> donde se añadirán los <li>
  list.innerHTML = "";                                                             // Limpia la lista antes de generar nuevos resultados
  
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domains.length; l++) {
          // ⏬ NormalDomain ⏬ //
          const domain = "www." + pronoun[i] + adj[j] + noun[k] + "." + domains[l];// Crea el nombre del dominio concatenando todo
          
          const li = document.createElement("li");                                 // Crea un nuevo elemento <li>
          li.classList.add("list-group-item");                                     // Le añade la clase de Bootstrap 'list-group-item'
          li.textContent = domain;                                                 // Inserta dentro del <li> el texto del dominio generado
          
          list.appendChild(li);                                                    // Añade el <li> dentro de la lista
          // ⏫ NormalDomain ⏫ //
          
          // ⏬ HackDomain ⏬ //
          if (noun[k].endsWith(domains[l])) {                                      // Si la palabra termina con la extensión
            const hackDomain = "www." + pronoun[i] + adj[j] + noun[k].slice(0, -domains[l].length) + "." + domains[l];// Crea el nombre del hack domain concatenando todo
            
            const liHack = document.createElement("li");                           // Crea un nuevo elemento <li> para el hack domain
            liHack.classList.add("list-group-item");                               // Le añade la clase de Bootstrap 'list-group-item'
            liHack.textContent = hackDomain;                                       // Inserta dentro del <li> el texto del hack domain generado
            
            list.appendChild(liHack);                                              // Añade el <li> dentro de la lista
          }
          // ⏫ HackDomain ⏫ //
        }
      }
    }
  }
}

document                                                                            // Accede al documento HTML
  .getElementById("domainGenerateButton")                                           // Selecciona el botón
  .addEventListener("click", generateDomains);                                      // Cuando se haga click, ejecuta la función generateDomains