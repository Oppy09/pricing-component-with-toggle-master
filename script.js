let toggler = $(".toggle-container")

let monthlyPrice = $(".monthly");
let yearlyPrice = $(".annually");

toggler.click(()=> {
    $(".toggle-button").toggleClass("toggle");

    for (let i = 0; i < monthlyPrice.length; i++) {
        for (let j = 0; j < yearlyPrice.length; j++) {
            
            if (monthlyPrice[i].style.display === "none") {
                monthlyPrice[i].style.display = "block";
                yearlyPrice[i].style.display = "none";
            }
            else {
                monthlyPrice[i].style.display = "none";
                yearlyPrice[i].style.display = "block";
            }
            
        }
        
    }
    
});

