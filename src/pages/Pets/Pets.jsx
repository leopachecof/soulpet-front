import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export function Pets() {
    const [pets, setPets] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:3001/pets`)
            .then((response) => {
                setPets(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="clientes container">
             <div className="d-flex justify-content-between align-items-center">
             <h1>Pets</h1>
                <Button as={Link} to="/pet/novo">
                    <i className="bi bi-plus-lg me-2"></i> Pet
                </Button>
            </div>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome do Pet</th>
                        <th>Tipo</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {pets ? (
                        pets.map((pet) => {
                            return (
                                <tr key={pet.id}>
                                    <td>{pet.id}</td>
                                    <td>{pet.nome}</td>
                                    <td>{pet.tipo}</td>
                                    <td className="d-flex gap-2">
                                        <Button
                                            as={Link}
                                            to={`/pets/${pet.id}`}
                                        >
                                            <i class="bi bi-eye"></i>
                                        </Button>
                                        <Button
                                            as={Link}
                                            to={`/pets/editar/${pet.id}`}
                                        >
                                            <i className="bi bi-pencil-fill"></i>
                                        </Button>
                                        <Button>
                                           <i className="bi bi-trash-fill"></i>
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="4">Nenhum pet encontrado</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}
