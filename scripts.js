const app = {};







app.toggleClasses = function(target, classToAdd, classToRemove){
    target.classList.add(classToAdd);
    target.classList.remove(classToRemove);
    console.log("removed", classToRemove);
}

app.slideOutHandler = function(){
    const slideoutButton = document.querySelector("#sideNavButton");
    const slideoutPage = document.querySelector("#sideNavSlideout");
    const projectDropdown = document.querySelector('#slideoutProjectList');
    const sideNavSlideoutContact = document.querySelector("#sideNavSlideoutContact");

    let slideOutToggle = false;
    let projectDropdownToggle = false;

    projectDropdown.addEventListener('click', function(){
        app.toggleClasses(projectDropdown.children, "", "");
        app.toggleClasses(sideNavSlideoutContact, "", "")
    })

    slideoutButton.addEventListener('click', function(){
        console.log("you clicked it", slideOutToggle);
        slideOutToggle = !slideOutToggle
        if (slideOutToggle === true){
            app.toggleClasses(slideoutPage, "showSlideout", "hideSlideout");
            app.toggleClasses(slideoutButton, "fullCircle", "emptyCircle");
        } else if (slideOutToggle === false) {
            app.toggleClasses(slideoutPage, "hideSlideout", "showSlideout");
            app.toggleClasses(slideoutButton,"emptyCircle", "fullCircle");
            projectDropdownToggle = false;
        }
    });
}








app.init = function(){
    app.slideOutHandler();
}

app.init();














// slideoutButton.addEventListener('click', function(){
//     console.log("you clicked it", slideOutToggle);
//     slideOutToggle = !slideOutToggle
//     if (slideOutToggle === true){
//         // slideoutPage.classList.remove("hideSlideout");
//         // slideoutPage.classList.add("showSlideout");
//         // slideoutButton.classList.remove("emptyCircle");
//         // slideoutButton.classList.add("fullCircle");
//     } else if (slideOutToggle === false) {
//         // slideoutPage.classList.remove("showSlideout");
//         // slideoutPage.classList.add("hideSlideout");
//         // slideoutButton.classList.add("emptyCircle");
//         // slideoutButton.classList.remove("fullCircle");

//     }
// });
// }
