import React from 'react';
import {  useState } from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default function (props) {
    const {requiredOperator , requiredOperands , setRequiredOperands , setExpression, expression } = props

  const [number , setNumber] = useState("");

  const handleNumberChange=(e)=>{
    if(isNaN(e.target.value)) return;
    setNumber(e.target.value)
  }

  const handleAdd = (e)=>{
    if(!number) return
    let expCopy = [...expression];
    expCopy.push(number)
    if(expCopy.length >= 2 && +requiredOperands === 1 ){
        expCopy.push(requiredOperator)
    }
    setExpression(expCopy)
    setNumber("")
    setRequiredOperands(requiredOperands-1)
  }

  return (
    <div className="">
       <Container className="">
          <Row className="mb-5">
            <Col className="col-12 ctr"><span className="head-text">Expression</span></Col>
            <Col className="col-12 ctr"><span className="head-text">Evaluator</span></Col>
          </Row>
          <Row className="">
            <Col className="col-12 ctr">
              <Row className="center">
                 <Col className="col-sm-6 col-12 mb-2 ctr">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="number"
                        placeholder="Please enter a number"
                        onChange={handleNumberChange}
                        value={number}
                      />
                      <label htmlFor="number">Please enter a number</label>
                    </div>
                </Col>
                <Col className="col-sm-6 col-12 ctr add-btn-container">
                   <Button className="btn btn-info add-btn" onClick={handleAdd}>Add number</Button>
                </Col>
              </Row>
            </Col>
          </Row>

      </Container>
    </div>
  );
}
