import { LanePosition } from './lane-position.enum';


export interface RequestablePlayer {
    id?: number;
    nickname: string;
    position: LanePosition;
}

export interface IPlayer {
    id?: number;
    nickname: string;
    position: LanePosition;

    fullTextIncludes(text: string): boolean;
    toRequestablePlayer(): RequestablePlayer;
}

export class Player implements IPlayer {
    private _id?: number;
    private _nickname: string;
    private _position: LanePosition;

    constructor(nickname: string, position: LanePosition, id?: number) {
        this._nickname = nickname;
        this._position = position;

        if (id) {
            this._id = id;
        }
    }

    get id() {
        return this._id;
    }
    set id(newId: number) {
        this._id = newId;
    }

    get nickname() {
        return this._nickname;
    }
    set nickname(newnickname: string) {
        this._nickname = newnickname;
    }

    get position() {
        return this._position;
    }
    set position(newPosition: LanePosition) {
        this._position = newPosition;
    }

    fullTextIncludes(text: string) {
        const nicknameCheck = this.nickname.trim().toLocaleLowerCase().includes(text.trim().toLocaleLowerCase());
        const positionCheck = this.position.trim().toLocaleLowerCase().includes(text.trim().toLocaleLowerCase());

        return nicknameCheck || positionCheck;
    }

    toRequestablePlayer() {
        const {id = undefined, nickname, position} = this;

        console.log(id);

        return {
            id,
            nickname,
            position
        };
    }
}
