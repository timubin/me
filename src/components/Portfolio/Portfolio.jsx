import React, { useContext, useState } from 'react'
import "./portfolo.css"
import data from './data'
import { themeContext } from "../../Context";



const Portfolio = () => {

  const [see, setSee] = useState(6);
  const loadMore = () =>{
    setSee(see+see)
  }
  const slice = data.cardData.slice(0, see)

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
<div className=" fullSection container boder pt-10 mx-auto text-white text-center mt-5" id='portfolio'>

<span style={{ color: darkMode?'white': ''}} >Recent Projects</span>
      <br /><span>Portfolio</span>

<div className="portfolio-body ">
  
  {slice.map((items, index)=>{
    return(
      <div className="portfolio" key={index}> 
      <div className="portfolioDetale   items-center justify-center ">
      <a className="mainPortfolio "  href={items.link} target="_blank" rel="noopener noreferrer">  
      <h3> {items.title} </h3>
      <p> {items.desc}</p>
       <img src={items.img} />   
  </a> 

  
</div>

</div>
    )
  })}




</div>

<button  className="button n-button" onClick={()=>loadMore()}>See More</button>
</div>
    </>
  )
}

export default Portfolio