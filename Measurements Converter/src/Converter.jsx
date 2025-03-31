import { useState } from 'react';
import './index.css';

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
        <div className="min-h-screen bg-blue-200 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Distance Converter</h1>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setValue(newValue);
                            convert(newValue);
                        }}
                        placeholder="Enter Value"
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select 
                        value={starter} 
                        onChange={(e) => {
                            setStarter(e.target.value);
                            convert();
                            }}
                        className="border border-gray-300 p-2 rounded w-full"
                    >
                        <option value="inches">Inches</option>
                        <option value="centimeters">Centimeters</option>
                        <option value="feet">Feet</option>
                        <option value="meters">Meters</option>
                        <option value="miles">Miles</option>
                        <option value="kilometers">Kilometers</option>
                    </select>
                    <span className="self-center text-gray-600"> to </span>
                    <select 
                        value={ender} 
                        onChange={(e) => {
                            setEnder(e.target.value);
                            convert()
                            }}
                        className="border border-gray-300 p-2 rounded w-full"
                    >
                        <option value="inches">Inches</option>
                        <option value="centimeters">Centimeters</option>
                        <option value="feet">Feet</option>
                        <option value="meters">Meters</option>
                        <option value="miles">Miles</option>
                        <option value="kilometers">Kilometers</option>
                    </select>
                </div>
                <p className="mt-4 text-lg text-gray-700 text-center">Result: {result} </p>
            </div>
        </div>
    );
}

export default Converter;