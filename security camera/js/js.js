const about=document.getElementById('about')
const service=document.getElementById('service')
const pricing=document.getElementById('pricing')
const tim=document.getElementById('tim')
const Testimonial=document.getElementById('Testimonial')
const blog=document.getElementById('blog')
const contact=document.getElementById('contact')

window.onscroll=()=>{
   
     if(scrollY>722){
          service.style.transition='opacity 1s ease' 
          service.style.opacity='1' 
     }else{
          service.style.opacity='0'
     }
     if(scrollY>1360){
          pricing.style.transition='opacity 1s ease' 
          pricing.style.opacity='1' 
     }else{
          pricing.style.opacity='0'
     }
     if(scrollY>2250){
          tim.style.transition='opacity 1s ease' 
          tim.style.opacity='1' 
     }else{
          tim.style.opacity='0'
     }
     if(scrollY>2917){
          Testimonial.style.transition='opacity 1s ease' 
          Testimonial.style.opacity='1' 
     }else{
          Testimonial.style.opacity='0'
     }
     if(scrollY>3512){
          blog.style.transition='opacity 1s ease' 
          blog.style.opacity='1' 
     }else{
          blog.style.opacity='0'
     }
     if(scrollY>4110){
          contact.style.transition='opacity 1s ease' 
          contact.style.opacity='1' 
     }else{
          contact.style.opacity='0'
     }
}
