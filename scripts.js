const app = {};







app.toggleClasses = function(target, classToAdd, classToRemove){
    target.classList.add(classToAdd);
    target.classList.remove(classToRemove);
    console.log("removed", classToRemove);
}

app.projectListDropdownHandler = function(){
    const slideoutMenu = document.querySelector("#slideoutMenu");
    const menuItem = slideoutMenu.children;


    //RECURSIVE SOLUTION
    const findChildren = function(parent){
        for (const child of parent){
            const count = child.children.length;

            if(count >= 2){
                findChildren(child.children);
                let localToggle = false;
                child.addEventListener('click', function(){
                    const localChillin = child.children;
                    if (localToggle === false){
                        app.toggleClasses(localChillin, "visible", "invisible");
                        localToggle = true;
                    } else if (localToggle === true) {
                        app.toggleClasses(localChillin, "invisible", "visible");
                        localToggle = false;
                    }

                    // console.log(child.children[1]);
                    // localChillin.classList.add("visible");
                    // localChillin.classList.remove("invisible");
                })
            } else {
                child.addEventListener('click', function(){
                    console.log("you clicked a child");
                    // const localChillin = child.children[1];
                    // localChillin.classList.remove("invisible");
                    // localChillin.classList.add("visible");  
                });
            }
        }
    }
    findChildren(menuItem);
    



}


app.slideOutHandler = function(){
    let slideOutToggle = false;
    
    const slideoutButton = document.querySelector("#sideNavButton");
    const slideoutPage = document.querySelector("#sideNavSlideout");

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
    app.projectListDropdownHandler();
}

app.init();









//==============================================================
///
//INSIDE DROPDOWN HANDLER
//
    // for (let option of menuItem){
    //     let subMenuItemCount = option.children;

    //     if (subMenuItemCount.length > 1){

    //         for (let subMenuItem of subMenuItemCount){
    //             subMenuItem.addEventListener('click', function(){
    //                 console.log(this);
    //             })
    //             // console.log(subMenuItem);
    //         }



            // let finalOptions = subMenuItemCount.children; 
            // console.log(finalOptions);
            // for (let finalOption of finalOptions){
                // finalOption.addEventListener('click', function(){
                //     console.log(this);
                // })
            // }

        // }       
        
        // option.addEventListener('click', function(){
            // const childrenCount = Object.keys(this.children[1].childElementCount);
            // console.log(this);

        // })
    // }





    // console.log(menuItem);

    // slideoutMenu.addEventListener('click', function(){
        // console.log("you've clicked the slideout menu");
        // console.log(slideoutMenu);
        // console.log(menuItem);
    // });

    // for (option in menuItem){
    //     option.addEventListener('click', function(){

    //     })
    // }
    // menuItem.addEventListener('click',function(){
    //     console.log(this);
    // });
    // menuItem
    // menuItem.addEventListener('click', function(){
    //     console.log("you've clicked it");
    // })


    // const projectDropdown = document.querySelector('#slideoutProjectList');
    // const sideNavSlideoutContact = document.querySelector("#sideNavSlideoutContact");
    // projectDropdown.addEventListener('click', function(){
    //     app.toggleClasses(projectDropdown.children, "", "");
    //     app.toggleClasses(sideNavSlideoutContact, "", "")
    // })
    //==============================================================






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



// The data analytics bootcamp has been coming up a lot,

// is it something that any webdev grads (who are interested in that) could or should consider looking into to further skills and job opportunities in the industry, or generally are the skills so non-transferable that generally it's not recommended to do 'both' 

// or more broadly, if I had questions about the data analytics bootcamp where I could direct them?
