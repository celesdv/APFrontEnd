import { EducationComponent } from "../components/education/education.component";
import { ExperienceComponent } from "../components/experience/experience.component";
import { HardSkillsComponent } from "../components/hard-skills/hard-skills.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { SocialComponent } from "../components/social/social.component";
import { SoftSkillsComponent } from "../components/soft-skills/soft-skills.component";

export class professional{
    id?: number;
    name: String;
    image: String;
    position: String;
    banner: String;
    description: String;
    education!: EducationComponent[];
    experience!: ExperienceComponent[];
    hardSkill!: HardSkillsComponent[];
    softSkill!: SoftSkillsComponent[];
    project!: ProjectsComponent[];
    social!: SocialComponent[];

    constructor(name:String, image:String, position:String, banner:String, description:String){
        this.name = name,
        this.image = image,
        this.position = position,
        this.banner = banner
        this.description = description;
    }
}