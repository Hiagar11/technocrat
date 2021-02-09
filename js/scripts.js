var gallery = document.querySelector('.gallery');
var tagline = document.querySelectorAll('.gallery-tagline');
var title = document.querySelectorAll('.gallery-title');
var btnr = document.querySelector('.two > img');
var btnl = document.querySelector('.one > img');
var inputs = document.querySelectorAll('.gallery-radio');
var numslide = 0;

var pop_tool = document.querySelectorAll('.tool-item > figure > div');
var hovercart = document.querySelector('.hovercart');

var servise_list = document.querySelector('.service-list');
var service_spec = document.querySelectorAll('.service-specifically > div');

gallery.classList.add('perforator');
gallery.addEventListener('click', click, true);
function click(event) {
    let arr = ['perforator', 'drel'];
    for (let i=0;i<arr.length;i++) {
        gallery.classList.remove(arr[i]);
    }
    for (let i=0;i<tagline.length;i++) {
        tagline[i].classList.add('visuallyhidden');
        title[i].classList.add('visuallyhidden');
    }
    if (event.target === btnr) {
        numslide++
    }
    if (event.target === btnl) {
        numslide--
    }
    if (numslide < 0) {
        numslide = tagline.length-1;
    }
    if (numslide === tagline.length) {
        numslide = 0;
    }
    tagline[numslide].classList.remove('visuallyhidden');
    title[numslide].classList.remove('visuallyhidden');
    gallery.classList.add(arr[numslide]);
    inputs[numslide].checked = true;
}


for (let i=0;i<pop_tool.length;i++) {
    pop_tool[i].addEventListener('mouseover', showcart);
}
function showcart() {
    this.removeEventListener('mouseover', showcart);
    this.innerHTML += hovercart.innerHTML;
    this.children[0].style.display = 'none';
    this.classList.add('hovercart');
    this.addEventListener('mouseleave', showout);
    function showout() {
        this.removeEventListener('mouseleave', showout);
        this.classList.remove('hovercart');
        for (let i =0; i< this.children.length;i++) {
            this.children[i].style.display = 'none';
        }
        this.children[0].style.display = 'block';
        this.addEventListener('mouseover', showcart);
    }
}


servise_list.addEventListener('click', change);

function change(event) {
    for (let i =0;i<service_spec.length;i++) {
        service_spec[i].classList.remove('active');
    }
    let name = event.target.id.match(/(.*)-(.*)/)[2];
    let element = document.querySelector('.'+name);
    element.classList.add('active');
}