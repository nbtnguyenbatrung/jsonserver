import React from "react";
import axios from "axios";
import '../css/Detail.css'
class Detail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          book : []
        }
      }

      componentDidMount(){
        axios({
          method : 'GET' ,
          url : 'http://localhost:3000/books?id='+this.props.id ,
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
                <div className="Detail">
                    <div className="Detail__img">
                        <img src={require(`../image/${book.image}`).default} alt="HTML" />
                    </div>
                    <div className="Detail__information">
                        <div className = "Detail__information--name">
                            <h1>{book.Name}</h1> 
                        </div>
                        <div className="Detail__information--author">
                            <span> {book.author} </span>
                        </div>
                        <div className="Detail__information--content">
                            {book.content}
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div>
                {bookget}
            </div>
            
        );
    }
    
}

export default Detail;