import React, { Component } from 'react'
import teamPic from './assets/team.jpg'
import './style.less'

export default class Presentation extends Component {
  render () {
    return (
      <section className="hu-description">
        <div className="page-header text-center">
          <h2>Por que o HU?</h2>
        </div>
        <div className="row">
          <div className="col-md-5">
            <img className="img-responsive" src={teamPic} />
          </div>
          <div className="col-md-7">
            <p>Uma das maiores agências de turismo online do mundo precisa do seu talento.</p>
            <p>Procuramos pessoas inteligentes e ágeis como você para nos ajudar a resolver desafios de escalabilidade e performance. Trabalhamos com diversas linguagens, como Python, Ruby e Scala, além de tecnologias como Elastic Search, Hadoop, Redshift, acreditamos na filosofia "release early, release often".</p>
            <p>A visão do Hotel Urbano é realizar o match dos nossos usuários com a viagem dos sonhos.</p>
          </div>
        </div>
      </section>
    )
  }
}
