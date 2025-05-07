let index = 0;
const testimonials = document.querySelectorAll('.testimonial');

function rotateTestimonials() {
  testimonials.forEach((el, i) => {
    el.classList.remove('active');
  });
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}

setInterval(rotateTestimonials, 3000);
