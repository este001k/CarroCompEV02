//Script para que el boton que va hacia Dropdown-menu se habra al pasar el cursor
const dropdownHover = document.querySelectorAll('.dropdown-abrir');
dropdownHover.forEach(function (dropdown) {
  dropdown.addEventListener('mouseenter', function () { //'mouseenter'es la accion se se busca con el cursor cuando entra
    this.querySelector('.dropdown-menu').classList.add('show');
  });
  dropdown.addEventListener('mouseleave', function () { //'mouseleave' es la accion cuando el cursor sale del objeto
    this.querySelector('.dropdown-menu').classList.remove('show');
  });

  
});