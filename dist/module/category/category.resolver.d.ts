import { Category } from './schema/category.schema';
import { CategoryService } from './category.service';
import { CreateCategoryArgs } from './args/createcategory.args';
import { UpdateCategoryArgs } from './args/updatecategory.args';
import { DeleteCategoryArgs } from './args/deletecategory.args';
export declare class CategoryResolver {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    category(id: number): Promise<Category>;
    categories(): Promise<Category[]>;
    createCategory(args: CreateCategoryArgs): Promise<Category>;
    updateCategory(args: UpdateCategoryArgs): Promise<Category>;
    deleteCategory(args: DeleteCategoryArgs): Promise<boolean>;
}
