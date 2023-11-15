import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PokemonListItem, PokemonListAPIResponse } from './types';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function List() {

    const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const getPokemons = async () => {
            try {
                const response : Response = await fetch('https://pokeapi.co/api/v2/pokemon');
                if (!response.ok) {
                    throw new Error(`Error during fetch when calling the pokeapi: ${response.statusText}`);
                }
                const result : PokemonListAPIResponse = await response.json();
                setPokemonList(result.results);
            }
            catch (error) {
                console.error('Error fetching data from pokeapi');
            }
        };
        getPokemons();
    }, []);

    return (
        <div className="App">
        <div >
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Search
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                />
            </InputGroup>
            </div>
            <div >
            <ListGroup>
                {pokemonList
                    .filter((pokemon) => pokemon.name.includes(searchTerm))
                    .map((val, key) =>
                        <Link to={`pokemon/${val.url.slice('https://pokeapi.co/api/v2/pokemon/'.length)}`}>
                            <ListGroup.Item>
                                {val.name}
                            </ListGroup.Item>
                        </Link>
                    )}
            </ListGroup>
        </div>
        </div>
    );
};

export default List;
