
import React from 'react';
import PropTypes from "prop-types";


function PricingCard(props){
console.log(props)
    
return(
<div className="pricingCard">
    <h5>{props.title}</h5>
    <h2>{props.price}</h2>
    
    
    <div className="content">
        
        <ul>

          {props.checks.map((item, index) => (

            <li 
            key={index}
             className="checkedItem" >
                <i className="fa fa-check"></i> 
              {item}

          </li>

          ))}
        </ul>
      
      {props.unchecks.length > 0 && (
        
        
          <ul>

            {props.unchecks.map((item, index) => (
              <li
               key={index}
               className="uncheckedItem" >
                <i className="fa fa-times"  ></i>

            {item}

              </li>
 ))}
         </ul>
         
    
      )}
    
    <button type="button" className="btn btn-primary btn-lg btn-block centerButton">button</button>

    </div>
    </div>
   


 
 )                                 
}


export default PricingCard;


//PropTypes validation
PricingCard.proTypes={
  title:PropTypes.string.isRequired,
  price:PropTypes.string.isRequired,
  checks:PropTypes.arrayOf(PropTypes.string).isRequired,
  unchecks:PropTypes.arrayOf(PropTypes.string).isRequired
};
