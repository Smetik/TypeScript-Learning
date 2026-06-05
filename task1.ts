interface User {
    id:number;
    name:string;
    isActive:boolean;
}

function safeParseInput (data:unknown): User{

    if (typeof data !== "object" || data === null){
        throw new Error ("Данные должны быть объектом");
    }

    if (!("id" in data)){
        throw new Error ("Нет поля id");
    }

    if (!("name" in data)){
        throw new Error ("Нет поля name");
    }

    if (!("isActive" in data)){
        throw new Error ("Нет поля isActive");
    }

    const obj = data as {
        id: unknown;
        name: unknown;
        isActive: unknown;
    }

    if (typeof obj.id !== "number"){
        throw new Error ("id должен быть числом")
    }

    if (typeof obj.name !== "string"){
        throw new Error ("name должен быть строкой")
    }

    if (typeof obj.isActive !== "boolean"){
        throw new Error ("isActive должен быть boolean")
    }

    return {
        id: obj.id,
        name: obj.name,
        isActive: obj.isActive
    };
}
