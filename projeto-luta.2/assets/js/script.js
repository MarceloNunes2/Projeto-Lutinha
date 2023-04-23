


const char = createKnight(`Marcelo`)
const monster = createLittleMonster()  
stage.start(

    char,
    monster,
    document.querySelector(`#char`),
    document.querySelector(`#monster`)
)

setTimeout(function() {
    document.querySelector('#loader-wrapper').classList.add('loaded');
}, 3000);

const bloodImg = document.querySelector('.blood');
const attackBtn = document.querySelector('.attackbutton');

