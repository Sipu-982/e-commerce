var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


document.addEventListener('scroll',()=>{
  const header=document.querySelector('header');
  if(window.scrollY>0){
      header.classList.add('scrolled');
  }
  else{
      header.classList.remove('scrolled');
  }
})
