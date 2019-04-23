

tampilkanKembali();


//~ var destFolder = Folder.selectDialog( "Silahkan Pilih foldernya..");
//~     if (destFolder == null)
//~     {
//~       throw "";
//~     }

//~ for (i = 5; i > 0; i--) {
//~    var colors = app.activeDocument.layerSets.getByName("mockup "+i);
//~    
//~    SavePNG("mockup "+i+".png");
//~    
//~    colors.visible = false;
//~ }




function SavePNG(destFileName){
  var sfw = new ExportOptionsSaveForWeb();
      sfw.format = SaveDocumentType.PNG;
      sfw.PNG8 = false; // use PNG-24
      sfw.transparency = true; 
      app.activeDocument.exportDocument(new File(destFolder + "/" + destFileName), ExportType.SAVEFORWEB, sfw);
}


function tampilkanKembali(){
var doc = app.activeDocument;
for(var i = 0 ; i < doc.layers.length;i++){
    doc.layers[i].visible = true
    var xx = doc.layers[i].name;
    alert(xx);
}    
    }
