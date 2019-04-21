import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagenmodalPage } from '../page-modal/page-modal.page';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  public actividades = [{
    titulo: 'Visita el sábado 4 de Abril al Parque Juan Carlos I (Madrid)',
    subtitulo: 'Es una amplia zona verde, ideal para pasear con tu perro, situada en la zona nordeste de la capital, su parque canino ocupa unos 5.000 m2. Su gran punto fuerte es que la zona vallada habilitada para los perros cuenta con instalaciones para practicar agility, bancos, bebedero y pipican, podrán correr y jugar con otros perros sin problema.',
    imagen: '../../assets/img/Juancarlos1.jpg',
  }, {
    titulo: 'De paseo el domingo 12 de Mayo por la Sierra de Guadarrama',
    subtitulo: 'Vamos a relizar la ruta de los Siete Picos, de baja dificultad y en la que disfrutar de un bello paisaje. Una buena idea es llevar picnic (¡no te olvides del agua del peludo!) para pasar todo el día en la montaña. No sabes la ilusión que le va a hacer a tu perro este planazo.',
    imagen: '../../assets/img/sierra-guadarrama.jpg',
  }, {
    titulo: 'Madrid 26 y 27 de Mayo Seminario internacional de nutrición natural para perros y gatos.',
    subtitulo: 'El creador de la dieta BARF nos visita en el Primer Seminario Internacional de Nutrición Evolutiva y Tratamiento Nutricional del Cáncer en mascotas. Entradas disponibles para el seminario presencial y para la retransmisión en streaming.',
    imagen: '../../assets/img/seminario.jpg',
  }];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  verImagen(imagen, subtitulo, comentarios) {
    this.modalCtrl.create({
      component : ImagenmodalPage,
      componentProps : {
        imagen : imagen,
        comentarios : comentarios,
          subtitulo: subtitulo,
      }
    }).then(modal => modal.present());

  }
}
