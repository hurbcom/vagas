import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from 'components/Header'
import Positions from 'components/Positions'
import Presentation from 'components/Presentation'
import Footer from 'components/Footer'
import { fetchPositions } from 'actions/Positions'

class Hiring extends Component {

  componentWillMount () {
    this.props.fetchPositions()
  }

  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <Presentation />
          <Positions positions={this.props.positions} />
        </div>
        <Footer />
      </div>
    )
  }
}

Hiring.propTypes = {
  positions: PropTypes.object.isRequired,
  fetchPositions: PropTypes.func.isRequired,
}

function mapState (state) {
  return {
    positions: state.positions,
  }
}

function mapDispatch (dispatch) {
  return {
    fetchPositions: bindActionCreators(fetchPositions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(Hiring)
