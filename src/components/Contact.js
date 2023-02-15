import React, {useState} from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const sendForm=async(url,data)=>{

    const resp=await fetch(url,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }     });
      const json = await resp.json();
        return json;
    }

const Contact = () => {
    const[email,setEmail]=useState("");
    const[text,setText]=useState("");
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(null);
    const[message,setMessage]=useState(null);
    const[disabledButton,setDisabledButton]=useState(false);


    const[rules,setRules]=useState(false);
const sendEmail=()=>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
setError(null);
setMessage(null)
setLoading("Trwa ładowanie...")
if (email.match(validRegex) )
{
if (text.length>10)
{
if (rules===true)
{
const data={
    email:email,
    text:text
}
const sform= sendForm("https://pw-websites.pl/emails/sendEmail.php",data)
if(sform)
{
    sform.then((result)=>{
if(result.connected===true)
{
setMessage("Wiadomość wysłana. Skontaktujemy się z Państem najszybciej jak to będzie mozliwe. ")
setError(null)
setLoading(null)
setEmail("");
setText("")
setRules(false)
setDisabledButton(true)
}
else{ setMessage(result.error)
setError(null)
setLoading(null)
setEmail("");
setRules(false)

}
    })
}
return null;
}
else
{
    setError("Nie wyrazono zgody na przetwarzanie danych osobowych. Spróbuj ponownie.");
    setMessage(null)
    setLoading(null)
}
}
else 
{
    setError("Wprowadzono zbyt krótką wiadomość. Spróbuj ponownie.")
    setMessage(null)
    setLoading(null)
}
}
else
{
    setError("Wprowadzono niepoprawny adres e-mail. Spróbuj ponownie");
    setMessage(null)
    setLoading(null)
}


}
    return ( <div className="contact" id='kontakt'>
<div className="Contactleft"></div>
<div className="ContactRight">
    <h2> Kontakt</h2>
    <p>
    Zapraszamy do skontaktowania się z nami poprzez poniższe dane kontaktowe lub formularz. Chętnie odpowiemy na wszystkie pytania i pomożemy w realizacji Państwa projektów stron internetowych. Nie wahajcie się nas o coś zapytać - jesteśmy tu, aby pomóc!

    Skontaktuj się ze mną poprzez poniższy formularz kontaktowy, e-mail lub telefon. Chętnie odpowiem na wszystkie pytania i pomogę w realizacji Twojej strony internetowej.
    </p>
   <div className="conElements">

   <div className="conElement"><FontAwesomeIcon icon={faEnvelope} size="2x"/>  <a href="emailto:kontakt@pw-design.pl">kontakt@pw-design.pl</a></div>
    <div className="conElement"><FontAwesomeIcon icon={faPhone} size="2x"/> <a href="tel:+48663102525">+48 663 102 525</a></div>

   </div>
   <h3>Formularz kontaktowy</h3>
   <div className="formCon">
   Adres e-mail: <input   className="focusText"  placeholder="Jan@kowalski.pl" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
   Treść:
<textarea tabindex="0" className="focusText" value={text} placeholder="Opisz jak najdokładniej swój problem." onChange={(e)=>setText(e.target.value)}></textarea>
<input type="checkbox" value={rules} onChange={e=>setRules(e.target.checked)}  id="rules"/>
<label for="rules">Zgadzam się na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych w celu kontaktu związanego z moimi pytaniami i potrzebami. Potwierdzam, że zapoznałem się z polityką prywatności i wyrażam zgodę na przetwarzanie moich danych osobowych.</label>
  {error?<div className='error'>{error}</div>:null}
  {loading?<div className='loading'>{loading}</div>:null}
  {message?<div className='message'>{message}</div>:null}

  <button className={disabledButton||loading?"disabled":null} onClick={sendEmail}>Wyślij email</button>
  
   </div>

</div>
    </div> );
}
 
export default Contact;