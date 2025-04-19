import { useEffect, useState } from "react";
import { getTransacciones } from "../services/transaccionesService";


const Transacciones = () => {
  const [transacciones, setTransacciones] = useState<any[]>([]);

  useEffect(() => {
    getTransacciones({ user: 'nfonqui' })
      .then(setTransacciones)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Listado de Transacciones</h1>
      <ul>
        {transacciones.map((transacciones) => (
          <li key={transacciones.id}>
            {transacciones.category.nameCategory}: ${transacciones.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transacciones;
