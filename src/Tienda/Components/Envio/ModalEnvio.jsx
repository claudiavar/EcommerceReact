import React from "react";
import { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

const ModalEnvio = () => {
    const [show, setShow] = useState(false);
    const [envio, setEnvio] = useState('0');
    const costoE=0;

    const captureEnvio = (e) => {
        setEnvio(e.target.value);  
        costoEnvio()              
      }
    const costoEnvio = () => {     
        console.log("costoEnvio") 
        console.log(envio)   
        if (envio==1){
            console.log("entra IF") 
            var costoE = 9
            console.log(costoE);
        }else if ( envio==2){
            costoE=15
            console.log(costoE);
        } else {
            console.log("entra else")
            costoE=0
            console.log(costoE);
        }
    }

      

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div
                className="btn btn-outline-success col-md-8 w-100"
                onClick={handleShow}>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span className="mx-2">Calcular costo de Envio</span>
            </div>


            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Calcular Costo de Envío</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select class="form-control" required="" onChange={captureEnvio}>
                        <option value="0">Seleccione Destino</option>
                        <option onClick={costoEnvio} value="1">Lima</option>
                        <option value="2">Provincias</option>
                    </select>
                    <Row className="mt-2">
                        <Col>
                            <h5 className="mx-1">Costo:</h5>
                        </Col>
                        <Col>
                            <h5 className="">S/.{costoE}</h5>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Button variant="success" onClick={handleClose}>
                            Aceptar
                        </Button>
                    </Row>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalEnvio;