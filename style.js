var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}

function check1(){
    if (document.getElementById("swt").checked == true){
        document.getElementById("r_date").disabled=true;
        document.getElementById("rr").className = 'rr';
    }
}
function check2(){
    if (document.getElementById("rwt").checked == true){
        document.getElementById("r_date").disabled=false;
        document.getElementById("rr").className = 'rr12';
      }
}
function chgbk(){
    document.getElementById("ff").className="f1";
    document.getElementById("ff").reset();
}
function chgbk1(){
    document.getElementById("ff").className="f2";
    document.getElementById("ff").reset();
}
function store(){
 
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    document.getElementById("du").innerHTML=email;
    document.getElementById("dp").innerHTML=pass;
    alert("Thank You For Registration "+fname+" "+lname+"Your Login Credentials are updated below. Press OK to continue.");
    alert("Now you will be directed to Log In section of this page.");
    
}

function log_chk(){
    var lemail=document.getElementById("lemail").value;
    var lpass=document.getElementById("lpass").value;

    var femail=document.getElementById("du").innerHTML;
    var fpass=document.getElementById("dp").innerHTML;

    if(lemail==femail){
        if(lpass==fpass){
            alert("Login Succesfully");
            alert('Now You will be redirected to booking page.');
            window.open('index.html#ff','_blank');
        }
        else{
            alert("Password is Invalid");
        }
    }
    else{
        alert("Username is Invalid");
    }
}
