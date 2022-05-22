import { Guid } from "guid-typescript";
import { Mentor } from "./mentor";

export interface MentorEducationInformation{
    mentorEducationInformationId: Guid;
    mentorId: Guid;
    universityName: string;
    highSchoolName: string;
    insertDate: Date;
    updateDate: Date;
    updateUserId: Guid;

    mentor: Mentor;
}
