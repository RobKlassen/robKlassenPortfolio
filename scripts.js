const app = {};


app.slideOutHandler = function(){
    const slideoutButton = document.querySelector("#sideNavButton");
    const slideoutPage = document.querySelector("#sideNavSlideout");
    let slideOutToggle = false;

    // const toggleClasses = function(target, classToAdd, classToRemove){
    //     target.classList.add(classToAdd);
    //     target.classList.add(classToRemove);
    //     console.log("removed", classToRemove);
    // }

    slideoutButton.addEventListener('click', function(){
        console.log("you clicked it", slideOutToggle);
        slideOutToggle = !slideOutToggle
        if (slideOutToggle === true){
            // toggleClasses(slideoutPage, "showSlideout", "hideSlideout");
            // toggleClasses(slideoutButton, "fullCircle", "emptyCircle");
            slideoutPage.classList.remove("hideSlideout");
            slideoutPage.classList.add("showSlideout");
            slideoutButton.classList.remove("emptyCircle");
            slideoutButton.classList.add("fullCircle");
        } else if (slideOutToggle === false) {
            // toggleClasses(slideoutPage, "hideSlideout", "showSlideout");
            // toggleClasses(slideoutButton,"emptyCircle", "fullCircle");
            slideoutPage.classList.remove("showSlideout");
            slideoutPage.classList.add("hideSlideout");
            slideoutButton.classList.remove("fullCircle");
            slideoutButton.classList.add("emptyCircle");

        }
    });
}








app.init = function(){
    app.slideOutHandler();
}

app.init();