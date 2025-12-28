import { Component, signal } from '@angular/core';
import { Footer } from "./footer/footer";
import { Navbar } from './navbar/navbar';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
}
