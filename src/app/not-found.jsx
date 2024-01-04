import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h3>not found</h3>
      <p>Lo siento, la pagina a la que estas intentando acceder no existe.</p>
      <Link href="/">Regresar</Link>
    </div>
  );
}

export default NotFound;
