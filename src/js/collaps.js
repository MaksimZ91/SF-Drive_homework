
 const qustionList=document.querySelectorAll('.question_quest');
 export function collaps (){
  qustionList.forEach((element, index)=>{
  element.addEventListener('click',function (){
    this.classList.toggle("active");
  let content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";}
  })
})}

