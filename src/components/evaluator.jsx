import React from 'react';
import {  useState } from 'react';

import AddNumber from './addNumber';
import AddOperations from './addOperations';

export default function () {

  const [expression , setExpression] = useState([]);

  const [requiredOperands, setRequiredOperands] = useState(1)
  const [requiredOperator , setRequiredOperator] = useState(null)

  return (
    <div className="exp-eval-container d-flex flex-column justify-content-center align-items-center">
      {requiredOperands === 0 ? "" :    <div className="exp-bar">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <span className="sub-text">{expression.length > 0 ? "Expression =": ""} </span>
                {expression.map((exp, index)=>{
                  return <span key={index + Math.floor(Math.random()*999999)} className="number-tile d-flex justify-content-center align-items-center">
                    {exp}
                  </span>
                })}
              </div>
        </div>}

      {requiredOperands === 0 ?
              <AddOperations
                expression={expression}
                setRequiredOperands={setRequiredOperands}
                setRequiredOperator={setRequiredOperator}/>
              :
              <AddNumber
                requiredOperator={requiredOperator}
                requiredOperands={requiredOperands}
                setRequiredOperands={setRequiredOperands}
                expression={expression}
                setExpression={setExpression}/>}
  </div>
  );
}
