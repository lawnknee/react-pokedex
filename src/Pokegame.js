import Pokedex from "./Pokedex";

function Pokegame(props) {
    const pokemon = [...props.pokemon];
    const hand1 = [];
    while (hand1.length < pokemon.length) {
        let len = pokemon.length;
        let randomIndex = Math.floor(Math.random() * (len));
        hand1.push(pokemon[randomIndex]);
        pokemon.splice(randomIndex, 1);
    }
    const hand2 = [...pokemon];

    const hand1exp = hand1.reduce((acc, val) => {
        return acc += val.base_experience;
    }, 0);
    const hand2exp = hand2.reduce((acc, val) => {
        return acc += val.base_experience;
    }, 0);

    const hand1WinOrLose = hand1exp > hand2exp;
    const hand2WinOrLose = hand2exp > hand1exp;

    return (
        <div>
            <Pokedex pokemon={hand1} expTotal={hand1exp} isWinner={hand1WinOrLose} />
            <Pokedex pokemon={hand2} expTotal={hand2exp} isWinner={hand2WinOrLose} />
        </div>
    )    
}


Pokegame.defaultProps = {
    pokemon: [
        { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
        { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
        { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
        { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
        { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
        { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
        { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
        { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
};

export default Pokegame;

