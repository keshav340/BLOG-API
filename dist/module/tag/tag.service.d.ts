import { Repository } from 'typeorm';
import { TagEntity } from './entities/tag.entity';
export declare class TagService {
    private tagRepository;
    constructor(tagRepository: Repository<TagEntity>);
    getAllTags(): Promise<TagEntity[]>;
    createTag(name: string): Promise<TagEntity>;
    updateTag(id: number, name: string): Promise<TagEntity>;
    deleteTag(id: number): Promise<void>;
}
