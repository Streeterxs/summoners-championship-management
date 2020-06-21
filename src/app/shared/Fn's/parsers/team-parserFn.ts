import { ITeam, Team, RequestableTeam } from '../../../shared/models/team/team';
import { playerListParser } from './player-parserFn';

type TeamParserFn = (team: RequestableTeam) => Team;
export const teamParser: TeamParserFn = (team) => {
    return new Team(team.name, playerListParser(team.players), team.id);
};

type TeamListParserFn = (team: RequestableTeam[]) => Team[];
export const teamListParser: TeamListParserFn = (teamList) => {
    return teamList.map(team => teamParser(team));
};
