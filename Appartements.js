import React, { Component } from 'react';
import './Appartements.scss';
import 'bootstrap/dist/css/bootstrap.css';
import appart1 from '../Images/appart1.png';
import appart2 from '../Images/appart2.png';
import appart3 from '../Images/appart3.png';
import appart4 from '../Images/appart4.png';
import appart5 from '../Images/appart5.png';
import appart6 from '../Images/appart6.png';

class Appartement extends Component{
    render(){
        return <div className="col-lg-3 col-md-5 col-8 appart">
        <img src={this.props.image} className="ImgAppartements" onMouseOver={ (e) => this.update(e) } onMouseOut={ (e) => this.update2(e) }/>
        <h2 className="AppartName">{this.props.address}</h2>
        <p className="AppartPlace">{this.props.city}/{this.props.state}</p>
        <p className="AppartPrice">{this.props.price} €</p>
        <p className="AppartInfo">{this.props.squareFit} Sq Ft ● {this.props.bedrooms} Bedrooms ● {this.props.bathrooms} Bathroom</p>
    </div>;
    }
    update(e){
        var img = e.target;
        img.parentNode.classList.add("grand");
    }
    update2(e){
        var img = e.target;
        if(img.parentNode.classList.contains("grand")){
            img.parentNode.classList.remove("grand")
        }
    }
}

class Appartements extends Component{
    constructor(){
        super();
        this.state = {};
        this.state.data = null;
        this.state.page = 0;
    }
    componentDidMount(){
        this.appelWS(this.state.page);
    }
    appelWS(page){
        fetch("http://92.222.69.104/appartement/all?size=6&page="+page)
        .then((d)=> d.json())
        .then((data)=> this.appartloaded(data))
    }
    appartloaded(data){
        console.log(data.content);
        this.setState({"data" : data});
    }
    addAppart(){
        this.setState({page : this.state.page+1});
        this.appelWS(this.state.page+1);
    }
    render(){
        if (this.state.data){
            var content = this.state.data.content;
            if(content){
        return<div id="Appartements" >
                <div className="container-fluid">
                    <div className="row mx-auto">
                    {content.map((item,i)=> 
                        <Appartement key={i} squareFit={item.squareFit} bedrooms={item.nbBedRoom} bathrooms={item.nbBathRoom} image={item.img} city={item.city} state={item.state} address={item.address} price={item.dollar*0.89}></Appartement>
                    )}
                    </div>
                </div>
                <button className="btn" onClick={()=> this.addAppart()}>all properties</button>
            </div>;}else{
                return <div>Erreur</div>
            }
        }else {
            return (
                <div className="App">
                    En cours de chargement ...
                </div>
            );
            }
        }
        
        
}
export default Appartements;