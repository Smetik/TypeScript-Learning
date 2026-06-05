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


    if (typeof data.id !== "number"){
        throw new Error ("id должен быть числом")
    }

    if (typeof data.name !== "string"){
        throw new Error ("name должен быть строкой")
    }

    if (typeof data.isActive !== "boolean"){
        throw new Error ("isActive должен быть boolean")
    }

    return {
        id: data.id,
        name: data.name,
        isActive: data.isActive
    };
}
