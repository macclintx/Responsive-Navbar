var clicks=0;
document.addEventListener('click',function(l){
    let el_id=l.target.id;
    if(el_id=="menu-icon"){
        document.querySelector(".menu-small-screen").style.marginTop="34px";
        document.querySelector(".menu-icon").style.transform="rotate(50deg)";
        ++clicks;

        if(clicks%2==0){
            document.querySelector(".menu-small-screen").style.marginTop="-400px";
            document.querySelector(".menu-icon").style.transform="rotate(0deg)";
        }
    }
})
