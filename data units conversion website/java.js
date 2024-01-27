function convert() {
    var input_text=document.getElementById("inputtext").value;
    var output_text=document.getElementById("outputtext");
    var input_type=document.getElementById("inputtype").value;
    var output_type=document.getElementById("outputtype").value;

    if(input_type=="Byte"&& output_type=="Bit"){
        input_text = parseFloat(input_text);
        var x= input_text*8;
        output_text.value  = x;
    }else if(input_type=="Byte"&& output_type=="KiloByte"){
        input_text = parseFloat(input_text);
        var x= input_text /1000;
        output_text.value  = x;
    }else if(input_type=="Byte"&& output_type=="MegaByte"){
        input_text = parseFloat(input_text);
        var x= input_text/(1000**2);
        output_text.value  = x;
    }else if(input_type=="Byte"&& output_type=="GigaByte"){
        input_text = parseFloat(input_text);
        var x= input_text/(1000**3);
        output_text.value  = x;
    }else if(input_type=="Bit"&& output_type=="Byte"){
        input_text = parseFloat(input_text);
        var x= input_text/(1/8);
        output_text.value  = x;
    }else if(input_type=="Bit"&& output_type=="KiloByte"){
        input_text = parseFloat(input_text);
        var x= input_text  / (8*1000) ;
        output_text.value  = x;
    }else if(input_type=="Bit"&& output_type=="MegaByte"){
        input_text = parseFloat(input_text);
        var x= input_text /(8*(1000**2));
        output_text.value  = x;
    }else if(input_type=="Bit"&& output_type=="GigaByte"){
        input_text = parseFloat(input_text);
        var x= input_text/(8*(1000**3));
        output_text.value  = x;
    }else if(input_type=="KiloByte"&& output_type=="Byte"){
        input_text = parseFloat(input_text);
        var x= input_text*1000;
        output_text.value = x;
    }else if(input_type=="KiloByte"&& output_type=="Bit"){
        input_text = parseFloat(input_text);
        var x= input_text*(8*1000);
        output_text.value  = x;
    }else if(input_type=="KiloByte"&& output_type=="MegaByte"){
        input_text = parseFloat(input_text);
        var x= input_text / (1000);
        output_text.value  = x;
    }else if(input_type=="KiloByte"&& output_type=="GigaByte"){
        input_text = parseFloat(input_text);
        var x= input_text / (1000**2);
        output_text.value  = x;
    }else if(input_type=="MegaByte"&& output_type=="Byte"){
        input_text = parseFloat(input_text);
        var x= input_text* (1000**2);
        output_text.value  = x;
    }else if(input_type=="MegaByte"&& output_type=="Bit"){
        input_text = parseFloat(input_text);
        var x= input_text *(8*(1000**2));
        output_text.value  = x;
    }else if(input_type=="MegaByte"&& output_type=="KiloByte"){
        input_text = parseFloat(input_text);
        var x= input_text * (1000);
        output_text.value  = x;
    }else if(input_type=="MegaByte"&& output_type=="GigaByte"){
        input_text = parseFloat(input_text);
        var x= input_text / (1000);
        output_text.value  = x;
    }else if(input_type=="GigaByte"&& output_type=="Byte"){
        input_text = parseFloat(input_text);
        var x= input_text*(1000**3);
        output_text.value  = x;
    }else if(input_type=="GigaByte"&& output_type=="Bit"){
        input_text = parseFloat(input_text);
        var x= input_text*(8*(1000**3));
        output_text.value  = x;
    }else if(input_type=="GigaByte"&& output_type=="KiloByte"){
        input_text = parseFloat(input_text);
        var x= input_text * (1000**2);
        output_text.value  = x;
    }else if(input_type=="GigaByte"&& output_type=="MegaByte"){
        input_text = parseFloat(input_text);
        var x= input_text * (1000);
        output_text.value = x;
    }


}