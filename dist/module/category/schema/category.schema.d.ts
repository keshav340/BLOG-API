export declare class Category {
    id: number;
    name: string;
    description: string;
}
export declare class Query {
    category: Category;
    categories: Category[];
}
export declare class Mutation {
    createCategory: Category;
    updateCategory: Category;
    deleteCategory: boolean;
}
