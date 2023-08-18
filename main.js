var name2=document.getElementById("name");
var email=document.getElementById("email");

var btn=document.getElementById("btn1");

btn.addEventListener('click', function() {
    var name1 = name2.value;
    var email1 = email.value;
    let myobj={
        name:name1,
        email:email1
    };
    let myobj_seri=JSON.stringify(myobj);
    
    localStorage.setItem("myObj",myobj_seri);

});