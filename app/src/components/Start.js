
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Start = ({ data, setData }) => {
    var tries = data.tries;

    const chooseTile = (e) => {
        if(data.tries >= 3)
            return;

        let tile = e.target;
        if(tile.className.indexOf('picked') !== -1)
            return;
        
        tries = data.tries + 1;

        let rnd = Math.floor(Math.random() * (numbers.length - 1));
        tile.innerHTML = numbers[rnd];

        if(numbers[rnd] === data.number) {
            tile.className += " correct picked";
            let try_label = tries === 1 ? 'try' : 'tries';
            setTimeout(() => {
                alert(`Congrats! You found your number in ${tries} ${try_label}.`);
                reset();
            }, 10)
            return;
        }

        numbers.splice(rnd, 1);
        //console.log(numbers[rnd], rnd, numbers, numbers.length);

        tile.className += " wrong picked";
        setData({...data, tries: tries});
        if(tries >= 3) {
            setTimeout(() => {
                alert('You failed :(');
                reset();
            }, 10)
        }
    }
    const reset = () => {
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        setData({...data, number: '', tries: 0, gameState: 'menu'})
    }

    const try_label = 3 - tries === 1 ? 'try' : 'tries'
    return (
        <div className="game-screen game-start">
            <p>
                Find your number ;) You've got {3 - tries} {try_label} left.
            </p>
            <div className="tiles">
            {Array.from(Array(9).keys()).map((i) => {
                return (<div onClick={chooseTile.bind(this)} className="tile"></div>)
            })}
            </div>
        </div>
    );
}

export default Start;
