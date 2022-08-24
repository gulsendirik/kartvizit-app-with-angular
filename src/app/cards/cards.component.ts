import { Card } from 'src/app/models/card';
import { CardService } from './../services/card.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards!: Card[];

  /* cardItem = {
    title: 'Frontend Developer',
    name: 'Gulsen Dirik',
    phone: '5555555555',
    email: 'gulsen@gmail.com',
    address: 'Izmir'
  } */

  constructor(
    public dialog: MatDialog,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.getCards();
  }

  openAddCardModal(): void {
    const dialog = this.dialog.open(CardModalComponent, {
      width: '400px'
    });

    dialog.afterClosed().subscribe(res => {
      if(res) {
        this.getCards();
      }
    })
  }

  getCards(): void {
    this.cardService.getCards()
    .subscribe((res: Card[]) => {
      this.cards = res;
    })
  }

}
