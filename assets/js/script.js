let nodeList = document.querySelectorAll('.title');
nodeList.forEach(function(ele) {
    ele.addEventListener('click',myFun);
    function myFun() {
        let parentEle = ele.parentElement,
        descWrapSel = parentEle.querySelector('.desc_wrap');
        parentEle.classList.toggle('active');
        if(parentEle.classList.contains('active')) {
            let descHt = parentEle.querySelector('.desc').offsetHeight;
            descWrapSel.style.height=descHt+"px";
        }
        else {
            descWrapSel.style.height=0+"px";
        }
    }
});