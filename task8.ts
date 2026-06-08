class TypedStore<T>{
    private data: T;

    constructor(data:T){
        this.data = data;
    }

    get<K extends keyof T>(key:K):T[K]{
        return this.data[key];
    }

    set<K extends keyof T>(key:K, value: T[K]):void{
        this.data[key]=value;
    }

    merge<U>(updates:U): T&U {
        if (typeof updates !== "object" || updates == null){
            throw new Error ("На входе должен быть объект");
        }
        
        return {
            ...this.data,
            ...updates
        }
    }
}

