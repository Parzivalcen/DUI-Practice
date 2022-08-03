import _, { drop } from 'lodash';
import './styles/style.scss';


function dragDown() {
  // console.log(e.target.classList);
  const dropdown = document.querySelector('.dropdown-js');
  dropdown.addEventListener('mouseup', ()=>{
    const menu = document.querySelector('.dropdown-menu');
    const attri = menu.getAttribute('data-visible');

    attri == 'true' ? menu.setAttribute('data-visible', false) : menu.setAttribute('data-visible', true);
  })
}
function showMobileSlider(buttonClass, sidebarClass){
  const btn = document.querySelector(buttonClass);
  btn.addEventListener('mouseup', ()=>{
    const sidebar = document.querySelector(sidebarClass);
    const visibility = sidebar.getAttribute('data-visible');

    if(visibility === 'false'){
      sidebar.setAttribute('data-visible', true);
      btn.setAttribute('aria-expanded', true)
    }else{
      sidebar.setAttribute('data-visible', false);
      btn.setAttribute('aria-expanded', false)
    }
    
  })
}

const closeSliderOnItem = (itemsClass) =>{
  const items = document.querySelectorAll(itemsClass)
  items.forEach((item)=>{
    item.addEventListener('click', ()=>{
      item.parentElement.setAttribute('data-visible', false)
      item.parentElement.previousElementSibling.setAttribute('aria-expanded', false)
    })
  })
}

const higlight =(btnClass)=>{
  const btns = document.querySelectorAll(btnClass);
  btns.forEach((btn) =>{
    btn.addEventListener('click', changeBtn);
  })

}

const changeBtn = (e) => {
  const targetbtn = e.target.parentElement;
  const container = targetbtn.parentElement;
  const attri = targetbtn.getAttribute('aria-selected');
  if(attri){
    container.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false)
    targetbtn.setAttribute('aria-selected', true)
  }

}

dragDown();
showMobileSlider('.all-cat-btn', '.categories');
closeSliderOnItem('.category')
higlight('.btn')
// document.addEventListener('click', (e)=>{
//   dragDown(e);
// })