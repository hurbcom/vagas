import React, { Component } from 'react'
import './style.less'

export default class Benefits extends Component {
  constructor () {
    super()
    this.state = {
      benefits: [
        {
          key: 'Local',
          value: 'Rio de Janeiro',
          obs: 'Se você é de fora não se preocupe nós temos a HU-Tech HOUSE onde você pode ficar nos primeiros meses para curtir o Rio e se acostumar com o sol carioca',
        },
        { key: 'Regime', value: 'CLT' },
        { key: 'Período', value: 'Integral' },
        { key: 'Contratação', value: 'imediata' },
        { key: 'Vale refeição', value: true },
        { key: 'Plano de saúde', value: true },
        { key: 'Plano odontológico', value: true },
        { key: 'Seguro de vida', value: true },
        { key: 'Auxílo Creche', value: true },
      ],
    }
  }
  render () {
    return (
      <aside className="hu-benefits">
        <div className="page-header">
          <h3>Benefícios e condições</h3>
        </div>
        <div className="list-group">
          { this.state.benefits.map((benefit, index) => (
            <div key={index} className="list-group-item">
              <div className="row">
                <div className="col-md-5">
                  <strong>{benefit.key}</strong>
                </div>
                <div className="col-md-7">
                  <p>{benefit.value === true ? (<i className="fa fa-check text-success" aria-hidden="true"></i>) : benefit.value}</p>
                  { benefit.obs ? (
                    <small className="text-info">{benefit.obs}</small>
                  ) : null }
                </div>
              </div>
            </div>
          )) }
          <div className="list-group-item">
            <p>Além de um grande número de parcerias com Instituições de Ensino, Idiomas e Lazer que possibilitam descontos <strong>muuuuito</strong> interessantes para nossos tripulantes.</p>
          </div>
        </div>
      </aside>
    )
  }
}
