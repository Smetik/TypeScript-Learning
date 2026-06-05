interface User {
    readonly id: number;
    email: string;
    nickname?: string;
    role: 'admin' | 'user';
}

type ReadonlyUser = Readonly<User>;

function updateUser(user: User, changes: Partial<User>): User {
    return {
        ...user,
        ...changes
    };
}

const user: User = {
    id: 1,
    email: "john@mail.com",
    role: "user"
};

const updatedUser = updateUser(user,
    {
        email: "new@mail.com",
        nickname: "Johnny"
    }
);

console.log(user);
console.log(updatedUser);