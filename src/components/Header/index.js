import React, { Component } from 'react'
import './style.less'

export default class Header extends Component {
  render () {
    return (
      <header className="hu-header">
        <div className="container">
          <h1 className="hu-logo">
            Embarque HU
          </h1>
          <h2 className="hu-title">
            Faça parte do time HU
          </h2>
          <div className="hu-highlights">
            <div className="row">
              <div className="col-md-3 hu-highlight">
                <strong>180.000</strong> hotéis
              </div>
              <div className="col-md-3 hu-highlight">
                <strong>18 milhões</strong> de usuários
              </div>
              <div className="col-md-3 hu-highlight">
                <strong>A cada 8 segundos</strong> uma nova diária
              </div>
              <div className="col-md-3 hu-highlight">
                <strong>20 milhões</strong> de buscas mensais
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
