import { Post } from './schema/schema';
import { PostService } from './post.service';
import { CreatePostArgs, UpdatePostArgs, DeletePostArgs } from './args/args';
export declare class PostResolver {
    private readonly postService;
    constructor(postService: PostService);
    post(id: number): Promise<Post>;
    posts(): Promise<Post[]>;
    createPost(postData: CreatePostArgs): Promise<Post>;
    updatePost(id: number, postData: UpdatePostArgs): Promise<Post>;
    deletePost(deletePostArgs: DeletePostArgs): Promise<boolean>;
}
