import React from 'react';
import './Head.css'
import ReactTypingEffect from 'react-typing-effect';


const Head = () => {
    return (  <>
    <div className="head" id="start">
<div className="headLeft">
<h1> 
  <ReactTypingEffect
        text={["Strony internetowe", "Aplikacje internetowe", "Systemy rezerwacji"]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={1000}
        typingDelay={1000}
      /></h1>


<p>Cześć! Jestem Paweł i zajmuję się tworzeniem stron internetowych w tym stron typu one-page, wizytówek, aplikacji internetowych itp. Moim priorytetem jest pełne zadowolenie moich klientów ze współpracy ze mną. Stale utrzymuję konakt oraz mam elastyczne podejście do Waszych potrzeb :) Kazdy projekt realizuję z jak największą starannością i precyzją.</p>
</div>
<div className="headRight"></div>
    </div>
    
    </>);
}
 
export default Head;