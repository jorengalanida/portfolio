const navbar=document.querySelector(".navbar"),navbarOffsetTop=navbar.offsetTop,sections=document.querySelectorAll("section"),navbarLinks=document.querySelectorAll(".navbar-link"),progress=document.querySelector(".progress-bars-wrapper"),progressBarPercents=[85,80,70,70,60,30,30,60,50];window.addEventListener("scroll",()=>{mainFn()});const mainFn=()=>{window.pageYOffset>=navbarOffsetTop?navbar.classList.add("sticky"):navbar.classList.remove("sticky"),sections.forEach((section,i)=>{window.pageYOffset>=section.offsetTop-10&&(navbarLinks.forEach(navbarLink=>{navbarLink.classList.remove("change")}),navbarLinks[i].classList.add("change"))}),window.pageYOffset+window.innerHeight>=progress.offsetTop&&document.querySelectorAll(".progress-percent").forEach((el,i)=>{el.style.width=`${progressBarPercents[i]}%`,el.previousElementSibling.firstElementChild.textContent=progressBarPercents[i]})};mainFn(),window.addEventListener("resize",()=>{window.location.reload()}),$(document).ready((function(){var typed=new Typed(".typing",{strings:["a Javascript Developer Aspirant","a Front-End Developer"],typeSpeed:100,backSpeed:60,loop:!0})}));const scriptURL="https://script.google.com/macros/s/AKfycbzqtlNsuwp9qfPPWhOBZENvl7U3YsWevWG2ThRf3RfxNwS2B_1S9Thq72UjmNbH9Pwnig/exec",form=document.forms["google-sheet"];form.addEventListener("submit",e=>{e.preventDefault(),fetch(scriptURL,{method:"POST",body:new FormData(form)}).then(response=>alert("Thank you for Contacting Me! I will reach you out Soon...")).catch(error=>console.error("Error!",error.message))});
