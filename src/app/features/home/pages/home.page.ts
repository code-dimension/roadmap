import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-[#fff]">
      <!-- Header section -->
      <header class="bg-white shadow">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-xl font-bold text-[#6657eb]">Cursos da Code</h1>
          <button class="btn btn-primary bg-[#6657eb] border-[#6657eb] hover:bg-[#5a4bd8] hover:border-[#5a4bd8]">
            Sign In
          </button>
        </div>
      </header>

      <!-- Main content -->
      <main class="container mx-auto px-4 py-8">
        <h2 class="text-2xl font-bold mb-6">Course Requests</h2>
        
        <!-- Course request cards will go here -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Sample course request card -->
          <div class="card bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-bold mb-2">Angular Fundamentals</h3>
            <p class="text-gray-600 mb-4">Learn the basics of Angular framework</p>
            <div class="flex justify-between items-center mb-4">
              <span class="badge badge-primary">Pending</span>
              <span>50 votes</span>
            </div>
            <div class="flex justify-between text-sm text-gray-500 mb-4">
              <span>By John Doe</span>
              <span>2023-05-15</span>
            </div>
            <button class="btn btn-primary bg-[#6657eb] border-[#6657eb] hover:bg-[#5a4bd8] hover:border-[#5a4bd8] w-full">
              Vote for this course
            </button>
          </div>
          
          <!-- Another sample course request card -->
          <div class="card bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-bold mb-2">React Advanced Patterns</h3>
            <p class="text-gray-600 mb-4">Master advanced React patterns and best practices</p>
            <div class="flex justify-between items-center mb-4">
              <span class="badge badge-secondary">In Progress</span>
              <span>85 votes</span>
            </div>
            <div class="flex justify-between text-sm text-gray-500 mb-4">
              <span>By Jane Smith</span>
              <span>2023-06-22</span>
            </div>
            <button class="btn btn-primary bg-[#6657eb] border-[#6657eb] hover:bg-[#5a4bd8] hover:border-[#5a4bd8] w-full">
              Vote for this course
            </button>
          </div>
          
          <!-- Another sample course request card -->
          <div class="card bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-bold mb-2">Vue.js State Management</h3>
            <p class="text-gray-600 mb-4">Learn state management with Vuex and Pinia</p>
            <div class="flex justify-between items-center mb-4">
              <span class="badge badge-success">Completed</span>
              <span>120 votes</span>
            </div>
            <div class="flex justify-between text-sm text-gray-500 mb-4">
              <span>By Alex Johnson</span>
              <span>2023-04-10</span>
            </div>
            <button class="btn btn-primary bg-[#6657eb] border-[#6657eb] hover:bg-[#5a4bd8] hover:border-[#5a4bd8] w-full" disabled>
              Course Completed
            </button>
          </div>
        </div>
      </main>
    </div>
  `
})
export class HomePage {
  constructor() {}
}