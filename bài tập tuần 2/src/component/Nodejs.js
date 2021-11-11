import React from "react";
import axios from "axios";
import Container from "./Container";
import '../css/cetogory.css';


class Nodejs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          book : []
        }
      }

      componentDidMount(){
        axios({
          method : 'GET' ,
          url : 'http://localhost:3000/books?cetogory=Nodejs' ,
          data : null 
        })
        .then(res => {
            this.setState({
              book : res.data
            })
        })
        .catch(err => {
          console.log(err);
        });
      }

    render(){
        const bookget = this.state.book.map((book,index) => {
            return(
                    <div className="box__cetogory--item">
                        <Container name={book.Name} img={book.image} 
                        author={book.author ? "By " + book.author : ""} 
                        id = {book.id} />
                    </div> 
            );
        });
        return(
            <div>
                <p style={{textAlign: 'center'}}> Nodejs Books </p>
                <div className="box__cetogory">
                    {bookget}
                </div>
                
                
            </div>
        );
    }
}


export default Nodejs;