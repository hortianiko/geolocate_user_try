var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_varos_1 = new ol.format.GeoJSON();
var features_varos_1 = format_varos_1.readFeatures(json_varos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_varos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_varos_1.addFeatures(features_varos_1);
var lyr_varos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_varos_1, 
                style: style_varos_1,
                popuplayertitle: "varos",
                interactive: true,
                title: '<img src="styles/legend/varos_1.png" /> varos'
            });
var format_gis_osm_water_a_free_1_2 = new ol.format.GeoJSON();
var features_gis_osm_water_a_free_1_2 = format_gis_osm_water_a_free_1_2.readFeatures(json_gis_osm_water_a_free_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gis_osm_water_a_free_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gis_osm_water_a_free_1_2.addFeatures(features_gis_osm_water_a_free_1_2);
var lyr_gis_osm_water_a_free_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gis_osm_water_a_free_1_2, 
                style: style_gis_osm_water_a_free_1_2,
                popuplayertitle: "gis_osm_water_a_free_1",
                interactive: true,
                title: '<img src="styles/legend/gis_osm_water_a_free_1_2.png" /> gis_osm_water_a_free_1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_varos_1.setVisible(true);lyr_gis_osm_water_a_free_1_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_varos_1,lyr_gis_osm_water_a_free_1_2];
lyr_varos_1.set('fieldAliases', {'NEV': 'NEV', 'LAKO': 'LAKO', });
lyr_gis_osm_water_a_free_1_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_varos_1.set('fieldImages', {'NEV': 'TextEdit', 'LAKO': 'Range', });
lyr_gis_osm_water_a_free_1_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_varos_1.set('fieldLabels', {'NEV': 'inline label - always visible', 'LAKO': 'inline label - always visible', });
lyr_gis_osm_water_a_free_1_2.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_gis_osm_water_a_free_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});