import React from 'react';
import './App.css';
import axios from 'axios';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      student : []
    }
  }
  componentDidMount(){
    axios({
      method : 'GET' ,
      url : 'http://localhost:3000/students' ,
      data : null 
    })
    .then(res => {
        this.setState({
          student : res.data
        })
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  
  render(){
    const studentget = this.state.student.map((student,index) => {
      return (
        <tr key= {student.id}>
        <td>{student.id}</td>
        <td>{student.fullName}</td>
        <td>{student.class}</td>
        <td>{student.score}</td>
      </tr>
      );
    });

    return (
      <div className="App">
          <h1> Danh sách các học sinh  </h1>
          <table border = {1} cellPadding={2} cellSpacing={3}>
            <tbody>
              <tr>
                <th> ID </th>
                <th> FullName </th>
                <th> Class </th>
                <th> Score </th>
              </tr>
              {studentget}
            </tbody>
          </table>
      </div>
    );
  }
  
}

export default App;
