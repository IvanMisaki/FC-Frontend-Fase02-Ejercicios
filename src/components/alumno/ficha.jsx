import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Usuario } from './usuario';
import $ from 'jquery';

export function Ficha() {
    const { idAlumno } = useParams();

    useEffect(() => {
        var alu = idAlumno;
        llenarContenido(alu)
        Etiquetas();


    }, [idAlumno]);
    function Etiquetas(){
        //Funcion de completar - Ejercicio 7
        //console.log("Hola adentro 1")
        var list = [
            { value : 'ANGULAR', label : 'ANGULAR'},
            { value : 'C#', label : 'C#'},
            { value : 'FLUTTER', label : 'FLUTTER'},
            { value : 'GIT', label : 'GIT'},
            { value : 'HTML&CSS', label : 'HTML&CSS'},
            { value : 'JAVA', label : 'JAVA'},
            { value : 'JAVASCRIPT', label : 'JAVASCRIPT'},
            { value : 'PHP', label : 'PHP'},
            { value : 'PYTHON', label : 'PYTHON'},
            { value : 'REACT', label : 'REACT'},
            { value : 'SPRING', label : 'SPRING'},
            { value : 'SYMFONY', label : 'SYMFONY'},
            { value : 'TYPESCRIPT', label : 'TYPESCRIPT'}
        ];
        
        //$("#txtBuscarEtiqueta").autocomplete({    
        //    source: list,   
        //    select : function(event, ui){
        //        fn_agregar_etiqueta( ui.item.value );
        //    }, 
        //    minLength: 1 
        //});

        return false;
    }

    function llenarContenido(alu){

        var myArray = ["Álvaro Sánchez Monteagudo_Valencia_España_+34657852546_smontegudo@gmail.com_ANGULAR|REACT|HTML&CSS_BB_S_P", 
                        "Amparo Herra Climent_Sevilla_España_+34123456789_aherrera@gmail.com_FLUTTER|REACT_BB_N_R", 
                        "Ana Gutierrez Lozano_Madrid_España_+34987541236_agutierrez@gmail.com_REACT|SYMFONY_BB_S_P", 
                        "Antonio Miguel Lacunza_Barcelona_España_+34758426985_amiguel@gmail.com_ANGULAR|REACT_BB_N_R", 
                        "Antonio Delgado Jimeno_Oviedo_España_+34542874517_adelgado@gmail.com_ANGULAR|HTML&CSS_BB_N_R", 
                        "Belén Jerez Rivera_Jaen_España_+34968574215_bjerez@gmail.com_HTML&CSS_BB_S_P", 
                        "Carla Barroso Soriano_Gijón_España_+34485926157_cbarroso@gmail.com_REACT_BB_N_R", 
                        "Carlos Yuste Guerrero_Valencia_España_+34487596854_cyuste@gmail.com_ANGULAR_BB_N_P", 
                        "Carmina Pérez Lopez_Sevilla_España_+34154785426_cperez@gmail.com_FLUTTER_BB_S_R", 
                        "Iker Casillas_Madrid_España_+34154859263_ikasillas@gmail.com_FLUTTER|REACT_BB_S_P"]
        
        for (var i = 0; i < myArray.length; i++) {
            if(i+1 == alu){
                var nombre = myArray[i].split('_')[0]
                var ciudad = myArray[i].split('_')[1]
                var pais = myArray[i].split('_')[2]
                var telefono = myArray[i].split('_')[3]
                var email = myArray[i].split('_')[4]
                var etiqueta = myArray[i].split('_')[5]
                var etiqueta2 = myArray[i].split('_')[6]
                var traslado = myArray[i].split('_')[7]=="S"?"Sí":"No";
                var presencialidad = myArray[i].split('_')[8]=="P"?"Presencial":"Remoto";
                $("#lblNombre").text(nombre)
                $("#lblCiudad").text(ciudad)
                $("#lblPais").text(pais)
                $("#txtAlumno").val(nombre)
                $("#txtTelefono").val(nombre)
                $("#txtEmail").val(email)
                $("#ddlPais").text(pais)
                $("#ddlCiudad").text(ciudad)
                $("#ddlTraslado").text(traslado)
                $("#ddlPresencialidad").text(presencialidad)

                var etiquetas = myArray[i].split('_')[5].split('|')
                var html_etiquetas = '';
                for(var j=0;j<etiquetas.length;j++){
                    var idd = etiquetas[j].replace('&','')
                    console.log(idd)
                    html_etiquetas=html_etiquetas+`<div id='`+idd+`' style='width: min-content; background: #e6e6ea; margin: 0px 5px 0px 0px; padding: 0px 5px 0px 5px; border-radius: 10px; font-size: 15px; display:flex;'>`+
                                                        `<div>`+
                                                        etiquetas[j]+
                                                        `</div>`+
                                                        `<div style="cursor: pointer;" onclick="return fn_eliminar_etiqueta('`+idd+`');">`+
                                                            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">'+
                                                            '<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>'+
                                                            '</svg>'+
                                                        `</div>`+
                                                            `</div>`;
                }
                $("#dvEtiquetas").append("<div id='dvEtiquetasAdd' style='display:flex; flex-flow: wrap;'>"+html_etiquetas+"</div>")
            }
        }
        return false;
    }

    function fn_eliminar_etiqueta(id){
        $("#"+id).remove();
        return false;
    }

    function fn_agregar_etiqueta(id){
        console.log("Aqui")
        console.log("id = "+id)
        var idd = id.replace('&','')
                    console.log(idd)
                    var html_etiquetas=`<div id='`+idd+`' style='width: min-content; background: #e6e6ea; margin: 0px 5px 0px 0px; padding: 0px 5px 0px 5px; border-radius: 10px; font-size: 15px; display:flex;'>`+
                                                        `<div>`+
                                                            id+
                                                        `</div>`+
                                                        `<div style="cursor: pointer;" onclick="return fn_eliminar_etiqueta('`+idd+`');">`+
                                                            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">'+
                                                            '<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>'+
                                                            '</svg>'+
                                                        `</div>`+
                                                            `</div>`;
                $("#dvEtiquetasAdd").append(html_etiquetas)
                //$("#txtBuscarEtiqueta").val("");
                //$("#txtBuscarEtiqueta").focus();
                //$("#txtBuscarEtiqueta").text("");
                //$("#txtBuscarEtiqueta").value("");

        return false;
    }
    

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <Link to={"/alumnos"} style={{textDecoration:'none'}}>
                        <div style={{fontSize:'large', cursor:'pointer', color:'black'}}>
                            <i className="bi bi-arrow-left"></i>
                            <span>volver</span>
                        </div>
                    </Link>
                    
                </div>
                <div className='col'>
                    <Usuario></Usuario>
                </div>
            </div>
            
            {/**Contenido */}
            <div>
                <br/>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div style={{border:'solid 1px #e6e6ea', borderRadius: '20px', 
                            background: 'white', overflow: 'auto',
                            height: 'auto', padding: '20px'}}>
                                <div style={{display: 'flex'}}>
                                    <div id="fotoAlumno" style={{width:'100px', height:'100px', borderRadius: '20px',backgroundColor: '#e6e6ea'}}>
                                        <img id="img_foto" src={require('../../images/fotos/'+idAlumno+'.png')}  
                                                alt="1" width="90px" height="90px" 
                                                    style={{margin: '5px', borderRadius: '20px'}} />

                                    </div>
                                    <div style={{padding:'20px'}}>
                                        <div>
                                            <label style={{fontSize: 'larger', fontWeight: 'bold'}} id="lblNombre" htmlFor="">Nombre</label>
                                        </div>
                                        <div style={{color: '#a6a9b4'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            </svg>
                                            <label id="lblCiudad">valencia</label>
                                            <label> | </label>
                                            <label id="lblPais">valencia</label>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Nombre">Nombre y Apellidos</label>
                                    </div>
                                    <div>
                                        <input id="txtAlumno" readOnly style={{background:'#f8f8f9',border: 'none'}} type="text" className="form-control" />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Telefono">N° Teléfono</label>
                                    </div>
                                    <div>
                                        <input id="txtTelefono" readOnly style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Email">Email</label>
                                    </div>
                                    <div>
                                        <input id="txtEmail" readOnly style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Pais">Pais</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            <button id="ddlPais" type="button" className="btn" style={{background:'#f8f8f9', border: 'none',width: '100%',textAlign: 'left'}}>Action</button>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                              <span className="sr-only"></span>
                                            </button>
                                          </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Ciudad">Ciudad</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            <button id="ddlCiudad" type="button" className="btn" style={{background:'#f8f8f9', border: 'none',width: '100%',textAlign: 'left'}}>Action</button>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                              <span className="sr-only"></span>
                                            </button>
                                          </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Traslado">Traslado</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            <button id="ddlTraslado" type="button" className="btn" style={{background:'#f8f8f9', border: 'none',width: '100%',textAlign: 'left'}}>Action</button>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                              <span className="sr-only"></span>
                                            </button>
                                          </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Ciudad">Presencialidad</label>
                                    </div>
                                    <div>
                                        <div style={{width: '100%'}} className="btn-group">
                                            <button id="ddlPresencialidad" type="button" className="btn" style={{background:'#f8f8f9', border: 'none',width: '100%',textAlign: 'left'}}>Action</button>
                                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                              <span className="sr-only"></span>
                                            </button>
                                          </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label style={{fontWeight: 'bold'}} htmlFor="Documento CV">Documento CV</label>
                                    </div>
                                    <div>
                                        <button type="button" style={{background: '#a5a8b3'}} className="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                            <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                          </svg> <label htmlFor="">Subir de nuevo</label></button>
                                          
                                        <button type="button" className="btn" style={{border: 'solid 1px #a5a8b3'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                          </svg> <label htmlFor="">Borrar</label></button>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div>
                                    <label style={{fontWeight: 'bold'}} htmlFor="Etiquetas">Etiquetas</label>
                                </div>
                                <div>
                                    <div style={{width: '100%'}} className="btn-group">
                                        <div style={{background:'#f8f8f9', width: '100%', textAlign: 'left'}}>
                                            <input id="txtBuscarEtiqueta" style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" placeholder="Escribe para buscar..." />
                                        </div>
                                        <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                                          <span className="sr-only"></span>
                                        </button>
                                      </div>
                                </div>
                                <div id="dvEtiquetas">

                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-8">
                            <embed id="mbPdf" src={require('../../images/pdfs/'+idAlumno+'.pdf')}
                            type="application/pdf" width="100%" height="600px" style={{borderRadius: '20px'}} />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
