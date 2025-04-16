import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
}


/*

BTS blanc : ajouter nombre de visiteur par région et total de frais par région

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  visiteursParRegion: { region: string, count: number }[] = [];
  fraisParRegion: { region: string, total: number }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchVisiteursParRegion();
    this.fetchFraisParRegion();
  }

  // 🔹 Récupère le nombre de visiteurs par région
  fetchVisiteursParRegion(): void {
    this.http.get<{ [region: string]: number }>('http://localhost:8080/api/visiteurs/nombre-par-region')
      .subscribe(data => {
        this.visiteursParRegion = Object.entries(data).map(([region, count]) => ({
          region,
          count
        }));
      });
  }

  // 🔹 Récupère le total de frais par région
  fetchFraisParRegion(): void {
    this.http.get<{ [region: string]: number }>('http://localhost:8080/api/visiteurs/frais-par-region')
      .subscribe(data => {
        this.fraisParRegion = Object.entries(data).map(([region, total]) => ({
          region,
          total
        }));
      });
  }
}

*/