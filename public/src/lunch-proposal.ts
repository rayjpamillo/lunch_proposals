export class LunchProposal {
    constructor(
        public time: string,
        public name: string,
        public user: string,
        public place: string,
        public voters: string[],
    ) {  }
}