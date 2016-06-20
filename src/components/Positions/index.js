import React, { Component, PropTypes } from 'react'
import Benefits from 'components/Benefits'
import { StickyContainer, Sticky } from 'react-sticky'
import './style.less'

export default class Positions extends Component {
  render () {
    let { positions } = this.props
    let Content = (<span />)

    if (!positions.isFetching) {
      Content = positions.list.map((position, index) => {
        console.log(position)
        return (
          <div key={index} className="panel panel-default">
            <div className="panel-heading">
              <h3>
                {position.team} - {position.quantity > 1 ? `${position.quantity} vagas` : '1 vaga'}
                <a className="pull-right btn btn-primary hu-btn-apply" href={`mailto:recrutamento@hotelurbano.com.br?subject=${position.team}`}>Aplicar</a>
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
              <Sticky>
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

// { positions.list.map((position, index) =>
//   <h1 key={index}>{position.title}</h1>
// )}
