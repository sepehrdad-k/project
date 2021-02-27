const form=document.getElementById("form")
const btn=document.getElementById("btn_sub")
const naam_input=document.getElementById("naam")
const subject_input=document.getElementById("subject")
const matn_input=document.getElementById("matn")
const alertsucces=document.getElementById("alert1")
const alertfail=document.getElementById("alert2")
const alerterror=document.getElementById("alert3")
function send(evt){
    evt.preventDefault()
    if(Boolean(naam_input.value)===true && Boolean(subject_input.value)===true && Boolean(matn_input.value)===true){
        let payload={
            naam : naam_input.value,
            subject : subject_input.value,
            matn : matn_input.value,
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(function(){
        alertfail.style.display="none"
        alertsucces.style.display="block"
        alerterror.style.display="none"
      })
      .catch(function(){
        alertfail.style.display="none"
        alertsucces.style.display="none"
        alerterror.style.display="block"
      });
    }
    else{
        alertfail.style.display="block"
        alertsucces.style.display="none"
        alerterror.style.display="none"
    }
}
form.addEventListener("submit",send)
btn.addEventListener("click",send)