import { Team } from '../../../shared/models/team/team';
import { Round } from '../../../shared/models/round/round';

type PairTeams = [
    Team,
    Team
][];

type PairRounds = [
    Round,
    Round
][];
const championshipModule = (teams: Team[]) => {

    const shuffledTeams = shuffleTeams(teams);

    const generateRounds = () => {
        let totalRounds: number = 0;
        const pairTeams: PairTeams = [];

        for (let index = 0; index < shuffledTeams.length - 1; index = index + 2) {
            pairTeams.push([shuffledTeams[index], shuffledTeams[index + 1]]);
        }

        let rounds: Round[] = pairTeams.map((pairTeam, index) => {
            return new Round(index + 1, pairTeam[0], pairTeam[1], undefined, undefined);
        });

        for (let index = rounds.length; index >= 1; index = index === 1 ? index - 1 : index / 2) {
            console.log('index: ', index);
            totalRounds = totalRounds + index;
        }

        console.log('totalRounds: ', totalRounds);

        const pairRounds: PairRounds = [];
        const baseRoundsCopy = rounds;

        while (rounds.length < totalRounds) {
            for (let index = 0; index < baseRoundsCopy.length - 1; index = index + 2) {
                pairRounds.push([baseRoundsCopy[index], baseRoundsCopy[index + 1]]);
            }

            const nextPhaseRounds: Round[] = pairRounds.map((pairRound, index) => {
                const newRound = new Round(index + rounds.length + 1, undefined, undefined, undefined, undefined);
                pairRound[0].nextRound = newRound.id;
                pairRound[1].nextRound = newRound.id;
                return newRound;
            });

            console.log('next phase rounds: ', nextPhaseRounds);

            rounds = rounds.concat(nextPhaseRounds);
        }

        console.log('rounds: ', rounds);
    };

    return generateRounds;
};

const shuffleTeams = (teams: Team[]) => {
    const teamsCopy = [...teams];
    let currentIndex = teams.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = teamsCopy[currentIndex];
      teamsCopy[currentIndex] = teamsCopy[randomIndex];
      teamsCopy[randomIndex] = temporaryValue;
    }

    return teamsCopy;
};

export default championshipModule;
