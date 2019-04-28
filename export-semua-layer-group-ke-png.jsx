var destFolder = Folder.selectDialog( "Silahkan Pilih foldernya..");
    if (destFolder == null)
    {
     throw "Batal...";
    }

var win = new Window("window{text:'Lagi prosees, tunggu...',bounds:[100,100,400,200],bar:Progressbar{bounds:[20,50,280,61] , value:0,maxvalue:100}};");
win.namaFile = win.add ('statictext {text: "Nama File: ", characters: 10, justify: "center"}');
win.testTeks  = win.add ('statictext {bounds:[10,10,300,50], text:"Loading...", justify:"center"}');    
win.show();

var doc = app.activeDocument;
for(var i = 0 ; i < doc.layers.length-1; i++){
    var namaFilenya = doc.layers[i].name;
    win.bar.value = (i+1)/(doc.layers.length-1)*100;
    win.testTeks.text =  namaFilenya+".png";
    SavePNG(namaFilenya+".png");
    doc.layers[i].visible = false;    
}
win.close();
alert('Selesai...');

//kembalikan hideLayernya
for(var i = 0 ; i < doc.layers.length-1; i++){
    var namaFilenya = doc.layers[i].name;
    doc.layers[i].visible = true;
}

function SavePNG(destFileName){
  var sfw = new ExportOptionsSaveForWeb();
      sfw.format = SaveDocumentType.PNG;
      sfw.PNG8 = false; // use PNG-24
      sfw.transparency = true;
      app.activeDocument.exportDocument(new File(destFolder + "/" + destFileName), ExportType.SAVEFORWEB, sfw);
}
