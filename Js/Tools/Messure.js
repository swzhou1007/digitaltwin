var _0x4a9c=['fromBytes','display','positions','#messureArea','forEach','Math','point2','FILL','VerticalOrigin','screenSpaceEventHandler','Color','Cartesian3','#closeMessurePannel','scene','LEFT_DOUBLE_CLICK','fromCartesian','pow','log','currentPrimitive','ScreenSpaceEventType','BOTTOM','LEFT_CLICK','options','pop','RED','ScreenSpaceEventHandler','#i-n-messure','remove','destroy','#messureHeight','直线距离','position','toFixed','HeightReference','hierarchy','length','setEndPoints','heightPolyline','ellipse','lon','prototype','fromPoints','pickPosition','EllipsoidGeodesic','addClass','_init','polygon','removeInputAction','center','point1','longitude','MOUSE_MOVE','fromDegrees','push','_imageryLayerCollection','polyline','viewer','removeClass','css','面积:\x20','12px','cesiumWidget','clearMessure','sqrt','active','now','entities','messureLength','latitude','WHITE','toDegrees','floatingPointArr','getValue','add','Cartesian2','pannel-btn-active','#messureLength','none','click','messureHandler','sin','LabelStyle','floatingPolygon','CallbackProperty','空间直线距离','height','Cartographic','.pannel-btn-active','多边形','endPosition','surfaceDistance','RIGHT_CLICK','messureArea','defined','#cancelMessureBtn','CLAMP_TO_GROUND','多边形面积','withAlpha','cos','clone','semiMajorAxis','setInputAction','lat'];(function(_0x5adc05,_0x3240c6){var _0x4a9cf5=function(_0xc58edd){while(--_0xc58edd){_0x5adc05['push'](_0x5adc05['shift']());}};_0x4a9cf5(++_0x3240c6);}(_0x4a9c,0x12b));var _0xc58e=function(_0x5adc05,_0x3240c6){_0x5adc05=_0x5adc05-0x11f;var _0x4a9cf5=_0x4a9c[_0x5adc05];return _0x4a9cf5;};'use strict';oMessure={'positions':[],'floatingPointArr':[],'messureHandler':void 0x0,'currentPrimitive':null,'floatingPolygon':null,'point1':null,'point2':null,'heightPolyline':null,'messureLength':function(){var _0x433c6d=_0xc58e,_0x20027a,_0x4ac242=oDefault[_0x433c6d(0x161)],_0x1bd158=null,_0x13ae41=0x0,_0x1e5b27=null;_0x4ac242[_0x433c6d(0x166)][_0x433c6d(0x132)][_0x433c6d(0x158)](Cesium[_0x433c6d(0x13c)][_0x433c6d(0x137)]),oMessure[_0x433c6d(0x178)]=new Cesium[(_0x433c6d(0x142))](_0x4ac242[_0x433c6d(0x136)][_0x433c6d(0x15f)]),oMessure[_0x433c6d(0x178)]['setInputAction'](function(_0x1c5876){var _0x598741=_0x433c6d;(_0x1e5b27=_0x4ac242[_0x598741(0x136)]['pickPosition'](_0x1c5876[_0x598741(0x182)]))&&0x2<=oMessure[_0x598741(0x12b)][_0x598741(0x14c)]&&(Cesium[_0x598741(0x11f)](_0x1bd158)?(oMessure['positions'][_0x598741(0x140)](),oMessure[_0x598741(0x12b)][_0x598741(0x15e)](_0x1e5b27)):_0x1bd158=new _0x5f0650(oMessure[_0x598741(0x12b)]),_0x13ae41=function(_0x31a00e){var _0x57aa2d=_0x598741;for(var _0xd92707=0x0,_0x9443d9=0x0;_0x9443d9<_0x31a00e[_0x57aa2d(0x14c)]-0x1;_0x9443d9++){var _0x2caf00=Cesium[_0x57aa2d(0x17f)][_0x57aa2d(0x138)](_0x31a00e[_0x9443d9]),_0x5fb013=Cesium[_0x57aa2d(0x17f)]['fromCartesian'](_0x31a00e[_0x9443d9+0x1]),_0x288c69=new Cesium[(_0x57aa2d(0x154))]();_0x288c69[_0x57aa2d(0x14d)](_0x2caf00,_0x5fb013),_0x288c69=_0x288c69[_0x57aa2d(0x183)],(_0x288c69=Math[_0x57aa2d(0x168)](Math[_0x57aa2d(0x139)](_0x288c69,0x2)+Math['pow'](_0x5fb013[_0x57aa2d(0x17e)]-_0x2caf00['height'],0x2)),_0xd92707+=_0x288c69);}return _0xd92707['toFixed'](0x2);}(oMessure[_0x598741(0x12b)]));},Cesium[_0x433c6d(0x13c)][_0x433c6d(0x15c)]),oMessure[_0x433c6d(0x178)][_0x433c6d(0x127)](function(_0x58cc99){var _0x28c4a6=_0x433c6d;(_0x1e5b27=_0x4ac242[_0x28c4a6(0x136)][_0x28c4a6(0x153)](_0x58cc99[_0x28c4a6(0x148)]))&&(0x0==oMessure[_0x28c4a6(0x12b)][_0x28c4a6(0x14c)]&&oMessure[_0x28c4a6(0x12b)]['push'](_0x1e5b27[_0x28c4a6(0x125)]()),oMessure[_0x28c4a6(0x12b)][_0x28c4a6(0x15e)](_0x1e5b27),_0x58cc99=_0x13ae41+'m',_0x20027a=_0x4ac242[_0x28c4a6(0x16b)]['add']({'name':_0x28c4a6(0x17d),'position':oMessure[_0x28c4a6(0x12b)][oMessure[_0x28c4a6(0x12b)][_0x28c4a6(0x14c)]-0x1],'point':{'pixelSize':0x5,'color':Cesium[_0x28c4a6(0x133)][_0x28c4a6(0x141)]['withAlpha'](0.3),'outlineColor':Cesium[_0x28c4a6(0x133)]['RED'],'outlineWidth':0x1},'label':{'text':_0x58cc99,'font':_0x28c4a6(0x165),'fillColor':Cesium[_0x28c4a6(0x133)]['WHITE'],'backgroundColor':new Cesium[(_0x28c4a6(0x133))][(_0x28c4a6(0x129))](0x0,0x0,0x0,0x32),'showBackground':!0x0,'style':Cesium[_0x28c4a6(0x17a)]['FILL'],'outlineWidth':0x1,'verticalOrigin':Cesium[_0x28c4a6(0x131)][_0x28c4a6(0x13d)],'pixelOffset':new Cesium[(_0x28c4a6(0x173))](0x14,-0x14)}}),oMessure[_0x28c4a6(0x170)]['push'](_0x20027a));},Cesium['ScreenSpaceEventType'][_0x433c6d(0x13e)]),oMessure[_0x433c6d(0x178)]['setInputAction'](function(_0x3cd4d6){var _0x5ec1d3=_0x433c6d,_0x3d4a35;0x2<oMessure[_0x5ec1d3(0x12b)][_0x5ec1d3(0x14c)]&&(oMessure[_0x5ec1d3(0x12b)][_0x5ec1d3(0x140)](),_0x3d4a35=oMessure[_0x5ec1d3(0x170)]['length'],_0x4ac242[_0x5ec1d3(0x16b)][_0x5ec1d3(0x144)](oMessure[_0x5ec1d3(0x170)][_0x3d4a35-0x1]),oMessure[_0x5ec1d3(0x170)][_0x5ec1d3(0x140)]());},Cesium[_0x433c6d(0x13c)][_0x433c6d(0x184)]),oMessure[_0x433c6d(0x178)]['setInputAction'](function(_0x5f0138){var _0x3fd075=_0x433c6d;oMessure[_0x3fd075(0x178)][_0x3fd075(0x145)](),oMessure[_0x3fd075(0x178)]=void 0x0,oMessure[_0x3fd075(0x12b)]=[];},Cesium[_0x433c6d(0x13c)][_0x433c6d(0x137)]);var _0x5f0650=(_0x1bf509[_0x433c6d(0x151)][_0x433c6d(0x156)]=function(){var _0x183fc4=_0x433c6d,_0x25c405=this;this[_0x183fc4(0x13f)][_0x183fc4(0x160)][_0x183fc4(0x12b)]=new Cesium['CallbackProperty'](function(){var _0x55b9cf=_0x183fc4;return _0x25c405[_0x55b9cf(0x12b)];},!0x1),oMessure['currentPrimitive']=_0x4ac242['entities'][_0x183fc4(0x172)](this[_0x183fc4(0x13f)]);},_0x1bf509);function _0x1bf509(_0x19c7d1){var _0x27bca3=_0x433c6d;this['options']={'name':'直线','polyline':{'show':!0x0,'positions':[],'material':Cesium[_0x27bca3(0x133)][_0x27bca3(0x141)],'width':0x2,'clampToGround':!0x0}},this[_0x27bca3(0x12b)]=_0x19c7d1,this[_0x27bca3(0x156)]();}},'messureArea':function(){var _0x4e43c5=_0xc58e,_0x3cf5c8=oDefault[_0x4e43c5(0x161)];_0x3cf5c8[_0x4e43c5(0x166)]['screenSpaceEventHandler'][_0x4e43c5(0x158)](Cesium[_0x4e43c5(0x13c)][_0x4e43c5(0x137)]),oMessure[_0x4e43c5(0x178)]=new Cesium[(_0x4e43c5(0x142))](_0x3cf5c8[_0x4e43c5(0x136)][_0x4e43c5(0x15f)]);var _0x13aba3,_0x30b826=[],_0x5dbbe8=null,_0x4f732c=null;oMessure[_0x4e43c5(0x178)]['setInputAction'](function(_0x36d815){var _0x4bb287=_0x4e43c5,_0x13059d,_0x23859;(_0x4f732c=_0x3cf5c8['scene'][_0x4bb287(0x153)](_0x36d815[_0x4bb287(0x148)]))&&(0x0==oMessure['positions']['length']&&oMessure[_0x4bb287(0x12b)]['push'](_0x4f732c[_0x4bb287(0x125)]()),oMessure[_0x4bb287(0x12b)][_0x4bb287(0x15e)](_0x4f732c),_0x23859=Cesium[_0x4bb287(0x17f)][_0x4bb287(0x138)](oMessure['positions'][oMessure['positions']['length']-0x1]),_0x13059d=Cesium[_0x4bb287(0x12e)][_0x4bb287(0x16f)](_0x23859[_0x4bb287(0x15b)]),_0x36d815=Cesium[_0x4bb287(0x12e)]['toDegrees'](_0x23859[_0x4bb287(0x16d)]),_0x23859=_0x23859['height'],_0x30b826[_0x4bb287(0x15e)]({'lon':_0x13059d,'lat':_0x36d815,'hei':_0x23859}),_0x13aba3=_0x3cf5c8[_0x4bb287(0x16b)][_0x4bb287(0x172)]({'name':_0x4bb287(0x122),'position':oMessure[_0x4bb287(0x12b)][oMessure[_0x4bb287(0x12b)]['length']-0x1],'point':{'pixelSize':0x5,'color':Cesium[_0x4bb287(0x133)][_0x4bb287(0x141)]['withAlpha'](0.3),'outlineColor':Cesium[_0x4bb287(0x133)][_0x4bb287(0x141)],'outlineWidth':0x1,'heightReference':Cesium['HeightReference'][_0x4bb287(0x121)]}}),oMessure[_0x4bb287(0x170)][_0x4bb287(0x15e)](_0x13aba3));},Cesium[_0x4e43c5(0x13c)][_0x4e43c5(0x13e)]),oMessure[_0x4e43c5(0x178)][_0x4e43c5(0x127)](function(_0x2c7bd1){var _0x52f843=_0x4e43c5;(_0x4f732c=_0x3cf5c8[_0x52f843(0x136)][_0x52f843(0x153)](_0x2c7bd1[_0x52f843(0x182)]))&&0x2<=oMessure[_0x52f843(0x12b)]['length']&&(Cesium[_0x52f843(0x11f)](_0x5dbbe8)?(oMessure[_0x52f843(0x12b)][_0x52f843(0x140)](),oMessure[_0x52f843(0x12b)]['push'](_0x4f732c)):_0x5dbbe8=new _0x31a51b(oMessure[_0x52f843(0x12b)]));},Cesium[_0x4e43c5(0x13c)]['MOUSE_MOVE']),oMessure[_0x4e43c5(0x178)][_0x4e43c5(0x127)](function(_0x100567){var _0x3666d6=_0x4e43c5,_0x469480=function(_0x2ec0d1){var _0x3eaec5=_0xc58e;for(var _0x3192d3=0x0,_0x26f6ce=0x0;_0x26f6ce<_0x2ec0d1['length']-0x2;_0x26f6ce++){var _0x2bb07a=(_0x26f6ce+0x1)%_0x2ec0d1[_0x3eaec5(0x14c)],_0x36c109=(_0x26f6ce+0x2)%_0x2ec0d1[_0x3eaec5(0x14c)],_0x36c82=function(_0x44e9f5,_0x32a5b5,_0x367c21){return _0x44e9f5=_0xc98b72(_0x32a5b5,_0x44e9f5),_0x367c21=_0xc98b72(_0x32a5b5,_0x367c21),_0x367c21=_0x44e9f5-_0x367c21,_0x367c21<0x0&&(_0x367c21+=0x168),_0x367c21;}(_0x2ec0d1[_0x26f6ce],_0x2ec0d1[_0x2bb07a],_0x2ec0d1[_0x36c109]),_0x53e1d0=_0x575716(oMessure[_0x3eaec5(0x12b)][_0x26f6ce],oMessure[_0x3eaec5(0x12b)][_0x2bb07a]),_0x36c109=_0x575716(oMessure[_0x3eaec5(0x12b)][_0x2bb07a],oMessure[_0x3eaec5(0x12b)][_0x36c109]);_0x3192d3+=_0x53e1d0*_0x36c109*Math['abs'](Math[_0x3eaec5(0x179)](_0x36c82));}return _0x3192d3[_0x3eaec5(0x149)](0x2);}(_0x30b826)+'平方米',_0x58559f=oMessure[_0x3666d6(0x13b)][_0x3666d6(0x157)][_0x3666d6(0x14b)][_0x3666d6(0x171)](Cesium['JulianDate'][_0x3666d6(0x16a)]())['positions'],_0x58559f=Cesium['BoundingSphere'][_0x3666d6(0x152)](_0x58559f)[_0x3666d6(0x159)];oMessure[_0x3666d6(0x17b)]=_0x3cf5c8[_0x3666d6(0x16b)][_0x3666d6(0x172)]({'name':_0x3666d6(0x122),'position':_0x58559f,'label':{'text':_0x3666d6(0x164)+_0x469480,'font':_0x3666d6(0x165),'fillColor':Cesium[_0x3666d6(0x133)][_0x3666d6(0x16e)],'backgroundColor':new Cesium['Color']['fromBytes'](0x0,0x0,0x0,0x32),'showBackground':!0x0,'style':Cesium[_0x3666d6(0x17a)][_0x3666d6(0x130)],'outlineWidth':0x1,'verticalOrigin':Cesium[_0x3666d6(0x131)]['BOTTOM'],'heightReference':Cesium[_0x3666d6(0x14a)][_0x3666d6(0x121)]}}),oMessure[_0x3666d6(0x178)]['destroy'](),oMessure[_0x3666d6(0x178)]=void 0x0;},Cesium[_0x4e43c5(0x13c)][_0x4e43c5(0x137)]);var _0x31a51b=(_0x461684[_0x4e43c5(0x151)][_0x4e43c5(0x156)]=function(){var _0x139155=_0x4e43c5,_0x2e2a9f=this;this[_0x139155(0x13f)][_0x139155(0x157)]['hierarchy']=new Cesium['CallbackProperty'](function(){var _0x2600c0=_0x139155;return _0x2e2a9f[_0x2600c0(0x14b)];},!0x1),oMessure[_0x139155(0x13b)]=_0x3cf5c8[_0x139155(0x16b)][_0x139155(0x172)](this[_0x139155(0x13f)]);},_0x461684);function _0x461684(_0x441fb6){var _0x4c2b47=_0x4e43c5;this['options']={'name':_0x4c2b47(0x181),'polygon':{'hierarchy':[],'material':Cesium['Color']['RED'][_0x4c2b47(0x123)](0.3),'outline':!0x0,'outlineWidth':0x1,'outlineColor':Cesium[_0x4c2b47(0x133)][_0x4c2b47(0x141)]}},this[_0x4c2b47(0x14b)]={'positions':_0x441fb6},this['_init']();}var _0x43d385=Math['PI']/0xb4,_0x4dd85e=0xb4/Math['PI'];function _0xc98b72(_0x24c651,_0x59eddc){var _0x50de81=_0x4e43c5,_0x4b031e=_0x24c651[_0x50de81(0x128)]*_0x43d385,_0x364f56=_0x24c651['lon']*_0x43d385,_0x24c651=_0x59eddc[_0x50de81(0x128)]*_0x43d385,_0x59eddc=_0x59eddc[_0x50de81(0x150)]*_0x43d385,_0x59eddc=-Math['atan2'](Math[_0x50de81(0x179)](_0x364f56-_0x59eddc)*Math[_0x50de81(0x124)](_0x24c651),Math[_0x50de81(0x124)](_0x4b031e)*Math[_0x50de81(0x179)](_0x24c651)-Math[_0x50de81(0x179)](_0x4b031e)*Math[_0x50de81(0x124)](_0x24c651)*Math[_0x50de81(0x124)](_0x364f56-_0x59eddc));return _0x59eddc<0x0&&(_0x59eddc+=0x2*Math['PI']),_0x59eddc*=_0x4dd85e;}function _0x575716(_0x16b253,_0x5191c2){var _0x4f901b=_0x4e43c5,_0x474517=Cesium[_0x4f901b(0x17f)][_0x4f901b(0x138)](_0x16b253),_0x16b253=Cesium[_0x4f901b(0x17f)][_0x4f901b(0x138)](_0x5191c2),_0x5191c2=new Cesium[(_0x4f901b(0x154))]();return _0x5191c2[_0x4f901b(0x14d)](_0x474517,_0x16b253),_0x5191c2=_0x5191c2[_0x4f901b(0x183)],_0x5191c2=Math['sqrt'](Math[_0x4f901b(0x139)](_0x5191c2,0x2)+Math[_0x4f901b(0x139)](_0x16b253[_0x4f901b(0x17e)]-_0x474517[_0x4f901b(0x17e)],0x2));}},'messureHeight':function(){var _0x1bc733=_0xc58e,_0x11cede=oDefault['viewer'];oMessure['messureHandler']=new Cesium[(_0x1bc733(0x142))](_0x11cede['scene'][_0x1bc733(0x15f)]);var _0x17722c=null,_0x2fee67=0x0,_0x3ff130=null;function _0x3a17df(_0x2f5947){var _0x6809f9=_0x1bc733,_0x38176e=Cesium[_0x6809f9(0x17f)][_0x6809f9(0x138)](_0x2f5947[0x0]);return(Cesium[_0x6809f9(0x17f)][_0x6809f9(0x138)](_0x2f5947[0x1])[_0x6809f9(0x17e)]-_0x38176e[_0x6809f9(0x17e)])['toFixed'](0x2);}oMessure[_0x1bc733(0x178)][_0x1bc733(0x127)](function(_0x24aaf8){var _0x557035=_0x1bc733;(_0x3ff130=_0x11cede[_0x557035(0x136)]['pickPosition'](_0x24aaf8[_0x557035(0x182)]))&&0x2<=oMessure['positions'][_0x557035(0x14c)]&&(Cesium['defined'](_0x17722c)?(oMessure[_0x557035(0x12b)]['pop'](),oMessure[_0x557035(0x12b)][_0x557035(0x15e)](_0x3ff130)):_0x17722c=new _0x111b32(oMessure['positions']),_0x2fee67=_0x3a17df(oMessure['positions']));},Cesium[_0x1bc733(0x13c)][_0x1bc733(0x15c)]),oMessure[_0x1bc733(0x178)][_0x1bc733(0x127)](function(_0x4e737a){var _0x1a7755=_0x1bc733;(_0x3ff130=_0x11cede[_0x1a7755(0x136)][_0x1a7755(0x153)](_0x4e737a[_0x1a7755(0x148)]))&&0x0==oMessure[_0x1a7755(0x12b)][_0x1a7755(0x14c)]&&(_0x3ff130&&(oMessure[_0x1a7755(0x12b)]['push'](_0x3ff130[_0x1a7755(0x125)]()),oMessure[_0x1a7755(0x12b)][_0x1a7755(0x15e)](_0x3ff130)),oMessure['point1']=_0x11cede[_0x1a7755(0x16b)][_0x1a7755(0x172)]({'name':'高度','position':oMessure['positions'][0x0],'point':{'pixelSize':0x5,'color':Cesium[_0x1a7755(0x133)][_0x1a7755(0x141)][_0x1a7755(0x123)](0.3),'outlineColor':Cesium[_0x1a7755(0x133)][_0x1a7755(0x141)],'outlineWidth':0x1},'label':{'text':'0米','font':'12px','fillColor':Cesium[_0x1a7755(0x133)]['WHITE'],'backgroundColor':new Cesium[(_0x1a7755(0x133))][(_0x1a7755(0x129))](0x0,0x0,0x0,0x32),'showBackground':!0x0,'style':Cesium[_0x1a7755(0x17a)]['FILL'],'outlineWidth':0x1,'verticalOrigin':Cesium[_0x1a7755(0x131)][_0x1a7755(0x13d)],'pixelOffset':new Cesium[(_0x1a7755(0x173))](0x14,-0x14)}}));},Cesium[_0x1bc733(0x13c)][_0x1bc733(0x13e)]),oMessure[_0x1bc733(0x178)]['setInputAction'](function(_0x510427){var _0x1c0ab2=_0x1bc733;oMessure[_0x1c0ab2(0x178)][_0x1c0ab2(0x145)]();var _0xdcdfcc=_0x2fee67+'米',_0x1d2461=Cesium[_0x1c0ab2(0x17f)][_0x1c0ab2(0x138)](oMessure[_0x1c0ab2(0x12b)][0x0]),_0x44b86e=Cesium[_0x1c0ab2(0x17f)][_0x1c0ab2(0x138)](oMessure['positions'][0x1]),_0x44b86e=Cesium[_0x1c0ab2(0x134)][_0x1c0ab2(0x15d)](Cesium['Math'][_0x1c0ab2(0x16f)](_0x1d2461[_0x1c0ab2(0x15b)]),Cesium[_0x1c0ab2(0x12e)]['toDegrees'](_0x1d2461[_0x1c0ab2(0x16d)]),_0x44b86e[_0x1c0ab2(0x17e)]);oMessure[_0x1c0ab2(0x12f)]=_0x11cede['entities']['add']({'name':_0x1c0ab2(0x147),'position':_0x44b86e,'point':{'pixelSize':0x5,'color':Cesium[_0x1c0ab2(0x133)][_0x1c0ab2(0x141)][_0x1c0ab2(0x123)](0.3),'outlineColor':Cesium[_0x1c0ab2(0x133)][_0x1c0ab2(0x141)],'outlineWidth':0x1},'label':{'text':_0xdcdfcc,'font':'12px','fillColor':Cesium[_0x1c0ab2(0x133)][_0x1c0ab2(0x16e)],'backgroundColor':new Cesium['Color'][(_0x1c0ab2(0x129))](0x0,0x0,0x0,0x32),'showBackground':!0x0,'style':Cesium['LabelStyle'][_0x1c0ab2(0x130)],'outlineWidth':0x1,'verticalOrigin':Cesium[_0x1c0ab2(0x131)]['BOTTOM'],'pixelOffset':new Cesium[(_0x1c0ab2(0x173))](0x14,-0x14)}});},Cesium['ScreenSpaceEventType']['LEFT_DOUBLE_CLICK']);var _0x111b32=(_0x522f5d[_0x1bc733(0x151)]['_init']=function(){var _0x59da8d=_0x1bc733;function _0x20fc35(){var _0x826f2a=_0xc58e,_0x310b39=Cesium[_0x826f2a(0x17f)][_0x826f2a(0x138)](_0x45a379[_0x826f2a(0x12b)][0x0]),_0x131054=Cesium[_0x826f2a(0x17f)]['fromCartesian'](_0x45a379[_0x826f2a(0x12b)][0x1]),_0x43fd8b=new Cesium[(_0x826f2a(0x154))]();return _0x43fd8b['setEndPoints'](_0x310b39,_0x131054),_0x43fd8b[_0x826f2a(0x183)];}var _0x45a379=this;this[_0x59da8d(0x13f)][_0x59da8d(0x160)][_0x59da8d(0x12b)]=new Cesium[(_0x59da8d(0x17c))](function(){var _0x4c0769=_0x59da8d,_0x206787=[];_0x206787[_0x4c0769(0x15e)](_0x45a379['positions'][0x0]);var _0x384d53=Cesium[_0x4c0769(0x17f)][_0x4c0769(0x138)](_0x45a379[_0x4c0769(0x12b)][0x0]),_0x17ddc8=Cesium[_0x4c0769(0x17f)]['fromCartesian'](_0x45a379['positions'][0x1]),_0x17ddc8=Cesium[_0x4c0769(0x134)]['fromDegrees'](Cesium[_0x4c0769(0x12e)][_0x4c0769(0x16f)](_0x384d53[_0x4c0769(0x15b)]),Cesium[_0x4c0769(0x12e)][_0x4c0769(0x16f)](_0x384d53[_0x4c0769(0x16d)]),_0x17ddc8[_0x4c0769(0x17e)]);return _0x206787[_0x4c0769(0x15e)](_0x17ddc8),_0x206787;},!0x1),this[_0x59da8d(0x13f)][_0x59da8d(0x148)]=new Cesium[(_0x59da8d(0x17c))](function(){var _0x5d49fb=_0x59da8d;return _0x45a379[_0x5d49fb(0x12b)][0x0];},!0x1),this[_0x59da8d(0x13f)][_0x59da8d(0x14f)]['semiMinorAxis']=new Cesium['CallbackProperty'](_0x20fc35,!0x1),this[_0x59da8d(0x13f)][_0x59da8d(0x14f)][_0x59da8d(0x126)]=new Cesium[(_0x59da8d(0x17c))](_0x20fc35,!0x1),this[_0x59da8d(0x13f)][_0x59da8d(0x14f)][_0x59da8d(0x17e)]=new Cesium[(_0x59da8d(0x17c))](function(){var _0x2032c7=_0x59da8d;return _0x3a17df(_0x45a379[_0x2032c7(0x12b)]);},!0x1),oMessure[_0x59da8d(0x14e)]=_0x11cede[_0x59da8d(0x16b)]['add'](this['options']);},_0x522f5d);function _0x522f5d(_0x43e24c){var _0x361737=_0x1bc733;this[_0x361737(0x13f)]={'name':'直线','polyline':{'show':!0x0,'positions':[],'material':Cesium[_0x361737(0x133)][_0x361737(0x141)],'width':0x2},'ellipse':{'show':!0x1,'material':Cesium[_0x361737(0x133)]['RED']['withAlpha'](0.5),'outline':!0x0}},this['positions']=_0x43e24c,this['_init']();}},'onBindAllBtnClick':function(){var _0x23016d=_0xc58e;$(_0x23016d(0x175))['on'](_0x23016d(0x177),function(){var _0x10d36f=_0x23016d;oMessure[_0x10d36f(0x167)](),$(_0x10d36f(0x175))['is']('.pannel-btn-active')||($(_0x10d36f(0x175))[_0x10d36f(0x155)](_0x10d36f(0x174)),oMessure[_0x10d36f(0x16c)]());}),$(_0x23016d(0x12c))['on'](_0x23016d(0x177),function(){var _0x15d2f2=_0x23016d;oMessure[_0x15d2f2(0x167)](),$(_0x15d2f2(0x12c))['is'](_0x15d2f2(0x180))||($(_0x15d2f2(0x12c))[_0x15d2f2(0x155)](_0x15d2f2(0x174)),oMessure[_0x15d2f2(0x185)]());}),$(_0x23016d(0x146))['on'](_0x23016d(0x177),function(){var _0x1fe4d5=_0x23016d;$(_0x1fe4d5(0x146))['is'](_0x1fe4d5(0x180))||($('#messureHeight')['addClass'](_0x1fe4d5(0x174)),oMessure['messureHeight']());}),$(_0x23016d(0x120))['on'](_0x23016d(0x177),function(){var _0x4e89ac=_0x23016d;oMessure[_0x4e89ac(0x167)]();}),$(_0x23016d(0x135))['on']('click',function(){var _0x2b7dc1=_0x23016d;console[_0x2b7dc1(0x13a)]('12'),$(_0x2b7dc1(0x143))[_0x2b7dc1(0x162)](_0x2b7dc1(0x169)),$('#i-n-messure')[_0x2b7dc1(0x162)]('messure-active'),$('#messurePannel')[_0x2b7dc1(0x163)](_0x2b7dc1(0x12a),_0x2b7dc1(0x176));});},'clearMessure':function(){var _0x573274=_0xc58e,_0x26c4e3=oDefault[_0x573274(0x161)];$(_0x573274(0x175))['removeClass'](_0x573274(0x174)),$('#messureArea')[_0x573274(0x162)](_0x573274(0x174)),$('#messureHeight')[_0x573274(0x162)]('pannel-btn-active'),oMessure[_0x573274(0x178)]&&(oMessure['messureHandler'][_0x573274(0x145)](),oMessure[_0x573274(0x178)]=void 0x0),oMessure[_0x573274(0x13b)]&&(_0x26c4e3[_0x573274(0x16b)][_0x573274(0x144)](oMessure['currentPrimitive']),oMessure[_0x573274(0x13b)]=null),oMessure[_0x573274(0x170)][_0x573274(0x12d)](function(_0x44d135){_0x26c4e3['entities']['remove'](_0x44d135);}),oMessure['floatingPointArr']=[],oMessure[_0x573274(0x12b)]=[],oMessure[_0x573274(0x17b)]&&(_0x26c4e3[_0x573274(0x16b)][_0x573274(0x144)](oMessure[_0x573274(0x17b)]),oMessure['floatingPolygon']=null),oMessure['point1']&&(_0x26c4e3[_0x573274(0x16b)]['remove'](oMessure[_0x573274(0x15a)]),oMessure[_0x573274(0x15a)]=null),oMessure['point2']&&(_0x26c4e3[_0x573274(0x16b)][_0x573274(0x144)](oMessure[_0x573274(0x12f)]),oMessure[_0x573274(0x12f)]=null),oMessure['heightPolyline']&&(_0x26c4e3['entities'][_0x573274(0x144)](oMessure[_0x573274(0x14e)]),oMessure[_0x573274(0x14e)]=null);}},$(function(_0x2f83b4){oMessure['onBindAllBtnClick']();});