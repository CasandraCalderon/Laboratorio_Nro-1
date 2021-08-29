const createDivElement = (label) => {
    let btn = document.createElement("button");
    btn.innerHTML = label;
    let root = document.getElementById("root");
    root.append(btn);
    return btn;
   };
   const createMenu = () => {
    for (let i = 0; i < 10; i++) {
      let btn = createDivElement("Button" + i);
      btn.addEventListener("click", () => {
        alert("I'm the button " + i);
      });
    }
   };
   export default createMenu;
   
