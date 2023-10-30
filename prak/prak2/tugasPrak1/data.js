let playTotal = 0 // simpan hasil perhitungan
let buffer = "0" // simpan angka yg masuk atau yg ditampilan
let previousOperator // simpan operator yg dipilih

const screen = document.querySelector('.screen')

// fungsi button value yg ditekan
function buttonClick (value) {
    if(isNaN(value)){  // menentukan nilai itu bilangan
        handleSymbol(value)
    }else{ 
        handleNumber(value)
    }
    screen.innerText = buffer // mengembalikan nilai konten berupa text
}

function handleSymbol(symbol) { // mengelola operator
    switch(symbol){
        case 'C':
            buffer = '0'
            playTotal = 0
            break
        case '=':
            if(previousOperator === null){
                return
            }
            flushOperation(parseInt(buffer)) // menghitung hasil operasi
            previousOperator = null
            buffer = playTotal
            playTotal = 0
            break
        case '←':
            if(buffer.length ===1){
                buffer = '0'
            }else{
                buffer = buffer.substring(0, buffer.length - 1); // ngambil bbrp string
            }
            break
        case '+':
        case '-':
        case '×':
        case '÷':
            handelMath(symbol) // function mengelola operator
            break
    }
}

function handelMath(symbol) { 
    if(buffer === '0'){
        return
    }
    const intBuffer = parseInt(buffer) // menentukan nilai berisi integer 

    if(playTotal === 0){
        playTotal = intBuffer 
    }else{
        flushOperation(intBuffer)
    }
    previousOperator = symbol
    buffer = '0'
}

function flushOperation (intBuffer){ // menghitung hasil operasi
    if(previousOperator === '+'){
        playTotal += intBuffer 
    }else if(previousOperator === '-'){
        playTotal -= intBuffer
    }else if(previousOperator === '×'){
        playTotal *= intBuffer
    }else if(previousOperator === '÷'){
        playTotal /= intBuffer      
    }
}

function handleNumber (numberString){ // function mengelola tombol => ke dalam variabel buffer
    if(buffer === "0"){
        buffer = numberString
    }else{
        buffer += numberString
    }
}

function init(){ // fucntion inialisasi program
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init()