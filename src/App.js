import './App.css';
import Header from './components/Header';
import Head from './components/Head';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Websites from './components/Websites';
function App() {
  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      bottom: el.offsetHeight
    };
  }
window.addEventListener('scroll',e=>{
const header=getOffset(document.getElementById('header'))
const head=getOffset(document.getElementById('start'))
const aboutme=getOffset(document.getElementById('omnie'))
const websites=getOffset(document.getElementById('strony'))
const portfolio=getOffset(document.getElementById('portfolio'))
const contact=getOffset(document.getElementById('kontakt'))



if(window.scrollY===0){
document.title="Profesjonalne strony internetowe dla firm i klientów indywidualnych. Nasze usługi obejmują projektowanie responsywnych stron www zgodnych z najnowszymi standardami oraz optymalizację pod kątem SEO.";
}
else if(window.scrollY>header.top&&window.scrollY<header.bottom+header.top){
  document.title="Profesjonalne strony internetowe dla firm i klientów indywidualnych. Nasze usługi obejmują projektowanie responsywnych stron www zgodnych z najnowszymi standardami oraz optymalizację pod kątem SEO.";
  }
  else if(window.scrollY>head.top&&window.scrollY<head.bottom+head.top){
    document.title="Profesjonalne strony internetowe dla firm i klientów indywidualnych. Nasze usługi obejmują projektowanie responsywnych stron www zgodnych z najnowszymi standardami oraz optymalizację pod kątem SEO.";
    }
    else if(window.scrollY>aboutme.top&&window.scrollY<aboutme.bottom+aboutme.top){
      document.title="O mnie - PW-Websites.pl";
      }
      else if(window.scrollY>websites.top&&window.scrollY<websites.bottom+websites.top){
        document.title="Strony internetowe - PW-Websites.pl";
        }
        else if(window.scrollY>portfolio.top&&window.scrollY<portfolio.bottom+portfolio.top){
          document.title="Portfolio - PW-Websites.pl";
          }
          else if(window.scrollY>contact.top&&window.scrollY<contact.bottom+contact.top){
            document.title="Kontakt - PW-Websites.pl";
            }
             


})

  return (
    <div className="App">

   <Header/>
   <Head/>
   <AboutMe/>
   <Websites/>
   <Portfolio/>
   <Contact/>
    </div>
  );
}

export default App;
