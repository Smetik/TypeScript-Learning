enum Direction {
    North,
    South,
    East,
    West
}

const enum Status {
    Success,
    Error,
    Pending
}

type Point = [number, number];

function move (point:Point, direction:Direction): Point {
    const [x, y] = point;
    switch (direction){
        case Direction.North: {
            return [x, y+1];
        }

        case Direction.South: {
            return [x, y-1]
        }

        case Direction.East: {
            return [x+1, y]
        }
        
        case Direction.West: {
            return [x-1, y]
        }

    }

}