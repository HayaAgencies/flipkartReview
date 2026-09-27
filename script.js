var select = document.querySelector("#cars");
var coffee = document.querySelector(".COFFEE-CARDS")
var tea = document.querySelector(".TEA-CARDS")
var selectedvalue = "";

function handleDropdownChange(selectedValue) {
    if (selectedValue) { 
       if(selectedValue == "Coffee"){
        coffee.style.display = "block";
        tea.style.display = "none";
       }else if(selectedValue == "Tea"){
        tea.style.display = "block";
        coffee.style.display = "none";
       }
      // Add your action logic here
    }
  }