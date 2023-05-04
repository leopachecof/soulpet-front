import React from 'react'
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



export function NovoProduto() {

const {register, handleSubmit, formState: {errors}} = useForm()
const navigate = useNavigate();

function onSubmit(data) {

    axios.post("http://localhost:3001/produtos",data).then(response => {
        toast.success("Produto adicionado.", { position: "bottom-right", duration: 2000 });
                navigate("/produtos");
    })
    .catch(error => {
        toast.error("Algo deu errado.", { position: "bottom-right", duration: 2000 });
        console.log(error);
    });

}


  return (
    <div className='container'>
       <h1> NovoProduto </h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" className={errors.nome && "is-invalid"} {...register("nome", { required: "O nome é obrigatório.", maxLength: { value: 150, message: "Limite de 130 caracteres."} })} />
                    {errors.nome && <Form.Text className="invalid-feedback">{errors.nome.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control type="number"  step="0.01" className={errors.preco && "is-invalid"} {...register("preco", { required: "O preço é obrigatório.", min: { value: 0, message: "Preço deve ser maior ou igual a 0." }, max: { value: 99999, message: "Preço deve ser menor ou igual a 99999." } })} />
                    {errors.preco && <Form.Text className="invalid-feedback">{errors.preco.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" className={errors.descricao && "is-invalid"} {...register("descricao", { required: "A descrição é obrigatória.", maxLength: { value: 255, message: "Limite de 255 caracteres."} })} />
                    {errors.descricao && <Form.Text className="invalid-feedback">{errors.descricao.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Desconto</Form.Label>
                    <Form.Control type="number"  step="0.01" className={errors.desconto && "is-invalid"} {...register("desconto", { required: "O desconto é obrigatório.", min: { value: 0, message: "Desconto deve ser maior ou igual a 0." }, max: { value: 99999, message: "Desconto deve ser menor ou igual a 99999." } })} />
                    {errors.desconto && <Form.Text className="invalid-feedback">{errors.desconto.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Data de Desconto</Form.Label>
                    <Form.Control type="date" className={errors.dataDesconto && "is-invalid"} {...register("dataDesconto", { required: "A data é obrigatória"} )} />
        
                    {errors.dataDesconto && <Form.Text className="invalid-feedback">{errors.dataDesconto.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text" className={errors.categoria && "is-invalid"} {...register("categoria", { required: "A categoria é obrigatória.", maxLength: { value: 255, message: "Limite de 255 caracteres."} })} />
                    {errors.categoria && <Form.Text className="invalid-feedback">{errors.categoria.message}</Form.Text>}
                </Form.Group>


                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
  )
}
