import { Guid } from "guid-typescript";

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

    //--------------\\
    // user: User;
    // commentMentors: CommentMentors[];
    // courseMentors: CourseMentors[];
    // fileAuthenticates: FileAuthenticates[];
    // mentorEducationInformations: MentorEducationInformations[];
    // posts: Posts[];
}
