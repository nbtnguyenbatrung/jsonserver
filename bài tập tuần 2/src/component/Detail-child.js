import axios from "axios";
import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import Detail from "./Detail";

const  Detailchild =()=>{

    const [books,setbooks] = useState([]);
    let {id} = useParams();

    useEffect (()=>{
        const fetch = async ()=>{
            const res =await axios.get('http://localhost:3000/books?id='+id);
            setbooks(res.data);
        }

        fetch();
    },[]);

    return(
        <Detail books={books}/>
    );
};

export default Detailchild ;