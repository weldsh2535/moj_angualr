export class SolutionModel {
    constructor(
        public UserId: string,
        public reportId:string,
        public brand: string,
        public model: string,
        public happenedProblem: string,
        public sole:string,
        public startDate: string,
        public endDate: string,
        public isProblemFixed: string,
        public reasonProblemNotFixed: string,
        public itTechName: string

    ){

    }
}