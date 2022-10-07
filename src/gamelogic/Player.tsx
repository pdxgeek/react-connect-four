import { GamePiece } from "./GamePiece";

class Player {
    constructor(name: string, color: GamePiece) {
        this.name = name;
        this.color = color;
    }

    name: string;
    color: GamePiece;
}

export default Player;