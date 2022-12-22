let arregloCarrito;

fetch("http://localhost:8080/carrito")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    arregloCarrito = data;
    desplegarCarrito();
  })
  .catch((e) => {
    console.log(e);
  });

function desplegarCarrito() {
  
  document.getElementById("carrito_despliegue").innerHTML = "";
  for (let index = 0; index < arregloCarrito.length; index++) {
    console.log(index);;
    const box = document.createElement("div");
    box.classList = "card mb-3";
    box.style = "max-height: auto;";
    box.innerHTML = `
    


    <div class="row g-0">
    <div class="col-md-4">
    <!-- El siguiente id cambia  -->
    <div id="carouselExampleControls${index}" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
    <!-- Primer Imagen de producto 1 -->
    <img src="${arregloCarrito[index].imagen_frontal}"
    class="img-fluid rounded-start" alt="Suplemento">
    </div>
    <div class="carousel-item">
    <img src="${arregloCarrito[index].imagen_nutricional}" 
    class="d-block w-100" alt="...">
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls${index}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls${index}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
    </div>
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title">Precio</h5>
    <p class="card-text">${arregloCarrito[index].precio}</p>
    </div>
    </div>
    </div>
    `
    ;
   /* for(i=0;i<arregloCarrito.length;i++){
      let total += arregloCarrito[index].precio
   */
    document.getElementById("carrito_despliegue").appendChild(box);
  }
}
