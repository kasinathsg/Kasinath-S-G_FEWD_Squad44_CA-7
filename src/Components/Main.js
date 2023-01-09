import {useState}from "react";
import React from "react";
import Card from "./Card";
import axios from "axios";
import "./style.css"
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter" )

        {           
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(

        <>
            <div className="header">

                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name And Hit Enter....."
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyDown={searchBook}/>
                    </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main;