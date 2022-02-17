var footballplayer = {
    //declaring object with name footballplayer and the type is var
    name: 'Abdul',
    //give it attribute name and the value is abdul
    height: '182',
    //give also attribute height and the value is 182
    output(){
        //create methode output in object footballplayer
        alert(`Mr ${this.name} is ${this.height} cm tall` )
        //the methode show the value inside attribute name and height
    }
};

footballplayer.output();
//calling the methode output from bject footballplayer