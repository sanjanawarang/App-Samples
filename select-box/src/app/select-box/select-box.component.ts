import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-select-box',
    templateUrl: './select-box.component.html',
    styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {

    ngOnInit() {
    }

    public query = '';
    // This should come from service
    public funds = ["ICICI Prudential Focused Bluechip Equity Fund Growth (Direct)",
    "Aditya Birla Sun Life Frontline Equity Fund Growth (Direct)",
    "UTI Nifty Index Fund-Growth Option (Direct)",
    "Motilal Oswal Multicap 35 Fund Growth (Direct)",
    "DSP BlackRock Equity Opportunities Fund Growth (Direct)",
    "L&T Midcap Fund Growth (Direct)",
    "IDFC Sterling Equity Fund Growth (Direct)",
    "ICICI Prudential Nifty Next 50 Index Fund Growth (Direct)",
    "Axis Long Term Equity Fund Growth (Direct)",
    "L&T Tax Advantage Growth (Direct)"];
    public filteredList = [];
    public elementRef;

    constructor(myElement: ElementRef) {
        this.elementRef = myElement;
    }

    filter() {
        if (this.query !== "") {
            this.filteredList = this.funds.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.filteredList = this.funds.slice(0);
        }
    }

    select(item) {
        this.query = item;
        this.filteredList = [];
    }

}
