import React from 'react';
import "./App.css";
import PricingCard from './PricingCard';




function App() {
const data=[{
 cardtitle:"FREE",
 cardprice:"$0/month",
 checks:["Single User",
 "50GB Storage",
 "Unlimited Public Project",
 "Community Access"],
 unchecks:["Unlimited Private Projects",
 "Dedicated Phone Support",
 "Free Subdomain",
 "Monthly Status Reports"]

},

{
  cardtitle:"PLUS",
 cardprice:"$9/month",
 checks:["5 User",
 "50GB Storage",
 "Unlimited Public Project",
 "Community Access",
 "Unlimited Private Projects",
 "Dedicated Phone Support",
 "Free Subdomain"],
 unchecks:["Monthly Status Reports"]

},
{
  cardtitle:"PRO",
 cardprice:"$49/month",
 checks:["Unlimited User",
"50GB Storage",
 "Unlimited Public Project",
 "Community Access",
 "Unlimited Private Projects",
 "Dedicated Phone Support",
 "Free Subdomain",
 "Monthly Status Reports"],
 unchecks:[]

},

];

  return (
    <div className="container">
      <h1>REACT PRICE CARD</h1>
    <div className="box">
       
            
            {data.map((dataItem, index) =>(<PricingCard 
            key={index} 
            title={dataItem.cardtitle}
             price={dataItem.cardprice}
              checks={dataItem.checks} 
              unchecks={dataItem.unchecks}
              />
              
             ))};
             

         </div>
         
</div>
  );
           
};
export default App;
