const loading_screen = document.querySelector(".loading_screen");

const navbar = document.querySelector(".navbar");

const screen1 = document.querySelector(".screen1");
const mountain_front = document.querySelector(".mountain_front");
const vd = document.querySelector(".vd");

const about = document.querySelector(".about");
const about_title = document.querySelector(".about_title");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");

const work = document.querySelector(".work");
const span_w = document.querySelector(".span_w");
const work_title = document.querySelector(".work_title");
const work_dtc = document.querySelector(".work_dtc");

const img_slider = document.querySelector(".img_slider");
const img_container = document.querySelector(".img_container");

const left_img_selector = document.querySelector(".left_img_selector");
const right_img_selector = document.querySelector(".right_img_selector");

const img_titles_wrapper = document.querySelector(".img_titles_wrapper");

const contact = document.querySelector(".contact");
const contact_heading1 = document.querySelector(".contact_heading1");
const contact_heading2 = document.querySelector(".contact_heading2");


const nav_about = document.getElementById("nav_about");
const nav_work = document.getElementById("nav_work");
const nav_contact = document.getElementById("nav_contact");

const img_title1 = document.getElementById("img_title1");
const img_title2 = document.getElementById("img_title2");
const img_title3 = document.getElementById("img_title3");

let img_sel = 1;

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      loading_screen.style.animationName = "load_complete";
      setTimeout(()=>{
        loading_screen.style.zIndex = "0";
        loading_screen.style.opacity = "0%";
        loading_screen.style.width = "0%";
      },3000)  
        
    }
  };

window.addEventListener("scroll", ()=>{
    y = window.pageYOffset;
    let mount1_y = y/32 - 15;
    let text_y = y/16;
    mountain_front.style.transform = `translateY(${-mount1_y}rem)`;
    vd.style.transform = `translateY(${-text_y}rem)`;
    let screen1_height = screen1.clientHeight;
    let screen2_height = about.clientHeight + screen1_height;
    let screen3_height = contact.clientHeight + screen2_height;
    if(y > 10){
        navbar.style.width = "50%";
        navbar.style.boxShadow = "0 0 2rem #000";
        navbar.style.borderTop = "solid 0.2em #ff4c29";
    }else{
        navbar.style.width = "60%";
        navbar.style.boxShadow = "0 0 2rem transparent";
        navbar.style.borderTop = "solid 0.2em transparent";
    }
    if(y >= screen1_height && y < screen2_height){
        navbar.style.color = "#fff";
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        nav_about.style.color = "#ff2626";
        about_title.style.animationName = "swipe_down";
        p1.style.animationName = "swipe_up";
        p2.style.animationName = "swipe_up";
    }else{
        navbar.style.color = "#000";
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        nav_about.style.color = "inherit";
    }
    if( y >= screen2_height && y < screen3_height){
        navbar.style.color = "#000";
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        span_w.style.animationName = "w_switch_on";
        work_title.style.animationName = "switch_on";
        work_title.style.opacity = "100%";
        work_dtc.style.animationName = "float_up";
        img_titles_wrapper.style.animationName = "float_up";
        img_container.style.animationName = "slide_width";
        nav_work.style.color = "#ff2626";
        setTimeout(()=>{
            img_container.style.opacity = "100%";
        },3500)
    }else{
        nav_work.style.color = "inherit";
    }
    if( y >= screen3_height){
        nav_contact.style.color = "#ff2626";
        contact_heading1.style.animationName = "swipe_down";
        contact_heading2.style.animationName = "swipe_up";
    }else{
        nav_contact.style.color = "inherit";
    }
    
})

left_img_selector.addEventListener("click",()=>{
    if(img_sel == 2){
        img_container.style.transform = "translateX(0%)";
        img_title2.style.color = "#666";
        img_title1.style.color = "#ff2626";
        img_sel = 1;
    }else if(img_sel == 3){
        img_container.style.transform = "translateX(-33.33%)";
        img_title3.style.color = "#666";
        img_title2.style.color = "#ff2626";
        img_sel = 2;
    }
})

right_img_selector.addEventListener("click",()=>{
    if(img_sel == 1){
        img_container.style.transform = "translateX(-33.33%)";
        img_title1.style.color = "#666";
        img_title2.style.color = "#ff2626";
        img_sel = 2;
    }else if(img_sel == 2){
        img_container.style.transform = "translateX(-66.66%)";
        img_title2.style.color = "#666";
        img_title3.style.color = "#ff2626";
        img_sel = 3;
    }
})