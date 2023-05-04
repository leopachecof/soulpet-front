import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table, Modal, FormControl } from "react-bootstrap";

import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { toast } from "react-hot-toast";

export default function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState(null);
  const [show, setShow] = useState(false);
  const [idAgendamento, setIdAgendamento] = useState(null);
  const [search, setSearch] = useState("");
  const [agendamentosFilter, setAgendamentosFilter] = useState([]);
  // const agendamentosFiltrados = agendamentosFilter.filter(
  //   (agendamento) =>
  //     agendamento.nome.toLowerCase().includes(search.toLowerCase()) ||
  //     agendamento.categoria.toLowerCase().includes(search.toLowerCase())
  // );

  const handleClose = () => {
    setIdAgendamento(null);
    setShow(false);
  };
  const handleShow = (id) => {
    setIdAgendamento(id);
    setShow(true);
  };

  useEffect(() => {
    initializeTable();
  }, []);

  function initializeTable() {
    axios
      .get("http://localhost:3001/agendamentos")
      .then((response) => {
        setAgendamentos(response.data);
        setAgendamentosFilter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onDelete() {
    axios
      .delete(`http://localhost:3001/agendamentos/${idAgendamento}`)
      .then((response) => {
        toast.success(response.data.message, {
          position: "bottom-right",
          duration: 2000,
        });
        initializeTable();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message, {
          position: "bottom-right",
          duration: 2000,
        });
      });
    handleClose();
  }

  return (
    <div className="clientes container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Agendamentos</h1>

        <Button as={Link} to="/agendamentos/novo">
          <i className="bi bi-plus-lg me-2"></i> Agendamento
        </Button>
      </div>
      <FormControl
        type="text"
        placeholder="Pesquisar pelo Serviço ou Produto"
        className="w-25"
        value={search}
        onChange={(evento) => setSearch(evento.target.value)}
      />

      <br></br>
      {agendamentos === null ? (
        <Loader />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Maricula</th>
              <th>Nome do Pet</th>
              <th>Dono do Pet</th>
              <th>Tipo</th>
              <th>Cód Serviço</th>
              <th>Serviço</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Agendado para:</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {agendamentosFilter.map((agendamento) => {
              return (
                <tr key={agendamento.id}>
                  <td>{agendamento.pet.id}</td>
                  <td>{agendamento.pet.nome}</td>
                  <td>{agendamento.pet.cliente.nome}</td>
                  <td>{agendamento.pet.tipo}</td>
                  <td>{agendamento.servicoId}</td>
                  <td>{agendamento.servico.nome}</td>
                  <td>{agendamento.descricao}</td>
                  <td>{agendamento.servico.preco}</td>
                  <td>{agendamento.dataAgendada}</td>
                  <td>{agendamento.realizada}</td>

                  <td className="d-flex gap-2">
                    <Button onClick={() => handleShow(agendamento.id)}>
                      <i className="bi bi-trash-fill"></i>
                    </Button>
                    <Button
                      as={Link}
                      to={`/agendamentos/editar/${agendamento.id}`}
                    >
                      <i className="bi bi-pencil-fill"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir o agendamento?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={onDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
