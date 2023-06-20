import { Repository } from 'typeorm';
import { MetaEntity } from './entity/meta.entity';
export declare class MetaService {
    private metaRepository;
    constructor(metaRepository: Repository<MetaEntity>);
    findAll(): Promise<MetaEntity[]>;
    findById(id: number): Promise<MetaEntity>;
    create(metaTitle: string, metaDescription?: string): Promise<MetaEntity>;
    update(id: number, metaTitle: string, metaDescription?: string): Promise<MetaEntity>;
    delete(id: number): Promise<boolean>;
}
