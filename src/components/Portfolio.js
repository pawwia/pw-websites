import React from 'react';
import './Portfolio.css';
import mme from '../images/mme.jpg'
import mmep from '../images/mmep.jpg'
import comeko from '../images/comeko.jpg'
import comekop from '../images/comekop.jpg'
const Portfolio = () => {
    return (<div className="Portfolio" id="portfolio">
<h3> Portfolio</h3>

<div className="portElements">
   
    <div className='element'>
<div className='ElementInner'>

<div className='FirstSide'>

<div className='left'>
<h4>www.mmevents.pl</h4>

</div>
<div className='right'><img src={mme} alt="mmevents.pl" /></div>
</div>
<div className='SecondSide'>
<h4>www.mmevents.pl</h4>
<a href="https://mmevents.pl/">Zobacz stronę!</a>
<img src={mmep} alt="mmevents.pl" />
</div>
</div>
</div>


<div className='element'>
<div className='ElementInner'>

<div className='FirstSide'>

<div className='left'>
<h4>www.comeko.pl</h4>

</div>
<div className='right'><img src={comeko} alt="mmevents.pl" /></div>
</div>
<div className='SecondSide'>
<h4>www.comeko.pl</h4>
<a href="https://comeko.pl/">Zobacz stronę!</a>
<img src={comekop} alt="mmevents.pl" />
</div>
</div>
</div>
    
    </div>    
</div>

 );
}
 
export default Portfolio;