import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { SkillComponent } from './home/skill/skill.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            {path: 'about', component: AboutComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'project', component: ProjectsComponent},
            {path: 'skill', component: SkillComponent}
        ]
    },
    { path: '**', redirectTo: 'about' }
];
