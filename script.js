document.addEventListener('DOMContentLoaded',function(){
    const animateButton = document.getElementById('btn');
    const changeContent = document.getElementById('btn1');
    const scrollSection = document.getElementById('btn2');
    const title = document.getElementById('title');
    const content = document.getElementById('content')

    animateButton.addEventListener('click',function(){
        title.classList.add('animate');
    });
    changeContent.addEventListener('click',function(){
        title.textContent ='New Title';
        content.textContent ="This content has been changed!";
    });
   
    function smoothScrollTo(targetId){
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top:targetElement.offsetTop,
            behavior:'smooth'
        });
        scrollSection.addEventListener('click',function(){
            smoothScrollTo('section2');
        });
    }
});