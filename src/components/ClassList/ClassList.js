import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(results => {
      this.setState({
        students: results.data
      })
    })
  }

  render() {
    let studentNames = this.state.students.map((ele, i) => (
        <Link to={`/student/${ele.id}`} key={i}>
          <h3>{ele.first_name} {ele.last_name}</h3>
        </Link>
    ))
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentNames}
      </div>
    )
  }
}