// import React from "react";


// function ListOfCars () {

// const [cars,setCars] = React.useState([])
// const [model,setModel] = React.useState("")
// const [make,setMake] = React.useState("")
// const [year,setYear] = React.useState("2024")

//   function handleMakeClick(e) {
//     setMake( e.target.value );
//   }
//   function handleModelClick(e) {
//     setModel(e.target.value );
//   }
//   function handleYearClick(e) {
//     setYear(e.target.value);
//   }

//   function handleClick () {
//     const newCar = {
//         make: make,
//         model: model,
//         year : year
//     }
    
//     setCars(cars =>[...cars,newCar])
//   }
//   return (
//     <div>
//       <h1>List of Cars Objects</h1>

//       <ul>
//         {cars.map((car) => <li>A {car.year} {car.make} {car.model}</li>)}
//       </ul>

//       <input type="text" value={make} placeholder="Enter Make" onChange={handleMakeClick} /> <br/>
//       <input type="text" value={model} placeholder="Enter model" onChange={handleModelClick} /><br/>
//       <input type="text" value={year} placeholder="Enter Year"  onChange={handleYearClick}/><br/><br/>

//       <button onClick={handleClick}>Add cars</button>
//     </div>
//   );
// }

// export default ListOfCars;
