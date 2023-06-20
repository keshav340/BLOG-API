import { Category } from 'src/module/category/schema/category.schema';
import { Subcategory } from 'src/module/subcategory/schema/subcategory.schema';
export declare class Post {
    id: number;
    title: string;
    description: string;
    content: string;
    category: Category;
    subcategory: Subcategory;
}
