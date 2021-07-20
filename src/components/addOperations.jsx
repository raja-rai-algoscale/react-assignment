import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import postfixCalculator from '../utils/postfix';

export default function (props){
    const {expression , setRequiredOperands , setRequiredOperator} = props
    const [expString, setExpString] = useState("");
    const [ formData , setFormData] = useState({
        operand : "1",
        operator : "+"
    })

    const operators = [ "+", "-", "*", "/"]

    const handleChange=(e)=>{
        if(e.target.name === "operand" && isNaN(e.target.value)) return
        setFormData({...formData , [e.target.name] : e.target.value})
    }

    const handleAddOperations=()=>{
        if(+formData.operand <=0) return
        setRequiredOperands(+formData.operand)
        setRequiredOperator(formData.operator)
    }

    useEffect(() => {
        let str = ""
        if(expression.length <= 1) return
        for(let i=0; i<expression.length; i++){
            str += expression[i] + " "
        }
        setExpString(str.substr(0, str.length-1))
    }, [expression])

    return (
       <Container className="d-flex flex-column justify-content-between p-5" style={{minHeight : "500px"}}>
           <Row>
                <div className="col-12 ctr">
                    {expression.map((exp , index)=>{
                    return <span key={index + Math.floor(Math.random()*999999)} className="number-tile d-flex justify-content-center align-items-center">
                                {exp}
                            </span>
                    })}
                </div>
           </Row>
           <Row>
                <div className="col-12 ctr head-text">
                       =
                </div>
           </Row>
           <Row>
                <div className="col-12 ctr head-text">
                    {postfixCalculator(expString)}
                </div>
           </Row>

          <Row className="mb-5">
            <Col className="col-md-4 col-6 ctr mb-2">
                <div className="form-floating" style={{width: "100%"}}>
                <select className="form-select" id="operator" value={formData.operator} name="operator" onChange={handleChange} aria-label="Floating label select example" >
                    {operators.map((operator, index)=>{
                        return (
                            <option key={index + Math.floor(Math.random()*999999)} value={operator}> {operator} </option>
                        )
                    })}
                </select>
                <label htmlFor="operator">Operator</label>
                </div>
            </Col>
            <Col className="col-md-4 col-6 ctr mb-2"><div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="operand"
                        placeholder="Operand"
                        value={formData.operand}
                        onChange={handleChange}
                        name="operand"
                      />
                      <label htmlFor="operand">Operand</label>
                    </div></Col>
            <Col className="col-md-4 col-12 ctr mb-2">
                <Button className="btn btn-info add-btn" style={{minHeight: 58}} onClick={handleAddOperations}>Add operations</Button>
            </Col>
          </Row>
      </Container>
    )
}