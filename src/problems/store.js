const store = (prices, notes, x) =>{
    let actualPrice1 = 0;
    let actualPrice2 = 0; 
    let total = 0; 
    for(let i = 0; i < prices.length; i++)
    {
        let tempNotes = notes[i].split(' ');
        if (tempNotes[0].toLowerCase() === "same"){
        
        }
        else
        {
            let percentage = parseFloat(tempNotes[0].replace("%", ""));
            if (tempNotes[1].toLowerCase() === "higher"){
                actualPrice1 = actualPrice1 + (prices[i] / (1 + percentage));
            }
            else
                actualPrice2 = actualPrice2 + (prices[i] / (1 - percentage));
        }
        total = actualPrice1 + actualPrice2;
    }
    return total <= x;
};

let main = () =>{
    console.log(store([130, 90, 60], ["10.0% higher than in store", "5.0% lower than in store", "Same as in store"], 5));
}
export default main;