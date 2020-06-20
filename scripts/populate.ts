import { environment } from '../src/environments/environment';
import fetch from 'node-fetch';
import playerList from './playerList';

(async () => {
    for (const player of playerList) {
        console.log('creating player: ', player);
        await fetch(`${environment.API_URL}/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(player)
        });
    }

    process.exit(0);
})();
