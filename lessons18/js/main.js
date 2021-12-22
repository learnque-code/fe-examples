function Game(id, level) {
    this.el = document.getElementById(id);
    this.tileTypes = ['floor', 'wall'];
    this.tileDime = level.tileDimension;
    this.map = level.map;
    this.theme = level.theme;
    this.player = { ...level.player };
    this.goal = {...level.goal };
}


function init() {
    const level = {
        map: [
            [1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0],
            [0, 0, 1, 1, 0],
            [0, 0, 0, 1, 0],
            [0, 1, 0, 1, 0]
        ],
        player: {
            x: 0,
            y: 4
        },
        goal: {
            x: 4,
            y: 1
        },
        theme: 'default',
        tileDimension: 32,
    }
}