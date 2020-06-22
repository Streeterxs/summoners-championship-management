import { Team, RequestableTeam } from '../team/team';

export interface RequestableRound {
    id?: number;
    team1?: RequestableTeam;
    team2?: RequestableTeam;
    winner?: RequestableTeam;
    nextRound?: number;
}

export class Round {
    constructor(
        private _id?: number,
        private _team1?: Team,
        private _team2?: Team,
        private _winner?: Team,
        private _nextRound?: number
    ) {}

    get nextRound() {
        return this._nextRound;
    }
    set nextRound(nextRound) {
        this._nextRound = nextRound;
    }

    get id() {
        return this._id;
    }
    set id(newId) {
        this._id = newId;
    }

    get team1() {
        return this._team1;
    }
    set team1(newTeam1) {
        this._team1 = newTeam1;
    }

    get team2() {
        return this._team2;
    }
    set team2(newTeam2) {
        this._team2 = newTeam2;
    }

    get winner() {
        return this._winner;
    }
    set winner(newWinner) {
        this._winner = newWinner;
    }

    toRequestable(): RequestableRound {
        const {id, team1, team2, winner, nextRound} = this;

        return {
            id,
            team1: team1.toRequestableTeam(),
            team2: team2.toRequestableTeam(),
            winner: winner?.toRequestableTeam(),
            nextRound
        };
    }
}
