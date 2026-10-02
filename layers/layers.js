var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.554000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Highways_1 = new ol.format.GeoJSON();
var features_Highways_1 = format_Highways_1.readFeatures(json_Highways_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Highways_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Highways_1.addFeatures(features_Highways_1);
var lyr_Highways_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Highways_1, 
                style: style_Highways_1,
                popuplayertitle: 'Highways',
                interactive: true,
                title: '<img src="styles/legend/Highways_1.png" /> Highways'
            });
var format_Trails_2 = new ol.format.GeoJSON();
var features_Trails_2 = format_Trails_2.readFeatures(json_Trails_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trails_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trails_2.addFeatures(features_Trails_2);
var lyr_Trails_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trails_2, 
                style: style_Trails_2,
                popuplayertitle: 'Trails',
                interactive: true,
                title: '<img src="styles/legend/Trails_2.png" /> Trails'
            });
var format_TheoreticalRoutes_3 = new ol.format.GeoJSON();
var features_TheoreticalRoutes_3 = format_TheoreticalRoutes_3.readFeatures(json_TheoreticalRoutes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TheoreticalRoutes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TheoreticalRoutes_3.addFeatures(features_TheoreticalRoutes_3);
var lyr_TheoreticalRoutes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TheoreticalRoutes_3, 
                style: style_TheoreticalRoutes_3,
                popuplayertitle: 'Theoretical Routes',
                interactive: true,
                title: '<img src="styles/legend/TheoreticalRoutes_3.png" /> Theoretical Routes'
            });
var format_Burgers_4 = new ol.format.GeoJSON();
var features_Burgers_4 = format_Burgers_4.readFeatures(json_Burgers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Burgers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Burgers_4.addFeatures(features_Burgers_4);
var lyr_Burgers_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Burgers_4, 
                style: style_Burgers_4,
                popuplayertitle: 'Burgers',
                interactive: true,
                title: '<img src="styles/legend/Burgers_4.png" /> Burgers'
            });
var format_MoreFoods_5 = new ol.format.GeoJSON();
var features_MoreFoods_5 = format_MoreFoods_5.readFeatures(json_MoreFoods_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MoreFoods_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoreFoods_5.addFeatures(features_MoreFoods_5);
var lyr_MoreFoods_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoreFoods_5, 
                style: style_MoreFoods_5,
                popuplayertitle: 'More Foods',
                interactive: true,
                title: '<img src="styles/legend/MoreFoods_5.png" /> More Foods'
            });
var format_Parking_6 = new ol.format.GeoJSON();
var features_Parking_6 = format_Parking_6.readFeatures(json_Parking_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parking_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parking_6.addFeatures(features_Parking_6);
var lyr_Parking_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parking_6, 
                style: style_Parking_6,
                popuplayertitle: 'Parking',
                interactive: true,
                title: '<img src="styles/legend/Parking_6.png" /> Parking'
            });
var format_HikingDestinations_7 = new ol.format.GeoJSON();
var features_HikingDestinations_7 = format_HikingDestinations_7.readFeatures(json_HikingDestinations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HikingDestinations_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HikingDestinations_7.addFeatures(features_HikingDestinations_7);
var lyr_HikingDestinations_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HikingDestinations_7, 
                style: style_HikingDestinations_7,
                popuplayertitle: 'Hiking Destinations',
                interactive: true,
                title: '<img src="styles/legend/HikingDestinations_7.png" /> Hiking Destinations'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Highways_1.setVisible(true);lyr_Trails_2.setVisible(true);lyr_TheoreticalRoutes_3.setVisible(true);lyr_Burgers_4.setVisible(true);lyr_MoreFoods_5.setVisible(true);lyr_Parking_6.setVisible(true);lyr_HikingDestinations_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Highways_1,lyr_Trails_2,lyr_TheoreticalRoutes_3,lyr_Burgers_4,lyr_MoreFoods_5,lyr_Parking_6,lyr_HikingDestinations_7];
lyr_Highways_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Section': 'Section', 'layer': 'layer', 'path': 'path', });
lyr_Trails_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Section': 'Section', });
lyr_TheoreticalRoutes_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Burgers_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Address': 'Address', 'Price (~$)': 'Price (~$)', });
lyr_MoreFoods_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Address': 'Address', 'Price (~$)': 'Price (~$)', 'Food': 'Food', });
lyr_Parking_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Size': 'Size', });
lyr_HikingDestinations_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Difficulty': 'Difficulty', });
lyr_Highways_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Section': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Trails_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Section': 'TextEdit', });
lyr_TheoreticalRoutes_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Burgers_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'Price (~$)': 'TextEdit', });
lyr_MoreFoods_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'Price (~$)': 'TextEdit', 'Food': 'TextEdit', });
lyr_Parking_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Size': 'TextEdit', });
lyr_HikingDestinations_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Difficulty': 'TextEdit', });
lyr_Highways_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Section': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Trails_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Section': 'no label', });
lyr_TheoreticalRoutes_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Burgers_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Address': 'no label', 'Price (~$)': 'no label', });
lyr_MoreFoods_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Address': 'no label', 'Price (~$)': 'no label', 'Food': 'no label', });
lyr_Parking_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Size': 'no label', });
lyr_HikingDestinations_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Difficulty': 'no label', });
lyr_HikingDestinations_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});