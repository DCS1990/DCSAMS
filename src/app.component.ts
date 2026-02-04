import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
@if (isAuthenticated() === null) {
  <div class="flex h-screen w-full items-center justify-center bg-slate-900">
    <div class="text-center">
      <svg class="mx-auto h-12 w-12 animate-spin text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p class="mt-4 text-lg font-medium text-slate-300">Loading Application...</p>
    </div>
  </div>
} @else if (isAuthenticated()) {
  <div class="flex h-screen">
    <app-sidebar [isVisible]="sidebarVisible()" (toggleSidebar)="toggleSidebar()"></app-sidebar>
    <div class="flex-1 flex flex-col min-w-0">
      <app-header (toggleSidebar)="toggleSidebar()"></app-header>
      <main class="flex-1 flex flex-col overflow-y-auto bg-slate-800">
        <div class="p-6 md:p-8 flex-1">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  </div>
} @else {
  <router-outlet></router-outlet>
}
`,
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent]
})
export class AppComponent {
  private authService = inject(AuthService);
  
  isAuthenticated = this.authService.isAuthenticated;
  sidebarVisible = signal(true);

  toggleSidebar(): void {
    this.sidebarVisible.update(visible => !visible);
  }
}
