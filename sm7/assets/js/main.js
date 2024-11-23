function openModal() {
  document.querySelector(".modal-window").classList.add("open");
}

function closeModal() {
  document.querySelector(".modal-window").classList.remove("open");
}

function removeFREDUROV() {
  document.querySelector(".profile").classList.add("close");
  document.querySelector(".modal-window").classList.remove("open");
}


let cnopka = document.getElementsByClassName("cnopka");

for (let i = 0; i < cnopka.length; i++) {
  cnopka[i].addEventListener("click", function() {

  var fish = this.nextElementSibling;
  if (fish.style.display == "block") {
    fish.style.display = "none";
  } else {
    fish.style.display = "block";
  }
});
}
const func = (entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const modal = document.getElementById("modal"); 
          
          modal.showModal();
          document.body.style.overflow = 'hidden';


          let count = 10;
          const closeBtn = document.getElementById("closeBtn"); 
          const counter = document.getElementById("counter"); 
          const df = document.getElementById("df");
          counter.innerHTML = count;
          closeBtn.hidden = true;

          setInterval(() => {
              if (count > 0) {
                  count = count - 1; 
                  counter.innerHTML = count; 
                  
              } else {
                  df.style.display = 'none'; 
                  closeBtn.hidden = false;
                  closeBtn.addEventListener('click', () => { 
                      document.body.style.overflow = '';
                      modal.close();
                      
                      
                  });
              }
          }, 1000);
      }
  });
}

const options = {
  rootMargin: '0px',
  threshold: 0,
}
  
const observer = new IntersectionObserver(func, options);
observer.observe(document.querySelector('#point')) 