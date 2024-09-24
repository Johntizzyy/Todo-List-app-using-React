import React from 'react'

function MyComponent () {

    const [car,setCar] = React.useState({
        year:2024,make:"Ford",model:"Mustang"
    })

    function handleYearChange (e) {
        setCar(c => ({...car,year: e.target.value}))
    }

    function handleMakeChange(e) {
        setCar(c => ({...car, make: e.target.value}))
    }

    function handleModelClick (e) {
        setCar(c => ({...car,model: e.target.value}))
    }

    function handleSubmit () {}
    return (<div>
        <p>Your car is a {car.model}, {car.make} {car.year} model</p>
        <input type='number' value={car.year} onChange={handleYearChange}/> <br/>
        <input type='text' value={car.make} onChange={handleMakeChange}/><br/>
        <input type='text' value={car.model} onChange={handleModelClick}/>

        <input type="submit" value="Submit" onClick={handleSubmit}/>
    </div>)
}

export default MyComponent