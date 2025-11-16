import { useState } from 'react';
import './index.css';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import tailwindLogo from './assets/tailwindcss.svg';

function Converter() {
    const [value, setValue] = useState('');
    const [starter, setStarter] = useState('inches');
    const [ender, setEnder] = useState('centimeters');
    const [result, setResult] = useState('');

    const toMeters = {
        inches: 0.0254,
        centimeters: 0.01,
        feet: 0.3048,
        meters: 1,
        miles: 1609.34,
        kilometers: 1000,
    };

    // LOGIC
    const convert = (newValue = value) => {
        if (!newValue) {
            setResult('');
            return;
        }
    
        const userNum = parseFloat(newValue);
        const valueInMeters = userNum * toMeters[starter];
        const endingValue = valueInMeters / toMeters[ender];
        setResult(endingValue.toFixed(2));
    };


    // RENDERING
    return (
        <div className="min-h-screen bg-stone-700 flex flex-col items-center justify-center p-4">

            <div className="bg-green-200 p-6 rounded-lg shadow-md w-full max-w-md mb-25">
                <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">Distance Converter</h1>
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
                        className="border border-stone-700 p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-600 no-spinners"
                    />
                    <select 
                        value={starter} 
                        onChange={(e) => {
                            setStarter(e.target.value);
                            convert();
                            }}
                        className="border border-stone-700 p-2 rounded w-full"
                    >
                        <option value="inches">Inches</option>
                        <option value="centimeters">Centimeters</option>
                        <option value="feet">Feet</option>
                        <option value="meters">Meters</option>
                        <option value="miles">Miles</option>
                        <option value="kilometers">Kilometers</option>
                    </select>
                    <span className="self-center text-gray-900"> to </span>
                    <select 
                        value={ender} 
                        onChange={(e) => {
                            setEnder(e.target.value);
                            convert()
                            }}
                        className="border border-stone-700 p-2 rounded w-full"
                    >
                        <option value="inches">Inches</option>
                        <option value="centimeters">Centimeters</option>
                        <option value="feet">Feet</option>
                        <option value="meters">Meters</option>
                        <option value="miles">Miles</option>
                        <option value="kilometers">Kilometers</option>
                    </select>
                </div>
                <p className="mt-4 text-lg font-semibold text-gray-900 text-center">Result: {result} </p>
            </div>
            <div className="w-full max-w-md">
                <h2 className="text-xl font-semibold text-white text-center">Technologies Used</h2>
                <div className="flex justify-center space-x-6 mt-4">
                    <img src={reactLogo} alt="React" className="h-10" />
                    <img src={viteLogo} alt="Vite" className="h-10" />
                    <img src={tailwindLogo} alt="Tailwind CSS" className="h-10" />
                </div>
            </div>
        </div>
    );
}

export default Converter;