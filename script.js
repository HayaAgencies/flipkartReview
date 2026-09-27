var select = document.querySelector("#cars");
var coffee = document.querySelector(".COFFEE-CARDS")
var tea = document.querySelector(".TEA-CARDS")
var DAIRY = document.querySelector(".DAIRY-CARDS")
var selectedvalue = "";

function handleDropdownChange(selectedValue) {
    if (selectedValue) {
        if (selectedValue == "Select Your Product") {
            coffee.style.display = "none";
            tea.style.display = "none"; 
            DAIRY.style.display = "none";
        }else if (selectedValue == "Coffee") {
            coffee.style.display = "block";
            tea.style.display = "none";
            DAIRY.style.display = "none";
        } else if (selectedValue == "Tea") {
            tea.style.display = "block";
            coffee.style.display = "none";
            DAIRY.style.display = "none";
        }else if(selectedValue == "Dairy"){
            coffee.style.display = "none";
            tea.style.display = "none"; 
            DAIRY.style.display = "block";
        }
        // Add your action logic here
    }
}