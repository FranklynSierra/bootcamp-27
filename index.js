const parrafos=document.querySelectorAll('.parrafo');
const secciones=document.querySelectorAll('.seccion');

parrafos.forEach(parrafo=>{
parrafo.addEventListener('dragstart',e=>{
console.log('drag')
parrafo.classList.add('dragging');
e.dataTransfer.setData('id',parrafo.id)
})
parrafo.addEventListener('dragend',()=>{

    parrafo.classList.remove('dragging');
})

})

secciones.forEach(seccion=>{
    seccion.addEventListener('dragover',e=>{
     e.preventDefault();
    

    })
    seccion.addEventListener('drop',e=>{


      const id_parrafo=e.dataTransfer.getData('id')
      const parrafo=document.getElementById(id_parrafo);
      seccion.appendChild(parrafo)
       
    })
    
})



