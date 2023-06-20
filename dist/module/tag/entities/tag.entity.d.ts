import { PostEntity } from 'src/module/Post/entity/post.entity';
export declare class TagEntity {
    id: number;
    name: string;
    posts: PostEntity[];
}
