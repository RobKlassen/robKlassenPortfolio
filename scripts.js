const app = {};







app.toggleClasses = function(target, classToAdd, classToRemove){
    target.classList.add(classToAdd);
    target.classList.remove(classToRemove);
}

app.removeClassFromSection = function(){
    const slideoutmenu = document.querySelector('.slideoutMenu');
    const removeClassSelector = slideoutmenu.querySelectorAll(".nestedMenu > ul");
    // const removeClassSelectorLower = slideoutmenu.querySelectorAll("ul > li");
    removeClassSelector.forEach(element =>{
        element.classList.remove("nestedMenu");
        app.toggleClasses(element, "invisible", "visible");
    })
    // removeClassSelectorLower.forEach(element=>{
    //     element.classList.remove("nestedMenu");
    //     app.toggleClasses(element, "invisible", "visible");
    // })
}

app.projectListDropdownHandler = function(){
    const slideoutMenu = document.querySelector("#slideoutMenu");

    //RECURSIVE SOLUTION
    const findChildMenus = function(parent){
   



        const collapseAllMenus = function(){
            const allOtherMenus = parent.querySelectorAll('ul');
            for (let i=0; i < allOtherMenus.length; i++){
                const otherMenu = allOtherMenus[i];
                app.toggleClasses(otherMenu, "invisible", "visible");
            }
        }



        
        const checkChildCountOfType = function(subparent, ofType){
            const menuCount = subparent.querySelectorAll(ofType);
            if (menuCount.length >= 1){
                return subparent.hasMenu = true;
            } else {
                return subparent.hasMenu = false;
            }
        }
        checkChildCountOfType(parent, 'ul');

        if (parent.hasMenu === true){
            const menus = parent.querySelectorAll('ul');
            for (const menu of menus){
                
                let menuparent = menu.parentElement;

                menuparent.addEventListener('click', function(){
                    console.log(this);


                    collapseAllMenus();
                    menuparent.classList.add("nestedMenu");

                    //THIS LINE OF CODE WHAT THE HECK!!!!!!!! the . did it.
                    const submenus = menuparent.querySelectorAll('.nestedMenu > ul');
                    submenus.forEach(element => {
                        app.toggleClasses(element, "visible", "invisible");
                    });
                    app.toggleClasses(menu, "visible", "invisible");
                })
            }
            for (let child of parent.children){
                findChildMenus(child);
            }
        } else {
            parent.addEventListener('click', function(){
                //bedrock level stuff to happen
            })
        }
    }
    findChildMenus(slideoutMenu);
}


app.slideOutHandler = function(){
    let slideOutToggle = false;
    
    const slideoutButton = document.querySelector("#sideNavButton");
    const slideoutPage = document.querySelector("#sideNavSlideout");

    slideoutButton.addEventListener('click', function(){
        // console.log("you clicked it", slideOutToggle);
        slideOutToggle = !slideOutToggle
        if (slideOutToggle === true){
            app.toggleClasses(slideoutPage, "showSlideout", "hideSlideout");
            app.toggleClasses(slideoutButton, "fullCircle", "emptyCircle");
            //this will remove the dropdown visibility properly
            app.removeClassFromSection();
        } else if (slideOutToggle === false) {
            app.toggleClasses(slideoutPage, "hideSlideout", "showSlideout");
            app.toggleClasses(slideoutButton,"emptyCircle", "fullCircle");
            projectDropdownToggle = false;
        }
    });
}








app.init = function(){
    // app.removeClassSelector();
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
