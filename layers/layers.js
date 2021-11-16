ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32719").setExtent([789535.015902, 8067205.951810, 813581.232549, 8080893.559997]);
var wms_layers = [];


        var lyr_StamenWatercolor_0 = new ol.layer.Tile({
            'title': 'Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_Stamen_1 = new ol.layer.Tile({
            'title': 'Stamen',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_2 = new ol.layer.Tile({
            'title': 'ESRISatellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_4 = new ol.layer.Tile({
            'title': 'GoogleSatellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_5 = new ol.layer.Tile({
            'title': 'GoogleMaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Densidad_Poblacin_habha_6 = new ol.format.GeoJSON();
var features_Densidad_Poblacin_habha_6 = format_Densidad_Poblacin_habha_6.readFeatures(json_Densidad_Poblacin_habha_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Densidad_Poblacin_habha_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densidad_Poblacin_habha_6.addFeatures(features_Densidad_Poblacin_habha_6);
var lyr_Densidad_Poblacin_habha_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Densidad_Poblacin_habha_6, 
                style: style_Densidad_Poblacin_habha_6,
                interactive: false,
    title: 'Densidad_Población_(hab/ha)<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_6_0.png" /> 0 - 50<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_6_1.png" /> 50 - 100<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_6_2.png" /> 100 - 175<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_6_3.png" /> 175 - 250<br />\
    <img src="styles/legend/Densidad_Poblacin_habha_6_4.png" /> 250 - 595.3307<br />'
        });
var lyr_NDVI_2021_07_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_2021_07",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_2021_07_7.png",
    attributions: ' ',
                                projection: 'EPSG:32719',
                                alwaysInRange: true,
                                imageExtent: [787230.000000, 8056430.000000, 811320.000000, 8090960.000000]
                            })
                        });
var lyr_NDVI_2021_01_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_2021_01",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_2021_01_8.png",
    attributions: ' ',
                                projection: 'EPSG:32719',
                                alwaysInRange: true,
                                imageExtent: [787230.000000, 8056430.000000, 811320.000000, 8090880.000000]
                            })
                        });
var format_Areas_Verdes_PTDI2016_9 = new ol.format.GeoJSON();
var features_Areas_Verdes_PTDI2016_9 = format_Areas_Verdes_PTDI2016_9.readFeatures(json_Areas_Verdes_PTDI2016_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Areas_Verdes_PTDI2016_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Verdes_PTDI2016_9.addFeatures(features_Areas_Verdes_PTDI2016_9);
var lyr_Areas_Verdes_PTDI2016_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areas_Verdes_PTDI2016_9, 
                style: style_Areas_Verdes_PTDI2016_9,
                interactive: false,
    title: 'Areas_Verdes_PTDI2016<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_0.png" /> Área Agropecuaria<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_1.png" /> Área de Equipamiento Especial y Preservación Paisajística Ambiental<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_2.png" /> Área de Equipamientos Especiales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_3.png" /> Área de Equipamientos Sociales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_4.png" /> Área de Equipamientos Urbano Regionales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_5.png" /> Área de Mitigación Ambiental y Jerarquización de la Estructura Natural<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_6.png" /> Área de Preservación e Integración Paisajística<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_7.png" /> Área de Preservación Natural y Dinamización Cultural<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_8.png" /> Área de Protección y Bioregulación Ambiental<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_9.png" /> Área forestal<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_10.png" /> Área Industrial<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_11.png" /> Áreas Verdes Afectadas<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_12.png" /> Áreas Verdes y de Recreación<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_13.png" /> Residencial<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_9_14.png" /> <br />'
        });
var format_Rios_10 = new ol.format.GeoJSON();
var features_Rios_10 = format_Rios_10.readFeatures(json_Rios_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Rios_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_10.addFeatures(features_Rios_10);
var lyr_Rios_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_10, 
                style: style_Rios_10,
                interactive: false,
                title: '<img src="styles/legend/Rios_10.png" /> Rios'
            });
var format_Cuerpos_de_Agua_11 = new ol.format.GeoJSON();
var features_Cuerpos_de_Agua_11 = format_Cuerpos_de_Agua_11.readFeatures(json_Cuerpos_de_Agua_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Cuerpos_de_Agua_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuerpos_de_Agua_11.addFeatures(features_Cuerpos_de_Agua_11);
var lyr_Cuerpos_de_Agua_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuerpos_de_Agua_11, 
                style: style_Cuerpos_de_Agua_11,
                interactive: false,
                title: '<img src="styles/legend/Cuerpos_de_Agua_11.png" /> Cuerpos_de_Agua'
            });
var format_Cuencas_12 = new ol.format.GeoJSON();
var features_Cuencas_12 = format_Cuencas_12.readFeatures(json_Cuencas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Cuencas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencas_12.addFeatures(features_Cuencas_12);
var lyr_Cuencas_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuencas_12, 
                style: style_Cuencas_12,
                interactive: false,
                title: '<img src="styles/legend/Cuencas_12.png" /> Cuencas'
            });
var format_Canal_de_Riego_13 = new ol.format.GeoJSON();
var features_Canal_de_Riego_13 = format_Canal_de_Riego_13.readFeatures(json_Canal_de_Riego_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Canal_de_Riego_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canal_de_Riego_13.addFeatures(features_Canal_de_Riego_13);
var lyr_Canal_de_Riego_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Canal_de_Riego_13, 
                style: style_Canal_de_Riego_13,
                interactive: false,
                title: '<img src="styles/legend/Canal_de_Riego_13.png" /> Canal_de_Riego'
            });
var format_Torrenteras_canales_14 = new ol.format.GeoJSON();
var features_Torrenteras_canales_14 = format_Torrenteras_canales_14.readFeatures(json_Torrenteras_canales_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Torrenteras_canales_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Torrenteras_canales_14.addFeatures(features_Torrenteras_canales_14);
var lyr_Torrenteras_canales_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Torrenteras_canales_14, 
                style: style_Torrenteras_canales_14,
                interactive: false,
                title: '<img src="styles/legend/Torrenteras_canales_14.png" /> Torrenteras_canales'
            });
var format_Circuito_Ciclovia_15 = new ol.format.GeoJSON();
var features_Circuito_Ciclovia_15 = format_Circuito_Ciclovia_15.readFeatures(json_Circuito_Ciclovia_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Circuito_Ciclovia_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Circuito_Ciclovia_15.addFeatures(features_Circuito_Ciclovia_15);
var lyr_Circuito_Ciclovia_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Circuito_Ciclovia_15, 
                style: style_Circuito_Ciclovia_15,
                interactive: false,
    title: 'Circuito_Ciclovia<br />\
    <img src="styles/legend/Circuito_Ciclovia_15_0.png" /> <br />\
    <img src="styles/legend/Circuito_Ciclovia_15_1.png" /> Existente<br />\
    <img src="styles/legend/Circuito_Ciclovia_15_2.png" /> Posible Trazo<br />'
        });
var format_Lmites_Distritales_16 = new ol.format.GeoJSON();
var features_Lmites_Distritales_16 = format_Lmites_Distritales_16.readFeatures(json_Lmites_Distritales_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Lmites_Distritales_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmites_Distritales_16.addFeatures(features_Lmites_Distritales_16);
var lyr_Lmites_Distritales_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmites_Distritales_16, 
                style: style_Lmites_Distritales_16,
                interactive: false,
                title: '<img src="styles/legend/Lmites_Distritales_16.png" /> Límites_Distritales'
            });
var format_OTB_Cercado_2015_17 = new ol.format.GeoJSON();
var features_OTB_Cercado_2015_17 = format_OTB_Cercado_2015_17.readFeatures(json_OTB_Cercado_2015_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_OTB_Cercado_2015_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTB_Cercado_2015_17.addFeatures(features_OTB_Cercado_2015_17);
var lyr_OTB_Cercado_2015_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OTB_Cercado_2015_17, 
                style: style_OTB_Cercado_2015_17,
                interactive: false,
                title: '<img src="styles/legend/OTB_Cercado_2015_17.png" /> OTB_Cercado_2015'
            });
var format_Manzanas_Encuesta_18 = new ol.format.GeoJSON();
var features_Manzanas_Encuesta_18 = format_Manzanas_Encuesta_18.readFeatures(json_Manzanas_Encuesta_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Manzanas_Encuesta_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_Encuesta_18.addFeatures(features_Manzanas_Encuesta_18);
var lyr_Manzanas_Encuesta_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_Encuesta_18, 
                style: style_Manzanas_Encuesta_18,
                interactive: false,
                title: '<img src="styles/legend/Manzanas_Encuesta_18.png" /> Manzanas_Encuesta'
            });
var format_Predios_Encuesta_19 = new ol.format.GeoJSON();
var features_Predios_Encuesta_19 = format_Predios_Encuesta_19.readFeatures(json_Predios_Encuesta_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Predios_Encuesta_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_Encuesta_19.addFeatures(features_Predios_Encuesta_19);
var lyr_Predios_Encuesta_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Predios_Encuesta_19, 
                style: style_Predios_Encuesta_19,
                interactive: true,
                title: '<img src="styles/legend/Predios_Encuesta_19.png" /> Predios_Encuesta'
            });
var format_ZonasAyB_20 = new ol.format.GeoJSON();
var features_ZonasAyB_20 = format_ZonasAyB_20.readFeatures(json_ZonasAyB_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_ZonasAyB_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasAyB_20.addFeatures(features_ZonasAyB_20);
var lyr_ZonasAyB_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonasAyB_20, 
                style: style_ZonasAyB_20,
                interactive: false,
                title: '<img src="styles/legend/ZonasAyB_20.png" /> Zonas A y B'
            });
var format_Buffer_Puntos_400m_21 = new ol.format.GeoJSON();
var features_Buffer_Puntos_400m_21 = format_Buffer_Puntos_400m_21.readFeatures(json_Buffer_Puntos_400m_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Buffer_Puntos_400m_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Puntos_400m_21.addFeatures(features_Buffer_Puntos_400m_21);
var lyr_Buffer_Puntos_400m_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffer_Puntos_400m_21, 
                style: style_Buffer_Puntos_400m_21,
                interactive: false,
                title: '<img src="styles/legend/Buffer_Puntos_400m_21.png" /> Buffer_Puntos_400m'
            });
var format_Puntos_Muestreo_22 = new ol.format.GeoJSON();
var features_Puntos_Muestreo_22 = format_Puntos_Muestreo_22.readFeatures(json_Puntos_Muestreo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Puntos_Muestreo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_Muestreo_22.addFeatures(features_Puntos_Muestreo_22);
var lyr_Puntos_Muestreo_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_Muestreo_22, 
                style: style_Puntos_Muestreo_22,
                interactive: false,
                title: '<img src="styles/legend/Puntos_Muestreo_22.png" /> Puntos_Muestreo'
            });
var group_LIMITESADMINISTRATIVOS = new ol.layer.Group({
                                layers: [lyr_Lmites_Distritales_16,lyr_OTB_Cercado_2015_17,],
                                title: "LIMITES ADMINISTRATIVOS"});
var group_TRANSPORTE = new ol.layer.Group({
                                layers: [lyr_Circuito_Ciclovia_15,],
                                title: "TRANSPORTE"});
var group_HIDROGRAFA = new ol.layer.Group({
                                layers: [lyr_Rios_10,lyr_Cuerpos_de_Agua_11,lyr_Cuencas_12,lyr_Canal_de_Riego_13,lyr_Torrenteras_canales_14,],
                                title: "HIDROGRAFÍA"});
var group_AREASVERDES = new ol.layer.Group({
                                layers: [lyr_NDVI_2021_07_7,lyr_NDVI_2021_01_8,lyr_Areas_Verdes_PTDI2016_9,],
                                title: "AREAS VERDES"});
var group_ASPECTOSSOCIALES = new ol.layer.Group({
                                layers: [lyr_Densidad_Poblacin_habha_6,],
                                title: "ASPECTOS SOCIALES"});
var group_MAPASBASE = new ol.layer.Group({
                                layers: [lyr_StamenWatercolor_0,lyr_Stamen_1,lyr_ESRISatellite_2,lyr_OpenStreetMap_3,lyr_GoogleSatellite_4,lyr_GoogleMaps_5,],
                                title: "MAPAS BASE"});

lyr_StamenWatercolor_0.setVisible(true);lyr_Stamen_1.setVisible(true);lyr_ESRISatellite_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_GoogleSatellite_4.setVisible(true);lyr_GoogleMaps_5.setVisible(true);lyr_Densidad_Poblacin_habha_6.setVisible(true);lyr_NDVI_2021_07_7.setVisible(true);lyr_NDVI_2021_01_8.setVisible(true);lyr_Areas_Verdes_PTDI2016_9.setVisible(true);lyr_Rios_10.setVisible(true);lyr_Cuerpos_de_Agua_11.setVisible(true);lyr_Cuencas_12.setVisible(true);lyr_Canal_de_Riego_13.setVisible(true);lyr_Torrenteras_canales_14.setVisible(true);lyr_Circuito_Ciclovia_15.setVisible(true);lyr_Lmites_Distritales_16.setVisible(true);lyr_OTB_Cercado_2015_17.setVisible(true);lyr_Manzanas_Encuesta_18.setVisible(true);lyr_Predios_Encuesta_19.setVisible(true);lyr_ZonasAyB_20.setVisible(true);lyr_Buffer_Puntos_400m_21.setVisible(true);lyr_Puntos_Muestreo_22.setVisible(true);
var layersList = [group_MAPASBASE,group_ASPECTOSSOCIALES,group_AREASVERDES,group_HIDROGRAFA,group_TRANSPORTE,group_LIMITESADMINISTRATIVOS,lyr_Manzanas_Encuesta_18,lyr_Predios_Encuesta_19,lyr_ZonasAyB_20,lyr_Buffer_Puntos_400m_21,lyr_Puntos_Muestreo_22];
lyr_Densidad_Poblacin_habha_6.set('fieldAliases', {'manzanas': 'manzanas', 'poblacion': 'poblacion', 'viviendas': 'viviendas', 'agua': 'agua', 'electricid': 'electricid', 'alcantaril': 'alcantaril', 'NBI': 'NBI', 'cos': 'cos', 'm2': 'm2', 'SUPERFICIE': 'SUPERFICIE', 'Densidad_P': 'Densidad_P', 'hab_ha': 'hab_ha', });
lyr_Areas_Verdes_PTDI2016_9.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Uso_Suelo': 'Uso_Suelo', });
lyr_Rios_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DREN_CUENC': 'DREN_CUENC', 'ELEVATION': 'ELEVATION', 'RIOS_PNT': 'RIOS_PNT', 'Shape_STLe': 'Shape_STLe', 'Shape_Leng': 'Shape_Leng', 'Name': 'Name', });
lyr_Cuerpos_de_Agua_11.set('fieldAliases', {'Id': 'Id', 'USO': 'USO', });
lyr_Cuencas_12.set('fieldAliases', {'TOTAL': 'TOTAL', });
lyr_Canal_de_Riego_13.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Level': 'Level', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'MsLink_DMR': 'MsLink_DMR', 'MsCtlg_DMR': 'MsCtlg_DMR', 'MsLink_D_1': 'MsLink_D_1', 'MsCtlg_D_1': 'MsCtlg_D_1', });
lyr_Torrenteras_canales_14.set('fieldAliases', {'ID': 'ID', });
lyr_Circuito_Ciclovia_15.set('fieldAliases', {'Id': 'Id', 'KM': 'KM', });
lyr_Lmites_Distritales_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COMUNA': 'COMUNA', 'ADDRESS': 'ADDRESS', 'NRO_TEL': 'NRO_TEL', 'SHAPE_LENG': 'SHAPE_LENG', 'DISTRITO': 'DISTRITO', 'DISTRITO_1': 'DISTRITO_1', 'HA': 'HA', 'NOMBRE_D': 'NOMBRE_D', });
lyr_OTB_Cercado_2015_17.set('fieldAliases', {'FID_otbs22': 'FID_otbs22', 'OTB_D9': 'OTB_D9', });
lyr_Manzanas_Encuesta_18.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'OBJECTID': 'OBJECTID', 'idManzana': 'idManzana', 'Nro_Man_An': 'Nro_Man_An', 'Nro_manz_1': 'Nro_manz_1', });
lyr_Predios_Encuesta_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CodCat': 'CodCat', 'idPredio': 'idPredio', 'Nro_manzan': 'Nro_manzan', 'Nro_predio': 'Nro_predio', });
lyr_ZonasAyB_20.set('fieldAliases', {'Name': 'Name', });
lyr_Buffer_Puntos_400m_21.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X_Este': 'X_Este', 'Y_Norte': 'Y_Norte', 'Prioridad': 'Prioridad', 'Zona': 'Zona', 'Data_Log': 'Data_Log', 'Corredor': 'Corredor', 'OTB': 'OTB', 'Distrito': 'Distrito', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_Puntos_Muestreo_22.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X_Este': 'X_Este', 'Y_Norte': 'Y_Norte', 'Prioridad': 'Prioridad', 'Zona': 'Zona', 'Data_Log': 'Data_Log', 'Corredor': 'Corredor', 'OTB': 'OTB', 'Distrito': 'Distrito', 'Z_msnm': 'Z_msnm', });
lyr_Densidad_Poblacin_habha_6.set('fieldImages', {'manzanas': 'TextEdit', 'poblacion': 'TextEdit', 'viviendas': 'TextEdit', 'agua': 'TextEdit', 'electricid': 'TextEdit', 'alcantaril': 'TextEdit', 'NBI': 'TextEdit', 'cos': 'TextEdit', 'm2': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'Densidad_P': 'TextEdit', 'hab_ha': 'Range', });
lyr_Areas_Verdes_PTDI2016_9.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Uso_Suelo': 'TextEdit', });
lyr_Rios_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'DREN_CUENC': 'TextEdit', 'ELEVATION': 'TextEdit', 'RIOS_PNT': 'TextEdit', 'Shape_STLe': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Name': 'TextEdit', });
lyr_Cuerpos_de_Agua_11.set('fieldImages', {'Id': 'TextEdit', 'USO': 'TextEdit', });
lyr_Cuencas_12.set('fieldImages', {'TOTAL': 'TextEdit', });
lyr_Canal_de_Riego_13.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Level': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', 'MsLink_DMR': 'TextEdit', 'MsCtlg_DMR': 'TextEdit', 'MsLink_D_1': 'TextEdit', 'MsCtlg_D_1': 'TextEdit', });
lyr_Torrenteras_canales_14.set('fieldImages', {'ID': 'Range', });
lyr_Circuito_Ciclovia_15.set('fieldImages', {'Id': 'TextEdit', 'KM': 'TextEdit', });
lyr_Lmites_Distritales_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'COMUNA': 'TextEdit', 'ADDRESS': 'TextEdit', 'NRO_TEL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'DISTRITO': 'TextEdit', 'DISTRITO_1': 'TextEdit', 'HA': 'TextEdit', 'NOMBRE_D': 'TextEdit', });
lyr_OTB_Cercado_2015_17.set('fieldImages', {'FID_otbs22': 'Range', 'OTB_D9': 'TextEdit', });
lyr_Manzanas_Encuesta_18.set('fieldImages', {'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'OBJECTID': 'Range', 'idManzana': 'Range', 'Nro_Man_An': 'TextEdit', 'Nro_manz_1': 'TextEdit', });
lyr_Predios_Encuesta_19.set('fieldImages', {'OBJECTID': 'Range', 'CodCat': 'TextEdit', 'idPredio': 'Range', 'Nro_manzan': 'TextEdit', 'Nro_predio': 'TextEdit', });
lyr_ZonasAyB_20.set('fieldImages', {'Name': 'TextEdit', });
lyr_Buffer_Puntos_400m_21.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X_Este': 'TextEdit', 'Y_Norte': 'TextEdit', 'Prioridad': 'Range', 'Zona': 'TextEdit', 'Data_Log': 'Range', 'Corredor': 'Range', 'OTB': 'TextEdit', 'Distrito': 'Range', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Puntos_Muestreo_22.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X_Este': 'TextEdit', 'Y_Norte': 'TextEdit', 'Prioridad': 'Range', 'Zona': 'TextEdit', 'Data_Log': 'Range', 'Corredor': '', 'OTB': '', 'Distrito': '', 'Z_msnm': '', });
lyr_Densidad_Poblacin_habha_6.set('fieldLabels', {});
lyr_Areas_Verdes_PTDI2016_9.set('fieldLabels', {});
lyr_Rios_10.set('fieldLabels', {});
lyr_Cuerpos_de_Agua_11.set('fieldLabels', {});
lyr_Cuencas_12.set('fieldLabels', {});
lyr_Canal_de_Riego_13.set('fieldLabels', {});
lyr_Torrenteras_canales_14.set('fieldLabels', {});
lyr_Circuito_Ciclovia_15.set('fieldLabels', {});
lyr_Lmites_Distritales_16.set('fieldLabels', {});
lyr_OTB_Cercado_2015_17.set('fieldLabels', {});
lyr_Manzanas_Encuesta_18.set('fieldLabels', {'Join_Count': 'no label', 'TARGET_FID': 'no label', 'OBJECTID': 'no label', 'idManzana': 'no label', 'Nro_Man_An': 'no label', 'Nro_manz_1': 'no label', });
lyr_Predios_Encuesta_19.set('fieldLabels', {'OBJECTID': 'header label', 'CodCat': 'no label', 'idPredio': 'no label', 'Nro_manzan': 'header label', 'Nro_predio': 'header label', });
lyr_ZonasAyB_20.set('fieldLabels', {'Name': 'no label', });
lyr_Buffer_Puntos_400m_21.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'X_Este': 'no label', 'Y_Norte': 'no label', 'Prioridad': 'no label', 'Zona': 'no label', 'Data_Log': 'no label', 'Corredor': 'no label', 'OTB': 'no label', 'Distrito': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', });
lyr_Puntos_Muestreo_22.set('fieldLabels', {'Id': 'header label', 'Name': 'header label', 'X_Este': 'header label', 'Y_Norte': 'header label', 'Prioridad': 'no label', 'Zona': 'header label', 'Data_Log': 'no label', 'Corredor': 'header label', 'OTB': 'header label', 'Distrito': 'header label', 'Z_msnm': 'no label', });
lyr_Puntos_Muestreo_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});