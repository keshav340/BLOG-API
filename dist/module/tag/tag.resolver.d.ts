import { TagService } from './tag.service';
import { UpdateTagArgs, DeleteTagArgs } from './args/args';
import { Tag, CreateTagResponse, UpdateTagResponse, DeleteTagResponse } from './schema/schema';
export declare class TagResolver {
    private readonly tagService;
    constructor(tagService: TagService);
    getAllTags(): Promise<Tag[]>;
    createTag(name: string): Promise<CreateTagResponse>;
    updateTag(args: UpdateTagArgs): Promise<UpdateTagResponse>;
    deleteTag(args: DeleteTagArgs): Promise<DeleteTagResponse>;
}
