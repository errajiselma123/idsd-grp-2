var numOne=document.getElementById('num_one')
var numTwo=document.getElementById('num_two')
var numSum=document.getElementById('num_sum')

numOne.addEventListener('input', add)
numTwo.addEventListener('input', add)

function add(){
    var one = parseFloat(numOne.value) || 0
    var two = parseFloat(numTwo.value) || 0
    numSum.innerHTML = one+ two
}
