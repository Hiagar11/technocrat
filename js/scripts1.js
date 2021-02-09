var pop_tool = document.querySelectorAll('.item > div');
var hovercart = document.querySelector('.hovercart');
var popap = document.querySelector('.popap');
var buy = document.querySelector('.buy');

popap.addEventListener('click', close, false);
function close(event) {
    if (event.target.tagName == 'BUTTON' || event.target.tagName === "IMG") {
        popap.style.display = 'none';
    }
}

for (let i=0;i<pop_tool.length;i++){
    pop_tool[i].addEventListener('mouseover', showcart1)
}
function showcart1() {
    this.removeEventListener('mouseover', showcart1);
    this.innerHTML += hovercart.innerHTML;
    this.children[0].style.display = 'none';
    this.classList.add('hovercart');
    this.addEventListener('mouseleave', showout1);
    function showout1() {
        this.removeEventListener('mouseleave', showout1);
        this.classList.remove('hovercart');
        for (let i =0; i< this.children.length;i++) {
            this.children[i].style.display = 'none';
        }
        this.children[0].style.display = 'block';
        this.addEventListener('mouseover', showcart1);
    }
}

buy.addEventListener('click', popapshow);
function popapshow() {
    popap.classList.remove('visuallyhidden');
}
if (document.documentURI.endsWith('app=1')) {
    popap.style.display = 'block';
    popap.classList.remove('visuallyhidden');
}

