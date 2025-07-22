import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: false,
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {
  features = [
    {
      icon: `<svg class='w-7 h-7 text-blue-600' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M3 10l1.553 9.32A2 2 0 006.54 21h10.92a2 2 0 001.987-1.68L21 10M5 10V7a7 7 0 0114 0v3'></path></svg>`,
      title: 'Pick-up and Drop',
      description: 'Travel in comfort with our best-in-class Shoffr electric SUVs'
    },
    {
      icon: `<svg class='w-7 h-7 text-amber-700' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10'/><path d='M8 15h8M8 11h8M8 7h8'/></svg>`,
      title: 'Food and Beverages',
      description: 'Delicious, curated meals for all preferences'
    },
    {
      icon: `<svg class='w-7 h-7 text-orange-500' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><rect x='3' y='7' width='18' height='13' rx='2'/><path d='M16 3v4M8 3v4'/></svg>`,
      title: 'Professional Photography',
      description: 'Capture memories and have them delivered within 24 hours'
    },
    {
      icon: `<svg class='w-7 h-7 text-green-600' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M9 12l2 2l4-4'/><circle cx='12' cy='12' r='10'/></svg>`,
      title: 'On-ground facilitator',
      description: 'Personal assistance for anything throughout the experience'
    }
  ];

  differences = [
    {
      icon: `<svg class='w-7 h-7 text-pink-500' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0z'/><path d='M12 17v.01'/><path d='M12 21a9 9 0 100-18 9 9 0 000 18z'/></svg>`,
      title: 'People In. Screens Out.',
      description: 'We focus on real interactions and team building.'
    },
    {
      icon: `<svg class='w-7 h-7 text-orange-400' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><rect x='2' y='7' width='20' height='14' rx='2'/><path d='M16 3v4M8 3v4'/></svg>`,
      title: 'Combine Fun, Learning and DIY',
      description: 'Experience unique activities that combine layers of engagement.'
    },
    {
      icon: `<svg class='w-7 h-7 text-yellow-500' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/></svg>`,
      title: 'All Things Premium',
      description: 'Guaranteed Satisfaction with our quality experiences and service.'
    }
  ];
}
