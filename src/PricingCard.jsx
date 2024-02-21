



function PricingCard(props){

    
return(
<div className="pricingCard">
    <h5>{props.title}</h5>
    <h2>{props.price}</h2>
    
    
    <div className="space">
        
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
        
         <div> 
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
         
       </div>
      )}
    
</div>
<button type="button" className="btn btn-primary btn-lg btn-block">button</button>
    </div>

   


 
 )                                 
}


export default PricingCard;