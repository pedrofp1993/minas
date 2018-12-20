import { Component, OnInit } from "@angular/core";
import { asiento } from "~/app/bus/Asiento";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Router } from "@angular/router";
@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./bus.component.html",
    styleUrls: ['./bus.css']
})
export class BusComponent implements OnInit {
    columnaniv1: number = 0;
    columnaniv2:number = 0;
    urlasientoniv2:String = "";
    urlasientoniv1:String = "";
    isSel:boolean = false;
    grid = new GridLayout;
    algo:string;
    private Asientos:any[]=[{nivel:  1, fila: 0,columna: 0,tipo: 'A',disponibilidad:1,urlimg: ""},
                                        {nivel:  1, fila: 0,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  1, fila: 0,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  1, fila: 1,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  1, fila: 1,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  1, fila: 1,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  1, fila: 2,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  1, fila: 2,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  1, fila: 2,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  1, fila: 3,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  1, fila: 3,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  1, fila: 3,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        
                                        {nivel:  2, fila: 0,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 0,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 0,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 0,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  2, fila: 1,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 1,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 1,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 1,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  2, fila: 2,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 2,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 2,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 2,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  2, fila: 3,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 3,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 3,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 3,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  2, fila: 4,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 4,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 4,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 4,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  2, fila: 5,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 5,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 5,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 5,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  2, fila: 6,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 6,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 6,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 6,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  2, fila: 7,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 7,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 7,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 7,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  2, fila: 8,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 8,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 8,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 8,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  2, fila: 9,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 9,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 9,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 9,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},

                                        {nivel:  2, fila: 10,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 10,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 10,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 10,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                       
                                        {nivel:  2, fila: 11,columna: 0,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 11,columna: 1,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 11,columna: 3,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                        {nivel:  2, fila: 11,columna: 4,tipo: 'A',disponibilidad:1,urlimg: this.ponerImagen()},
                                       
                                        ];
    private Asientos_sel = [];
    constructor(private router: Router
        
    ) { }

    ngOnInit(): void {
        this.obtenercol1();
        this.obtenercol2();
        console.log(this.Asientos);
    }

    rabus(asiento:any){
        this.Asientos_sel.push(asiento);
        this.cambiarImagen(asiento);
        console.log(this.Asientos_sel);
    }
    
    cambiarImagen(asiento:any){
        if(asiento.nivel == 1){

        }
    }

    obtenercol1(){
        this.columnaniv1 = 5;
    }

    obtenercol2(){
        this.columnaniv2 = 4;
    }

    ponerImagen():string {
        if(this.columnaniv1 == 4){
          return "~/images/asiento4.png";
        } else if(this.columnaniv1 == 5){
            return "~/images/asiento.png";
        }

        if(this.columnaniv2 == 4){
            return "~/images/asiento4.png";
        } else if(this.columnaniv2 == 5){
            return "~/images/asiento.png";
        }
        
    }
}