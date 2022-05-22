import { Guid } from "guid-typescript";
import { CommentMentor } from "./commentMentor";
import { CourseMentor } from "./courseMentor";
import { FileAuthenticate } from "./fileAuthenticate";
import { MentorEducationInformation } from "./mentorEducationInformation";
import { Post } from "./post";
import { User } from "./user";

export interface Mentor{
    mentorId: Guid;
    userId: Guid;
    identityNumber: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: number;
    maritalStatus: boolean;
    realBirthDate: Date;
    birthDateOnIdentity: Date;

    user: User;
    commentMentors: CommentMentor[];
    courseMentors: CourseMentor[];
    fileAuthenticates: FileAuthenticate[];
    mentorEducationInformations: MentorEducationInformation[];
    posts: Post[];
}
