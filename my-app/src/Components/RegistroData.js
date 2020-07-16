import React, {Component} from "react"
import FormularioDetalle from "./Components"



export default class RegistroData extends Component{
    constructor(){
        super();
        this.state = {
            arrayUsuario: []
        }
    }
    agregarUsuario(foto, nombre, habilidades, descripcion, pasatiempo){
        if(nombre !== "" && habilidades !== "" && descripcion !== "" && pasatiempo !== ""){

            console.clear();

            this.state({
                arrayUsuario:[
                    ...this.setState.arrayUsuario, {
                        foto:foto, nombre:nombre, habilidades:habilidades, descripcion:descripcion, pasatiempo:pasatiempo
                    
                    }                ]

            })
        }
        else{
            console.red(alert("Advertencia: No puede dejar campos vacios!!!"));
        }
    }

    updateUsuario(foto, nombre, habilidades, descripcion, pasatiempo, id){
        console.clear();

        let usuarioRegistrado = this.state.arrayUsuario.slice();

        usuarioRegistrado[id] = {foto:foto, nombre: nombre, habilidades:habilidades, descripcion:descripcion, pasatiempo:pasatiempo}

        this.setState(usuarioRegistrado);
    }

    deleteUsuario(index){
        console.clear();

        let arregloUsuario = this.state.arrayUsuario;
        let i = idUsuario.indexOf(index);

        if(i !== 1){
            arregloUsuario.splice(i,1);
            this.setState({arrayUsuario});
        }
    }

    render
}