import { Subcategory } from './schema/subcategory.schema';
import { SubcategoryService } from './subcategory.service';
import { CreateSubcategoryArgs } from 'src/module/subcategory/args/args';
export declare class SubcategoryResolver {
    private readonly subcategoryService;
    constructor(subcategoryService: SubcategoryService);
    subcategory(id: string): Promise<Subcategory>;
    subcategories(): Promise<Subcategory[]>;
    createSubcategory({ name, description, categoryId }: CreateSubcategoryArgs): Promise<Subcategory>;
    updateSubcategory(id: string, name?: string, description?: string, categoryId?: number): Promise<Subcategory>;
    deleteSubcategory(id: string): Promise<boolean>;
}
