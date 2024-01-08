import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

const Wordle = ({solution}) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            console.log('congrats, you win!')
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }

        if(turn > 5){
            console.log('unlucky, out of guesses')
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
        console.log(solution)
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

return (
    <div>
        {/*Current Guess :- {currentGuess}*/}
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keypad usedKeys = {usedKeys} />
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
)
}

export default Wordle