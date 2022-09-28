import '../assets/style/productos.css'
import imagenPrincipal from '../assets/img/productos.jpg';


function Productos() {
  return(
    <div class="all">

  <div class="container">
    <img class="imagenPrincipal" src={imagenPrincipal} alt="Productos" />

    <h1>PRODUCTOS DE LIMPIEZA</h1>
    <h2>Todo para que su casa brille se encuentra aqui</h2>
    <a class="botonPrincipal" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Conozca los nuevos productos</a>
  </div>
</div>
  );
}
  
export default Productos;
