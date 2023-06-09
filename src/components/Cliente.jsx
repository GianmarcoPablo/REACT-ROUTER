import { useNavigate } from "react-router-dom"

const Cliente = ({cliente}) => {
    const navegite = useNavigate()
    const {nombre, empresa, email, telefono,id} = cliente
    return (
            <tr className="border-b">
                <td className="p-6 space-y-2">
                    <p className="text-2xl text-gray-800">{nombre}</p>
                    <p>{empresa}</p>
                </td>
                <td className="p-6">
                    <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email} </p>
                    <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Telefono: </span>{telefono} </p>
                </td>
                <td className="p6 flex gap-4">
                    <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                        onClick={()=>navegite(`/clientes/${id}/editar`)}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
    )
}

export default Cliente