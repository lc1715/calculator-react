import { useState } from "react"
import Display from "./Display"
import Button from "./Button"
import './index.css'

export default function Main() {
    const [display, setDisplay] = useState('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operator, setOperator] = useState('')
    const [total, setTotal] = useState(null)

    const handleNumberChange = (str) => {
        if (total !== null) {
            setNum1(str)
            handleDisplayChange(str)
            setNum2(0)
            setOperator('')
            setTotal(null)
            return;
        }

        if (!operator) {
            const newNum = num1 === 0 ? Number(str) : Number(num1 + str)
            setNum1(newNum)
            handleDisplayChange(newNum)
        } else {
            const newNum = num2 === 0 ? Number(str) : Number(num2 + str)
            setNum2(newNum)
            handleDisplayChange(num1 + operator + newNum)
        }
    }

    const handleDisplayChange = (str) => {
        setDisplay(str)
    }

    const handleReset = () => {
        setDisplay('')
        setNum1(0)
        setNum2(0)
        setOperator('')
    }

    const handleOperatorChange = (str) => {
        if (total !== null) {
            setOperator(str)
            handleDisplayChange(display + str)
            setNum1(display)
            setNum2(0)
            setTotal(null)
        }

        if (!operator) {
            setOperator(str)
            handleDisplayChange(num1 + str)
        }
    }

    const handleCalculation = () => {
        switch (operator) {
            case '+':
                setTotal(num1 + num2)
                return handleDisplayChange(num1 + num2);
            case '-':
                setTotal(num1 - num2)
                return handleDisplayChange(num1 - num2);
            case '*':
                setTotal(num1 * num2)
                return handleDisplayChange(num1 * num2);
            case '/':
                setTotal(num1 / num2)
                return handleDisplayChange(num1 / num2);
            default:
                return null;
        }
    }

    return (
        <div className='calculator-container'>
            <Display display={display} />
            <div>
                <div className="number-pad-row">
                    <Button onClick={() => handleNumberChange('7')} title={'7'} />
                    <Button onClick={() => handleNumberChange('8')} title={'8'} />
                    <Button onClick={() => handleNumberChange('9')} title={'9'} />
                    <Button onClick={() => handleOperatorChange('/')} title={'/'} isOperator />
                </div>
                <div className="number-pad-row">
                    <Button onClick={() => handleNumberChange('4')} title={'4'} />
                    <Button onClick={() => handleNumberChange('5')} title={'5'} />
                    <Button onClick={() => handleNumberChange('6')} title={'6'} />
                    <Button onClick={() => handleOperatorChange('*')} title={'x'} isOperator />
                </div>
                <div className="number-pad-row">
                    <Button onClick={() => handleNumberChange('1')} title={'1'} />
                    <Button onClick={() => handleNumberChange('2')} title={'2'} />
                    <Button onClick={() => handleNumberChange('3')} title={'3'} />
                    <Button onClick={() => handleOperatorChange('-')} title={'-'} isOperator />
                </div>
                <div className="number-pad-row">
                    <Button onClick={() => handleReset()} title={'C'} />
                    <Button onClick={() => handleNumberChange('0')} title={'0'} />
                    <Button onClick={handleCalculation} title={'='} isOperator />
                    <Button onClick={() => handleOperatorChange('+')} title={'+'} isOperator />
                </div>
            </div>
        </div>
    )
}