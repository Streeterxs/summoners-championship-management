import { LanePosition } from './lane-position.enum';

export interface Player {
    id?: number;
    name: string;
    position: LanePosition;
}
