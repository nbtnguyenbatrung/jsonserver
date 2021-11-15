import React from "react";
import axios from "axios";
import Container from "./Container";
import '../css/cetogory.css';


class Nodejs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          book : [],
          showbook : [] ,
          currenpage : 1
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
              book : res.data,
              showbook : res.data.slice(0,3)
            })
        })
        .catch(err => {
          console.log(err);
        });
      }

      Pagination = (number) =>{
        var arr = [];
        for(let i = 1 ; i<=number ;i++){
          arr.push(i);
        }
        return arr.map((index)=>{
          return (
              <button className={index === this.state.currenpage ? "page__currenpage" : ""} key={index} onClick={()=>{
                  this.nextpage(index)
              }}>{index}</button>
          )
        })
      }
  
      nextpage = (number)=>{
        let end = number*3;
        this.setState({
          showbook : this.state.book.slice(end-3 , end),
          currenpage : number
        })
      }

    render(){
        var totalpage1 = Math.floor(this.state.book.length/3 )
        var  totalpage = totalpage1*3 < this.state.book.length ? totalpage1 + 1 : totalpage1
        const bookget = this.state.showbook.map((book,index) => {
            return(
                    <div className="box__cetogory--item" key={book.id}>
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
                <div className="page">
                  {this.Pagination(totalpage)}
                </div>
                
            </div>
        );
    }
}


export default Nodejs;