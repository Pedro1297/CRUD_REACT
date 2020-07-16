import React, {Component} from "react"
import logo from './logo.svg';

import './App.css';


export default class FormularioDetalle extends Component{
    constructor(){
        super();

        this.state = {
            foto : "",
            nombre: "",
            habilidades:  "",
            descripcion: "",
            pasatiempo: ""            
        }

    }

    agregarDatos(evt){
        evt.preventDefault()

        this.props.FormularioDetail(this.state.foto, 
            this.state.nombre, this.state.habilidades,
            this.state.description, this.state.pasatiempo);

            this.setState({
                foto: "",
                nombre: "",
                habilidades:"",
                description:"",
                pasatiempo:""

            });
    }
    updatefoto(evt){
        this.setState({
            foto: evt.target.value
        });
    }
    updateNombre(evt){
        this.setState({
            nombre: evt.target.value
        });
    }
    updateHabilidades(evt){
        this.setState({
            habilidades: evt.target.value
        });
    }
    updateDescripcion(evt){
        this.setState({
            description: evt.target.value
        });
    }
    updatePasatiempo(evt){
        this.setState({
            pasatiempo: evt.target.value
        });
    }

    render(){
        return(
            <form class="form-detalle" onSubmit = {e => this.agregarDatos(e)}>
                <div>

                    <div>
                        <label>Foto: </label>
                            <input 
                            name="Foto"
                            type="image"
                            className="Form-control"
                            value={this.state.foto}
                            onChange= {this.updatefoto.bind(this)}
                            />
                    </div>                       
                    
                    <br/>
                    <div>
                        <label>Nombre: </label>
                        <input
                            name="Nombre"
                            type="text"
                            className="form-control"
                            value = {this.state.nombre}
                           onChange = {this.updateNombre.bind(this)}
                        />
                    </div>
                        <br/>
                        <div>
                            <label>Habilidades</label>
                            <input
                                name="habilidades"
                                type="text"
                                className = "Form-control"
                                value = {this.state.habilidades}
                                onChange = {this.updateHabilidades.bind(this)}
                            />
                        </div>
                        <div>
                            <label>Descripcion</label>
                            <input
                                name="descripcion"
                                type="text"
                                className = "Form-controls"
                                value = {this.state.description}
                                onChange = {this.updateDescripcion.bind(this)}
                            />
                        </div>
                        <br/>
                        <div>
                            <label>Pasatiempo</label>
                            <input
                                name="pasatiempo"
                                type="text"
                                className="Form-Controls"
                                value = {this.state.pasatiempo}
                                onChange = {this.updatePasatiempo.bind(this)}
                            />
                        </div>
                        <br/>
                        <div className="stylo" style ={{marginTop:"10px"}}>
                            <button type="submit" className="btn primary"></button>
                        </div>

                </div>
              

            </form>

        )
        
    }
}

//export default FormularioDetalle;
