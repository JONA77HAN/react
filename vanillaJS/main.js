//vanilla javaScript

//recuperamos el botón
const button = document.querySelector('button')

//al hacer click en el botón, tenemos que ejecutar una función
button.addEventListener('click', function()
{
    //recuperar la id del atributo del HTML
    const id = button.getAttribute('data-id')

    //llamar a un servicio para actualizar si me gusta
    //toggleLike(id)
    if(button.classList.contains('liked')) {
        button.classList.remove('liked')
        button.innerText = 'Me gusta'
    } else {
        button.classList.add('liked')
        button.innerText = 'Quitar me gusta'
    }
}
)