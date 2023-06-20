import { Repository } from 'typeorm';
import { PostEntity } from './entity/post.entity';
export declare class PostService {
    private postRepository;
    constructor(postRepository: Repository<PostEntity>);
    getAllPosts(): Promise<PostEntity[]>;
    getPostById(id: number): Promise<PostEntity>;
    createPost(postData: Partial<PostEntity>): Promise<PostEntity>;
    updatePost(id: number, postData: Partial<PostEntity>): Promise<PostEntity>;
    deletePost(id: number): Promise<boolean>;
}
