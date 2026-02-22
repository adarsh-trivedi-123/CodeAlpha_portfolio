function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

/* Typing */
const words=["Web Developer","Programmer","Problem Solver"];
let i=0,j=0,current="",isDeleting=false;

function type(){
  current=words[i];
  document.getElementById("typing").textContent=current.substring(0,j);

  if(!isDeleting && j<current.length){ j++; }
  else if(isDeleting && j>0){ j--; }
  else if(j===current.length){ isDeleting=true; setTimeout(type,1000); return;}
  else{ isDeleting=false; i=(i+1)%words.length; }

  setTimeout(type,isDeleting?50:100);
}
type();

/* Reveal */
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100){
      el.classList.add("active");
    }
  });
});