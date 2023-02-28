type TStorage = {
    setItem: (key: string, value: any) => void;
    getItem: (key: string) => any;
    removeItem: (key: string) => void;
    clear: () => void;
};

const storage: TStorage = {
    setItem: (key: string, value: any): void => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key: string): any => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    removeItem: (key: string): void => {
        localStorage.removeItem(key);
    },
    clear: (): void => {
        localStorage.clear();
    }
};

export { storage };
