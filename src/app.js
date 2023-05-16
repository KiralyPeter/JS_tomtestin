const doc = {
    weightInput: document.querySelector('#weight'),
    heightInput: document.querySelector('#height'),
    indexInput: document.querySelector('#index'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    index: 0
};

window.addEventListener('load', ()=> { // = 'onload' az esemény..
    init();
});

function init(){
        if(doc.calcButton){ // if-be tettük, mert a Jasmine reklamálna miatta...
            doc.calcButton.addEventListener('click', ()=>{
                //console.log('működik');
                startCalc();
        });
        }   
}

function startCalc(){
    let weight = doc.weightInput.value;
    let height = doc.heightInput.value;
    state.index = calcBodyIndex(weight, height);
    doc.indexInput.value = state.index;
}

// ezt is tesztelni kell...
function calcBodyIndex(weight, height){
    return weight / Math.pow(height, 2);
}

// ezt is tesztelni kell...
function checkInput(){
    let inputStr = String(input);
    return inputStr.match(/^[0-9.]+$/); // regex = számokkal kezdődik, és pontot is tartalmazhat, BOOLEAN értéket ad vissza a .match    
}