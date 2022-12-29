import React from 'react';
import Perro from '../assets/img/Perro.jpg'
import Gato from '../assets/img/Gato.jpg'
import Leon from '../assets/img/Leon.jpg'


    const steps = [
        {
            id:'0',
            message: 'Welcome to ChatBot,¿What is your Name?',
            trigger:'1'
        },
        {
            id:'1',
            user:true,
            trigger:'2'
        },
        {
            id:'2',
            message:'Hi {previousValue},Elige un Tipo De Foto',
            trigger:'3'
        },
        {
            id:'3',
            options:[
                {value:'Perro', label:'Perros',trigger:'4'},
                {value:'Gato', label:'Gatos',trigger:'5'},
                {value:'Leon', label:'Leon',trigger:'6'},
            ],

        },
        {
            id:'4',
            component:(
                <img src={Perro}/>
            )
        },
        {
            id:'5',
            component:(
                <img src={Gato}/>
            )
        },
        {
            id:'6',
            component:(
                <img src={Leon}/>
            )
        }
    ];
    
export default steps;