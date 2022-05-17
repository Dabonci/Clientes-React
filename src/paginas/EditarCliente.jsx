import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClientesAPI();
  }, []);

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3 ">Utiliza este Formulario para editar los Clientes</p>

      {cliente?.nombre ? (
        <Formulario cliente={cliente} />
      ) : (
        <p>Cliente ID No Valido</p>
      )}
    </div>
  );
};

export default EditarCliente;
