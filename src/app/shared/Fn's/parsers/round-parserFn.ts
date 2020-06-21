import { playerListParser } from './player-parserFn';
import { RequestableRound, Round } from '../../models/round/round';
import { teamParser } from './team-parserFn';

type RoundParserFn = (Round: RequestableRound) => Round;
export const roundParser: RoundParserFn = (round) => {
    return new Round(round.nextRound, round.id, teamParser(round.team1), teamParser(round.team2), teamParser(round.winner));
};

type RoundListParserFn = (round: RequestableRound[]) => Round[];
export const roundListParser: RoundListParserFn = (roundList) => {
    return roundList.map(round => roundParser(round));
};
