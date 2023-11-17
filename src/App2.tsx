import React from 'react'
import { useEffect, useState } from 'react'
import logo from './logo.svg'
// import './App.css'
// import phaserGame from './PhaserGame'
import HelloWorldScene from './scenes/HelloWorldScene'
import StarManScene from './scenes/StarManScene'
import SplashScene from './scenes/SplashScene'
import { useScore } from './components/hooks'

function App2() {
    const [isReady, setReady] = useState(false)
    const [game, setGame] = useState<any>()
    const [point, setPoint] = useState<number>(0)
    const { score, setScore } = useScore()

    // create start man main scene
    const startManScene = new StarManScene(setScore)
    useEffect(() => {
        console.log('score: ' + score)
    }, [score])

    useEffect(() => {
        // Nothing really special here... Your phaser3 config should work just fine.
        let config = {
            type: Phaser.AUTO,
            parent: 'phaser-game',
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false,
                },
            },
            // scene: [StarManScene, HelloWorldScene, SplashScene],
        }
        let game = new Phaser.Game(config)
        // const scene = game.scene.keys.starMan as StarManScene

        // console.log(scene.score)
        // Triggered when game is fully visible.
        game.events.on('putOnAHappyFace', setReady)
        // Add your scene/s here (or in `scene` key of `config`).
        game.scene.add('starMan', startManScene, true)
        // game.scene.add('HelloWorldScene', HelloWorldScene, false)

        return () => {
            setReady(false)
            game.destroy(true)
        }
        // You must have an empty array here otherwise the game restarts every time
        // the component renders.
    }, [])
    return <div className="flex" id="phaser-game" />
}

export default App2
