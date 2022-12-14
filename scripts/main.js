AOS.init();
$(window).on("load", function () {
  $("#preloader").fadeOut();
  $("#preloader").addClass("opacity-0", 2500);
  $("body").removeClass("h-100vh");
});


const exName = new RegExp('^[A-Z][a-z0-9_-]{3,19}$');
document.getElementById("submit").addEventListener('click',x =>{
  let pu = new Date(document.getElementById("pu_date").value);
  let del = new Date(document.getElementById("del_date").value);
  let error = document.getElementById("error");
  var from = document.getElementById("from").value;
  if(exName.test(from) === false){
    console.log("ne valja ime");
    error.textContent = "From field has to start with upper case letter.";
  }
  else if (del<pu){
    error.textContent = "DEL date have to be afet PU date";
  }
  else
  {
    error.textContent = "";
  }
  
});