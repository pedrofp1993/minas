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
    columnaniv1: number = 4;
    columnaniv2:number = 5;
    urlasientoniv2:String = "";
    urlasientoniv1:String = "";
    isSel:boolean = false;
    grid = new GridLayout;
    algo:string;
    private Asientos:any[]=[{nivel:  1, fila: 0,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  1, fila: 0,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  1, fila: 0,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  1, fila: 1,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  1, fila: 1,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  1, fila: 1,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  1, fila: 2,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  1, fila: 2,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  1, fila: 2,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  1, fila: 3,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  1, fila: 3,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  1, fila: 3,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},
                                        
                                        {nivel:  2, fila: 0,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 0,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 0,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 0,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 1,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 1,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 1,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 1,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 2,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 2,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 2,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 2,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 3,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 3,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 3,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 3,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 4,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 4,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 4,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 4,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 5,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 5,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 5,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 5,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 6,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 6,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 6,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 6,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 7,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 7,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 7,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 7,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 8,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 8,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 8,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 8,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 9,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 9,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 9,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 9,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},

                                        {nivel:  2, fila: 10,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 10,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 10,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 10,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},
                                       
                                        {nivel:  2, fila: 11,columna: 0,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 11,columna: 1,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 11,columna: 3,tipo: 'A',disponibilidad:1,urlimage:""},
                                        {nivel:  2, fila: 11,columna: 4,tipo: 'A',disponibilidad:1,urlimage:""},
                                       
                                        ];
    private Asientos_sel = [];
    constructor(private router: Router
        
    ) { }

    ngOnInit(): void {
       // this.ponerImagen();
       this.ponerImagen2();
       console.log(this.Asientos);
    }

    rabus(asiento:any,indice:number){
        this.Asientos_sel.push(asiento);
        if(asiento.urlimage == "~/images/asiento4.png"){
            this.Asientos[indice].urlimage = "~/images/asiento4_sel.png";
        }
        else if(asiento.urlimage == "~/images/asiento.png")
        {
            this.Asientos[indice].urlimage = "~/images/asiento_sel.png";
        }
        console.log(this.Asientos_sel);
    }

    obtenercol1():number{
        return this.columnaniv1 ;
    }

    obtenercol2():number{
        return this.columnaniv2;
    }

    ponerImagen(){
        if(this.columnaniv1 == 4){
          this.urlasientoniv1 = "~/images/asiento4.png";
        } else if(this.columnaniv1 == 5){
            this.urlasientoniv1 = "~/images/asiento.png";
        }

        if(this.columnaniv2 == 4){
            this.urlasientoniv2 = "~/images/asiento4.png";
        } else if(this.columnaniv2 == 5){
            this.urlasientoniv2 = "~/images/asiento.png";
        }
        
    }
    ponerImagen2(){
        for(let i in this.Asientos){
            if(this.obtenercol1() == 4 && this.Asientos[i].nivel == 1){
              this.Asientos[i].urlimage = "~/images/asiento4.png";
              console.log("entra al nivel 1 - 4");
            } else if(this.obtenercol1() == 5 && this.Asientos[i].nivel == 1){
                this.Asientos[i].urlimage  = "~/images/asiento.png";
                console.log("entra al nivel 1 - 5");
            }

            if(this.obtenercol2() == 4 && this.Asientos[i].nivel == 2){
                this.Asientos[i].urlimage  = "~/images/asiento4.png";
                console.log("entra al nivel 2 - 4");
            } else if(this.obtenercol2() == 5 && this.Asientos[i].nivel == 2){
                console.log("entra al nivel 2 - 5");
                this.Asientos[i].urlimage  = "~/images/asiento.png";
            }
        }
    }
}