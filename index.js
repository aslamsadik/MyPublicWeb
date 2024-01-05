document.body
function validate(){
    var Name= document.getElementById("validationCustom01");
    var User=document.getElementById("validationCustomUsername")
    var city=document.getElementById("validationCustom03");
    var state=document.getElementById("validationCustom04");

    if(Name.value=="" || User.value==""|| city.value==""|| state.value==""){
        alert("no value")
    }else{
        alert("yes")
    }
};
