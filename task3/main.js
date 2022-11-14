class Messages {
    gettime() {
       let now = new Date();
       return `${now.getHours()}:${now.getMinutes()}`
   }
   constructor(author,text) {
     this.author = author;
     this.time =this.gettime()
     this.text=text;
     
   }
    toString(author,time,text) {
       let x=toString(this.author)+toString(this.time)+toString(this.text)
   }
   toHTML(){
       let x=`<p>${this.time} ${this.author}: ${this.text}</ p>`
   }
 }
 let msj=[];
///////
class Messenger extends Messages{
   
   constructor(author,time,text){
       super(author,time,text)
   }
   send(author, text) {
       var mesaj=new Messages(author,text);
      
       
       msj.push(mesaj)
       
   }
   show_history() {
      msj.forEach(element => {
       console.log(element.time+" "+ element.author+ " " +element.text)
      });
   }
}
let messenger = new Messenger();
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()



let senderName=document.querySelector('.forname');
let senderText=document.querySelector('.fortxt');
let history=document.querySelector('.history')
let sendButton=document.querySelector('button');
let toadd=document.querySelector('.howw');

sendButton.addEventListener('click',function(x){
    x.preventDefault();
     let senderName=document.querySelector('.forname').value;
    let  senderText=document.querySelector('.fortxt').value;
    let messenger = new Messenger();
    messenger.send(senderName,senderText)

    msj.forEach(element => {
        let x=element['author'];
        let y=element['time'];
        let z=element['text'];
        let full=`${x}  ${z} date:${y} </br>`
        let mini=`${y}`
        toadd.innerHTML+=full
        history.innerHTML
        msj=[];

        
    });
   
    
    
    
    
   
    
    
    

})