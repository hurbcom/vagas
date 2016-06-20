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
          type: 'location',
          obs: 'Se você é de fora não se preocupe nós temos a HU-Tech HOUSE onde você pode ficar nos primeiros meses para curtir o Rio e se acostumar com o sol carioca',
        },
        { key: 'Regime', value: 'CLT' },
        { key: 'Período', value: 'Integral', type: 'employmentType' },
        { key: 'Contratação', value: 'imediata' },
        { key: 'Vale refeição', value: true, type: 'jobBenefits' },
        { key: 'Plano de saúde', value: true, type: 'jobBenefits' },
        { key: 'Plano odontológico', value: true, type: 'jobBenefits' },
        { key: 'Seguro de vida', value: true, type: 'jobBenefits' },
        { key: 'Auxílo Creche', value: true, type: 'jobBenefits' },
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
            <div key={index} className="list-group-item" itemProp={benefit.type}>
              <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-6">
                  <strong>{benefit.key}</strong>
                </div>
                <div className="col-md-7 col-sm-7 col-xs-6">
                  <p>{benefit.value === true ? (<i className="fa fa-check text-success" aria-hidden="true"><span className="hidden">sim</span></i>) : benefit.value}</p>
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
