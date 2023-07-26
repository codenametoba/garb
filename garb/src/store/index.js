import{ proxy } from 'valtio'




const state = proxy ({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    logoDecal: './IMG-7348.PNG',
    fullDecal: './IMG-7348.PNG',


});


export default state;