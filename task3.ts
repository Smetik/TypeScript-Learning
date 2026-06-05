function formatGreeting (name:string, greeting?:string, punctuation: string = '!' ):string{
    const text = greeting ?? "Hello";
    return `${text}, ${name}${punctuation}`
}

console.log(formatGreeting("Sergey", "Hi", "?"))
console.log(formatGreeting("Sergey"))