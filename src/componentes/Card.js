import React from 'react'


const Card = ({lugarForm}) => {
  return (
      <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col m6 s12">
                      <div className="card-panel white col s12">
                          <div className="black-text">
                              <h2>El clima de  {lugarForm.ciudad}, {lugarForm.pais} es:</h2>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Card