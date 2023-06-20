import { CategoryEntity } from 'src/module/category/entity/category.entity';
import { SubcategoryEntity } from 'src/module/subcategory/entity/subcategory.entity';
export declare class PostEntity {
    id: number;
    title: string;
    description: string;
    content: string;
    category: CategoryEntity;
    subcategory: SubcategoryEntity;
}
