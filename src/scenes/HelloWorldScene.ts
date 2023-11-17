import Phaser from 'phaser'
import * as React from 'react'

export default class HelloWorldScene extends Phaser.Scene {
    constructor() {
        super('helloworld')
    }

    preload() {
        this.load.setBaseURL('https://labs.phaser.io')
        this.load.image('sky2', 'assets/skies/space3.png')
        this.load.image('logo', 'assets/sprites/phaser3-logo.png')
        this.load.image('red', 'assets/particles/red.png')
    }

    create() {
        this.add.image(400, 300, 'sky2')
        this.createEmitter()
    }

    createEmitter() {
        const particles = this.add.particles('red')

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD',
        })

        const logo = this.physics.add.image(400, 100, 'logo')

        logo.setVelocity(30, 100)

        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)

        emitter.startFollow(logo)
    }
}
