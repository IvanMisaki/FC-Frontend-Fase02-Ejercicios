import React, {useEffect } from 'react'
import $ from 'jquery';

export function Contenido() {
    
    useEffect(() => {
        //Cabecera
        //Contenido
        $('th').click(function() {
            var table = $(this).parents('table').eq(0)
            var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
            this.asc = !this.asc
            if (!this.asc) {
            rows = rows.reverse()
            }
            for (var i = 0; i < rows.length; i++) {
            table.append(rows[i])
            }
            setIcon($(this), this.asc);
        })

        //Llenar tabla
        console.log("Hola")
        var myArray = ["Álvaro Sánchez Monteagudo_Valencia_España_+34657852546_smontegudo@gmail.com_ANGULAR|REACT|HTML&CSS_BB", 
                            "Amparo Herra Climent_Sevilla_España_+34123456789_aherrera@gmail.com_FLUTTER|REACT_BB", 
                            "Ana Gutierrez Lozano_Madrid_España_+34987541236_agutierrez@gmail.com_REACT|SYMFONY_BB", 
                            "Antonio Miguel Lacunza_Barcelona_España_+34758426985_amiguel@gmail.com_ANGULAR|REACT_BB", 
                            "Antonio Delgado Jimeno_Oviedo_España_+34542874517_adelgado@gmail.com_ANGULAR|HTML&CSS_BB", 
                            "Belén Jerez Rivera_Jaen_España_+34968574215_bjerez@gmail.com_HTML&CSS_BB", 
                            "Carla Barroso Soriano_Gijón_España_+34485926157_cbarroso@gmail.com_REACT_BB", 
                            "Carlos Yuste Guerrero_Valencia_España_+34487596854_cyuste@gmail.com_ANGULAR_BB", 
                            "Carmina Pérez Lopez_Sevilla_España_+34154785426_cperez@gmail.com_FLUTTER_BB", 
                            "Iker Casillas_Madrid_España_+34154859263_ikasillas@gmail.com_FLUTTER|REACT_BB"];

        console.log("Hola 2")

        for (var i = 0; i < myArray.length; i++){
            console.log("Hola 3"+i)
            console.log(myArray[i].split('_')[5])
                var etiquetas = myArray[i].split('_')[5].split('|')
                var html_etiquetas = '';
                for(var j=0;j<etiquetas.length;j++){
                    html_etiquetas=html_etiquetas+"<div style='width: min-content; background: #32d4a4; margin: 0px 5px 0px 0px; color: white; padding: 0px 5px 0px 5px; border-radius: 5px; font-size: 15px;'>"+
                                                    etiquetas[j]+
                                                    "</div>";
                }

            var alu = i+1;
            var usr = 1//en duro
            $("#idBody").append("<tr class='sombrear' style='cursor:pointer;' onclick='return fn_ficha("+usr+", "+alu+")'>"
                                    +"<td>" + myArray[i].split('_')[0] + "</td>"
                                    +"<td>" + myArray[i].split('_')[1] + "</td>"
                                    +"<td>" + myArray[i].split('_')[2] + "</td>"
                                    +"<td>" + myArray[i].split('_')[3] + "</td>"
                                    +"<td>" + myArray[i].split('_')[4] + "</td>"
                                    +"<td style='display:none'>" + myArray[i].split('_')[5] + "</td>"
                                    +"<td><div style='display: flex;'>" + html_etiquetas + "</div></td>"
                                    +"<td style='display:none;'>" + "<button onclick='return fn_ficha("+usr+", "+alu+")' type='button' class='btn btn-info'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-search' viewBox='0 0 16 16'> <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/> <\/svg> <label for=''>Ficha</label><\/button>" + "</td>"
                                    +"</tr>");
            }
            return false;

      });

      function comparer(index) {
        return function(a, b) {
        var valA = getCellValue(a, index),
            valB = getCellValue(b, index)
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
        }
    }

    function getCellValue(row, index) {
        return $(row).children('td').eq(index).html()
    }

    function setIcon(element, asc) {
        $("th").each(function(index) {
        $(this).removeClass("sorting");
        $(this).removeClass("asc");
        $(this).removeClass("desc");
        });
        element.addClass("sorting");
        if (asc) element.addClass("asc");
        else element.addClass("desc");
    }

      function fn_Buscar(){

        var texto = $("#txtAlumno").val().toLowerCase();

        $("#idBody").html("");
        
        var myArray = ["Álvaro Sánchez Monteagudo_Valencia_España_+34657852546_smontegudo@gmail.com_ANGULAR|REACT|HTML&CSS_BB", 
                        "Amparo Herra Climent_Sevilla_España_+34123456789_aherrera@gmail.com_FLUTTER|REACT_BB", 
                        "Ana Gutierrez Lozano_Madrid_España_+34987541236_agutierrez@gmail.com_REACT|SYMFONY_BB", 
                        "Antonio Miguel Lacunza_Barcelona_España_+34758426985_amiguel@gmail.com_ANGULAR|REACT_BB", 
                        "Antonio Delgado Jimeno_Oviedo_España_+34542874517_adelgado@gmail.com_ANGULAR|HTML&CSS_BB", 
                        "Belén Jerez Rivera_Jaen_España_+34968574215_bjerez@gmail.com_HTML&CSS_BB", 
                        "Carla Barroso Soriano_Gijón_España_+34485926157_cbarroso@gmail.com_REACT_BB", 
                        "Carlos Yuste Guerrero_Valencia_España_+34487596854_cyuste@gmail.com_ANGULAR_BB", 
                        "Carmina Pérez Lopez_Sevilla_España_+34154785426_cperez@gmail.com_FLUTTER_BB", 
                        "Iker Casillas_Madrid_España_+34154859263_ikasillas@gmail.com_FLUTTER|REACT_BB"]


        
        for (var i = 0; i < myArray.length; i++) {

            if(myArray[i].toLowerCase().indexOf(texto) > -1){

                var etiquetas = myArray[i].split('_')[5].split('|')
                var html_etiquetas = '';
                for(var j=0;j<etiquetas.length;j++){
                    html_etiquetas=html_etiquetas+"<div style='width: min-content; background: #32d4a4; margin: 0px 5px 0px 0px; color: white; padding: 0px 5px 0px 5px; border-radius: 5px; font-size: 15px;'>"+
                                                    etiquetas[j]+
                                                    "</div>";
                }

                var usr = 1;//en duro
                var alu = i+1;
                $("#idBody").append("<tr class='sombrear' style='cursor:pointer;' onclick='return fn_ficha("+usr+", "+alu+")'>"
                                +"<td>" + myArray[i].split('_')[0] + "</td>"
                                +"<td>" + myArray[i].split('_')[1] + "</td>"
                                +"<td>" + myArray[i].split('_')[2] + "</td>"
                                +"<td>" + myArray[i].split('_')[3] + "</td>"
                                +"<td>" + myArray[i].split('_')[4] + "</td>"
                                +"<td style='display:none'>" + myArray[i].split('_')[5] + "</td>"
                                +"<td><div style='display: flex;'>" + html_etiquetas + "</div></td>"
                                +"<td style='display:none;'>" + "<button onclick='return fn_ficha("+usr+", "+alu+")' type='button' class='btn btn-info'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-search' viewBox='0 0 16 16'> <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/> <\/svg> <label for=''>Ficha</label><\/button>" + "</td>"
                                +"</tr>");
            }
        }

        return false;
    }

    function fn_ficha(usr, alu){
        alert("Holii")
        //window.location.href = "ficha.html?usr="+usr+"&alu="+alu;
        this.context.router.transitionTo("/");
        return false;
    }

    return (
        <div>
            <div className="container">
                <br/>
                <br/>
                <div className="row">
                    <div className="form-group col-sm-12 col-md-6">
                        <table style={{width:'100%'}}>
                            <tbody>
                                <tr>
                                    <td>
                                        <label 
                                            style={{fontWeight:'bold', paddingRight:'20px'}} 
                                            htmlFor="exampleInputEmail1">Alumnos</label></td>
                                    <td>
                                        <input id="txtAlumno" 
                                        onKeyUp={() => fn_Buscar()}  
                                        placeholder='Buscar por Nombre, Email o Palabra clave...' 
                                        style={{background:'#e6e6ea'}} type="text" className="form-control" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-12 col-md-6"></div>
                </div>
                
                <br/>
                <div className="panel panel-default">
                    <div className="panel-body"
                    style={{border:'solid 1px #e6e6ea', borderRadius:'20px', background:'white', overflow:'auto'}}>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>CIUDAD</th>
                            <th>PAIS</th>
                            <th>TELEFONO</th>
                            <th>CORREO ELECTRÓNICO</th>
                            <th>ETIQUETAS</th>
                            <th style={{display:'none'}}>ETIQUETAS oculto</th>
                            <th style={{display:'none'}}>DETALLE</th>
                        </tr>
                        </thead>
                        <tbody id="idBody">
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
