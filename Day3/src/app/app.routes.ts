import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { Cloud } from './pages/cloud/cloud';
import { Cyber } from './pages/cyber/cyber';
import { Devops } from './pages/devops/devops';
import { Gis } from './pages/gis/gis';
import { Contactus } from './pages/contactus/contactus';
import { Homepage } from './homepage/homepage';

export const routes: Routes = [
    {path:"about",component:About},
    {path:"service",component:Service},
    {path:"cloud",component:Cloud},
    {path:"cyber",component:Cyber},
    {path:"devops",component:Devops},
    {path:"gis",component:Gis},
    {path:"contactus",component:Contactus},
    {path:"",component:Homepage}
];
