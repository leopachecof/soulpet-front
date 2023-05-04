import React from 'react'
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



export default function NovoAgendamento() {

const {register, handleSubmit, formState: {errors}} = useForm()
const navigate = useNavigate();

function onSubmit(data) {

    axios
    .post("http://localhost:3001/agendamentos", data)
    .then(response => {
        toast.success("Agendado.", { 
            position: "bottom-right", 
            duration: 2000 
        });
        navigate("/agendamentos");
    })
    .catch(error => {
        toast.error("Algo deu errado.", { 
            position: "bottom-right", 
            duration: 2000 
        });
        console.log(error);
    });

}


  return (
    <div className='container'>
       <h1> Novo Agendamento </h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Pet</Form.Label>
                    <Form.Control type="number" className={errors.petId && "is-invalid"} {...register("petId", { required: "O ID do Pet é obrigatório.", maxLength: { value: 150, message: "Limite de 130 caracteres."} })} />
                    {errors.petId && <Form.Text className="invalid-feedback">{errors.petId.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Serviço</Form.Label>
                    <Form.Control type="number" className={errors.servico && "is-invalid"} {...register("servico", { required: "O ID de serviço é obrigatório."})} />
                    {errors.servico && <Form.Text className="invalid-feedback">{errors.servico.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" {...register("descricao")} />
                    
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Data de Agendamento</Form.Label>
                    <Form.Control type="date" className={errors.dataAgendada && "is-invalid"} {...register("dataAgendada", { required: "A data é obrigatória"} )} />
        
                    {errors.dataAgendada && <Form.Text className="invalid-feedback">{errors.dataAgendada.message}</Form.Text>}
                </Form.Group>




                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
  )
}
