import React from "react";
import '../css/Detail.css'

class Detail extends React.Component{
    render(){
        const books = this.props.books;
        console.log(books)
        const book = books.map((book,Index)=>{
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
            {book}
        </div>
        
    );
    }
}

export default Detail;