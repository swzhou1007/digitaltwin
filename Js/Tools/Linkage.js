var _0x41c2=['Rectangle','getElementById','linkFlag','toRadians','openlayers','fovy','camera','globe','toDegrees','getHeight','Cartesian3','contentWindow','log','cartesianToCartographic','WGS84','Ellipsoid','display','getCameradistanceToCenter','viewer','center','clientWidth','pick','setView','none','clientHeight','frustum','latitude','sgworld_3D_Linkage_2D','positionCartographic','getPickRay','Math','canvas','getLevelUseDistance','tan','clone','pickCenterPoint','scene','distance','pickOnTerrainOrEllipsoid','log2','fromDegrees','#linkage'];(function(_0x26afca,_0x35be73){var _0x41c26f=function(_0xe84a3e){while(--_0xe84a3e){_0x26afca['push'](_0x26afca['shift']());}};_0x41c26f(++_0x35be73);}(_0x41c2,0x14c));var _0xe84a=function(_0x26afca,_0x35be73){_0x26afca=_0x26afca-0xb9;var _0x41c26f=_0x41c2[_0x26afca];return _0x41c26f;};'use strict';oLinkage={'linkFlag':!0x1,'sgworld_2D_Linkage_3D':function(_0xdd9da4,_0x5b761c,_0x32fab7,_0x1e9e57){var _0x1c0952=_0xe84a,_0x337686=oDefault[_0x1c0952(0xcf)],_0x3f7cfb=oLinkage['getCameradistanceToCenter'](),_0x3f7cfb=oLinkage[_0x1c0952(0xdd)](_0x3f7cfb['distance']);console['log']('level:'+_0x3f7cfb),console[_0x1c0952(0xc9)](_0xdd9da4,_0x5b761c,_0x32fab7,_0x1e9e57),oLinkage[_0x1c0952(0xbf)]=!0x1,_0x337686[_0x1c0952(0xc3)][_0x1c0952(0xd3)]({'destination':Cesium[_0x1c0952(0xbd)][_0x1c0952(0xbb)](_0xdd9da4,_0x5b761c,_0x32fab7,_0x1e9e57),'orientation':{'heading':Cesium['Math'][_0x1c0952(0xc0)](0x0),'pitch':Cesium['Math'][_0x1c0952(0xc0)](-0x5a),'roll':0x0}});},'getCameradistanceToCenter':function(){var _0x51e8b4=_0xe84a,_0x2ece57,_0x51a45e=oDefault['viewer'],_0x653271=Cesium['Ellipsoid'][_0x51e8b4(0xcb)],_0x2549e0=_0x51a45e[_0x51e8b4(0xe1)],_0x2169ab=oLinkage[_0x51e8b4(0xe0)](_0x2549e0);return _0x2169ab||(_0x2ece57=_0x2549e0[_0x51e8b4(0xc4)],_0x2549e0=_0x51a45e[_0x51e8b4(0xc3)][_0x51e8b4(0xd9)][_0x51e8b4(0xdf)](),_0x2ece57=_0x2ece57[_0x51e8b4(0xc6)](_0x2549e0),_0x2549e0['height']=_0x2ece57||0x0,_0x2169ab=Cesium[_0x51e8b4(0xcc)][_0x51e8b4(0xcb)]['cartographicToCartesian'](_0x2549e0)),{'distance':Cesium[_0x51e8b4(0xc7)][_0x51e8b4(0xe2)](_0x2169ab,_0x51a45e[_0x51e8b4(0xc3)]['position']),'center':_0x653271[_0x51e8b4(0xca)](_0x2169ab)};},'pickCenterPoint':function(_0x2b5a1b){var _0x2ae75f=_0xe84a,_0x4c0415=_0x2b5a1b[_0x2ae75f(0xdc)],_0x4c0415=new Cesium['Cartesian2'](_0x4c0415[_0x2ae75f(0xd1)]/0x2,_0x4c0415[_0x2ae75f(0xd5)]/0x2);return oLinkage[_0x2ae75f(0xb9)](_0x2b5a1b,_0x4c0415);},'pickOnTerrainOrEllipsoid':function(_0x3283d7,_0x4d7824){var _0x3fe274=_0xe84a,_0x5a474d=_0x3283d7[_0x3fe274(0xc3)][_0x3fe274(0xda)](_0x4d7824);return _0x3283d7['globe'][_0x3fe274(0xd2)](_0x5a474d,_0x3283d7)||_0x3283d7[_0x3fe274(0xc3)]['pickEllipsoid'](_0x4d7824);},'getLevelUseDistance':function(_0x472a3c){var _0x8c718d=_0xe84a,_0xcc3756=oDefault[_0x8c718d(0xcf)],_0x472a3c=_0x472a3c;return _0x472a3c<0x1&&(_0x472a3c=0x1),Math[_0x8c718d(0xba)](Math['PI']*_0xcc3756[_0x8c718d(0xdc)][_0x8c718d(0xd1)]*0x615299/(0x100*_0x472a3c*Math[_0x8c718d(0xde)](_0xcc3756[_0x8c718d(0xc3)][_0x8c718d(0xd6)][_0x8c718d(0xc2)]/0x2)));},'closeLinkage':function(){var _0x29259d=_0xe84a;$(_0x29259d(0xbc))['css'](_0x29259d(0xcd),_0x29259d(0xd4));}},$(function(_0x141ab6){var _0x16b24f=_0xe84a;oDefault['viewer'][_0x16b24f(0xc3)]['moveEnd']['addEventListener'](function(){var _0x8bea7c=_0x16b24f,_0x384835,_0x4119b4;oLinkage[_0x8bea7c(0xbf)]?(Cesium[_0x8bea7c(0xcc)][_0x8bea7c(0xcb)][_0x8bea7c(0xca)](oLinkage[_0x8bea7c(0xe0)](oDefault[_0x8bea7c(0xcf)]['scene'])),_0x384835=oLinkage[_0x8bea7c(0xce)](),_0x4119b4=oLinkage['getLevelUseDistance'](_0x384835[_0x8bea7c(0xe2)]),_0x4119b4={'lon':Cesium[_0x8bea7c(0xdb)][_0x8bea7c(0xc5)](_0x384835['center']['longitude']),'lat':Cesium[_0x8bea7c(0xdb)][_0x8bea7c(0xc5)](_0x384835[_0x8bea7c(0xd0)][_0x8bea7c(0xd7)]),'level':_0x4119b4},document['getElementById'](_0x8bea7c(0xc1))&&document[_0x8bea7c(0xbe)](_0x8bea7c(0xc1))[_0x8bea7c(0xc8)][_0x8bea7c(0xd8)](_0x4119b4)):oLinkage[_0x8bea7c(0xbf)]=!0x0;});});