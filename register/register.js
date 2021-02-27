const form=document.getElementById("myform")
const btn=document.getElementById("formbtn")
const user=document.getElementById("username")
const password=document.getElementById("pass_word")
const email=document.getElementById("email")
const number=document.getElementById("number")
const check=document.getElementById("mycheck")
const alertsuccess=document.getElementById("alert3")
const alertuser=document.getElementById("alert1")
const alertpass=document.getElementById("alert2")
const alertfail=document.getElementById("alert4")
const alertcheck=document.getElementById("alert5")
const alertemail=document.getElementById("alert6")
const alertnumber=document.getElementById("alert7")
function register(evt){
    evt.preventDefault()
    if(Boolean(user.value)===true && Boolean(password.value)===true && Boolean(email.value)===true && Boolean(number.value)===true){
        alertfail.style.display="none"
        if(check.checked===true){
            alertcheck.style.display="none"
            let a=uservalid()
            let b=passvalid()
            let c=emailvalid()
            let d=numbervalid()
            if(a==="valid" && b==="valid" && c==="valid" && d==="valid"){
                alertsuccess.style.display="block"
                alertuser.style.display="none"
                alertpass.style.display="none"
                alertemail.style.display="none"
                alertnumber.style.display="none"
                alertfail.style.display="none"
                alertcheck.style.display="none"
            }
        }
        else{
        alertsuccess.style.display="none"
        alertuser.style.display="none"
        alertpass.style.display="none"
        alertemail.style.display="none"
        alertnumber.style.display="none"
        alertfail.style.display="none"
        alertcheck.style.display="block"
        }
    }
    else{
        alertsuccess.style.display="none"
        alertuser.style.display="none"
        alertpass.style.display="none"
        alertemail.style.display="none"
        alertnumber.style.display="none"
        alertfail.style.display="block"
        alertcheck.style.display="none"
    }
}           
form.addEventListener("submit",register)
btn.addEventListener("click",register)
function uservalid(){
    if(user.value.length>10){            
        alertuser.style.display="block"
        alertsuccess.style.display="none"
    }
    else{
        alertuser.style.display="none"
        return "valid"
    }
}
function passvalid(){
    if(password.value.toString().length<6){
        alertpass.style.display="block"
        alertsuccess.style.display="none"
    }
    else{
        alertpass.style.display="none"
        return "valid"
    }
}
function emailvalid(){
    if(email.value.endsWith("@yahoo.com") || email.value.endsWith("@gmail.com")){
        alertemail.style.display="none"
        return "valid"
    }
    else{
        alertemail.style.display="block"
        alertsuccess.style.display="none"
    }
}
function numbervalid(){
    let num=parseInt(number.value,10)
    if(Number.isInteger(num)==false || number.value.length!==11){
        alertnumber.style.display="block"
        alertsuccess.style.display="none"
    }
    else{
        alertnumber.style.display="none"
        return "valid"
    }
}
