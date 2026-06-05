function getLength(value: string): number;

function getLength(value: unknown[]): number;

function getLength(
    value: {
        value: string | unknown[];
    }
): number;
function getLength(value: unknown): number | null;

function getLength(value: unknown): number | null {

    if (typeof value === "string") {
        return value.length;
    }

    if (Array.isArray(value)) {
        return value.length;
    }

    if (typeof value === "object" && value !== null && "value" in value) {

        const obj = value as {
            value: unknown;
        };

        if (typeof obj.value === "string") {
            return obj.value.length;
        }

        if (Array.isArray(obj.value)) {
            return obj.value.length;
        }
    }

    return null;
}


console.log(getLength("Hello"));
console.log(getLength([1, 2, 3, 4]));
console.log(getLength({value: "TypeScript"}));
console.log(getLength(123));