import { playerListParser } from './player-parserFn';
import { RequestableChampionship, Championship } from '../../models/championship/championship';
import { roundListParser } from './round-parserFn';

type ChampionshipParserFn = (Championship: RequestableChampionship) => Championship;
export const championshipParser: ChampionshipParserFn = (championship) => {
    return new Championship(championship.name, roundListParser(championship.rounds), championship.id);
};

type ChampionshipListParserFn = (championship: RequestableChampionship[]) => Championship[];
export const championshipListParser: ChampionshipListParserFn = (championshipList) => {
    return championshipList.map(championship => championshipParser(championship));
};
