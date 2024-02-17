var wms_layers = [];

var format_RT01_0 = new ol.format.GeoJSON();
var features_RT01_0 = format_RT01_0.readFeatures(json_RT01_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT01_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT01_0.addFeatures(features_RT01_0);
var lyr_RT01_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RT01_0, 
                style: style_RT01_0,
                popuplayertitle: "RT 01",
                interactive: true,
                title: '<img src="styles/legend/RT01_0.png" /> RT 01'
            });
var format_RT02_1 = new ol.format.GeoJSON();
var features_RT02_1 = format_RT02_1.readFeatures(json_RT02_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT02_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT02_1.addFeatures(features_RT02_1);
var lyr_RT02_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RT02_1, 
                style: style_RT02_1,
                popuplayertitle: "RT 02",
                interactive: true,
                title: '<img src="styles/legend/RT02_1.png" /> RT 02'
            });
var format_RT03_2 = new ol.format.GeoJSON();
var features_RT03_2 = format_RT03_2.readFeatures(json_RT03_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT03_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT03_2.addFeatures(features_RT03_2);
var lyr_RT03_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RT03_2, 
                style: style_RT03_2,
                popuplayertitle: "RT 03",
                interactive: true,
                title: '<img src="styles/legend/RT03_2.png" /> RT 03'
            });
var format_RT04_3 = new ol.format.GeoJSON();
var features_RT04_3 = format_RT04_3.readFeatures(json_RT04_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT04_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT04_3.addFeatures(features_RT04_3);
var lyr_RT04_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RT04_3, 
                style: style_RT04_3,
                popuplayertitle: "RT 04",
                interactive: true,
                title: '<img src="styles/legend/RT04_3.png" /> RT 04'
            });
var format_RT05_4 = new ol.format.GeoJSON();
var features_RT05_4 = format_RT05_4.readFeatures(json_RT05_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT05_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT05_4.addFeatures(features_RT05_4);
var lyr_RT05_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RT05_4, 
                style: style_RT05_4,
                popuplayertitle: "RT 05",
                interactive: true,
                title: '<img src="styles/legend/RT05_4.png" /> RT 05'
            });
var format_RT06_5 = new ol.format.GeoJSON();
var features_RT06_5 = format_RT06_5.readFeatures(json_RT06_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT06_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT06_5.addFeatures(features_RT06_5);
var lyr_RT06_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RT06_5, 
                style: style_RT06_5,
                popuplayertitle: "RT 06",
                interactive: true,
                title: '<img src="styles/legend/RT06_5.png" /> RT 06'
            });
var format_RumahRT1_6 = new ol.format.GeoJSON();
var features_RumahRT1_6 = format_RumahRT1_6.readFeatures(json_RumahRT1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRT1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRT1_6.addFeatures(features_RumahRT1_6);
var lyr_RumahRT1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahRT1_6, 
                style: style_RumahRT1_6,
                popuplayertitle: "Rumah RT 1",
                interactive: true,
                title: '<img src="styles/legend/RumahRT1_6.png" /> Rumah RT 1'
            });
var format_RumahRT2_7 = new ol.format.GeoJSON();
var features_RumahRT2_7 = format_RumahRT2_7.readFeatures(json_RumahRT2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRT2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRT2_7.addFeatures(features_RumahRT2_7);
var lyr_RumahRT2_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahRT2_7, 
                style: style_RumahRT2_7,
                popuplayertitle: "Rumah RT 2",
                interactive: true,
                title: '<img src="styles/legend/RumahRT2_7.png" /> Rumah RT 2'
            });
var format_RumahRT3_8 = new ol.format.GeoJSON();
var features_RumahRT3_8 = format_RumahRT3_8.readFeatures(json_RumahRT3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRT3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRT3_8.addFeatures(features_RumahRT3_8);
var lyr_RumahRT3_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahRT3_8, 
                style: style_RumahRT3_8,
                popuplayertitle: "Rumah RT 3",
                interactive: true,
                title: '<img src="styles/legend/RumahRT3_8.png" /> Rumah RT 3'
            });
var format_RumahRT4_9 = new ol.format.GeoJSON();
var features_RumahRT4_9 = format_RumahRT4_9.readFeatures(json_RumahRT4_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRT4_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRT4_9.addFeatures(features_RumahRT4_9);
var lyr_RumahRT4_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahRT4_9, 
                style: style_RumahRT4_9,
                popuplayertitle: "Rumah RT 4",
                interactive: true,
                title: '<img src="styles/legend/RumahRT4_9.png" /> Rumah RT 4'
            });
var format_RumahRT5_10 = new ol.format.GeoJSON();
var features_RumahRT5_10 = format_RumahRT5_10.readFeatures(json_RumahRT5_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRT5_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRT5_10.addFeatures(features_RumahRT5_10);
var lyr_RumahRT5_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahRT5_10, 
                style: style_RumahRT5_10,
                popuplayertitle: "Rumah RT 5",
                interactive: true,
                title: '<img src="styles/legend/RumahRT5_10.png" /> Rumah RT 5'
            });
var format_RumahRT6_11 = new ol.format.GeoJSON();
var features_RumahRT6_11 = format_RumahRT6_11.readFeatures(json_RumahRT6_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRT6_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRT6_11.addFeatures(features_RumahRT6_11);
var lyr_RumahRT6_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahRT6_11, 
                style: style_RumahRT6_11,
                popuplayertitle: "Rumah RT 6",
                interactive: true,
                title: '<img src="styles/legend/RumahRT6_11.png" /> Rumah RT 6'
            });
var format_TempatWisata_12 = new ol.format.GeoJSON();
var features_TempatWisata_12 = format_TempatWisata_12.readFeatures(json_TempatWisata_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatWisata_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatWisata_12.addFeatures(features_TempatWisata_12);
var lyr_TempatWisata_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TempatWisata_12, 
                style: style_TempatWisata_12,
                popuplayertitle: "Tempat Wisata",
                interactive: true,
                title: '<img src="styles/legend/TempatWisata_12.png" /> Tempat Wisata'
            });
var format_FasilitasUmum_13 = new ol.format.GeoJSON();
var features_FasilitasUmum_13 = format_FasilitasUmum_13.readFeatures(json_FasilitasUmum_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_13.addFeatures(features_FasilitasUmum_13);
var lyr_FasilitasUmum_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FasilitasUmum_13, 
                style: style_FasilitasUmum_13,
                popuplayertitle: "Fasilitas Umum",
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmum_13.png" /> Fasilitas Umum'
            });
var format_UMKM_14 = new ol.format.GeoJSON();
var features_UMKM_14 = format_UMKM_14.readFeatures(json_UMKM_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKM_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_14.addFeatures(features_UMKM_14);
var lyr_UMKM_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UMKM_14, 
                style: style_UMKM_14,
                popuplayertitle: "UMKM",
                interactive: true,
                title: '<img src="styles/legend/UMKM_14.png" /> UMKM'
            });
var format_NamaUMKM_15 = new ol.format.GeoJSON();
var features_NamaUMKM_15 = format_NamaUMKM_15.readFeatures(json_NamaUMKM_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NamaUMKM_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamaUMKM_15.addFeatures(features_NamaUMKM_15);
var lyr_NamaUMKM_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NamaUMKM_15, 
                style: style_NamaUMKM_15,
                popuplayertitle: "Nama UMKM",
                interactive: true,
    title: 'Nama UMKM<br />\
    <img src="styles/legend/NamaUMKM_15_0.png" /> UMKM<br />'
        });
var format_NamaWisata_16 = new ol.format.GeoJSON();
var features_NamaWisata_16 = format_NamaWisata_16.readFeatures(json_NamaWisata_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NamaWisata_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamaWisata_16.addFeatures(features_NamaWisata_16);
var lyr_NamaWisata_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NamaWisata_16, 
                style: style_NamaWisata_16,
                popuplayertitle: "Nama Wisata",
                interactive: true,
    title: 'Nama Wisata<br />\
    <img src="styles/legend/NamaWisata_16_0.png" /> Tempat Wisata<br />'
        });
var format_Jalan_17 = new ol.format.GeoJSON();
var features_Jalan_17 = format_Jalan_17.readFeatures(json_Jalan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_17.addFeatures(features_Jalan_17);
var lyr_Jalan_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_17, 
                style: style_Jalan_17,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_17.png" /> Jalan'
            });
var format_NamaFasUmum_18 = new ol.format.GeoJSON();
var features_NamaFasUmum_18 = format_NamaFasUmum_18.readFeatures(json_NamaFasUmum_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NamaFasUmum_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamaFasUmum_18.addFeatures(features_NamaFasUmum_18);
var lyr_NamaFasUmum_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NamaFasUmum_18, 
                style: style_NamaFasUmum_18,
                popuplayertitle: "Nama Fas Umum",
                interactive: true,
    title: 'Nama Fas Umum<br />\
    <img src="styles/legend/NamaFasUmum_18_0.png" /> Masjid/Mushola<br />\
    <img src="styles/legend/NamaFasUmum_18_1.png" /> Sekolah<br />\
    <img src="styles/legend/NamaFasUmum_18_2.png" /> Bangunan Umum<br />\
    <img src="styles/legend/NamaFasUmum_18_3.png" /> Makam<br />\
    <img src="styles/legend/NamaFasUmum_18_4.png" /> Lapangan<br />'
        });

        var lyr_Googleearthsatellite_19 = new ol.layer.Tile({
            'title': 'Google earth satellite',
            'type': 'base',
            'opacity': 0.603000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

lyr_RT01_0.setVisible(true);lyr_RT02_1.setVisible(true);lyr_RT03_2.setVisible(true);lyr_RT04_3.setVisible(true);lyr_RT05_4.setVisible(true);lyr_RT06_5.setVisible(true);lyr_RumahRT1_6.setVisible(true);lyr_RumahRT2_7.setVisible(true);lyr_RumahRT3_8.setVisible(true);lyr_RumahRT4_9.setVisible(true);lyr_RumahRT5_10.setVisible(true);lyr_RumahRT6_11.setVisible(true);lyr_TempatWisata_12.setVisible(true);lyr_FasilitasUmum_13.setVisible(true);lyr_UMKM_14.setVisible(true);lyr_NamaUMKM_15.setVisible(true);lyr_NamaWisata_16.setVisible(true);lyr_Jalan_17.setVisible(true);lyr_NamaFasUmum_18.setVisible(true);lyr_Googleearthsatellite_19.setVisible(true);
var layersList = [lyr_RT01_0,lyr_RT02_1,lyr_RT03_2,lyr_RT04_3,lyr_RT05_4,lyr_RT06_5,lyr_RumahRT1_6,lyr_RumahRT2_7,lyr_RumahRT3_8,lyr_RumahRT4_9,lyr_RumahRT5_10,lyr_RumahRT6_11,lyr_TempatWisata_12,lyr_FasilitasUmum_13,lyr_UMKM_14,lyr_NamaUMKM_15,lyr_NamaWisata_16,lyr_Jalan_17,lyr_NamaFasUmum_18,lyr_Googleearthsatellite_19];
lyr_RT01_0.set('fieldAliases', {'id': 'id', 'RT 01': 'RT 01', });
lyr_RT02_1.set('fieldAliases', {'id': 'id', 'RT 02': 'RT 02', });
lyr_RT03_2.set('fieldAliases', {'id': 'id', 'RT 03': 'RT 03', });
lyr_RT04_3.set('fieldAliases', {'id': 'id', 'RT 04': 'RT 04', });
lyr_RT05_4.set('fieldAliases', {'id': 'id', 'RT 05': 'RT 05', });
lyr_RT06_5.set('fieldAliases', {'id': 'id', 'RT 06': 'RT 06', });
lyr_RumahRT1_6.set('fieldAliases', {'id': 'id', 'Rumah RT 1': 'Rumah RT 1', });
lyr_RumahRT2_7.set('fieldAliases', {'id': 'id', 'Rumah RT 2': 'Rumah RT 2', });
lyr_RumahRT3_8.set('fieldAliases', {'id': 'id', 'Rumah RT 3': 'Rumah RT 3', });
lyr_RumahRT4_9.set('fieldAliases', {'id': 'id', 'Rumah RT 4': 'Rumah RT 4', });
lyr_RumahRT5_10.set('fieldAliases', {'id': 'id', 'Rumah RT 5': 'Rumah RT 5', });
lyr_RumahRT6_11.set('fieldAliases', {'id': 'id', 'Rumah RT 6': 'Rumah RT 6', });
lyr_TempatWisata_12.set('fieldAliases', {'id': 'id', 'Wisata': 'Wisata', });
lyr_FasilitasUmum_13.set('fieldAliases', {'id': 'id', 'Fasilitas': 'Fasilitas', });
lyr_UMKM_14.set('fieldAliases', {'id': 'id', 'UMKM': 'UMKM', });
lyr_NamaUMKM_15.set('fieldAliases', {'Nama': 'Nama', 'Kategori': 'Kategori', });
lyr_NamaWisata_16.set('fieldAliases', {'Nama': 'Nama', 'Kategori': 'Kategori', });
lyr_Jalan_17.set('fieldAliases', {'id': 'id', 'Nama Jalan': 'Nama Jalan', });
lyr_NamaFasUmum_18.set('fieldAliases', {'Nama': 'Nama', 'Kategori': 'Kategori', });
lyr_RT01_0.set('fieldImages', {'id': 'TextEdit', 'RT 01': 'TextEdit', });
lyr_RT02_1.set('fieldImages', {'id': 'TextEdit', 'RT 02': 'TextEdit', });
lyr_RT03_2.set('fieldImages', {'id': 'TextEdit', 'RT 03': 'TextEdit', });
lyr_RT04_3.set('fieldImages', {'id': 'TextEdit', 'RT 04': 'TextEdit', });
lyr_RT05_4.set('fieldImages', {'id': 'TextEdit', 'RT 05': 'TextEdit', });
lyr_RT06_5.set('fieldImages', {'id': 'TextEdit', 'RT 06': 'TextEdit', });
lyr_RumahRT1_6.set('fieldImages', {'id': 'TextEdit', 'Rumah RT 1': 'TextEdit', });
lyr_RumahRT2_7.set('fieldImages', {'id': 'TextEdit', 'Rumah RT 2': 'TextEdit', });
lyr_RumahRT3_8.set('fieldImages', {'id': 'TextEdit', 'Rumah RT 3': 'TextEdit', });
lyr_RumahRT4_9.set('fieldImages', {'id': 'TextEdit', 'Rumah RT 4': 'TextEdit', });
lyr_RumahRT5_10.set('fieldImages', {'id': 'TextEdit', 'Rumah RT 5': 'TextEdit', });
lyr_RumahRT6_11.set('fieldImages', {'id': 'TextEdit', 'Rumah RT 6': 'TextEdit', });
lyr_TempatWisata_12.set('fieldImages', {'id': 'TextEdit', 'Wisata': 'TextEdit', });
lyr_FasilitasUmum_13.set('fieldImages', {'id': 'TextEdit', 'Fasilitas': 'TextEdit', });
lyr_UMKM_14.set('fieldImages', {'id': 'TextEdit', 'UMKM': 'TextEdit', });
lyr_NamaUMKM_15.set('fieldImages', {'Nama': 'TextEdit', 'Kategori': 'TextEdit', });
lyr_NamaWisata_16.set('fieldImages', {'Nama': 'TextEdit', 'Kategori': 'TextEdit', });
lyr_Jalan_17.set('fieldImages', {'id': 'TextEdit', 'Nama Jalan': 'TextEdit', });
lyr_NamaFasUmum_18.set('fieldImages', {'Nama': 'TextEdit', 'Kategori': 'TextEdit', });
lyr_RT01_0.set('fieldLabels', {'id': 'no label', 'RT 01': 'no label', });
lyr_RT02_1.set('fieldLabels', {'id': 'no label', 'RT 02': 'no label', });
lyr_RT03_2.set('fieldLabels', {'id': 'no label', 'RT 03': 'no label', });
lyr_RT04_3.set('fieldLabels', {'id': 'no label', 'RT 04': 'no label', });
lyr_RT05_4.set('fieldLabels', {'id': 'no label', 'RT 05': 'no label', });
lyr_RT06_5.set('fieldLabels', {'id': 'no label', 'RT 06': 'no label', });
lyr_RumahRT1_6.set('fieldLabels', {'id': 'no label', 'Rumah RT 1': 'inline label - always visible', });
lyr_RumahRT2_7.set('fieldLabels', {'id': 'no label', 'Rumah RT 2': 'inline label - always visible', });
lyr_RumahRT3_8.set('fieldLabels', {'id': 'no label', 'Rumah RT 3': 'inline label - always visible', });
lyr_RumahRT4_9.set('fieldLabels', {'id': 'no label', 'Rumah RT 4': 'inline label - always visible', });
lyr_RumahRT5_10.set('fieldLabels', {'id': 'no label', 'Rumah RT 5': 'inline label - always visible', });
lyr_RumahRT6_11.set('fieldLabels', {'id': 'no label', 'Rumah RT 6': 'inline label - always visible', });
lyr_TempatWisata_12.set('fieldLabels', {'id': 'no label', 'Wisata': 'inline label - always visible', });
lyr_FasilitasUmum_13.set('fieldLabels', {'id': 'no label', 'Fasilitas': 'inline label - always visible', });
lyr_UMKM_14.set('fieldLabels', {'id': 'no label', 'UMKM': 'inline label - always visible', });
lyr_NamaUMKM_15.set('fieldLabels', {'Nama': 'inline label - always visible', 'Kategori': 'inline label - always visible', });
lyr_NamaWisata_16.set('fieldLabels', {'Nama': 'inline label - always visible', 'Kategori': 'inline label - always visible', });
lyr_Jalan_17.set('fieldLabels', {'id': 'no label', 'Nama Jalan': 'no label', });
lyr_NamaFasUmum_18.set('fieldLabels', {'Nama': 'no label', 'Kategori': 'no label', });
lyr_NamaFasUmum_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});