const app = {};







app.toggleClasses = function(target, classToAdd, classToRemove){
    target.classList.add(classToAdd);
    target.classList.remove(classToRemove);
}

app.removeClassFromSection = function(){
    const slideoutmenu = document.querySelector('.slideoutMenu');
    const classRemover = function(targetElement, invisibilityCheck){
        const removeClassSelector = slideoutmenu.querySelectorAll(targetElement);
        removeClassSelector.forEach(element =>{
            element.classList.remove("nestedMenu");
            if (invisibilityCheck === true){
                app.toggleClasses(element, "invisible", "visible");
            }
        })
    }
    classRemover('ul', true);
    classRemover("ul > li", false);
}

app.projectListDropdownHandler = function(){
    const slideoutMenu = document.querySelector("#slideoutMenu");

    const checkIfHasMenu = function(target){
        const menuCheck = target.querySelectorAll('ul');
        if (menuCheck.length >= 1){
            return target.hasMenu = true;
        } else {
            return target.hasMenu = false;
        }
    }

    const findChildMenus = function(parent){
        parent.classList.add('topLevel');
        
        let options = parent.querySelectorAll('li');
        options.forEach(option =>{
            checkIfHasMenu(option);
            
            if (option.hasMenu === true){

                const innerAnchor = option.querySelector('a');
                const newAnchorText = innerAnchor.innerText.replace(/⏷/g, "");
                innerAnchor.innerText = (newAnchorText + " ⏷"); 
                innerAnchor.classList.add("colorMe");

                option.addEventListener('click', function(){
                    this.classList.add('nestedMenu');
                    let siblingMenus = parent.querySelectorAll('ul');
                    
                    siblingMenus.forEach(sibling =>{
                        app.toggleClasses(sibling, "invisible", "visible");
                        const removeAnchorColor = parent.querySelectorAll('.colorMe');
                        removeAnchorColor.forEach(element =>{
                            element.classList.remove('colorMe');
                        })      
                    })
                    const subMenu = option.querySelectorAll('.nestedMenu > ul');
                    subMenu.forEach(element =>{
                        app.toggleClasses(element, "visible", "invisible");
                        findChildMenus(element);       

                        const getAnchorElement = this.querySelector('a');
                        getAnchorElement.classList.add('colorMe');
     
                    });
                })
            } else {
                option.classList.remove('nestedMenu');
                option.addEventListener('click', function(){
                    console.log("this has no menu");
                    app.slideOutHandler(false);
                })
            }
        })
    }
    findChildMenus(slideoutMenu);
}



app.slideOutHandler = function(slideoutState){
    let slideOutToggle = slideoutState;
    
    const slideoutButton = document.querySelector("#sideNavButton");
    const slideoutPage = document.querySelector("#sideNavSlideout");

    slideoutButton.addEventListener('click', function(){
        console.log("you clicked it", slideOutToggle);
        slideOutToggle = !slideOutToggle
        app.slideOutHandler(slideOutToggle);
    });
    if (slideOutToggle === true){
        app.toggleClasses(slideoutPage, "showSlideout", "hideSlideout");
        app.toggleClasses(slideoutButton, "fullCircle", "emptyCircle");
        //this will remove the dropdown visibility properly
        app.removeClassFromSection();
    } else if (slideOutToggle === false) {
        app.toggleClasses(slideoutPage, "hideSlideout", "showSlideout");
        app.toggleClasses(slideoutButton,"emptyCircle", "fullCircle");
        // projectDropdownToggle = false;
    }
}








app.init = function(){
    // app.removeClassSelector();
    app.slideOutHandler(false);
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
