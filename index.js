// ===== Lista GLOBAL (para poder filtrar después) =====
let listaPokemons = [];

// ===== Selecciona id="seccionPokedex"> del HTML =====
const seccionPokedex = document.querySelector("#seccionPokedex");


function pintarPokemons(pokemons){

// Si no devuelve resultados:
    if(pokemons.length === 0){
    seccionPokedex.innerHTML = "<p class='text-center'>Sin resultados</p>";
    return;
  }

  // Recorre lista y crea html
  const html = pokemons.map((pokemon, index) => {

    const iconosTipos = pokemon.type.map(tipo =>
      `<img src="/iconos/${tipo}.svg" style="width:30px;">`
    ).join(' ');

    return `
      <div class="col-md-3 mb-4" onclick="verPokemon(${index})" style="cursor:pointer;">
        <div class="card h-100">

          <img 
            class="card-img-top p-3"
            style="height:150px; object-fit:contain;"
            src="${pokemon.image.thumbnail}"
            alt="${pokemon.name.english}"
          >

          <div class="card-body">

            <h5 class="card-title text-center">
              ${pokemon.name.english}
            </h5>

            <p class="text-center">
              ${iconosTipos}
            </p>

            <p>${pokemon.species}</p>

            <p class="small">
              ${pokemon.description}
            </p>

          </div>

        </div>
      </div>
    `;
  }).join('');

  seccionPokedex.innerHTML = html;
}


// ===== Cargar JSON =====
const cargarPokedex = async () => {

  await fetch("pokedex.json")
    .then((response) => response.json())
    .then((pokemons) => {

// Guardar lista completa para usar en filtro
      listaPokemons = pokemons;

// Mostrar todos al cargar
      pintarPokemons(listaPokemons);

    })
    .catch(() => {
      seccionPokedex.innerHTML = "<p>No se pudo cargar el archivo JSON</p>";
    });

};

cargarPokedex();


// ===== Filtro =====
const inputFiltro = document.querySelector("#filtro");

inputFiltro.addEventListener("keyup", () => {

  const texto = inputFiltro.value
    .toLowerCase()
    .trim();

  if(texto === ""){
    pintarPokemons(listaPokemons);
    return;
  }

  const filtrados = listaPokemons.filter(pokemon =>
    pokemon.name.english.toLowerCase().includes(texto)
  );

  pintarPokemons(filtrados);

});


// ===== SWEETALERT2 =====
function verPokemon(index){

  const pokemon = listaPokemons[index];

  const iconosTipos = pokemon.type.map(tipo =>
    `<img src="/iconos/${tipo}.svg" style="width:30px;margin:3px;">`
  ).join('');

  Swal.fire({

    title: pokemon.name.english,

    html: `
      <img src="${pokemon.image.thumbnail}"
           style="height:150px;object-fit:contain;margin-bottom:10px;">

      <div>${iconosTipos}</div>

      <p><b>Species:</b> ${pokemon.species}</p>

      <p style="font-size:14px">${pokemon.description}</p>
    `,

    showCloseButton: true,
    showConfirmButton: false,
    allowOutsideClick: true,
    allowEscapeKey: true

  });
}