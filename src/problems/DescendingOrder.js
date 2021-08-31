const NumOrder = (numero) => {
    let newArray = {};
    newArray = [...`${numero}`].map(c => parseInt(c));
    let order = newArray.sort(function (a, b) {return b - a});
    return order.join('');
}
let main = () =>{
    console.log(NumOrder(123456789));
}
export default main;