import { CategoryEntity } from 'src/module/category/entity/category.entity';
import { PostEntity } from 'src/module/Post/entity/post.entity';
export declare class SubcategoryEntity {
    id: number;
    name: string;
    description: string;
    category: CategoryEntity;
    posts: Array<PostEntity>;
}
