import { Guid } from "guid-typescript";
import { CommentPost } from "./commentPost";
import { Like } from "./like";
import { Mentor } from "./mentor";

export interface Post{
    postId: Guid;
    mentorId: Guid;
    title: string;
    postContent: string;
    status: boolean;
    insertDate: Date;
    updateDate: Date;
    updateUserId: Guid;

    mentor: Mentor;
    commentPosts: CommentPost[];
    likes: Like[];
}
