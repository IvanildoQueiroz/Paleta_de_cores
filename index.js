const box_color = document.querySelectorAll('.box-color');
const P_name = document.querySelectorAll('p')
const color_name = ['#FF5733', '#FFC300', '#DAF7A6','#900C3F','#C70039'];
btn = document.querySelector('button')
btn.addEventListener('click',e=>{
 
    box_color.forEach((e,p)=>{
        e.style.backgroundColor = color_name[p]
        P_name[p].innerHTML = color_name[p]
        P_name[p].style.color = color_name[p]
        
        alterColor()
    })
 
})
function randColor(){
    let nColor = Math.floor(Math.random()*16) 
    if(nColor === 10)nColor = 'A';
    if(nColor === 11)nColor = 'B';
    if(nColor === 12)nColor = 'C';
    if(nColor === 13)nColor = 'D';
    if(nColor === 14)nColor = 'E';
    if(nColor === 15)nColor = 'E';
    if(nColor === 16)nColor = 'F';
    return nColor;
}
function alterColor(){
    for(let i=0; i < 5; i++){
        let nameColor = Array.from(color_name[i]);

            nameColor.map((v,p) =>{
                nameColor[p] = randColor()
            })

        nameColor.pop()
        nameColor.unshift("#")
        color_name[i] = nameColor.join('')
    }
}
document.addEventListener('click',(e)=>{
    const el = e.target;
    if(el.tagName ==='P'){
        const tag = el;
        const text = tag.innerText;
        navigator.clipboard.writeText(text)
        .then(()=>{alert('Cor copiada !')})
        .catch(e=>{
            alert("o chamador não tem permissão para gravar na área de transferência.")
        })
    }
    // P_name.seletc();
    // P_name.setSelectionRange(0,999)
    // text.seletc()
})

