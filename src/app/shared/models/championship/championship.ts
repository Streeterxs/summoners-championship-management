import { Round, RequestableRound } from '../round/round';

export interface RequestableChampionship {
    id?: number;
    name: string;
    rounds: RequestableRound[];
}

export class Championship {
    constructor(
        private _name: string,
        private _rounds: Round[],
        private _id?: number
    ) {}

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }

    get rounds() {
        return this._rounds;
    }
    set rounds(newRounds) {
        this._rounds = newRounds;
    }

    get id() {
        return this._id;
    }
    set id(newId) {
        this._id = newId;
    }

    toRequestable() {
        const {name, rounds, id} = this;
        return {
            id,
            name,
            rounds: rounds.map(round => round.toRequestable())
        };
    }
}
