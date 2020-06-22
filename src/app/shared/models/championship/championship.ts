import { Round, RequestableRound } from '../round/round';


export type Phases = Round[][];

export interface RequestableChampionship {
    id?: number;
    name: string;
    rounds: RequestableRound[];
}

export class Championship {
    constructor(
        private _name: string,
        private _phases: Phases,
        private _id?: number
    ) {}

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }

    get phases() {
        return this._phases;
    }
    set phases(newPhases) {
        this._phases = newPhases;
    }

    get id() {
        return this._id;
    }
    set id(newId) {
        this._id = newId;
    }

    toRequestable() {
        const {name, phases, id} = this;
        return {
            id,
            name,
            phases: phases.map(phase => phase.map(round => round.toRequestable()))
        };
    }
}
