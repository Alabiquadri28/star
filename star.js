let dis=document.getElementById('kop')
let kis=document.getElementById('lop')
let gis=document.getElementById('gop')
let lis=document.getElementById('bop')
let fis=document.getElementById('jop')
let cis=document.getElementById('ket')
let awe=document.getElementById('lap')
let solp=document.getElementById('der')
let boss=document.getElementById('main')

dis.onclick=function(){
    dis.style.color='yellow'
    cis.style.color='red'
    cis.style.transform='translate(10px,10px)'
    cis.style.transition='2s'
    if(kis.style.color=='yellow'){
    kis.style.color='gray'
    }
    if(gis.style.color=='yellow'){
        gis.style.color='gray'
    }
    if(lis.style.color=='yellow'){
        lis.style.color='gray'
    }
    if(fis.style.color=='yellow'){
        fis.style.color='gray'
    }
}

kis.onclick=function(){
    kis.style.color='yellow'
    dis.style.color='yellow'
    cis.style.color='blue'
    cis.style.transform='translate(10px,10px)'
    cis.style.transition='2s'
    if(gis.style.color=='yellow'){
        gis.style.color='gray'
    }
    if(lis.style.color=='yellow'){
        lis.style.color='gray'
    }
    if(fis.style.color=='yellow'){
        fis.style.color='gray'
    }
    
}
gis.onclick=function(){
    gis.style.color='yellow'
    kis.style.color='yellow'
    dis.style.color='yellow'
    cis.style.color='yellow'
    cis.style.transform='translate(10px,10px)'
    cis.style.transition='2s'
if(lis.style.color=='yellow'){
    lis.style.color='gray'
}
if(fis.style.color=='yellow'){
    fis.style.color='gray'
}
    
}
lis.onclick=function(){
    lis.style.color='yellow'
    gis.style.color='yellow'
    kis.style.color='yellow'
    dis.style.color='yellow'
    cis.style.color='purple'
    cis.style.transform='translate(10px,10px)'
    cis.style.transition='2s'
    if( fis.style.color=='yellow'){
        fis.style.color='gray' 
    }

}
fis.onclick=function(){
    fis.style.color='yellow'
    lis.style.color='yellow'
    gis.style.color='yellow'
    kis.style.color='yellow'
    dis.style.color='yellow'
    cis.style.color='green'
    cis.style.transform='translate(10px,10px)'
    cis.style.transition='2s'

}

awe.classList.add('bas')
solp.onclick=function(){
    if( dis.style.color=='yellow'){
        boss.classList.add('bas')
        awe.classList.remove('bas')

    }
    if(kis.style.color=='yellow'){
        boss.classList.add('bas')
        awe.classList.remove('bas')


    }
    if( gis.style.color=='yellow'){
        boss.classList.add('bas')
        awe.classList.remove('bas')

    }
    if( lis.style.color=='yellow'){
        boss.classList.add('bas')
        awe.classList.remove('bas')

    }
    if( fis.style.color=='yellow'){
        boss.classList.add('bas')
        awe.classList.remove('bas')

    }
}