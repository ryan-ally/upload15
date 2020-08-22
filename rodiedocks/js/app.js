
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation global var
const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// navigation global var
const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navbuilder = () => {

    let navUI = '';
    // looping over all sections
    sections.forEach(section  => {

        const sectionID = section.id;
        const sectionData-Nav = section.dataset.nav;


        navUI +=  `<li><a class="menu__link" href="#${sectionID}">${sectionData-Nav}</a></li>`


    });
    // append all elements to the navigation
    navigation.innerHTML = navUI;


};

navbuilder();

// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number
const offset * (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeactive = (section) => { 
    section.classlist.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    sectionid =section.id.slice(7,8) -1;
    navigation.childnodes[sectionid].style.cssText = background-color: white;";

};
// adding the active class
const addActive = (conditional, section) => { 
    if(conditional){
        section.classlist.add('your-active-class');
        section.style.cssText = "background-color: yellow;";
        sectionid =section.id.slice(7,8) -1;
        navigation.childnodes[sectionid].style.cssText = background-color: yellow;";

        console.log(navigation.childnodes[sectionid])
    };
};

// implementating the actual function

// Scroll to anchor ID using scrollTO event

const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && element >= -150;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActivation);

// scroll to anchor ID using scrollTO event

const scolling * () => {
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }

        });

    });

};

scrolling();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active