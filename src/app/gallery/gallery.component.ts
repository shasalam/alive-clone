import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  gallery = [
    {
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      title: 'Golf Fun',
      label: ''
    },
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      title: 'Unplug in Nature',
      label: 'Unplug\nin Nature'
    },
    {
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      title: 'Pedal Away',
      label: 'Pedal Away\nfrom the city'
    },
    {
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      title: 'Teamwork',
      label: ''
    },
    {
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
      title: 'Go-Karting',
      label: ''
    },
    {
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      title: 'More',
      label: ''
    }
  ];

  get visibleGallery() {
    return this.gallery.slice(0, 5);
  }

  get extraCount() {
    return this.gallery.length > 5 ? this.gallery.length - 5 : 0;
  }
}
