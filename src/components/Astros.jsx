import { useEffect, useState } from 'react'
import './Astros.css'
import CircularIndeterminate from './Progress.jsx'

const ASTROS_URL =  "http://api.open-notify.org/astros.json"  

const Astro = ({name,craft}) => {
    return(
        <div className="astro--card">
            <h2 className='astro--name'>Nombre: {name}</h2>
            <p className='astro--station'>Estación: {craft}</p>
        </div>
    )
}

const Astros = () => {
    const [estrellas, setEstrellas] = useState([]);

    useEffect(() =>{
        fetchAstros();
    }, []);

    const fetchAstros = () => {
        fetch(ASTROS_URL)
            .then((response) => response.json())
            .then(data => setEstrellas(data.people))
            .catch(err =>console.error(err))
    }

    console.log(estrellas)

    return(
        <>
            <h2 className='list_people'>Lista</h2>
            <div className='astros--container'>
            {
                estrellas.length !== 0 
                ?
                estrellas.map((astro, index) => (
                    <Astro key={index} name={astro.name} craft={astro.craft}/>
                ))
                :<CircularIndeterminate/>
            }
            </div>
        </>
    )
}

export default Astros;
