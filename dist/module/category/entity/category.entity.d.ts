import { SubcategoryEntity } from 'src/module/subcategory/entity/subcategory.entity';
import { PostEntity } from 'src/module/Post/entity/post.entity';
export declare class CategoryEntity {
    id: number;
    name: string;
    description: string;
    subcategories: SubcategoryEntity[];
    posts: Array<PostEntity>;
}
