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
      
      title: 'Pick-up and Drop',
      description: 'Travel in comfort with our best-in-class Shoffr electric SUVs'
    },
    {
      
      title: 'Food and Beverages',
      description: 'Delicious, curated meals for all preferences'
    },
    {
      
      title: 'Professional Photography',
      description: 'Capture memories and have them delivered within 24 hours'
    },
    {
      
      title: 'On-ground facilitator',
      description: 'Personal assistance for anything throughout the experience'
    }
  ];

  differences = [
    {
     
      title: 'People In. Screens Out.',
      description: 'We focus on real interactions and team building.'
    },
    {
     
      title: 'Combine Fun, Learning and DIY',
      description: 'Experience unique activities that combine layers of engagement.'
    },
    {
     
      title: 'All Things Premium',
      description: 'Guaranteed Satisfaction with our quality experiences and service.'
    }
  ];
}
