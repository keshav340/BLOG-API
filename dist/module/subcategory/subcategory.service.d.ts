import { Repository } from "typeorm";
import { SubcategoryEntity } from "./entity/subcategory.entity";
import { CategoryEntity } from "../category/entity/category.entity";
export declare class SubcategoryService {
    private readonly subcategoryRepository;
    private categoryRepository;
    constructor(subcategoryRepository: Repository<SubcategoryEntity>, categoryRepository: Repository<CategoryEntity>);
    createSubcategory(name: string, description: string, categoryId: number): Promise<SubcategoryEntity>;
    getSubcategoryById(id: number): Promise<SubcategoryEntity>;
    getAllSubcategories(): Promise<SubcategoryEntity[]>;
    updateSubcategory(id: number, name?: string, description?: string, categoryId?: number): Promise<SubcategoryEntity>;
    deleteSubcategory(id: number): Promise<boolean>;
}
