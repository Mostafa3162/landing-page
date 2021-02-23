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

document.addEventListener('DOMContentLoaded', ()=>{
/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const menu = document.querySelector('#navbar__list');
const frag = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function nav()
{
    sections.forEach(section => {
        // create  li  and  a 
        const item = document.createElement('li');
        const a = document.createElement('a');
        // get the section's data-nav text 
        const section_name = section.getAttribute('data-nav');

        // set the data-nav text for  a  text/content
        a.textContent = `${section_name}`;
        // add click event to every  a  to scroll smoothly to specified section
        a.addEventListener("click", ()=>{
            section.scrollIntoView({behavior: "smooth"});
        });
        // add menu__link class to each li
        item.setAttribute('class', 'menu__link');

        // append a into li
        item.appendChild(a);
        // append  li  into  frag 
        frag.appendChild(item); 
    });
    // append  frag  into  ul
    menu.appendChild(frag);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
nav();


// Scroll to section on link click


// Set sections and links as active 
document.addEventListener('scroll', ()=>{
    const items = document.querySelectorAll('li');
    // if we are at the top of the page OR almost at the bottom of it
    if (window.scrollY == 0 || window.innerHeight + window.scrollY >= document.body.offsetHeight) 
    {
        // remove menu__link__active class from all links
        items.forEach(item => { item.classList.remove('menu__link__active'); }); 
    }

    sections.forEach(section => {
        // get the section sizes and its position relative to the viewport.
        let sect_prop = section.getBoundingClientRect();
        if (sect_prop.top >= 0 && sect_prop.top <= 200) 
        {
            // remove 'your-active-class' class from every section 
            sections.forEach(sect => { sect.classList.remove('your-active-class'); });
            // add 'your-active-class' class to the visiable section (make sections active) 
            section.classList.add('your-active-class');

            // add 'menu__link__active' class to nav links (make nav links active)
            items.forEach(item => {
                // get link text 
                const item_name = item.textContent;
                // get the section's data-nav text 
                const sectionName = section.getAttribute('data-nav');
                if (item_name == sectionName) 
                {
                    // remove 'menu__link__active' class from all links
                    items.forEach(item => { item.classList.remove('menu__link__active'); }); 
                    // add 'menu__link__active' class to the specified link
                    item.classList.add('menu__link__active');
                }
            });
        }
    });

});

});