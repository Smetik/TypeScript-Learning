type Config = {
    version: string;
    [key: string]: string | number | boolean;
};

type StrictConfig =
    Config & {
        readonly name: string;
    };