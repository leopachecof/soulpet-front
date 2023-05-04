import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

export default function InfoSistema() {
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    inicializarDashboard();
  }, []);

  function inicializarDashboard() {
    axios
      .get("http://localhost:3001/dashboard")
      .then((response) => {
        setDashboard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (

    <>
    <div class="container d-flex justify-content-around align-items-center space-around mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
        <div className="d-flex justify-content-center align-items-center mb-3">
        <i class="bi bi-person-vcard"></i>
        </div>
          <Card.Title className="d-flex justify-content-center mb-4">Total de clientes</Card.Title>
          <Card.Text className="d-flex justify-content-center">
            <p> {dashboard.countClientes}</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
        <div className="d-flex justify-content-center align-items-center mb-3">
        <i class="bi bi-balloon-heart-fill"></i>
        </div>
          <Card.Title className="d-flex justify-content-center mb-4">Total de pets</Card.Title>
          <Card.Text className="d-flex justify-content-center">
            <p> {dashboard.countPets}</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
        <div className="d-flex justify-content-center align-items-center mb-3">
        <i class="bi bi-inboxes"></i>
        </div>
          <Card.Title className="d-flex justify-content-center mb-4">Total de produtos</Card.Title>
          <Card.Text className="d-flex justify-content-center">
            <p> {dashboard.countProdutos}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div class="container d-flex justify-content-around align-items-center space-around mt-5">

    <Card style={{ width: "18rem" }}>
        <Card.Body>
        <div className="d-flex justify-content-center align-items-center mb-3">
        <i class="bi bi-shop"></i>
        </div>
          <Card.Title className="d-flex justify-content-center mb-4">Total de serviços</Card.Title>
          <Card.Text className="d-flex justify-content-center">
            <p> {dashboard.countServicos}</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <div className="d-flex justify-content-center align-items-center mb-3">
          <i class="bi bi-list-task"></i>
        </div>
          <Card.Title className="d-flex justify-content-center mb-4">Total de agendamentos</Card.Title>
          <Card.Text className="d-flex justify-content-center">
            <p> {dashboard.countAgendamentos}</p>
          </Card.Text>
        </Card.Body>
      </Card>

    

        
    </div>
</>
  );
}
