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
dragDown();
// document.addEventListener('click', (e)=>{
//   dragDown(e);
// })