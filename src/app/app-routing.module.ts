import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpriencesComponent } from './expriences/expriences.component';
import { FeatureComponent } from './feature/feature.component';
import { GalleryComponent } from './gallery/gallery.component';
import{HomeComponent} from './home/home.component';
import{FormComponent} from './form/form.component';

const routes: Routes = [
  { path: 'expriences', component: ExpriencesComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', component: HomeComponent },
  { path: 'forms', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
