import { useState } from 'react';

function Converter() {
    const [value, setValue] = useState('');
    const [starter, setStarter] = useState('inches');
    const [ender, setEnder] = useState('centimeters');
    const [result, setResult] = useState('');

    // LOGIC
    const convert = (newValue = value) => {
        if (!newValue) {
            setResult('');
            return;
        }
    

        const userNum = parseFloat(newValue);
        let endingValue;

        if (starter === 'inches' && ender === 'centimeters') {
            endingValue = userNum * 2.54;
        } else if (starter === 'centimeters' && ender === 'inches') {
            endingValue = userNum / 2.54;
        } else if (starter === 'feet' && ender === 'meters') {
            endingValue = userNum * 0.3048;
        } else if (starter === 'meters' && ender === 'feet') {
            endingValue = userNum / 0.3048;
        } else if (starter === 'miles' && ender === 'kilometers') {
            endingValue = userNum * 1.60934;
        } else if (starter === 'kilometers' && ender === 'miles') {
            endingValue = userNum / 1.60934;
        } else {
            endingValue = userNum;
        }

        setResult(endingValue.toFixed(2));
    };


    // RENDERING
    return (
        <div>
            <h1>Distance Converter</h1>
            <input
                type="number"
                value={value}
                onChange={(e) => {
                    const newValue = e.target.value;
                    setValue(newValue);
                    convert(newValue);
                }}
                placeholder="Enter Value"
            />
            <select 
                value={starter} 
                onChange={(e) => {
                    setStarter(e.target.value);
                    convert();
                    }}>
                <option value="inches">Inches</option>
                <option value="centimeters">Centimeters</option>
                <option value="feet">Feet</option>
                <option value="meters">Meters</option>
                <option value="miles">Miles</option>
                <option value="kilometers">Kilometers</option>
            </select>
            <span> to </span>
            <select 
                value={ender} 
                onChange={(e) => {
                    setEnder(e.target.value);
                    convert()
                    }}>
                <option value="inches">Inches</option>
                <option value="centimeters">Centimeters</option>
                <option value="feet">Feet</option>
                <option value="meters">Meters</option>
                <option value="miles">Miles</option>
                <option value="kilometers">Kilometers</option>
            </select>
            <p>Result: {result} </p>
        </div>
    );
}

export default Converter;