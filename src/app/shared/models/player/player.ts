import { LanePosition } from './lane-position.enum';

export interface IPlayer {
    id?: number;
    name: string;
    position: LanePosition;

    fullTextIncludes(text: string): boolean;
}

export interface Player {
    _id?: number;
    _name: string;
    _position: LanePosition;
}

export class Player implements IPlayer {

    constructor(name: string, position: LanePosition, id?: number) {
        this._name = name;
        this._position = position;

        if (id) {
            this._id = id;
        }

        console.log(this._name);
        console.log(this._position);
    }

    get id() {
        return this._id;
    }
    set id(newId: number) {
        this._id = newId;
    }

    get name() {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }

    get position() {
        return this._position;
    }
    set position(newPosition: LanePosition) {
        this._position = newPosition;
    }

    fullTextIncludes(text: string) {
        const nameCheck = this.name.trim().toLocaleLowerCase().includes(text.trim().toLocaleLowerCase());
        const positionCheck = this.position.trim().toLocaleLowerCase().includes(text.trim().toLocaleLowerCase());

        return nameCheck || positionCheck;
    }


}
