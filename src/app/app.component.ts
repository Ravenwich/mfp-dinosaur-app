import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dinosaurs = [
    { name: 'T-Rex', url: 'https://static.wikia.nocookie.net/jurassicpark/images/4/42/Jurassic_Park_Tyrannosaurus_Rex.png' },
    { name: 'Stegosaurus', url: 'https://static.wikia.nocookie.net/jurassicpark/images/8/8f/Jurassic_world_fallen_kingdom_stegosaurus_v4_by_sonichedgehog2-dco06sh.png' },
    { name: 'Plesiosaurus', url: 'https://static.wikia.nocookie.net/jurassicpark/images/8/8b/JW_Plesiosaurus_render.png' },
    { name: 'Triceratops', url: 'https://static.wikia.nocookie.net/jurassicpark/images/5/52/Jurassic_world_fallen_kingdom_triceratops_by_sonichedgehog2-dc9dwcu.png' },
    { name: 'Anklyosaurus', url: 'https://static.wikia.nocookie.net/jurassicpark/images/c/cd/Anklyosaurus_header_copia.png' },
    { name: 'Brachiosaurus', url: 'https://static.wikia.nocookie.net/jurassicpark/images/5/51/Jurassic_world_brachiosaurus_updated_by_sonichedgehog2-dc55jvt.png' },
    { name: 'Pterodactyl', url: 'https://static.wikia.nocookie.net/jurassicpark/images/1/1a/Pteranodon_render.png' },
    { name: 'Velociraptor', url: 'https://static.wikia.nocookie.net/jurassicpark/images/0/01/VelociRaptor_pose.png' },
    { name: 'Parasaurolophus', url: 'https://static.wikia.nocookie.net/jurassicpark/images/d/d1/JWD_Parasaurolophus.png' },
  ];
}
