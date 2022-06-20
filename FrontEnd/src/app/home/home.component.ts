import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Images=['./assets/carousel1.jpg','./assets/carousel1.jpg'];
CardImages=['./assets/mural.jpg','./assets/acrylic.jpg','./assets/abstract.jpeg', './assets/water.jpg','./assets/pastel.jpg','./assets/charcoal.jpg'];
CardNames=['Mural','Acrylic','Abstract','Watercolor','Pastel','Charcoal'];
slides = [
  { img: 'https://www.archerindia.com/pub/media/resized/250x250/Akbar_Padamsee.jpg',artist:'Akbar Padamsee' },
  { img: 'https://www.archerindia.com/pub/media/resized/250x250/Anjolie_Ela_Menon.jpg',artist:'Anjolie Ela Menon' },
  { img: 'https://www.archerindia.com/pub/media/catalog/tmp/category/Bharati_Shah.jpg',artist:'Bharati Shah' },
  { img: 'https://www.archerindia.com/pub/media/resized/250x250/6814522_1594479123.png',artist:'Bharvi Trivedi' },
  { img: 'https://www.archerindia.com/pub/media/resized/250x250/Dipen_Ujeniya.jpeg', artist:'Dipen Ujeniya' },
  { img: 'https://www.archerindia.com/pub/media/resized/250x250/Dipal_Sisodia.jpg',artist:'Dipal Sisodia' },
  { img: 'https://www.archerindia.com/pub/media/resized/250x250/4846785_1594479123.png',artist:'Esther David' },
  { img: 'https://www.archerindia.com/pub/media/resized/250x250/Gurcharan_Singh.jpg',artist:'Gurcharan Singh' },
  { img: 'https://www.archerindia.com/pub/media/resized/250x250/Deva_Sharma_1.jpg',artist:'Deva Sharma' },
  { img: 'https://www.archerindia.com/pub/media/resized/250x250/Jagdeep_Smart_2.jpg',artist:'Jagdeep Smart' }
];
slideConfig = { slidesToShow: 4, slidesToScroll: 2 };

  constructor() { }

  ngOnInit(): void {
  }

}
