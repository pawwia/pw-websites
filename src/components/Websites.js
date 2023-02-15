import React from 'react';
import './Websites.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import w1 from '../images/w1.jpg'
import w2 from '../images/w2.jpg'
import w3 from '../images/w3.jpg'
import w4 from '../images/w4.jpg'
import w5 from '../images/w5.jpg'
import w6 from '../images/w6.jpg'



const Websites = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (<div className="Websites" id="strony">
<div className="part1Websites">
    <div className="leftpart1">
<h3> Strona internetowa - klucz do sukcesu w dobie cyfrowej</h3>
<p>W dzisiejszych czasach posiadanie strony internetowej jest niezbędne dla każdej firmy, która chce być widoczna i dostępna dla swoich klientów online. Strona internetowa to wizytówka firmy w sieci, dająca możliwość prezentacji oferty i budowania wizerunku marki. Posiadanie strony internetowej pozwala także na łatwiejszy kontakt z klientami i umożliwia im łatwy dostęp do informacji o firmie i jej produktach lub usługach. W dobie cyfrowej, posiadanie strony internetowej to nie tylko wygoda dla klientów, ale także konieczność dla każdej poważnej i rozwijającej się firmy.</p>
    </div>
    <div className="rightpart1"></div>
</div>
<div className="part2Websites">

<h2> Zalety posiadania strony internetowej</h2>
<Carousel responsive={responsive}
infinite={true}
autoPlay={true}
>
<div className="advWebsite"><div className="image"><img src={w1} alt="wizytowka firmy" /></div><div className="title"><h4>Wizytówka firmy:</h4></div><div className="content"><p>Strona internetowa jest wizytówką firmy w sieci, pozwalającą na prezentację oferty i budowanie wizerunku marki.</p></div></div>
<div className="advWebsite"><div className="image"><img src={w2} alt="Dostępność" /></div><div className="title"><h4>Dostępność 24/7:</h4></div><div className="content"><p>Strona internetowa jest dostępna przez całą dobę, co pozwala klientom na uzyskanie informacji o firmie i jej produktach lub usługach w dowolnym momencie.</p></div></div>
<div className="advWebsite"><div className="image"><img src={w3} alt="Łatwiejszy kontakt z klientami:" /></div><div className="title"><h4>Łatwiejszy kontakt z klientami:</h4></div><div className="content"><p>Posiadanie strony internetowej umożliwia łatwiejszy kontakt z klientami, dzięki czemu firma może lepiej poznać ich potrzeby i odpowiadać na ich pytania.</p></div></div>
<div className="advWebsite"><div className="image"><img src={w4} alt="Możliwość dotarcia do większej liczby odbiorców" /></div><div className="title"><h4>Możliwość dotarcia do większej liczby odbiorców</h4></div><div className="content"><p>Strona internetowa pozwala na dotarcie do szerszej grupy odbiorców niż tylko lokalni klienci.</p></div></div>
<div className="advWebsite"><div className="image"><img src={w5} alt="Pozycjonowanie w wynikach wyszukiwania" /></div><div className="title"><h4>Pozycjonowanie w wynikach wyszukiwania</h4></div><div className="content"><p>Dzięki odpowiedniej optymalizacji strony internetowej, firma może zwiększyć swoją widoczność w wynikach wyszukiwania, co pozwala na lepsze dotarcie do potencjalnych klientów.</p></div></div>
<div className="advWebsite"><div className="image"><img src={w6} alt="Oszczędność czasu i pieniędzy:" /></div><div className="title"><h4>Oszczędność czasu i pieniędzy:</h4></div><div className="content"><p>Posiadanie strony internetowej pozwala na zaoszczędzenie czasu i pieniędzy, ponieważ umożliwia automatyzację wielu procesów, takich jak np. składanie zamówień czy udzielanie odpowiedzi na często zadawane pytania.</p></div></div>


</Carousel>
</div>


    </div>  );
}
 
export default Websites;