var app = new Vue({
    el:'#app',
    data:{
        arrayDatos:[],

       nombre:null,
       carro:null,
       tipo:null,
       lavado:false,
       brillo:false,
       poli:false,
       motriz:false,
       aceite:false,
       rpsto:null,
       total:0,
       obra1:null

    //    obra:null,
  
    },
    methods: {
        procesar:function(){ 
            if(this.tipo == "prefer"){
                this.limpiar = 20000;
                this.lucir = 45000;
                this.lujo = 19000;
                this.comple = 34000;
                this.todo = 40000;
                this.cambio = 87000;
                
            
                if(this.lavado){
                    this.total = this.total + this.limpiar - (this.limpiar * (10/100));                               
                }
                if(this.brillo){
                    this.total = this.total + this.lucir - (this.lucir * (10/100));           
                }
                if(this.poli){
                    this.total = this.total + this.lujo - (this.lujo * (10/100));           
                }
                
                if(this.motriz){
                    this.total = this.total + this.todo - (this.todo * (10/100));           
                }
                if(this.aceite){
                    this.total = this.total + this.cambio - (this.cambio * (10/100));           
                }
               
            }
            else
            { 
                if(this.tipo == "normal"){
                    this.limpiar = 20000;
                    this.lucir = 45000;
                    this.lujo = 19000;
                    this.comple = 34000;
                    this.todo = 40000;
                    this.cambio = 87000;
                    
                
                    if(this.lavado){
                        this.total = this.total + this.limpiar;                               
                    }
                    if(this.brillo){
                        this.total = this.total + this.lucir;           
                    }
                    if(this.poli){
                        this.total = this.total + this.lujo;           
                    }       
                    if(this.motriz){
                        this.total = this.total + this.todo;           
                    }
                    if(this.aceite){
                        this.total = this.total + this.cambio;           
                    }
                
                }
            } 
            this.arrayDatos.push({total:this.total, carro:this.carro, nombre:this.nombre, tipo:this.tipo, rpsto:this.rpsto, total1: + this.rpsto + this.total})

                this.lavado=false;
                this.brillo=false;
                this.poli=false;
                this.aceite=false;
                this.motriz=false;
                this.total=0;   
        }     
    },
})