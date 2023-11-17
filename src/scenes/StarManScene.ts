import Phaser from 'phaser'
import HelloWorldScene from './HelloWorldScene'
// import PhaserGame from '../PhaserGame'
export default class StarManScene extends Phaser.Scene {
    platforms: any
    public player: any
    public cursors: Phaser.Types.Input.Keyboard.CursorKeys
    public scoreText: any
    public gameOverText: any
    public stars: any
    public score: number = 0
    public btc_num: number = 0
    public usdt_num: number = 0
    public scoreContext: string = ''
    protected gameOver: boolean = false
    public bombs: any
    public btcText: any
    public usdtText: any
    btc: any
    usdt: any
    restartButton: any
    setScore: any
    lever: number = 1
    pause: boolean = false

    constructor(setScore: any) {
        super('starMan')
        this.setScore = setScore
    }

    preload() {
        // this.load.setBaseURL('https://labs.phaser.io')
        this.load.image('sky', 'assets/sky.png')
        this.load.image('sky2', 'assets/sky2.png')
        this.load.image('ground', 'assets/ground.png')
        this.load.image('ground2', 'assets/ground2.png')
        this.load.image('star', 'assets/star.png')
        this.load.image('bomb', 'assets/bomb.png')
        this.load.image('baoxiang', 'assets/baoxiang.png')
        this.load.image('restartButton', 'assets/restart_b.png')
        this.load.image('btc', 'assets/btc.png')
        this.load.image('usdt', 'assets/usdt.png')
        this.load.audio('jump', 'assets/jump.mp3')
        this.load.audio('dead', 'assets/dead.mp3')
        this.load.audio('coin_a', 'assets/coin_a.mp3')
        this.load.audio('btc_a', 'assets/btc_a.mp3')
        this.load.spritesheet('dude', 'assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48,
        })
    }

    create() {
        this.add.image(400, 300, 'sky2')
        // this.add.image(400, 300, 'star')

        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 19,
            setXY: { x: 20, y: 0, stepX: 40 },
        })

        this.stars.children.iterate(function (child: any) {
            child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.8))
        })

        this.bombs = this.physics.add.group()

        this.platforms = this.physics.add.staticGroup()

        this.platforms
            .create(400, 578, 'ground2')
            .setScale(2, 1.4)
            .refreshBody()

        this.platforms.create(660, 400, 'ground2')
        this.platforms.create(70, 250, 'ground2')
        this.platforms.create(770, 200, 'ground2')
        this.player = this.physics.add.sprite(100, 450, 'dude')

        this.player.setBounce(0.2)
        this.player.setCollideWorldBounds(true)
        this.physics.add.collider(this.player, this.platforms)
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            color: '#000',
        })
        this.setScore(0)
        // this.btcText = this.add.text(800 / 2 - 50, 16, 'BTC:0', {
        //     fontSize: '32px',
        //     color: '#000',
        // })
        this.btc = this.add.image(800 / 2 - 20, 30, 'btc').setScale(0.2)
        this.btcText = this.add.text(800 / 2, 16, ' ' + this.btc_num, {
            fontSize: '32px',
            color: '#000',
        })
        this.usdt = this.add.image(650, 30, 'usdt').setScale(0.2)
        this.usdtText = this.add.text(670, 16, ' ' + this.usdt_num, {
            fontSize: '32px',
            color: '#000',
        })

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', {
                start: 0,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1,
        })

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20,
        })

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', {
                start: 5,
                end: 8,
            }),
            frameRate: 10,
            repeat: -1,
        })
        this.cursors = this.input.keyboard.createCursorKeys()

        this.physics.add.collider(this.stars, this.platforms)
        this.physics.add.overlap(
            this.player,
            this.stars,
            this.collectStar,
            undefined,
            this
        )
        this.physics.add.collider(this.bombs, this.platforms)

        this.physics.add.collider(
            this.player,
            this.bombs,
            this.hitBomb,
            undefined,
            this
        )
    }
    update(time: number, delta: number): void {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160)

            this.player.anims.play('left', true)
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160)

            this.player.anims.play('right', true)
        } else {
            this.player.setVelocityX(0)

            this.player.anims.play('turn')
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-340)
            this.sound.play('jump')
        }
    }

    collectStar(player: any, star: any) {
        star.disableBody(true, true)
        this.score += 10
        this.scoreText.setText('Score: ' + this.score)
        this.setScore(this.score)
        this.sound.play('coin_a')
        if (this.stars.countActive(true) === 0) {
            this.lever++
            console.log('lever: ' + this.lever)
            this.stars.children.iterate(function (child: any) {
                child.enableBody(true, child.x, 0, true, true)
            })

            var x =
                player.x < 400
                    ? Phaser.Math.Between(400, 800)
                    : Phaser.Math.Between(0, 400)

            var bomb = this.bombs.create(x, 16, 'bomb').setScale(0.5)
            if (this.lever == 4) {
                var btc = this.physics.add
                    .sprite(x, 16, 'baoxiang')
                    .setScale(0.4)
                btc.setBounce(1)
                btc.setCollideWorldBounds(true)
                btc.setVelocity(Phaser.Math.Between(-200, 200), 20)
                this.physics.add.collider(btc, this.platforms)
                this.physics.add.overlap(
                    this.player,
                    btc,
                    this.collectBTC,
                    undefined,
                    this
                )
            }
            bomb.setBounce(1)
            bomb.setCollideWorldBounds(true)
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
        }
    }

    collectBTC(player: any, btc: any) {
        btc.disableBody(true, true)
        this.btc_num = this.btc_num + 0.001
        this.btcText.setText(':' + this.btc_num)
        this.sound.play('btc_a')
    }
    collectUSDT(player: any, usdt: any) {
        usdt.disableBody(true, true)
        this.usdt_num = this.btc_num + 0.001
        this.usdtText.setText(':' + this.usdt_num)
    }

    hitBomb(player: any, bomb: any) {
        this.physics.pause()

        this.sound.play('dead')
        player.setTint(0xff0000)
        bomb.setTint(0xffff00)

        player.anims.play('turn')

        this.gameOver = true

        //set mask  for secene
        const overlay = this.add.graphics()

        overlay.fillStyle(0x000000, 0.5).fillRect(0, 0, 800, 600)

        this.scoreText = this.add
            .text(800 / 2 - 150, 600 / 2 - 80, 'Game Over', {
                fontSize: '50px',
                color: 'rgb(255,0,0)',
            })
            .setOrigin(0, 0)
        this.restartButton = this.add.sprite(400, 350, 'restartButton')
        this.restartButton.setScale(1.5, 1.5)

        this.restartButton.setInteractive({ useHandCursor: true })
        this.restartButton.on('pointerdown', () => this.restart())

        // this.scene.switch('HelloWorldScene')
        // const aa = this.scene.start('helloworld')
        // console.log(aa)
        //
    }
    restart() {
        console.log('restart....')
        this.score = 0
        this.lever = 1
        this.btc_num = 0
        this.usdt_num = 0
        this.scene.restart()
    }
}
