import { Player, RequestablePlayer } from '../player/player';

export interface RequestableTeam {
    id?: number;
    name: string;
    players: RequestablePlayer[];
}

export interface ITeam {
    id?: number;
    name: string;
    players: Player[];

    fullTextSearch(text: string): boolean;
    toRequestableTeam(): RequestableTeam;
}

export class Team implements ITeam {
    private _id?: number;
    private _name: string;
    private _players: Player[];

    constructor(name: string, players: Player[], id?: number) {

        this._name = name;
        this._players = players;

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

    toRequestableTeam() {
        const {id = undefined, name, players} = this;

        return {
            id,
            name,
            players: players.map(player => player.toRequestablePlayer())
        };
    }
}
