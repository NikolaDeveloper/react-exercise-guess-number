const Menu = ({ data, setData }) => {
    const updateNumber = (e) => {
        let num = parseFloat(e.target.value);
        if(!isFinite(num) || num < 1 || num > 9) {
            alert('Number must be from 1 to 9.');
            return;
        }
        setData({...data, number: num})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!isFinite(data.number) || data.number < 1 || data.number > 9) {
            alert('Number must be from 1 to 9.');
            return;
        }
        setData({...data, 
            gameState: 'started',
            tries: 0
        })
    }
    return (
        <div className="game-screen game-menu">
            <p>
                Pick a number from 1-9 and then guess where it's hidden.
            </p>
            <form onSubmit={onSubmit}>
                <input type="number" placeholder="Number from 1-9" onChange={updateNumber.bind(this)} value={data.number} />
                <button type="submit">START GAME</button>
            </form>
        </div>
    );
}

export default Menu;
