import { Guid } from "guid-typescript";

export interface MentorEducationInformation{
    mentorEducationInformationId: Guid;
    mentorId: Guid;
    universityName: string;
    highSchoolName: string;
    insertDate: Date;
    updateDate: Date;
    updateUserId: Guid;

    //------------\\

    // Mentor: Mentor;
}
