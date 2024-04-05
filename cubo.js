function date_time(id){
    fecha = new Date;
    h = fecha.getHours();
    if(h<10){
        h = "0" + h;
    }
    m = fecha.getMinutes();
    if(m<10){
        m = "0" + m;
    }
    s = fecha.getSeconds();
    if(s<10){
        s = "0" + s;
    }

    document.getElementById("s").innerHTML = ''+s;
    document.getElementById("m").innerHTML = ''+m;
    document.getElementById("h").innerHTML = ''+h;
    setTimeout('date_time("'+"s"+'");','1000');
    return true;
}
window.onload = date_time('s');