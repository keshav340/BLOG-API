import { Repository } from 'typeorm';
import { CategoryEntity } from './entity/category.entity';
import { CreateCategoryArgs } from './args/createcategory.args';
import { UpdateCategoryArgs } from './args/updatecategory.args';
import { DeleteCategoryArgs } from './args/deletecategory.args';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    getCategoryById(id: number): Promise<CategoryEntity>;
    getAllCategories(): Promise<CategoryEntity[]>;
    createCategory(args: CreateCategoryArgs): Promise<CategoryEntity>;
    updateCategory(args: UpdateCategoryArgs): Promise<CategoryEntity>;
    deleteCategory(args: DeleteCategoryArgs): Promise<boolean>;
}
