export class LunchProposal {
    constructor(
        public time: number,
        public name: string,
        public voters: string[],
        public user: string,
        public place: string
    ) {  }
}