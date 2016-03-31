import { Component } from 'angular2/core';

@Component({
selector: 'proposal-list',
templateUrl: 'public/src/proposal-list/proposal-list.component.html'
})

export class ProposalListComponent {
    proposals = [
        {name: "Test 1", time: "11:00", place: "Jollibee"},
        {name: "Test 2", time: "11:00", place: "Mcdonalds"},
        {name: "Test 3", time: "11:00", place: "Bonchon"},
        {name: "Test 4", time: "11:00", place: "Army Navy"},
        ];
 }
