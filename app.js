//Start: Variables
var popupTint = document.querySelector('.popup-tint');
var info1 = document.querySelector('.info1');
var info2 = document.querySelector('.info2');
var info3 = document.querySelector('.info3');
var info4 = document.querySelector('.info4');
var info5 = document.querySelector('.info5');
var popup = document.querySelector('.pop-up');
var popupWrap = document.querySelector('.popup-wrap');
var popupWrap2 = document.querySelector('.popup-wrap2');
var popupWrap3 = document.querySelector('.popup-wrap3');
var popupWrap4 = document.querySelector('.popup-wrap4');
var popupWrap5 = document.querySelector('.popup-wrap5');
var popup2 = document.querySelector('.pop-up2');
var popup3 = document.querySelector('.pop-up3');
var popup4 = document.querySelector('.pop-up4');
var popup5 = document.querySelector('.pop-up5');
var hide1 = document.querySelector('.close1');
var hide2 = document.querySelector('.close2');
var hide3 = document.querySelector('.close3');
var hide4 = document.querySelector('.close4');
var hide5 = document.querySelector('.close5');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');
var btn4 = document.querySelector('.btn4');
var btn5 = document.querySelector('.btn5');
var cube = document.querySelector('.photo-cube');
var body = document.body;
//End: Variables


//Start: media queries
var min650 = window.matchMedia('(min-height: 650px)');
var min751 = window.matchMedia('(min-height: 751px)');
var max649 = window.matchMedia('(max-height: 649px)');
var max750 = window.matchMedia('(max-height: 750px)');
var max768 = window.matchMedia('(max-width: 768px)');
var min1024 = window.matchMedia('(min-width: 1024px)');
var max1023 = window.matchMedia('(max-width: 1023px)');
//End: media queries


//Start: opens popups: max-width 1023px
info1.onclick = function() {
    body.style.overflowY = 'hidden';
    popup.style.display = 'block';
    popupWrap.style.display = 'block';
    popup.style.zIndex = 100;
    popup.style.opacity = 1;
    popupTint.style.display = 'block';
};

info2.onclick = function() {
    popup2.style.display = 'block';
    body.style.overflowY = 'hidden';
    popupWrap2.style.display = 'block';
    popup2.style.zIndex = 100;
    popup2.style.opacity = 1;
    popupTint.style.display = 'block';
};

info3.onclick = function() {
    body.style.overflowY = 'hidden';
    popup3.style.display = 'block';
    popupWrap3.style.display = 'block';
    popup3.style.zIndex = 100;
    popup3.style.opacity = 1;
    popupTint.style.display = 'block';
};

info4.onclick = function() {
    body.style.overflowY = 'hidden';
    popup4.style.display = 'block';
    popupWrap4.style.display = 'block';
    popup4.style.zIndex = 100;
    popup4.style.opacity = 1;
    popupTint.style.display = 'block';
};

info5.onclick = function() {
    body.style.overflowY = 'hidden';
    popup5.style.display = 'block';
    popupWrap5.style.display = 'block';
    popup5.style.zIndex = 100;
    popup5.style.opacity = 1;
    popupTint.style.display = 'block';
};
//End: opens popups: max-width 1023px


//Start: closes popups: all sizes
hide1.onclick = function() {
    if(max1023.matches) {
    popup.style.display = 'none';
    body.style.overflowY = '';
    popup.style.opacity = 0;
    popupTint.style.display = 'none';
    } else if(min1024.matches) {
        body.style.overflowY = '';
        popup.style.opacity = 0;
        popup.style.zIndex = -100;
        popupWrap.style.display = 'none';
        popup.style.transition = 'all 0s ease-in-out 0s';
        btn2.disabled = false;
        btn3.disabled = false;
        btn4.disabled = false;
        btn5.disabled = false;
        }
};

hide2.onclick = function() {
    if(max1023.matches) {
        popup2.style.display = 'none';
        body.style.overflowY = '';
        popup2.style.opacity = 0;
        popupTint.style.display = 'none';
        } else if(min1024.matches) {
            body.style.overflowY = '';
            popup2.style.opacity = 0;
            popup2.style.zIndex = -100;
            popupWrap2.style.display = 'none';
            popup2.style.transition = 'all 0s ease-in-out 0s';
            btn1.disabled = false;
            btn3.disabled = false;
            btn4.disabled = false;
            btn5.disabled = false;
            }
};

hide3.onclick = function() {
    if(max1023.matches) {
        popup3.style.display = 'none';
        body.style.overflowY = '';
        popup3.style.opacity = 0;
        popupTint.style.display = 'none';
        } else if(min1024.matches) {
            body.style.overflowY = '';
            popup3.style.opacity = 0;
            popup3.style.zIndex = -100;
            popupWrap3.style.display = 'none';
            popup3.style.transition = 'all 0s ease-in-out 0s';
            btn1.disabled = false;
            btn2.disabled = false;
            btn4.disabled = false;
            btn5.disabled = false;
            }
};

hide4.onclick = function() {
    if(max1023.matches) {
        popup4.style.display = 'none';
        body.style.overflowY = '';
        popup4.style.opacity = 0;
        popupTint.style.display = 'none';
        } else if(min1024.matches) {
            body.style.overflowY = '';
            popup4.style.opacity = 0;
            popup4.style.zIndex = -100;
            popupWrap4.style.display = 'none';
            popup4.style.transition = 'all 0s ease-in-out 0s';
            btn1.disabled = false;
            btn3.disabled = false;
            btn2.disabled = false;
            btn5.disabled = false;
            }
};

hide5.onclick = function() {
    if(max1023.matches) {
        popup5.style.display = 'none';
        body.style.overflowY = '';
        popup5.style.opacity = 0;
        popupTint.style.display = 'none';
        } else if(min1024.matches) {
            body.style.overflowY = '';
            popup5.style.opacity = 0;
            popup5.style.zIndex = -100;
            popupWrap5.style.display = 'none';
            popup5.style.transition = 'all 0s ease-in-out 0s';
            btn1.disabled = false;
            btn3.disabled = false;
            btn4.disabled = false;
            btn2.disabled = false;
            }
};
//End: closes popups: all sizes


//Start: opens popups: min-width 1024px
btn1.onclick = function() {
    cube.style.transform = "translateY(0px) rotateY(360deg)";
    body.style.overflowY = 'hidden';
    popup.style.opacity= 1;
    popupWrap.style.display = 'block';
    popup.style.display = 'block';
    popup.style.zIndex = 100;
    popup.style.transition = '0.5s all ease-in-out 1s';
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
};

btn2.onclick = function() {
    cube.style.transform = "translateY(0px) rotateY(-90deg)";
    body.style.overflowY = 'hidden';
    popupWrap2.style.display = 'block';
    popup2.style.display = 'block';
    popup2.style.opacity= 1;
    popup2.style.zIndex = 100;
    popup2.style.transition = '0.5s all ease-in-out 1s';
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
};

btn3.onclick = function() {
    cube.style.transform = "translateY(0px) rotateY(180deg)";
    body.style.overflowY = 'hidden';
    popupWrap3.style.display = 'block';
    popup3.style.display = 'block';
    popup3.style.opacity= 1;
    popup3.style.zIndex = 100;
    popup3.style.transition = '0.5s all ease-in-out 1s';
    btn2.disabled = true;
    btn1.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
};

btn4.onclick = function() {
    cube.style.transform = "translateY(176.5px) rotateX(-270deg) scaleY(0.5)";
    body.style.overflowY = 'hidden';
    popupWrap4.style.display = 'block';
    popup4.style.display = 'block';
    popup4.style.opacity= 1;
    popup4.style.zIndex = 100;
    popup4.style.transition = '0.5s all ease-in-out 1s';
    btn2.disabled = true;
    btn3.disabled = true;
    btn1.disabled = true;
    btn5.disabled = true;
};

btn5.onclick = function() {
    cube.style.transform = "translateY(0px) rotateY(90deg)";
    body.style.overflowY = 'hidden';
    popupWrap5.style.display = 'block';
    popup5.style.display = 'block';
    popup5.style.opacity= 1;
    popup5.style.zIndex = 100;
    popup5.style.transition = '0.5s all ease-in-out 1s';
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn1.disabled = true;
};
//End: opens popups: min-width 1024px


//Start: navbar disappears on scroll
function navbarDisappear(){
    var navbar = document.querySelector('.navbar');
    var sections = document.querySelector('.menu');
    var introText = document.querySelector('.appear');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 0.36;


    if (introPosition < screenPosition && max768.matches) {
        navbar.classList.add('disappear');
        sections.classList.add('shift');
    } 
}
//End: navbar disappears on scroll


//Start: navbar appears on scroll: max-height 649px
function navbarAppear(){
    var navbar = document.querySelector('.navbar');
    var sections = document.querySelector('.menu');
    var introText = document.querySelector('.appear');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 0.34;


    if(introPosition > screenPosition && max649.matches) {
        navbar.classList.remove('disappear');
        sections.classList.remove('shift');
    }
}
//End: navbar appears on scroll: max-height 649px


//Start: navbar appears on scroll: min-height 650px
function navbarAppearMin(){
    var navbar = document.querySelector('.navbar');
    var sections = document.querySelector('.menu');
    var introText = document.querySelector('.appear');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 0.37;


    if(introPosition > screenPosition && min650.matches) {
        navbar.classList.remove('disappear');
        sections.classList.remove('shift');
    }
}
//End: navbar appears on scroll: min-height 650px


//Start: projects 1-5 appear/slide in
function project1Appear(){
    var project = document.querySelector('.project1');
    var introText = document.querySelector('.appear');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 0.3;

    if (introPosition < screenPosition) {
        project.style.opacity = 1;
        project.classList.add('odd-projects');  
    }
}

function project2Appear(){
    var introText = document.querySelector('.appear');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 0.37;
    var project = document.querySelector('.project2');

    if (introPosition < screenPosition) {
        project.style.opacity = 1;
        project.classList.add('odd-projects');  
    }
}

function project3Appear(){
    var introText = document.querySelector('.appear');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 0.44;
    var project = document.querySelector('.project3');

    if (introPosition < screenPosition ) {
        project.style.opacity = 1;
        project.classList.add('odd-projects');  
    }
}

function project4Appear(){
    var introText = document.querySelector('.appear');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 0.55;
    var project = document.querySelector('.project4');

    if (introPosition < screenPosition) {
        project.style.opacity = 1;
        project.classList.add('odd-projects');  
    }
}

function project5Appear(){
    var introText = document.querySelector('.appear');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 0.70;
    var project = document.querySelector('.project5');

    if (introPosition < screenPosition) {
        project.style.opacity = 1;
        project.classList.add('odd-projects');  
    }
}
//End: projects 1-5 appear/slide in


//Start: about-me first half appear/slide in
function scrollAppear(){
    var introText = document.querySelector('.appear');
    var paras = document.querySelector('.firstHalf-aboutme');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;


    if (introPosition < screenPosition) {
        paras.style.opacity = 1;
        paras.classList.add('intro-appear');
    }
}
//End: about-me first half appear/slide in


//Start: about-me second half appear/slide in: max-height 750px
function scrollAppear2(){
    var introText = document.querySelector('.logo-contacts');
    var paras = document.querySelector('.secondHalf-aboutme');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 0.57;


    if (introPosition < screenPosition && max750.matches) {
        paras.style.opacity = 1;
        paras.classList.add('intro-appear');
    }
}
//End: about-me second half appear/slide in: max-height 750px


//Start: about-me second half appear/slide in: min-height 751px
function scrollAppear2min(){
    var introText = document.querySelector('.logo-contacts');
    var paras = document.querySelector('.secondHalf-aboutme');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 0.72;


    if (introPosition < screenPosition && min751.matches) {
        paras.style.opacity = 1;
        paras.classList.add('intro-appear');
    }
}
//End: about-me second half appear/slide in: min-height 751px


//Start: phone and email appear/slide in
function phoneEmailAppear(){
    var introText = document.querySelector('.logo-contacts');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 0.97;
    var phone = document.querySelector('.phone');
    var email = document.querySelector('.email');

    if (introPosition < screenPosition) {
        phone.style.opacity = 1;
        phone.classList.add('phone-shift');  
        email.style.opacity = 1;
        email.classList.add('email-shift');  
    }
}
//End: phone and email appear/slide in


//Start: github/linkedin/instagram icons appear/slide in
function githubAppear(){
    var introText = document.querySelector('.logo-contacts');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.12;
    var github = document.querySelector('.github');
    var linked = document.querySelector('.linked');
    var gram = document.querySelector('.gram');

    if (introPosition < screenPosition) {
        github.style.opacity = 1;
        linked.style.opacity = 1;
        gram.style.opacity = 1;  
        github.classList.add('git-shift'); 
        linked.classList.add('linked-shift'); 
        gram.classList.add('gram-shift'); 
    }
}
//End: github/linkedin/instagram icons appear/slide in


//Start: Event Listeners
    window.addEventListener('scroll',navbarAppear); 
    window.addEventListener('scroll',navbarAppearMin); 
    window.addEventListener('scroll',scrollAppear);
    window.addEventListener('scroll',scrollAppear2);
    window.addEventListener('scroll',scrollAppear2min);
    window.addEventListener('scroll',navbarDisappear);
    window.addEventListener('scroll',project1Appear); 
    window.addEventListener('scroll',project2Appear); 
    window.addEventListener('scroll',project3Appear); 
    window.addEventListener('scroll',project4Appear); 
    window.addEventListener('scroll',project5Appear); 
    window.addEventListener('scroll',githubAppear); 
    window.addEventListener('scroll',phoneEmailAppear); 
   //End: Event Listeners
