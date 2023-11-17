import React from 'react'
import { useEffect, useState } from 'react'
import logo from './logo.svg'
// import './App.css'
// import phaserGame from './PhaserGame'
import HelloWorldScene from './scenes/HelloWorldScene'

function emmitGame() {}

function App() {
    const [isReady, setReady] = useState(false)
    const [game, setGame] = useState<any>()
    useEffect(() => {
        // Nothing really special here... Your phaser3 config should work just fine.
        let config = {
            height: 400,
            width: 600,
            physics: { default: 'arcade' },
            backgroundColor: '#282c34',
            scale: {
                // Except this should match the ID of your component host element.
                parent: 'phaser-game',
                mode: Phaser.Scale.FIT,
                // mode: Phaser.Scale.ScaleModes.RESIZE,
                autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
            },
            transparent: true,
            type: Phaser.AUTO,
        }
        let game = new Phaser.Game(config)
        setGame(game)
        // Triggered when game is fully visible.
        game.events.on('putOnAHappyFace', setReady)
        // Add your scene/s here (or in `scene` key of `config`).
        game.scene.add('HelloWorldScene', HelloWorldScene, true)
        // If you don't do this, you get duplicates of the canvas piling up
        // everytime this component renders.
        return () => {
            setReady(false)
            game.destroy(true)
        }
        // You must have an empty array here otherwise the game restarts every time
        // the component renders.
    }, [])
    return (
        <>
            <div id="phaser-game" />
        </>
    )
}

export default App
