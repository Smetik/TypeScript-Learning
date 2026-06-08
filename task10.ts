type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number }
  | { kind: 'triangle'; base: number; height: number };

function getArea(shape: Shape): number{
    switch (shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        
        case "square":
            return shape.side ** 2;
        
        case "triangle":
            return 0.5 * shape.base * shape.height;

        default:{
            const neverShape:never = shape;
            throw new Error ("Неопознанный объект");
        }
    }
}

const array:number[] | null = [1,4,5,69,0];
const number = array![4];

const value: unknown = "Hello";
const text = value as string;

