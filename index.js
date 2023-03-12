// Blurs background when popup is shown
let blurBG = () => {
    let blur = document.getElementById("container");
    blur.classList.toggle("active");
  }

// Assigns an event listener to all nav links
for (let i=0; i<document.querySelectorAll(".nav-link").length; i++) {
    document.querySelectorAll(".nav-link")[i].addEventListener("click", function () {
        
        let innerHTMLButton = this.innerHTML.toLowerCase();
        showPopUp(innerHTMLButton);
    });    
}

function showPopUp(currentKey) {
    let activeLink = document.getElementById(`${currentKey}`)
        blurBG();
        activeLink.classList.add("popup")
}

function closePopUp() {
    let elements = document.querySelectorAll('.popup');
    //Searches for all elements with class "popup" and removes it, thus closing window
    elements.forEach((element) => {
        element.classList.remove('popup');
    });
    blurBG();
}