import { Guid } from "guid-typescript";

export interface Post{
    postId: Guid;
    mentorId: Guid;
    title: string;
    postContent: string;
    status: boolean;
    insertDate: Date;
    updateDate: Date;
    updateUserId: Guid;

    // Mentor: Mentor;
    // CommentPosts: CommentPost[];
    // Likes: Like[];
}
