export class Resume {
    profilePic: string;
    name: string;
    address: string;
    number: number;
    email: string;
    skill: Skill[] = [];
    experience : Experience[] = []
    education: Education[] = [];
    details: string;
    constructor() {
        this.skill.push(new Skill());
        this.education.push(new Education());
        this.experience.push(new Experience());
    }
}
export class Skill {
    value:string;
}
export class Experience {
    employer:string;
    jobdesc:string;
    jobtitle:string;
    jobexperience:number;
}

export class Education {
    degree:string;
    collage:string;
    passing:string;
    protected:number;
}