import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';

interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol
  ]
})
export class ProductListPage implements OnInit {

  products: Product[] = [
    {
      id: 1,
      name: 'Sport Bike R1',
      type: 'Sport Bike',
      price: 15999.99,
      description: 'High-performance sport bike with 1000cc engine',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
    },
    {
      id: 2,
      name: 'Harley Cruiser',
      type: 'Cruiser',
      price: 18999.99,
      description: 'Classic American cruiser with V-twin engine',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400'
    },
    {
      id: 3,
      name: 'Adventure Tourer',
      type: 'Adventure',
      price: 14999.99,
      description: 'All-terrain adventure motorcycle for long journeys',
      image: 'https://ae01.alicdn.com/kf/Sb4b5b6d8fc364744abe717c8025901840.jpg'
    },
    {
      id: 4,
      name: 'Street Fighter',
      type: 'Naked Bike',
      price: 12999.99,
      description: 'Aggressive naked bike with upright riding position',
      image: 'https://darkkustom.com/content/uploads/2022/12/Ducati-Streetfighter-V4S-by-Kikas-design-06-jpg.webp'
    },
    {
      id: 5,
      name: 'Dual Sport',
      type: 'Dual Sport',
      price: 8999.99,
      description: 'Versatile bike for both on-road and off-road adventures',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400'
    },
    {
      id: 6,
      name: 'Touring Elite',
      type: 'Touring',
      price: 22999.99,
      description: 'Luxury touring motorcycle with all comfort features',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400'
    },
    {
      id: 7,
      name: 'Cafe Racer',
      type: 'Cafe Racer',
      price: 11999.99,
      description: 'Vintage-style cafe racer with modern performance',
      image: 'https://th.bing.com/th/id/OIP.LVYZHRzEpGZAC5TqR5Wt9wHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 8,
      name: 'Electric Future',
      type: 'Electric Motorcycle',
      price: 19999.99,
      description: 'Zero-emission electric motorcycle with instant torque',
      image: 'https://stroebelautomotive.com/wp-content/uploads/2020/12/AdobeStock_377905344-1536x1152.jpeg'
    },
    {
      id: 9,
      name: 'Scrambler Urban',
      type: 'Scrambler',
      price: 10999.99,
      description: 'Urban scrambler with retro styling and modern tech',
      image: 'https://images.unsplash.com/photo-1571761488079-1c14c3c0d3c0?w=400'
    },
    {
      id: 10,
      name: 'Super Sport',
      type: 'Super Sport',
      price: 21999.99,
      description: 'Track-focused super sport with racing pedigree',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
    },
    {
      id: 11,
      name: 'Bobber Custom',
      type: 'Bobber',
      price: 16999.99,
      description: 'Custom bobber with minimalist design and raw power',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400'
    },
    {
      id: 12,
      name: 'Enduro Pro',
      type: 'Enduro',
      price: 11999.99,
      description: 'Professional enduro bike for extreme off-road riding',
      image: 'https://images.unsplash.com/photo-1571702971130-b9cbd64b6d85?w=400'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}