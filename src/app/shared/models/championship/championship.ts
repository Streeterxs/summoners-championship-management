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

    findRoundById(id: number): Round {
        const phaseFinded = this.phases.find(phase => phase.find(round => round.id === id));
        return phaseFinded.find(round => round.id === id);
    }

    updateRound(roundParameter: Round) {

        const phaseIndex = this.phases.findIndex(phase => phase.includes(roundParameter));
        if (phaseIndex >= 0) {

            const roundIndex = this.phases[phaseIndex].findIndex(round => round.id === roundParameter.id);
            this.phases[phaseIndex][roundIndex] = roundParameter;

            return this.phases[phaseIndex][roundIndex];
        }
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
