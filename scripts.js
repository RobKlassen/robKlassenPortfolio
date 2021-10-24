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
        app.popUpForm(false);
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


app.snapToSpotHandler = function(){
    const seeWorkButton = document.getElementById('seeWorkButton');
    const projectSection = document.getElementById('projectSection');

    seeWorkButton.addEventListener('click', function(){
        projectSection.scrollIntoView({behavior:'smooth', block: "start"});
    }) 
}

app.imageClick = function(cycle){
    const myimage = document.getElementById('myPhoto');
    urlCycle = [
        "./styles/assets/headshot.png",
        "./styles/assets/doghandshake.png",
        "./styles/assets/rkcodelogo13.png"
    ];

    myimage.addEventListener('click', function(){
        myimage.src = urlCycle[cycle];
        if (cycle === 2){
            cycle = 0;
        } else { 
            cycle++;
        }
    });
}

app.popUpForm = function(visibilityBool){
    const mailMeBox = document.getElementById("mailMeBoxTopRight");
    const formOverlay = document.getElementById('popupForm');
    const closeForm = document.getElementById('closePopupForm');
    let visibility = visibilityBool;
    
    const checkVisibility = function(visibilityInFunc){
        if (visibilityInFunc === false){
            app.toggleClasses(formOverlay, 'overlayJSClass', "invisible");
            visibility = true;
        } else {
            visibility = false;
            app.toggleClasses(formOverlay, 'invisible', 'overlayJSClass');
        }   
    }

    mailMeBox.addEventListener('click', function(e){
        e.preventDefault();
        checkVisibility(visibility);
    });

    closeForm.addEventListener('click', function(e){
        e.preventDefault();
        checkVisibility(visibility);
    })

    checkVisibility();
}

app.moreCreditsButton = function(bool){
    const moreCreditsToggle = document.getElementById('moreCreditsToggleID');
    const moreCredits = document.getElementById('moreCreditsID');
    let toggle = bool;
    moreCreditsToggle.addEventListener('click', function(e){
        e.preventDefault();
        if (toggle === false){
            moreCreditsToggle.innerText = "Hide Resources";
            app.toggleClasses(moreCredits, "visible", "invisible");
            toggle = true;
        } else {
            moreCreditsToggle.innerText = "Show Resources Again";
            app.toggleClasses(moreCredits, "invisible", "visible");
            toggle = false;
        }
    })

}

app.showPhoneNumber = function(){
    const phoneNumber = document.getElementById('phoneNumber');
    const numberText = phoneNumber.querySelector('p');
    // const eventsToAdd =['focus', 'mouseenter'];
    const eventsToAdd =['click', 'active'];

    const handleAddEvent = function(eventToCheck){
        phoneNumber.addEventListener(eventToCheck, function(e){
            e.preventDefault();
            numberText.innerText= "(905) 931 0432";
        });   
    }

    eventsToAdd.forEach(check => {
        handleAddEvent(check);
    })
}

app.init = function(){
    app.slideOutHandler(false);
    app.projectListDropdownHandler();
    app.snapToSpotHandler();
    app.imageClick(1);
    app.popUpForm(false);
    app.moreCreditsButton(false);
    app.showPhoneNumber();

}

app.init();



