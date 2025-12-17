import { useState } from "react"
import Display from "./Display"
import Button from "./Button"
import './index.css'

export default function Main() {
    const [display, setDisplay] = useState('')

    const handleDisplayChange = (str) => {
        const newDisplay = display + str
        setDisplay(newDisplay)
    }

    const handleReset = () => {
        setDisplay('')
    }

    const handleCalculation = (str) => {
        if (Number(display)) {
            handleDisplayChange(str)
        }

        if (str === '=') {
            let newDisplay = display;
            if (newDisplay.includes('x')) {
                newDisplay = newDisplay.replace('x', '*')
            }
            setDisplay(eval(newDisplay));
        }
    }

    return (
        <div className='calculator-container'>
            <Display display={display} />
            <div>
                <div className="number-pad-row">
                    <Button onClick={() => handleDisplayChange('7')} title={'7'} />
                    <Button onClick={() => handleDisplayChange('8')} title={'8'} />
                    <Button onClick={() => handleDisplayChange('9')} title={'9'} />
                    <Button onClick={() => handleCalculation('/')} title={'/'} />
                </div>
                <div className="number-pad-row">
                    <Button onClick={() => handleDisplayChange('4')} title={'4'} />
                    <Button onClick={() => handleDisplayChange('5')} title={'5'} />
                    <Button onClick={() => handleDisplayChange('6')} title={'6'} />
                    <Button onClick={() => handleCalculation('x')} title={'x'} />
                </div>
                <div className="number-pad-row">
                    <Button onClick={() => handleDisplayChange('1')} title={'1'} />
                    <Button onClick={() => handleDisplayChange('2')} title={'2'} />
                    <Button onClick={() => handleDisplayChange('3')} title={'3'} />
                    <Button onClick={() => handleCalculation('-')} title={'-'} />
                </div>
                <div className="number-pad-row">
                    <Button onClick={() => handleReset()} title={'C'} />
                    <Button onClick={() => handleDisplayChange('0')} title={'0'} />
                    <Button onClick={() => handleCalculation('=')} title={'='} />
                    <Button onClick={() => handleCalculation('+')} title={'+'} />
                </div>
            </div>
        </div>
    )
}