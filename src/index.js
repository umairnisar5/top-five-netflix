import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards"
import Sdat from "./Sdata";

 


ReactDOM.render(
  <>

<h1 className="head_style">List Of top 5 Netflix series in 2020 </h1>

 <Card
  imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwUlzizz3RjK6hTg9cfTWoMU87Zsu2VVLExw&usqp=CAU"
 title="A Netflix Orignal series" 
   snam="DARK"
   link="https://www.netflix.com/pk/title/80100172"
 />
 <Card
  imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy_ESRytQHam5yW_puE4oZ6VU6N9J8NrbH0Q&usqp=CAU"
 title="A Netflix Orignal series" 
   snam="ERTUGRAL GHAZI"
   link="https://www.netflix.com/pk/title/80127001"
 />
 <Card
  imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwUlzizz3RjK6hTg9cfTWoMU87Zsu2VVLExw&usqp=CAU"
 title="A Netflix Orignal series" 
   snam="OSMAN GHAZI"
   link="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbw6bNHtuzp180_ZKw52cybiXtkFLPNV4hTg&usqp=CAU"
 />
  </>,
  document.getElementById('root')
);
