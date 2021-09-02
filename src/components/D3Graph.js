import React from 'react';
import '../App.css'


export default class D3Graph extends React.Component {
  
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  shouldComponentUpdate(nextProps) {
    return false
  }

  componentDidMount() {
    this.drawGraph()
  }

  drawGraph() {
    // Do cola stuff here
  }

  render() {
    return(<div id='D3Graph_main_container' className={this.props.className} ref={this.myRef} />)
  }
}