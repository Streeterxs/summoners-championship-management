import { ITeam, Team } from '../../../shared/models/team/team';
import { playerListParser } from './player-parserFn';

type TeamParserFn = (team: ITeam) => Team;
export const teamParser: TeamParserFn = (team: ITeam) => {
    return new Team(team.name, playerListParser(team.players), team.id);
};

type TeamListParserFn = (team: ITeam[]) => Team[];
export const teamListParser: TeamListParserFn = (teamList) => {
    return teamList.map(team => teamParser(team));
};
