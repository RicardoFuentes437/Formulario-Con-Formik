import { LEVELS } from "./levels.enum";

export class Tarea {
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL

    constructor(name, description, level){
        this.name = name;
        this.description = description;
        this.level = level;
    }
}