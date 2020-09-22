import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards"
import Sdat from "./Sdata";
import "./index.css";

 


ReactDOM.render(
  <>

<h1 className="heading_style ">List Of top five Netflix series </h1>

 <Card
  imgsrc={Sdat[0].imgsrc}
 title={Sdat[0].title}
   snam={Sdat[0].snam}
   link={Sdat[0].link}
 />
 <Card
  imgsrc={Sdat[1].imgsrc}
 title={Sdat[1].title}
   snam={Sdat[1].snam}
   link={Sdat[1].link}
 />
 <Card
  imgsrc={Sdat[2].imgsrc}
 title={Sdat[2].title}
   snam={Sdat[2].snam}
   link={Sdat[2].link}
 />

<Card
  imgsrc={Sdat[3].imgsrc}
 title={Sdat[3].title}
   snam={Sdat[3].snam}
   link={Sdat[3].link}
 />

<Card
  imgsrc={Sdat[4].imgsrc}
 title={Sdat[4].title}
   snam={Sdat[4].snam}
   link={Sdat[4].link}
 />
  </>,
  document.getElementById('root')
);
