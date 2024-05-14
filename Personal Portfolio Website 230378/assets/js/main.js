//scroll reveal feature
const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal('#navbar', {delay:100, origin:'right'});
sr.reveal('header', {delay:50, origin:'center'});
sr.reveal('.home-content', {delay:200, origin:'top'});
sr.reveal('.Professional-Profile-Picture', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.liquid-shape', {delay:420, origin:'center'});
sr.reveal('.liquid-shape2', {delay:470, origin:'center'});
sr.reveal('.note', {delay:600, origin:'back'});
sr.reveal('#about-me', {delay:470, origin:'back'});
sr.reveal('.main-text', {delay:300, origin:'top'});
sr.reveal('.q', {delay:260, origin:'center'});
sr.reveal('.img1', {delay:400, origin:'right'});
sr.reveal('.img2', {delay:400, origin:'left'});
sr.reveal('.skills-main', {delay:280, origin:'left'});
sr.reveal('.img3', {delay:250, origin:'bottom'});
sr.reveal('.projects-content', {delay:320, origin:'back'});
sr.reveal('.contact-card', {delay:300, origin:'left'});
sr.reveal('.contact-form', {delay:300, origin:'right'});
sr.reveal('.scroll-up', {delay:350, origin:'center'});
sr.reveal('.dateW', {delay:320, origin:'back'});
sr.reveal('.mn', {delay:300, origin:'left'});



//HTML form #ContactPage
const contactForm = document.getElementsById('contact-form'),
      contactMessage = document.getElementById('contact-message')

function validateForm() {
var name = document.forms["contact-form"]["name"].value;
var subject = document.forms["contact-form"]["subject"].value;
var email = document.forms["contact-form"]["email"].value;
var message = document.forms["contact-form"]["message"].value;

if (name == "") {
alert("Name must be filled out");
return false;
}

if (subject == "") {
alert("Subject must be filled out");
return false;
}

if (email == "" || !/^\S+@\S+\.\S+$/.test(email)) {
alert("Email must be filled out with a valid format");
return false;
}

if (message == "") {
alert("Please communicate your message here");
return false;
}

else{
  alert("Thank you, for contacting Nature!");
   return then(() =>{
      contactForm.reset()
    })}
                            }
