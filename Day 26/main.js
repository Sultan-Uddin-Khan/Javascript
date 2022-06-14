//  console.log("connected")

// //Selecting Element

//  const h1Elm=document.querySelector('h1');
//  const containerElm=document.querySelector('.container');
 const navElm=document.querySelector('#nav');
//  const firstElm=document.querySelector('#nav .first');


//  const navElmById=document.getElementById('nav')
// h1Elm.textContent='Our New Content'
//const firstNavElm=navElm.children[0]
// console.log(firstNavElm.nextElementSibling.nextElementSibling.previousElementSibling); 
// console.log(firstNavElm.closest('.body')); 
// firstNavElm.remove()
// const liElm=document.createElement('li')
// liElm.className='five'
// liElm.textContent='Five'
// navElm.appendChild(liElm)
// const liElmHTML='<li class="five">Five</li>'
// navElm.insertAdjacentHTML('beforeend',liElmHTML)
// console.log(liElmHTML);

const arrNavElm=Array.from(navElm.children)
arrNavElm.forEach((elm)=>{
    elm.addEventListener('click',(e)=>{
        console.log(e.target.textcontent)
    })
})
