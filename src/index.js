import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards"
import Sdat from "./Sdata";
import "./index.css";

 


ReactDOM.render(
  <>

<h1 className="heading_style ">List Of top five Netflix series </h1>

    {Sdat.map((value) => {
      return (
        <Card
  imgsrc={value.imgsrc}
 title={value.title}
   snam={value.snam}
   link={value.link}
 />
      )
    }

    )}


  </>,
  document.getElementById('root')
);
