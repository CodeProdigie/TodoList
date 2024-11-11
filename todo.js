const inputval = document.querySelector(".main input");
const returneditems = document.querySelector("ul");

const creditbtns=document.querySelectorAll(".addcredits");
const coincounts=document.querySelectorAll(".coin-count")
const displaycredits=document.querySelector(".buy-credits")

let credits = document.querySelector(".top .top-1 .credit");


const addlist = () => {
  if (inputval.value !== "") {
    if(credits.textContent>0){
        let creditlimit = parseInt(credits.innerHTML) - 1;

    credits.textContent = creditlimit;
        const newitem = document.createElement("li");
    newitem.innerHTML = inputval.value;
    returneditems.appendChild(newitem);
    inputval.value = "";
    }else{
        alert("credit exausted");
        credits.textContent=0;
        inputval.value = "";
        displaycredits.classList.add("display");
    }
  
  }
};


creditbtns.forEach((btn,index)=>{
  btn.addEventListener("click",()=>{
     if(index==0){
      credits.textContent=parseInt(credits.innerHTML)+parseInt(coincounts[0].innerHTML);
      displaycredits.classList.remove("display");
     }else if(index==1){
      credits.textContent=parseInt(credits.innerHTML)+parseInt(coincounts[1].innerHTML);
      displaycredits.classList.remove("display");
     }else{
      credits.textContent=parseInt(credits.innerHTML)+parseInt(coincounts[2].innerHTML);
      displaycredits.classList.remove("display");
     }
  })
})
