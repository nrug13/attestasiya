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