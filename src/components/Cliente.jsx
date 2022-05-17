
import {useNavigate} from "react-router-dom"
const Cliente = ({ cliente, handleEliminar }) => {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, notas, id } = cliente;
  return (
    <tr className="border-b hover:bg-gray-300">
      <td className="p-3">{nombre}</td>
      <td>
        <p>
          <span className="text-gray-800 uppercase font-bold">Email:</span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Tel:</span>
          {telefono}
        </p>
      </td>
      <td>{empresa}</td>
      <td>
        <button
          className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-3 uppercase font-bold text-xs mt-1"
          type="button"
          onClick={() => navigate(`/clientes/editar/${id}`)}>
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 block w-full text-white p-3 uppercase font-bold text-xs mt-3"
          type="button"
          onClick={() => handleEliminar(id)}>
          Eliminar
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-3 uppercase font-bold text-xs mt-3"
          Ver
          type="button"
          onClick={() => navigate(`/clientes/${id}`)}>
          Ver
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
