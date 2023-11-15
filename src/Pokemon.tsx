import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PokemonImageAPIResponse, PokemonData, RouteParams } from './types';

function Pokemon() {

    const { id } = useParams<RouteParams>();
    const [pokemonData, setPokemonData] = useState<PokemonData>();
    const [pokemonImage, setPokemonImage] = useState<string>('');

    useEffect(() => {
        const getPokemonData = async (pid: string | undefined) => {
            try {
                const [dataResp, speciesResp] : [Response, Response] = await Promise.all([fetch(`https://pokeapi.co/api/v2/pokemon/${pid}`), fetch(`https://pokeapi.co/api/v2/pokemon-species/${pid}`)]);
                if (!dataResp.ok) {
                    throw new Error(`Error during fetch when calling the pokemon data api: ${dataResp.statusText}`);
                }
                if (!speciesResp.ok) {
                    throw new Error(`Error during fetch when calling the pokemon species api: ${speciesResp.statusText}`);
                }
                const [dataResult, speciesResult] : [PokemonImageAPIResponse, PokemonData] = await Promise.all([dataResp.json(), speciesResp.json()]);
                setPokemonImage(dataResult.sprites.front_default);
                const { base_happiness, capture_rate, id, name, hatch_counter, flavor_text_entries } = speciesResult;
                const extractedData: PokemonData = {
                    base_happiness,
                    capture_rate,
                    id,
                    name,
                    hatch_counter,
                    flavor_text_entries
                }
                setPokemonData(extractedData);
            } catch (error) {
                console.error('Error fetching data from pokeapi');
            }

        };
        getPokemonData(id);
    }, [id]);

    return (
        <div className="App">
            <div>
                <Card >
                    <Card.Img variant="top" src={pokemonImage} />
                    <Card.Body>
                        <Card.Title>{pokemonData?.name}</Card.Title>
                        <Card.Text>
                            {pokemonData?.flavor_text_entries[0].flavor_text}
                        </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Base Happiness: {pokemonData?.base_happiness}</ListGroup.Item>
                            <ListGroup.Item>Capture Rate: {pokemonData?.capture_rate}</ListGroup.Item>
                            <ListGroup.Item>Hatch Counter: {pokemonData?.hatch_counter}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
            <div className="backBtn">
                <Link to={`/`}>
                    <Button variant="primary">Back</Button>
                </Link>
            </div>
        </div>
    );
};

export default Pokemon;
