// // Optional: Add smooth scroll or form validation here
// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   alert("Message sent! (This is a demo)");
// });
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector(".animated-name");
  name.classList.add("animate");
});
// Animate sections on scroll
const animatedSections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

animatedSections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
const text = "Web Developer | Creative Coder | Portfolio Builder";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
window.onload = type;

  const track = document.querySelector('.slider-track');
  track.addEventListener('mouseover', () => {
    track.style.animationPlayState = 'paused';
  });
  track.addEventListener('mouseout', () => {
    track.style.animationPlayState = 'running';
  });
function sendEmail(event) {
  event.preventDefault(); 
  let params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  const serviceID = "service_h6rp8cp";
  const templateID = "template_l3kktdi";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      console.log(res);
      alert("Your message has been sent successfully!");
    })
    .catch(err => console.log(err));
}

