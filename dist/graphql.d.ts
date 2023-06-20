export interface CreatePostArgs {
    title: string;
    description: string;
    content: string;
    categoryId: number;
    subcategoryId: number;
}
export interface UpdatePostArgs {
    id: number;
    title?: Nullable<string>;
    description?: Nullable<string>;
    content?: Nullable<string>;
    categoryId?: Nullable<number>;
    subcategoryId?: Nullable<number>;
}
export interface DeletePostArgs {
    id: number;
}
export interface Category {
    id: string;
    name: string;
    description: string;
}
export interface Subcategory {
    id: string;
    name: string;
    description: string;
}
export interface Post {
    id: string;
    title: string;
    description: string;
    content: string;
    category: Category;
    subcategory: Subcategory;
}
export interface Tag {
    id: string;
    name: string;
}
export interface CreateTagResponse {
    tag: Tag;
}
export interface UpdateTagResponse {
    tag: Tag;
}
export interface DeleteTagResponse {
    success: boolean;
}
export interface Meta {
    id: string;
    metaTitle: string;
    metaDescription?: Nullable<string>;
}
export interface CreateMetaResponse {
    meta: Meta;
}
export interface UpdateMetaResponse {
    meta: Meta;
}
export interface DeleteMetaResponse {
    success: boolean;
}
export interface IQuery {
    category(id: string): Nullable<Category> | Promise<Nullable<Category>>;
    categories(): Category[] | Promise<Category[]>;
    subcategory(id: string): Nullable<Subcategory> | Promise<Nullable<Subcategory>>;
    subcategories(): Subcategory[] | Promise<Subcategory[]>;
    post(id: string): Post | Promise<Post>;
    posts(): Post[] | Promise<Post[]>;
    getAllTags(): Tag[] | Promise<Tag[]>;
    getAllMeta(): Meta[] | Promise<Meta[]>;
    getMetaById(id: number): Meta | Promise<Meta>;
}
export interface IMutation {
    createCategory(name: string, description: string): Category | Promise<Category>;
    updateCategory(id: number, name?: Nullable<string>, description?: Nullable<string>): Category | Promise<Category>;
    deleteCategory(id: number): boolean | Promise<boolean>;
    createSubcategory(name: string, description: string, categoryId: string): Subcategory | Promise<Subcategory>;
    updateSubcategory(id: string, name: string, description: string, categoryId: number): Subcategory | Promise<Subcategory>;
    deleteSubcategory(id: string): boolean | Promise<boolean>;
    createPost(postData: CreatePostArgs): Post | Promise<Post>;
    updatePost(id: string, postData: UpdatePostArgs): Post | Promise<Post>;
    deletePost(deletePostArgs: DeletePostArgs): boolean | Promise<boolean>;
    createTag(name: string): CreateTagResponse | Promise<CreateTagResponse>;
    updateTag(id: number, name?: Nullable<string>): UpdateTagResponse | Promise<UpdateTagResponse>;
    deleteTag(id: number): DeleteTagResponse | Promise<DeleteTagResponse>;
    createMeta(metaTitle: string, metaDescription?: Nullable<string>): CreateMetaResponse | Promise<CreateMetaResponse>;
    updateMeta(id: number, metaTitle?: Nullable<string>, metaDescription?: Nullable<string>): UpdateMetaResponse | Promise<UpdateMetaResponse>;
    deleteMeta(id: number): DeleteMetaResponse | Promise<DeleteMetaResponse>;
}
type Nullable<T> = T | null;
export {};
