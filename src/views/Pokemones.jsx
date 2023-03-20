import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



const Pokemones = () => {
    const [idPersonaje, setIdPersonaje] = useState("");
    const [pokemones, setPokemones] = useState([]);
    const navigate = useNavigate();

    const getPokemones = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=30&offset=30');
        const data = await res.json();

        let dataSelect = [];
        data.results.map((personaje) => {
            dataSelect.push({ url: personaje.url, nombre: personaje.name })
        })

        setPokemones(dataSelect);
    }


    useEffect(() => {
        getPokemones();

    }, [])

    const verDetalle = () => {
        let idPokemon = idPersonaje.replace('https://pokeapi.co/api/v2/pokemon/','');
        idPokemon = idPokemon.replace('/','');
        navigate(`/pokemones/${idPokemon}`);
    }


    return (
        <div className="personajeView">
            <h1>Selecciona un pokemón</h1>
            <select className='select' name="id" id="id" onChange={(e) => setIdPersonaje(e.target.value)}>
                <option value="">Pokemones</option>
                {
                    pokemones.map((p) => {
                        return <option key={p.url} value={p.url}>{p.nombre}</option>
                    })
                }
            </select>
            <Button className='px-1' variant="dark" onClick={(e) => verDetalle()}>Ver Detalle</Button>
        </div>
    )
}

export default Pokemones