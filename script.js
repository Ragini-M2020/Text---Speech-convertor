let speech = new SpeechSynthesisUtterance();
let voices=[];  

let voiceselect = document.querySelector("select"); //for chossing diff voice
window.speechSynthesis.onvoiceschanged=() =>{
    voices= window.speechSynthesis.getVoices();
    // getvoices provides all the availble  devices on the device
    speech.voice= voices[0]; // by default speak in the 1 voice


    // for disaplying each voices in the dropdown
    voices.forEach((voice,i)=> (voiceselect.options[i] = new Option(voice.name , i)));
 };
    voiceselect.addEventListener("change",() =>{
    speech.voice= voices[voiceselect.value];

   });

 document.querySelector("button").addEventListener("click", ()=> { // event listening

    speech.text = document.querySelector("textarea").value;//query selector selects the 
                                                           //specified elements here textarea
    window.speechSynthesis.speak(speech);
});