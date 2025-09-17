var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': '',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SafetyVulnerabilityScore_1 = new ol.format.GeoJSON();
var features_SafetyVulnerabilityScore_1 = format_SafetyVulnerabilityScore_1.readFeatures(json_SafetyVulnerabilityScore_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SafetyVulnerabilityScore_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SafetyVulnerabilityScore_1.addFeatures(features_SafetyVulnerabilityScore_1);
var lyr_SafetyVulnerabilityScore_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SafetyVulnerabilityScore_1, 
                style: style_SafetyVulnerabilityScore_1,
                popuplayertitle: 'Safety Vulnerability Score',
                interactive: true,
                title: ''
            });
var format_CostEfficiencyrupeeskm_2 = new ol.format.GeoJSON();
var features_CostEfficiencyrupeeskm_2 = format_CostEfficiencyrupeeskm_2.readFeatures(json_CostEfficiencyrupeeskm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CostEfficiencyrupeeskm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CostEfficiencyrupeeskm_2.addFeatures(features_CostEfficiencyrupeeskm_2);
var lyr_CostEfficiencyrupeeskm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CostEfficiencyrupeeskm_2, 
                style: style_CostEfficiencyrupeeskm_2,
                popuplayertitle: 'Cost Efficiency (rupees/km)',
                interactive: true,
    title: '<b>Cost Efficiency (rupees/km)</b><br><i>Redder wards = more expensive to travel</i><br />\
    ' });
var format_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3 = new ol.format.GeoJSON();
var features_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3 = format_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3.readFeatures(json_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3.addFeatures(features_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3);
var lyr_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3, 
                style: style_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3,
                popuplayertitle: 'Metro stations where the road below gets flooded during rainy season',
                interactive: true,
                title: '<img src="styles/legend/Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3.png" /> Metro stations where the road below gets flooded during rainy season'
            });
var format_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4 = new ol.format.GeoJSON();
var features_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4 = format_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4.readFeatures(json_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4.addFeatures(features_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4);
var lyr_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4, 
                style: style_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4,
                popuplayertitle: 'Metro stations where the road below does NOT get flooded during rainy season',
                interactive: false,
                title: '<img src="styles/legend/MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4.png" /> Metro stations where the road below does NOT get flooded during rainy season'
            });
var format_Busstopswithaphysicalstructure_5 = new ol.format.GeoJSON();
var features_Busstopswithaphysicalstructure_5 = format_Busstopswithaphysicalstructure_5.readFeatures(json_Busstopswithaphysicalstructure_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Busstopswithaphysicalstructure_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Busstopswithaphysicalstructure_5.addFeatures(features_Busstopswithaphysicalstructure_5);
var lyr_Busstopswithaphysicalstructure_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Busstopswithaphysicalstructure_5, 
                style: style_Busstopswithaphysicalstructure_5,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/Busstopswithaphysicalstructure_5.png" /> Bus stops with a physical structure'
            });
var format_Busstopswithnophysicalstructure_6 = new ol.format.GeoJSON();
var features_Busstopswithnophysicalstructure_6 = format_Busstopswithnophysicalstructure_6.readFeatures(json_Busstopswithnophysicalstructure_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Busstopswithnophysicalstructure_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Busstopswithnophysicalstructure_6.addFeatures(features_Busstopswithnophysicalstructure_6);
var lyr_Busstopswithnophysicalstructure_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Busstopswithnophysicalstructure_6, 
                style: style_Busstopswithnophysicalstructure_6,
                popuplayertitle: '',
                interactive: false,
                title: '<img src="styles/legend/Busstopswithnophysicalstructure_6.png" /> Bus stops with no physical structure'
            });
var format_AutostandswhereautosDONOTuseelectricityandCNG_7 = new ol.format.GeoJSON();
var features_AutostandswhereautosDONOTuseelectricityandCNG_7 = format_AutostandswhereautosDONOTuseelectricityandCNG_7.readFeatures(json_AutostandswhereautosDONOTuseelectricityandCNG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AutostandswhereautosDONOTuseelectricityandCNG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutostandswhereautosDONOTuseelectricityandCNG_7.addFeatures(features_AutostandswhereautosDONOTuseelectricityandCNG_7);
var lyr_AutostandswhereautosDONOTuseelectricityandCNG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AutostandswhereautosDONOTuseelectricityandCNG_7, 
                style: style_AutostandswhereautosDONOTuseelectricityandCNG_7,
                popuplayertitle: 'Auto stands where autos DO NOT use electricity and CNG',
                interactive: false,
                title: '<img src="styles/legend/AutostandswhereautosDONOTuseelectricityandCNG_7.png" /> Auto stands where autos DO NOT use electricity and CNG'
            });
var format_AutostandswhereautosuseelectricityandCNG_8 = new ol.format.GeoJSON();
var features_AutostandswhereautosuseelectricityandCNG_8 = format_AutostandswhereautosuseelectricityandCNG_8.readFeatures(json_AutostandswhereautosuseelectricityandCNG_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AutostandswhereautosuseelectricityandCNG_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutostandswhereautosuseelectricityandCNG_8.addFeatures(features_AutostandswhereautosuseelectricityandCNG_8);
var lyr_AutostandswhereautosuseelectricityandCNG_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AutostandswhereautosuseelectricityandCNG_8, 
                style: style_AutostandswhereautosuseelectricityandCNG_8,
                popuplayertitle: 'Auto stands where autos use electricity and CNG',
                interactive: false,
                title: '<img src="styles/legend/AutostandswhereautosuseelectricityandCNG_8.png" /> Auto stands where autos use electricity and CNG'
            });
var group_Autostands = new ol.layer.Group({
                                layers: [lyr_AutostandswhereautosDONOTuseelectricityandCNG_7,lyr_AutostandswhereautosuseelectricityandCNG_8,],
                                fold: 'open',
                                title: 'Auto stands'});
var group_BusStops = new ol.layer.Group({
                                layers: [lyr_Busstopswithaphysicalstructure_5,lyr_Busstopswithnophysicalstructure_6,],
                                fold: 'open',
                                title: 'Bus Stops'});
var group_Metrostations = new ol.layer.Group({
                                layers: [lyr_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3,lyr_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4,],
                                fold: 'open',
                                title: 'Metro stations'});

lyr_OSMStandard_0.setVisible(true);lyr_SafetyVulnerabilityScore_1.setVisible(true);lyr_CostEfficiencyrupeeskm_2.setVisible(true);lyr_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3.setVisible(true);lyr_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4.setVisible(true);lyr_Busstopswithaphysicalstructure_5.setVisible(true);lyr_Busstopswithnophysicalstructure_6.setVisible(true);lyr_AutostandswhereautosDONOTuseelectricityandCNG_7.setVisible(true);lyr_AutostandswhereautosuseelectricityandCNG_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SafetyVulnerabilityScore_1,lyr_CostEfficiencyrupeeskm_2,group_Metrostations,group_BusStops,group_Autostands];
lyr_SafetyVulnerabilityScore_1.set('fieldAliases', {'Ward Name': 'Ward Name', 'WardNumber': 'WardNumber', 'roads_Accident_Flood_Percentage of flood-prone roads': 'Percentage of flood-prone roads', 'roads_Accident_Flood_Percentage of accident-prone roads': 'Percentage of accident-prone roads', });
lyr_CostEfficiencyrupeeskm_2.set('fieldAliases', {'Ward Name': 'Ward Name', 'WardNumber': 'WardNumber', 'Cost_Efficiency_with_Ranges_Cost Efficiency (Rs/km)': 'Cost Efficiency (Rs/km)', 'Cost_Efficiency_with_Ranges_Efficiency Range': 'Cost_Efficiency_with_Ranges_Efficiency Range', });
lyr_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3.set('fieldAliases', {'Ward Number': 'Ward Number', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4.set('fieldAliases', {'Ward Number': 'Ward Number', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Busstopswithaphysicalstructure_5.set('fieldAliases', {'Ward Number': 'Ward Number', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Busstopswithnophysicalstructure_6.set('fieldAliases', {'Ward Number': 'Ward Number', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_AutostandswhereautosDONOTuseelectricityandCNG_7.set('fieldAliases', {'Ward Number': 'Ward Number', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_AutostandswhereautosuseelectricityandCNG_8.set('fieldAliases', {'Ward Number': 'Ward Number', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SafetyVulnerabilityScore_1.set('fieldImages', {'Ward Name': 'TextEdit', 'WardNumber': 'TextEdit', 'roads_Accident_Flood_Percentage of flood-prone roads': 'TextEdit', 'roads_Accident_Flood_Percentage of accident-prone roads': 'TextEdit', });
lyr_CostEfficiencyrupeeskm_2.set('fieldImages', {'Ward Name': 'TextEdit', 'WardNumber': 'TextEdit', 'Cost_Efficiency_with_Ranges_Cost Efficiency (Rs/km)': 'TextEdit', 'Cost_Efficiency_with_Ranges_Efficiency Range': 'TextEdit', });
lyr_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3.set('fieldImages', {'Ward Number': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4.set('fieldImages', {'Ward Number': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Busstopswithaphysicalstructure_5.set('fieldImages', {'Ward Number': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Busstopswithnophysicalstructure_6.set('fieldImages', {'Ward Number': '', 'Latitude': '', 'Longitude': '', });
lyr_AutostandswhereautosDONOTuseelectricityandCNG_7.set('fieldImages', {'Ward Number': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_AutostandswhereautosuseelectricityandCNG_8.set('fieldImages', {'Ward Number': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SafetyVulnerabilityScore_1.set('fieldLabels', {'Ward Name': 'inline label - always visible', 'WardNumber': 'hidden field', 'roads_Accident_Flood_Percentage of flood-prone roads': 'inline label - visible with data', 'roads_Accident_Flood_Percentage of accident-prone roads': 'inline label - visible with data', });
lyr_CostEfficiencyrupeeskm_2.set('fieldLabels', {'Ward Name': 'inline label - visible with data', 'WardNumber': 'inline label - visible with data', 'Cost_Efficiency_with_Ranges_Cost Efficiency (Rs/km)': 'inline label - visible with data', 'Cost_Efficiency_with_Ranges_Efficiency Range': 'hidden field', });
lyr_Metrostationswheretheroadbelowgetsfloodedduringrainyseason_3.set('fieldLabels', {'Ward Number': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_MetrostationswheretheroadbelowdoesNOTgetfloodedduringrainyseason_4.set('fieldLabels', {'Ward Number': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Busstopswithaphysicalstructure_5.set('fieldLabels', {'Ward Number': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Busstopswithnophysicalstructure_6.set('fieldLabels', {'Ward Number': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_AutostandswhereautosDONOTuseelectricityandCNG_7.set('fieldLabels', {'Ward Number': 'no label', 'Latitude': 'hidden field', 'Longitude': 'no label', });
lyr_AutostandswhereautosuseelectricityandCNG_8.set('fieldLabels', {'Ward Number': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_AutostandswhereautosuseelectricityandCNG_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
