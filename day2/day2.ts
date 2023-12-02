import * as fs from 'fs';
import { replaceAllNonNumerables } from '../day1/day1';

interface cubes {
    red: number;
    green:number;
    blue:number;
}
interface game extends cubes {
    id:number;
}

const loadFile = (): string => {
    return fs.readFileSync("./day2/games.txt", 'utf-8');
};

const extractColors = (records) => {
    const _records = records.split(';')
    const cubeStrings= _records.flatMap(r => r.split(",")).map(cs => cs.replace(" ",""));
    const redArr = cubeStrings.filter(cs => cs.includes("red")).map(cs => Number(replaceAllNonNumerables(cs).trim()));
    const greenArr = cubeStrings.filter(cs => cs.includes("green")).map(cs => Number(replaceAllNonNumerables(cs).trim()));
    const blueArr = cubeStrings.filter(cs => cs.includes("blue")).map(cs => Number(replaceAllNonNumerables(cs).trim()));
    return {
        red: Math.max(...redArr),
        green: Math.max(...greenArr),
        blue: Math.max(...blueArr)
    }
}
const gameStringToObject = (gameString: string) : game => {
    const [gameId, records] = gameString.split(':');

    const colors = extractColors(records);
    const game:game = {
        id: Number(replaceAllNonNumerables(gameId).trim()),
        ...colors
    }
    return game;
};

const main = () => {
    // 12 red cubes, 13 green cubes, and 14 blue cubes.
    const ourCubes :cubes = {
        red: 12,
        green: 13,
        blue: 14
    }
    const f = loadFile();
    const gameStrings = f.split('\n');

    const games =  gameStrings.map(gs => gameStringToObject(gs));
    const applicableGames = games.filter(g => g.red <= ourCubes.red && g.green <= ourCubes.green && g.blue <= ourCubes.blue );
    console.log(`red: ${ourCubes.red}, green: ${ourCubes.green}, blue: ${ourCubes.blue},`)
    console.log("applicableGames",applicableGames);    
    const ids = applicableGames.map(ag => ag.id);
    const sum_ids = ids.reduce((acc, cv) => acc + cv, 0)
    console.log("sum_ids")
    // part 2
    const powerOfGames = games.map(g => g.red * g.green * g.blue);
    const sum_power = powerOfGames.reduce((acc,cv) => acc + cv,0);
    console.log("sum_power", sum_power);
};

main()