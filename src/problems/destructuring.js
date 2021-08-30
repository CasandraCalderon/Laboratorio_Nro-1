const person = {
    name: "Gregor",
    lastname: "Mandella",
    age: 34,
    roles: [
      { name: "Manager", method: "get" },
      { name: "Client", method: "post" },
      { name: "User", method: "get" },
    ],
    address: {
      address: {
        street: "3914 Woodruff Ave",
        location: "Oakland, CA 94602Glenview",
      },
      position: {
        lat: 123.221,
        lng: 124.544,
      },
    },
   };
   
   const showPersonalInformation = (person) => {
    const printPersonal = (nombre, apellido, edad) =>{
        return ["Nombres " + nombre, "Apellidos " + apellido, "Edad " + edad].join("\n");
    }
    return (printPersonal(person.name, person.lastname, person.age));
   };
   const showRoles = (person) => {
    const printer = (roles) => {
        for (let i = 0; i < roles.length; i++) {
            console.log (`Nombre del rol ${roles[i]["name"]} \nTipo de rol ${roles[i]["method"]}`);
        }
    }
    return(printer(person.roles));
   };
   const getPosition = (person) => {
    const { position } = person.address;
    return position;
   };
   const getFirstRol = (person) => {
       const {
           roles : [rol],
       } = person;
    return rol;
   };
   const getAddress = (person) => {
       const { address : { address } } = person;
    return address;
   };
   const main = () => {
    console.log(showPersonalInformation(person));
    console.log(showRoles(person));
    console.log(getPosition(person));
    console.log(getFirstRol(person));
    console.log(getAddress(person));
   };
   export default main;
   