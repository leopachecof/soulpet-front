import axios from "axios";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export function EditaAgendamento() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();

    function onSubmit(data) {
        axios.put(`http://localhost:3001/agendamentos/${id}`, data)
            .then(response => {
                toast.success("Agendamento editado.", { position: "bottom-right", duration: 2000 });
                navigate("/agendamentos");
            })
            .catch(error => {
                toast.error("Algo deu errado.", { position: "bottom-right", duration: 2000 });
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/agendamentos/${id}`)
            .then(response => {
                const { petId, servicoId, descricao, dataAgendada } = response.data;
                reset({ petId, servicoId, descricao, dataAgendada });
            })
    }, [id, reset])
    
      return (
        <div className="container">
          <h1>Atualizar Agendamento</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>ID do Pet</Form.Label>
              <Form.Control
                type="number"
                className={errors.petId && "is-invalid"}
                {...register("petId", {
                  required: "O ID do Pet é obrigatório.",
                  maxLength: { value: 130, message: "Limite de 130 caracteres." },
                })}
              />
              {errors.petId && (
                <Form.Text className="invalid-feedback">
                  {errors.petId.message}
                </Form.Text>
              )}
            </Form.Group>
    
            <Form.Group className="mb-3">
              <Form.Label>ID do Serviço</Form.Label>
              <Form.Control
                type="number"
                className={errors.servicoId && "is-invalid"}
                {...register("servicoId", {
                  required: "O ID do Serviço é obrigatório.",
                  maxLength: { value: 255, message: "Limite de 255 caracteres." },
                })}
              />
              {errors.servicoId && (
                <Form.Text className="invalid-feedback">
                  {errors.servicoId.message}
                </Form.Text>
              )}
            </Form.Group>
    
            <Form.Group className="mb-3">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" className={errors.descricao && "is-invalid"} {...register("descricao", { required: "A descrição é obrigatória."})} />
                    {errors.descricao && <Form.Text className="invalid-feedback">{errors.descricao.message}</Form.Text>}
                    
                </Form.Group>
    
            <Form.Group className="mb-3">
                    <Form.Label>Data de Agendamento</Form.Label>
                    <Form.Control type="date" className={errors.dataAgendada && "is-invalid"} {...register("dataAgendada", { required: "A data é obrigatória"} )} />
        
                    {errors.dataAgendada && <Form.Text className="invalid-feedback">{errors.dataAgendada.message}</Form.Text>}
                </Form.Group>

            <Button variant="primary" type="submit">
              Atualizar
            </Button>
          </Form>
        </div>
      );
    }
    