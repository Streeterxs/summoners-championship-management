import { Player, RequestablePlayer } from '../../models/player/player';

type playerParserFn = (player: RequestablePlayer) => Player;
export const playerParser: playerParserFn = (player) => {
    return new Player(
        player.nickname,
        player.position,
        player.id
    );
};

type playerListParserFn = (playerList: RequestablePlayer[]) => Player[];
export const playerListParser: playerListParserFn = (playerList) => {
    return playerList.map(player => playerParser(player));
};
