const elements = document.getElementsByClassName("sw-CardBase sw-CardBase--shadow");
if(elements.length==1) elements[0].style.display = 'none';
if(elements.length>=2) elements[1].style.display = 'none';
for (let i = 0; i < elements.length; i++) {
    // console.log(elements[i]);
    // elements[i].style.display = 'none';
}
