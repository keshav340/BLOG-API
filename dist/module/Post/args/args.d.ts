export declare class CreatePostArgs {
    title: string;
    description: string;
    content: string;
    categoryId: number;
    subcategoryId: number;
}
export declare class UpdatePostArgs {
    id: number;
    title?: string;
    description?: string;
    content?: string;
    categoryId?: number;
    subcategoryId?: number;
}
export declare class DeletePostArgs {
    id: number;
}
