const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Header + Nav
let navBar = document.querySelectorAll('header nav a');
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// CTA Section

let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = 'DOM<br> IS<br> AWESOME';

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content Section //

// Features

let featuresH4 = document.getElementsByTagName("h4")[0];
featuresH4.innerHTML = siteContent["main-content"]["features-h4"];

let featuresContent = document.getElementsByTagName("p")[0];
featuresContent.innerHTML = siteContent["main-content"]["features-content"];

// About

let aboutH4 = document.getElementsByTagName("h4")[1];
aboutH4.innerHTML = siteContent["main-content"]["about-h4"];

let aboutContent = document.getElementsByTagName("p")[1];
aboutContent.innerHTML = siteContent["main-content"]["about-content"];

// Middle Image

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Services

let servicesH4 = document.getElementsByTagName("h4")[2];
servicesH4.innerHTML = siteContent["main-content"]["services-h4"];

let servicesContent = document.getElementsByTagName("p")[2];
servicesContent.innerHTML = siteContent["main-content"]["services-content"];

// Product

let productH4 = document.getElementsByTagName("h4")[3];
productH4.innerHTML = siteContent["main-content"]["product-h4"];

let productContent = document.getElementsByTagName("p")[3];
productContent.innerHTML = siteContent["main-content"]["product-content"];


// Vision

let visionH4 = document.getElementsByTagName("h4")[4];
visionH4.innerHTML = siteContent["main-content"]["vision-h4"];

let visionContent = document.getElementsByTagName("p")[4];
visionContent.innerHTML = siteContent["main-content"]["vision-content"];

// Contact Section

let contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

let address = document.getElementsByTagName("p")[5];
address.innerHTML = siteContent["contact"]["address"];

let phone = document.getElementsByTagName("p")[6];
phone.innerHTML = siteContent["contact"]["phone"];

let email = document.getElementsByTagName("p")[7];
email.innerHTML = siteContent["contact"]["email"];

// Footer Section

let footer = document.getElementsByTagName("p") [8];
footer.innerHTML = siteContent["footer"]["copyright"];

// Change Nav Text Color
let changeColor = document.querySelectorAll("nav a");
changeColor.forEach(function(currentValue) {
  currentValue.style.color = "green";
});

