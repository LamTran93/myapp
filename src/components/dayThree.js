import { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const DayThree = () => {
    const [pokemon, setPokemon] = useState({
        name: 'loading',
        weight: 'loading',
        sprites: {
            front_default: 'loading',
            back_default: 'loading',
        },
    })
    const [id, setId] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setPokemon(res)
                setIsLoading(false)
            })
    }, [id])

    return (
        <Container>
            <div>
                {isLoading ? (
                    <p>loading...</p>
                ) : (
                    <div>
                        <p>Id: {id}</p>
                        <p>Name: {pokemon.name}</p>
                        <p>Weight: {pokemon.weight}</p>
                        <img
                            src={pokemon.sprites.front_default}
                            alt="front_default"
                        />
                        <img
                            src={pokemon.sprites.back_default}
                            alt="back_default"
                        />
                    </div>
                )}

                <div>
                    <Button onClick={() => setId((prev) => prev - 1)}>
                        Previous
                    </Button>
                    <Button onClick={() => setId((prev) => prev + 1)}>
                        Next
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default DayThree
