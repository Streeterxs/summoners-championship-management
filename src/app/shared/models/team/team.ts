import { Player } from '../player/player';

export interface ITeam {
    id?: number;
    name: string;
    players: Player[];

    fullTextSearch(text: string): boolean;
}

export interface Team {
    _id?: number;
    _name: string;
    _players: Player[];
}

export class Team implements ITeam {
    constructor(name: string, players: Player[], id?: number) {

        console.log(this._name);
        console.log(this._players);
        this._name = name;
        this._players = players;

        if (id) {
            this._id = id;
        }

        console.log(this._name);
        console.log(this._players);
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

    get players() {
        return this._players;
    }
    set players(newPlayerList: Player[]) {
        this._players = newPlayerList;
    }

    fullTextSearch(text: string) {
        const nameCheck = this.name.trim().toLocaleLowerCase().includes(text.trim().toLocaleLowerCase());
        const playersCheck = this.players.reduce((acc, curr) => {
            return acc || curr.fullTextIncludes(text);
        }, false);

        return nameCheck || playersCheck;
    }
}
