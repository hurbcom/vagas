import React, { Component } from 'react'
import './style.less'

export default class Footer extends Component {
  render () {
    let year = new Date().getUTCFullYear()
    return (
      <footer className="hu-footer">
        <div className="container">
          Hotel Urbano © Copyright { year }
        </div>
      </footer>
    )
  }
}
