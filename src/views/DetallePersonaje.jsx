import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const DetallePersonaje = () => {
    const [personaje, setPersonaje] = useState({});
    const [cargando, setCargando] = useState(true);
    const { idPokemon } = useParams();

    const getPersonaje = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        const data = await res.json();
        setPersonaje(data);
        setCargando(false);
    }

    useEffect(() => {
        getPersonaje();

    }, []);

    return (
        cargando ?
            <h1>Cargando datos...</h1> :
            <div className='detalleView'>
                <div className='box'>
                    <div className='imagenPokemon'>
                        <img className='boxImg' src={personaje.sprites.other.dream_world.front_default} alt="imagen pokemon" />
                    </div>
                    <div className='detalleDatos'>
                        <p className='nombrePersonaje'><strong>{personaje.name}</strong></p>
                        <p><strong>{personaje.stats[0].stat.name}:</strong> {personaje.stats[0].base_stat}</p>
                        <p><strong>{personaje.stats[1].stat.name}:</strong> {personaje.stats[1].base_stat}</p>
                        <p><strong>{personaje.stats[2].stat.name}:</strong> {personaje.stats[2].base_stat}</p>
                        <p><strong>{personaje.stats[3].stat.name}:</strong> {personaje.stats[3].base_stat}</p>
                        <p><strong>{personaje.stats[4].stat.name}:</strong> {personaje.stats[4].base_stat}</p>
                        <p><strong>{personaje.stats[5].stat.name}:</strong> {personaje.stats[5].base_stat}</p>
                        <p><strong>Type: </strong> {personaje.types[0].type.name}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default DetallePersonaje