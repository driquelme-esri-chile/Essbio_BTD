//Cargando librerias generales
require([
    
    "esri/Map",
    "esri/WebScene",
    "esri/views/SceneView",
    "esri/layers/SceneLayer",

    "esri/widgets/Search",
    "esri/widgets/BasemapGallery",
    "esri/widgets/LayerList",
    "esri/widgets/DirectLineMeasurement3D",
    "esri/widgets/AreaMeasurement3D",
    "esri/widgets/Daylight",
    "esri/widgets/LineOfSight",
    "esri/widgets/Expand"
    ],function( Map,
            SceneView, 
            Search,
            BasemapGallery,
            LayerList, 
            DirectLineMeasurement3D, 
            AreaMeasurement3D, 
            Daylight, 
            LineOfSight, 
            Expand){

//Cargando mapa y su visualizacion

        var map = new Map({
            basemap: "streets-navigation-vector",
            ground: "world-elevation",
        
        });
//cargando el contenedor HTML, Mapa, posicion y zoom del mapa 
        var view = new SceneView({
            container: "viewDiv",
            map: map,
            camera: {
                position: [ -73.065129,-36.800883, 27000], //Position to view from
                tilt: 0,
                heading:0
            }
        });

        
//Setenemos widget de busqueda 

        const searchWidget = new Search({
            view: view
        });

//Seteamos el Layer que usaremos

        //var sceneLayer = new SceneLayer({
        //  url: "https://tiles.arcgis.com/tiles/oPre3pOfRfefL8y0/arcgis/rest/services/swissbuildings3D/SceneServer"
          //portalItem: {id: ""}
        
        //});

//comenzamos a setear los Widgets

        var layerList = new LayerList({
            view: view,
        });
        var medirlinea = new DirectLineMeasurement3D({
            view: view,
            container: document.createElement("div")     
        });
        var medirarea = new AreaMeasurement3D({
            view: view,
            container: document.createElement("div")
        });
        var ambiente = new Daylight({
            view: view
        });
        var analisis = new LineOfSight({
            view: view
        });
        var basemapGallery = new BasemapGallery({
            view: view
        });

//Modificamos los Iconos de los Widgets

        var medida = new Expand({
            expandIconClass: "esri-icon-measure-line",
            view: view,
            content: medirlinea
        });
        var area = new Expand({
            expandIconClass: "esri-icon-measure-area",
            view: view,
            content: medirarea
        });
        var luzsol = new Expand({
            expandIconClass: "esri-icon-environment-settings",
            view: view,
            content: ambiente
        });
        var lineavision = new Expand({
            expandIconClass: "esri-icon-hollow-eye",
            view: view,
            content: analisis
        });
        var Leyenda = new Expand({
            expandIconClass: "esri-icon-layer-list",
            view: view,
            content: layerList
        });



//Incluimos los Layers y widgets al mapa 
        view.ui.add(searchWidget, "top-right");
        view.ui.add(medida, "top-right");
        view.ui.add(area, "top-right");
        view.ui.add(luzsol, "top-right");
        view.ui.add(lineavision, "top-right");
        view.ui.add(Leyenda, "top-left");
        map.add(sceneLayer);
        

// Adicional... boton que permite que el mapa viaje de un punto a otro 

        var button = document.getElementById('testButton');
        button.addEventListener('click', doSomething_Click);
        function doSomething_Click() {
          
            view.goTo({
                zoom: 17,
                center:[-74.0329402, 4.7008247],
                heading:0
            });
        }

        var button = document.getElementById('testButton2');
        button.addEventListener('click', doSomething_Click2);
        function doSomething_Click2() {
          
            view.goTo({
                zoom: 17,
                center:[7.4480310018992295,46.94971909218679],
                heading:0
            });
        }

        var button = document.getElementById('testButton3');
        button.addEventListener('click', doSomething_Click3);
        function doSomething_Click3() {
          
            view.goTo({
                zoom: 17,
                center:[-70.65788988400693, -33.442008261193514],
                heading:0
            });
        }
      }); 
