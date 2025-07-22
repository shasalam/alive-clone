import { Component } from '@angular/core';

@Component({
  selector: 'app-expriences',
  standalone: false,
  templateUrl: './expriences.component.html',
  styleUrl: './expriences.component.css'
})
export class ExpriencesComponent {
  experiences = [
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      title: 'Bengaluru Go-Karting Race',
      subtitle: 'Sunday, 24 Aug 2025',
      tags: ['Race', 'Outdoor', 'Team', 'Fun'],
      date: 'Jul 27, 2025',
      duration: '45 min',
      description: 'Go-Karting event for teams.'
    },
    {
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      title: 'Golf Lesson, Practice and Competition',
      subtitle: 'with Sunday brunch & No property tour',
      tags: ['Golf', 'Brunch', 'Competition'],
      date: '',
      duration: '2-3 hr',
      description: 'Golf event with brunch.'
    },
    {
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
      title: 'Camping with Bonfire',
      subtitle: '',
      tags: ['Camping', 'Bonfire', 'Night'],
      date: '',
      duration: '20-28 hr',
      description: 'Overnight camping experience.'
    },
    {
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      title: 'Beginners Cycling Trail and Picnic',
      subtitle: 'Hesarghatta Lake',
      tags: ['Cycling', 'Picnic', 'Outdoor'],
      date: '',
      duration: '3-4 hr',
      description: 'Cycling and picnic for beginners.'
    },
    {
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      title: 'Woodworking and Carpentry Workshop',
      subtitle: 'for Beginners',
      tags: ['Workshop', 'Woodworking', 'Carpentry'],
      date: '',
      duration: '4-5 hr',
      description: 'Hands-on carpentry workshop.'
    },
    {
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
      title: 'Horseriding Forest Safari',
      subtitle: '',
      tags: ['Horseriding', 'Safari', 'Nature'],
      date: '',
      duration: '1-3 hr',
      description: 'Forest safari on horseback.'
    },
    {
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      title: 'Cycling Adventure',
      subtitle: '',
      tags: ['Cycling', 'Adventure'],
      date: '',
      duration: '2-4 hr',
      description: 'Adventure cycling event.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      title: 'Motorbike Trail',
      subtitle: '',
      tags: ['Motorbike', 'Trail', 'Adventure'],
      date: '',
      duration: '2-5 hr',
      description: 'Motorbike trail for teams.'
    },
    {
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      title: 'Creative Art Workshop',
      subtitle: '',
      tags: ['Art', 'Workshop', 'Creative'],
      date: '',
      duration: '2-3 hr',
      description: 'Art and creativity workshop.'
    }
  ];
}
