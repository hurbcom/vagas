import React, { Component, PropTypes } from 'react'
import Benefits from 'components/Benefits'
import { StickyContainer, Sticky } from 'react-sticky'
import './style.less'

export default class Positions extends Component {
  render () {
    let { positions } = this.props
    let Content = (<span>Carregando... </span>)

    if (!positions.isFetching) {
      Content = positions.list.map((position, index) => {
        return (
          <div key={index} className="panel panel-default">
            <div className="panel-heading">
              <h3>
                <span className="hu-position-team">{position.team}</span> <span className="hidden-xs">-</span> <span className="hu-position-quantity">{position.quantity > 1 ? `${position.quantity} vagas` : '1 vaga'}</span>
                <a className="pull-right btn btn-primary hu-btn-apply hidden-xs" href={`mailto:recrutamento@hotelurbano.com.br?subject=${position.team}`}>Aplicar</a>
              </h3>
            </div>

            <div className="panel-body">
              <div className="hu-position-description">
                <p>{position.description}</p>
                <p>{position.cta}</p>
              </div>

              {position.mustHave && position.mustHave.length ? (
                <div>
                  <h4>O que é preciso saber:</h4>
                  <ul>
                    {position.mustHave.map((item, index) => (<li key={index}>{item}</li>))}
                  </ul>
                </div>
              ) : null}

              {position.shouldHave && position.shouldHave.length ? (
                <div>
                  <h4>O que é um extra:</h4>
                  <ul>
                    {position.shouldHave.map((item, index) => (<li key={index}>{item}</li>))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="panel-footer visible-xs-block">
              <a className="btn btn-block btn-primary hu-btn-apply" href={`mailto:recrutamento@hotelurbano.com.br?subject=${position.team}`}>Aplicar</a>
            </div>

          </div>
        )
      })
    }

    return (
      <main className="hu-positions">
        <div className="page-header text-center">
          <h2>
            Vagas
          </h2>
        </div>
        <StickyContainer>
          <div className="row">
            <div className="col-md-8">
              {Content}
            </div>
            <div className="col-md-4">
              <Sticky isActive={window.outerWidth > 500}>
                <Benefits />
              </Sticky>
            </div>
          </div>
        </StickyContainer>
      </main>
    )
  }
}

Positions.propTypes = {
  positions: PropTypes.object.isRequired,
}
