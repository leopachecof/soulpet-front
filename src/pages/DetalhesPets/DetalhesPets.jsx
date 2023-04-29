import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export function DetalhesPet() {
    const [pets, setPets] = useState(null);
    const { id } = useParams();


   
    useEffect(() => {
        axios
            .get(`http://localhost:3001/pets/${id}`)
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
            <h1>Detalhes do Pet</h1>
            </div>          
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Porte</th>
                        <th>Data de Nascimento</th>
                        <th>Voltar</th>
                    </tr>
                </thead>
                <tbody>
                    {pets ? (
                        <tr key={pets.id}>
                            <td>{pets.id}</td>
                            <td>{pets.nome}</td>
                            <td>{pets.tipo}</td>
                            <td>{pets.porte}</td>
                            <td>{pets.dataNasc}</td>
                            <td className="d-flex gap-2">
                                <Button
                                    as={Link}
                                    to={`/pets`}
                                >
                                    <i class="bi bi-arrow-counterclockwise"></i>
                                </Button>
                            </td>
                        </tr>
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
