import { Player, IPlayer } from '../../models/player/player';

type playerParserFn = (player: IPlayer) => Player;
export const playerParser: playerParserFn = (player) => {
    return new Player(
        player.name,
        player.position,
        player.id
    );
};

type playerListParserFn = (playerList: IPlayer[]) => Player[];
export const playerListParser: playerListParserFn = (playerList) => {
    return playerList.map(player => playerParser(player));
};
