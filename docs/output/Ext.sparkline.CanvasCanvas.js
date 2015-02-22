Ext.data.JsonP.Ext_sparkline_CanvasCanvas({"tagname":"class","name":"Ext.sparkline.CanvasCanvas","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"CanvasCanvas.js","href":"CanvasCanvas.html#Ext-sparkline-CanvasCanvas"}],"private":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.sparkline.CanvasBase","mixins":[],"requires":[],"uses":[],"members":[{"name":"constructor","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-constructor","meta":{}},{"name":"_drawCircle","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-_drawCircle","meta":{"private":true}},{"name":"_drawPieSlice","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-_drawPieSlice","meta":{"private":true}},{"name":"_drawRect","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-_drawRect","meta":{"private":true}},{"name":"_drawShape","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-_drawShape","meta":{"private":true}},{"name":"_getContext","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-_getContext","meta":{"private":true}},{"name":"appendShape","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-appendShape","meta":{"private":true}},{"name":"getShapeAt","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-getShapeAt","meta":{"private":true}},{"name":"insertAfterShape","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-insertAfterShape","meta":{"private":true}},{"name":"onOwnerUpdate","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-onOwnerUpdate","meta":{"private":true}},{"name":"removeShapeId","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-removeShapeId","meta":{"private":true}},{"name":"render","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-render","meta":{"private":true}},{"name":"replaceWithShape","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-replaceWithShape","meta":{"private":true}},{"name":"replaceWithShapes","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-replaceWithShapes","meta":{"private":true}},{"name":"reset","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-reset","meta":{"private":true}},{"name":"setHeight","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-setHeight","meta":{"private":true}},{"name":"setWidth","tagname":"method","owner":"Ext.sparkline.CanvasCanvas","id":"method-setWidth","meta":{"private":true}}],"code_type":"ext_define","id":"class-Ext.sparkline.CanvasCanvas","component":false,"superclasses":["Ext.sparkline.CanvasBase"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.sparkline.CanvasBase<div class='subclass '><strong>Ext.sparkline.CanvasCanvas</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas' target='_blank'>CanvasCanvas.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.sparkline.CanvasCanvas-method-constructor' class='name expandable'>Ext.sparkline.CanvasCanvas</a>( <span class='pre'>ownerSparkLine</span> ) : <a href=\"#!/api/Ext.sparkline.CanvasCanvas\" rel=\"Ext.sparkline.CanvasCanvas\" class=\"docClass\">Ext.sparkline.CanvasCanvas</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ownerSparkLine</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.sparkline.CanvasCanvas\" rel=\"Ext.sparkline.CanvasCanvas\" class=\"docClass\">Ext.sparkline.CanvasCanvas</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_drawCircle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-_drawCircle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-_drawCircle' class='name expandable'>_drawCircle</a>( <span class='pre'>shapeid, x, y, radius, lineColor, fillColor, lineWidth</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>shapeid</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>x</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>radius</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>lineColor</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>fillColor</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>lineWidth</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-_drawPieSlice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-_drawPieSlice' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-_drawPieSlice' class='name expandable'>_drawPieSlice</a>( <span class='pre'>shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>shapeid</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>x</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>radius</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>startAngle</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>endAngle</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>lineColor</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>fillColor</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-_drawRect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-_drawRect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-_drawRect' class='name expandable'>_drawRect</a>( <span class='pre'>shapeid, x, y, width, height, lineColor, fillColor</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>shapeid</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>x</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>width</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>height</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>lineColor</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>fillColor</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-_drawShape' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-_drawShape' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-_drawShape' class='name expandable'>_drawShape</a>( <span class='pre'>shapeid, path, lineColor, fillColor, lineWidth</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>shapeid</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>path</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>lineColor</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>fillColor</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>lineWidth</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-_getContext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-_getContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-_getContext' class='name expandable'>_getContext</a>( <span class='pre'>lineColor, fillColor, lineWidth</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lineColor</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>fillColor</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>lineWidth</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-appendShape' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-appendShape' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-appendShape' class='name expandable'>appendShape</a>( <span class='pre'>shape</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>shape</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getShapeAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-getShapeAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-getShapeAt' class='name expandable'>getShapeAt</a>( <span class='pre'>x, y</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-insertAfterShape' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-insertAfterShape' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-insertAfterShape' class='name expandable'>insertAfterShape</a>( <span class='pre'>shapeid, shape</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>shapeid</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>shape</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onOwnerUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-onOwnerUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-onOwnerUpdate' class='name expandable'>onOwnerUpdate</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-removeShapeId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-removeShapeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-removeShapeId' class='name expandable'>removeShapeId</a>( <span class='pre'>shapeid</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>shapeid</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-render' class='name expandable'>render</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-replaceWithShape' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-replaceWithShape' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-replaceWithShape' class='name expandable'>replaceWithShape</a>( <span class='pre'>shapeid, shape</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>shapeid</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>shape</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-replaceWithShapes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-replaceWithShapes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-replaceWithShapes' class='name expandable'>replaceWithShapes</a>( <span class='pre'>shapeids, shapes</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>shapeids</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>shapes</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-setHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-setHeight' class='name expandable'>setHeight</a>( <span class='pre'>height</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>height</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.sparkline.CanvasCanvas'>Ext.sparkline.CanvasCanvas</span><br/><a href='source/CanvasCanvas.html#Ext-sparkline-CanvasCanvas-method-setWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.sparkline.CanvasCanvas-method-setWidth' class='name expandable'>setWidth</a>( <span class='pre'>width</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>width</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});