Ext.data.JsonP.Ext_grid_plugin_DragDrop({"tagname":"class","name":"Ext.grid.plugin.DragDrop","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"DragDrop.js","href":"DragDrop2.html#Ext-grid-plugin-DragDrop"}],"aliases":{"plugin":["gridviewdragdrop"]},"alternateClassNames":[],"extends":"Ext.plugin.Abstract","mixins":[],"requires":[],"uses":["Ext.grid.ViewDropZone","Ext.view.DragZone"],"members":[{"name":"containerScroll","tagname":"cfg","owner":"Ext.grid.plugin.DragDrop","id":"cfg-containerScroll","meta":{}},{"name":"ddGroup","tagname":"cfg","owner":"Ext.grid.plugin.DragDrop","id":"cfg-ddGroup","meta":{}},{"name":"dragGroup","tagname":"cfg","owner":"Ext.grid.plugin.DragDrop","id":"cfg-dragGroup","meta":{}},{"name":"dragText","tagname":"cfg","owner":"Ext.grid.plugin.DragDrop","id":"cfg-dragText","meta":{}},{"name":"dragZone","tagname":"cfg","owner":"Ext.grid.plugin.DragDrop","id":"cfg-dragZone","meta":{}},{"name":"dropGroup","tagname":"cfg","owner":"Ext.grid.plugin.DragDrop","id":"cfg-dropGroup","meta":{}},{"name":"dropZone","tagname":"cfg","owner":"Ext.grid.plugin.DragDrop","id":"cfg-dropZone","meta":{}},{"name":"enableDrag","tagname":"cfg","owner":"Ext.grid.plugin.DragDrop","id":"cfg-enableDrag","meta":{}},{"name":"enableDrop","tagname":"cfg","owner":"Ext.grid.plugin.DragDrop","id":"cfg-enableDrop","meta":{}},{"name":"dragZone","tagname":"property","owner":"Ext.grid.plugin.DragDrop","id":"property-dragZone","meta":{}},{"name":"dropZone","tagname":"property","owner":"Ext.grid.plugin.DragDrop","id":"property-dropZone","meta":{}},{"name":"destroy","tagname":"method","owner":"Ext.grid.plugin.DragDrop","id":"method-destroy","meta":{"private":true}},{"name":"disable","tagname":"method","owner":"Ext.grid.plugin.DragDrop","id":"method-disable","meta":{"private":true}},{"name":"enable","tagname":"method","owner":"Ext.grid.plugin.DragDrop","id":"method-enable","meta":{"private":true}},{"name":"onViewRender","tagname":"method","owner":"Ext.grid.plugin.DragDrop","id":"method-onViewRender","meta":{"private":true}},{"name":"beforedrop","tagname":"event","owner":"Ext.grid.plugin.DragDrop","id":"event-beforedrop","meta":{}},{"name":"drop","tagname":"event","owner":"Ext.grid.plugin.DragDrop","id":"event-drop","meta":{}}],"code_type":"ext_define","id":"class-Ext.grid.plugin.DragDrop","short_doc":"This plugin provides drag and/or drop functionality for a GridView. ...","component":false,"superclasses":["Ext.plugin.Abstract"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.plugin.Abstract<div class='subclass '><strong>Ext.grid.plugin.DragDrop</strong></div></div><h4>Uses</h4><div class='dependency'><a href='#!/api/Ext.grid.ViewDropZone' rel='Ext.grid.ViewDropZone' class='docClass'>Ext.grid.ViewDropZone</a></div><div class='dependency'><a href='#!/api/Ext.view.DragZone' rel='Ext.view.DragZone' class='docClass'>Ext.view.DragZone</a></div><h4>Files</h4><div class='dependency'><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop' target='_blank'>DragDrop.js</a></div></pre><div class='doc-contents'><p>This plugin provides drag and/or drop functionality for a <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">GridView</a>.</p>\n\n<p>It creates a specialized instance of <a href=\"#!/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a> which knows how to drag out of a <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">GridView</a> and loads the data object which is passed to a cooperating <a href=\"#!/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\nmethods with the following properties:</p>\n\n<ul>\n<li><p><code>copy</code> : Boolean</p>\n\n<p>The value of the <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">GridView</a>'s <code>copy</code> property, or <code>true</code> if the GridView was configured with <code>allowCopy: true</code> <em>and</em>\nthe control key was pressed when the drag operation was begun.</p></li>\n<li><p><code>view</code> : <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">GridView</a></p>\n\n<p>The source GridView from which the drag originated.</p></li>\n<li><p><code>ddel</code> : HTMLElement</p>\n\n<p>The drag proxy element which moves with the mouse</p></li>\n<li><p><code>item</code> : HTMLElement</p>\n\n<p>The GridView node upon which the mousedown event was registered.</p></li>\n<li><p><code>records</code> : Array</p>\n\n<p>An Array of Models representing the selected data being dragged from the source <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">GridView</a>.</p></li>\n</ul>\n\n\n<p>It also creates a specialized instance of <a href=\"#!/api/Ext.dd.DropZone\" rel=\"Ext.dd.DropZone\" class=\"docClass\">Ext.dd.DropZone</a> which cooperates with other DropZones which are\nmembers of the same ddGroup which processes such data objects.</p>\n\n<p>Adding this plugin to a view means that two new events may be fired from the client GridView, <code><a href=\"#!/api/Ext.grid.plugin.DragDrop-event-beforedrop\" rel=\"Ext.grid.plugin.DragDrop-event-beforedrop\" class=\"docClass\">beforedrop</a></code> and <code><a href=\"#!/api/Ext.grid.plugin.DragDrop-event-drop\" rel=\"Ext.grid.plugin.DragDrop-event-drop\" class=\"docClass\">drop</a></code></p>\n\n<pre class='inline-example '><code>Ext.create('Ext.data.Store', {\n    storeId:'simpsonsStore',\n    fields:['name'],\n    data: [[\"Lisa\"], [\"Bart\"], [\"Homer\"], [\"Marge\"]],\n    proxy: {\n        type: 'memory',\n        reader: 'array'\n    }\n});\n\nExt.create('<a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a>', {\n    store: 'simpsonsStore',\n    columns: [\n        {header: 'Name',  dataIndex: 'name', flex: true}\n    ],\n    viewConfig: {\n        plugins: {\n            ptype: 'gridviewdragdrop',\n            dragText: 'Drag and drop to reorganize'\n        }\n    },\n    height: 200,\n    width: 400,\n    renderTo: Ext.getBody()\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-containerScroll' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-containerScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-cfg-containerScroll' class='name expandable'>containerScroll</a> : Object/Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true to register this container with the Scrollmanager for auto scrolling during drag operations. ...</div><div class='long'><p><code>true</code> to register this container with the Scrollmanager for auto scrolling during drag operations.\nA <a href=\"#!/api/Ext.dd.ScrollManager\" rel=\"Ext.dd.ScrollManager\" class=\"docClass\">Ext.dd.ScrollManager</a> configuration may also be passed.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-ddGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-ddGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-cfg-ddGroup' class='name expandable'>ddGroup</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A named drag drop group to which this object belongs. ...</div><div class='long'><p>A named drag drop group to which this object belongs. If a group is specified, then both the DragZones and\nDropZone used by this plugin will only interact with other drag drop objects in the same group.</p>\n<p>Defaults to: <code>gridDD</code></p></div></div></div><div id='cfg-dragGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-dragGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-cfg-dragGroup' class='name expandable'>dragGroup</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The ddGroup to which the DragZone will belong. ...</div><div class='long'><p>The <a href=\"#!/api/Ext.grid.plugin.DragDrop-cfg-ddGroup\" rel=\"Ext.grid.plugin.DragDrop-cfg-ddGroup\" class=\"docClass\">ddGroup</a> to which the DragZone will belong.</p>\n\n<p>This defines which other DropZones the DragZone will interact with. Drag/DropZones only interact with other\nDrag/DropZones which are members of the same <a href=\"#!/api/Ext.grid.plugin.DragDrop-cfg-ddGroup\" rel=\"Ext.grid.plugin.DragDrop-cfg-ddGroup\" class=\"docClass\">ddGroup</a>.</p>\n</div></div></div><div id='cfg-dragText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-dragText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-cfg-dragText' class='name expandable'>dragText</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The text to show while dragging. ...</div><div class='long'><p>The text to show while dragging.</p>\n\n<p>Two placeholders can be used in the text:</p>\n\n<ul>\n<li><code>{0}</code> The number of selected items.</li>\n<li><code>{1}</code> 's' when more than 1 items (only useful for English).</li>\n</ul>\n\n<p>Defaults to: <code>&#39;{0} selected row{1}&#39;</code></p></div></div></div><div id='cfg-dragZone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-dragZone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-cfg-dragZone' class='name expandable'>dragZone</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>A config object to apply to the creation of the DragZone which handles for drag start gestures. ...</div><div class='long'><p>A config object to apply to the creation of the <a href=\"#!/api/Ext.grid.plugin.DragDrop-property-dragZone\" rel=\"Ext.grid.plugin.DragDrop-property-dragZone\" class=\"docClass\">DragZone</a> which handles for drag start gestures.</p>\n\n<p>Template methods of the DragZone may be overridden using this config.</p>\n</div></div></div><div id='cfg-dropGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-dropGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-cfg-dropGroup' class='name expandable'>dropGroup</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The ddGroup to which the DropZone will belong. ...</div><div class='long'><p>The <a href=\"#!/api/Ext.grid.plugin.DragDrop-cfg-ddGroup\" rel=\"Ext.grid.plugin.DragDrop-cfg-ddGroup\" class=\"docClass\">ddGroup</a> to which the DropZone will belong.</p>\n\n<p>This defines which other DragZones the DropZone will interact with. Drag/DropZones only interact with other\nDrag/DropZones which are members of the same <a href=\"#!/api/Ext.grid.plugin.DragDrop-cfg-ddGroup\" rel=\"Ext.grid.plugin.DragDrop-cfg-ddGroup\" class=\"docClass\">ddGroup</a>.</p>\n</div></div></div><div id='cfg-dropZone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-dropZone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-cfg-dropZone' class='name expandable'>dropZone</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>A config object to apply to the creation of the DropZone which handles mouseover and drop gestures. ...</div><div class='long'><p>A config object to apply to the creation of the <a href=\"#!/api/Ext.grid.plugin.DragDrop-property-dropZone\" rel=\"Ext.grid.plugin.DragDrop-property-dropZone\" class=\"docClass\">DropZone</a> which handles mouseover and drop gestures.</p>\n\n<p>Template methods of the DropZone may be overridden using this config.</p>\n</div></div></div><div id='cfg-enableDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-enableDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-cfg-enableDrag' class='name expandable'>enableDrag</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>false to disallow dragging items from the View. ...</div><div class='long'><p><code>false</code> to disallow dragging items from the View.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-enableDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-enableDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-cfg-enableDrop' class='name expandable'>enableDrop</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>false to disallow the View from accepting drop gestures. ...</div><div class='long'><p><code>false</code> to disallow the View from accepting drop gestures.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-dragZone' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-property-dragZone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-property-dragZone' class='name expandable'>dragZone</a> : <a href=\"#!/api/Ext.view.DragZone\" rel=\"Ext.view.DragZone\" class=\"docClass\">Ext.view.DragZone</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>An <a href=\"#!/api/Ext.view.DragZone\" rel=\"Ext.view.DragZone\" class=\"docClass\">DragZone</a> which handles mousedown and dragging of records from the grid.</p>\n</div><div class='long'><p>An <a href=\"#!/api/Ext.view.DragZone\" rel=\"Ext.view.DragZone\" class=\"docClass\">DragZone</a> which handles mousedown and dragging of records from the grid.</p>\n</div></div></div><div id='property-dropZone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-property-dropZone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-property-dropZone' class='name expandable'>dropZone</a> : <a href=\"#!/api/Ext.grid.ViewDropZone\" rel=\"Ext.grid.ViewDropZone\" class=\"docClass\">Ext.grid.ViewDropZone</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>An <a href=\"#!/api/Ext.grid.ViewDropZone\" rel=\"Ext.grid.ViewDropZone\" class=\"docClass\">DropZone</a> which handles mouseover and dropping records in any grid which shares the same <a href=\"#!/api/Ext.grid.plugin.DragDrop-cfg-dropGroup\" rel=\"Ext.grid.plugin.DragDrop-cfg-dropGroup\" class=\"docClass\">dropGroup</a>.</p>\n</div><div class='long'><p>An <a href=\"#!/api/Ext.grid.ViewDropZone\" rel=\"Ext.grid.ViewDropZone\" class=\"docClass\">DropZone</a> which handles mouseover and dropping records in any grid which shares the same <a href=\"#!/api/Ext.grid.plugin.DragDrop-cfg-dropGroup\" rel=\"Ext.grid.plugin.DragDrop-cfg-dropGroup\" class=\"docClass\">dropGroup</a>.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Component calls destroy on all its plugins at destroy time. ...</div><div class='long'><p>Component calls destroy on all its plugins at destroy time.</p>\n</div></div></div><div id='method-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onViewRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-method-onViewRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-method-onViewRender' class='name expandable'>onViewRender</a>( <span class='pre'>view</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-beforedrop' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-event-beforedrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-event-beforedrop' class='name expandable'>beforedrop</a>( <span class='pre'>node, data, overModel, dropPosition, dropHandlers, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This event is fired through the GridView. ...</div><div class='long'><p><strong>This event is fired through the GridView. Add listeners to the <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">GridView</a> object</strong></p>\n\n<p>Fired when a drop gesture has been triggered by a mouseup event in a valid drop position in the GridView.</p>\n\n<p>Returning <code>false</code> to this event signals that the drop gesture was invalid, and if the drag proxy will animate\nback to the point from which the drag began.</p>\n\n<p>The dropHandlers parameter can be used to defer the processing of this event. For example to wait for the result of\na message box confirmation or an asynchronous server call. See the details of this property for more information.</p>\n\n<pre class='inline-example '><code>view.on('beforedrop', function(node, data, overModel, dropPosition, dropHandlers) {\n    // Defer the handling\n    dropHandlers.wait = true;\n    <a href=\"#!/api/Ext.MessageBox-method-confirm\" rel=\"Ext.MessageBox-method-confirm\" class=\"docClass\">Ext.MessageBox.confirm</a>('Drop', 'Are you sure', function(btn){\n        if (btn === 'yes') {\n            dropHandlers.processDrop();\n        } else {\n            dropHandlers.cancelDrop();\n        }\n    });\n});\n</code></pre>\n\n<p>Any other return value continues with the data transfer operation, unless the wait property is set.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : HTMLElement<div class='sub-desc'><p>The <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">GridView</a> node <strong>if any</strong> over which the mouse was positioned.</p>\n\n<p>Any other return value continues with the data transfer operation.</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data object gathered at mousedown time by the cooperating\n<a href=\"#!/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s <a href=\"#!/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following\nproperties:</p>\n<ul><li><span class='pre'>copy</span> : Boolean<div class='sub-desc'><p>The value of the GridView's <code>copy</code> property, or <code>true</code> if the GridView was configured with\n<code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</p>\n</div></li><li><span class='pre'>view</span> : <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">Ext.grid.View</a><div class='sub-desc'><p>The source GridView from which the drag originated.</p>\n</div></li><li><span class='pre'>ddel</span> : HTMLElement<div class='sub-desc'><p>The drag proxy element which moves with the mouse</p>\n</div></li><li><span class='pre'>item</span> : HTMLElement<div class='sub-desc'><p>The GridView node upon which the mousedown event was registered.</p>\n</div></li><li><span class='pre'>records</span> : Ext.data.Model[]<div class='sub-desc'><p>An Array of Models representing the selected data being\ndragged from the source GridView.</p>\n</div></li></ul></div></li><li><span class='pre'>overModel</span> : Ext.data.Model<div class='sub-desc'><p>The Model over which the drop gesture took place.</p>\n</div></li><li><span class='pre'>dropPosition</span> : String<div class='sub-desc'><p><code>\"before\"</code> or <code>\"after\"</code> depending on whether the mouse is above or below the midline\nof the node.</p>\n</div></li><li><span class='pre'>dropHandlers</span> : Object<div class='sub-desc'><p>This parameter allows the developer to control when the drop action takes place. It is useful if any asynchronous\nprocessing needs to be completed before performing the drop. This object has the following properties:</p>\n<ul><li><span class='pre'>wait</span> : Boolean<div class='sub-desc'><p>Indicates whether the drop should be deferred. Set this property to true to defer the drop.</p>\n</div></li><li><span class='pre'>processDrop</span> : Function<div class='sub-desc'><p>A function to be called to complete the drop operation.</p>\n</div></li><li><span class='pre'>cancelDrop</span> : Function<div class='sub-desc'><p>A function to be called to cancel the drop operation.</p>\n</div></li></ul></div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-drop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.DragDrop'>Ext.grid.plugin.DragDrop</span><br/><a href='source/DragDrop2.html#Ext-grid-plugin-DragDrop-event-drop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.DragDrop-event-drop' class='name expandable'>drop</a>( <span class='pre'>node, data, overModel, dropPosition, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This event is fired through the GridView. ...</div><div class='long'><p><strong>This event is fired through the GridView. Add listeners to the GridView object</strong> Fired when a drop operation\nhas been completed and the data has been moved or copied.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : HTMLElement<div class='sub-desc'><p>The GridView node <strong>if any</strong> over which the mouse was positioned.</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data object gathered at mousedown time by the cooperating <a href=\"#!/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s <a href=\"#!/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:</p>\n\n<ul>\n<li><p><code>copy</code> : Boolean</p>\n\n<p>The value of the GridView's <code>copy</code> property, or <code>true</code> if the GridView was configured with <code>allowCopy: true</code> and\nthe control key was pressed when the drag operation was begun</p></li>\n<li><p><code>view</code> : <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">GridView</a></p>\n\n<p>The source GridView from which the drag originated.</p></li>\n<li><p><code>ddel</code> : HTMLElement</p>\n\n<p>The drag proxy element which moves with the mouse</p></li>\n<li><p><code>item</code> : HTMLElement</p>\n\n<p>The <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">GridView</a><a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">GridView</a> node upon which the mousedown event was registered.</p></li>\n<li><p><code>records</code> : Array</p>\n\n<p>An Array of Models representing the selected data being dragged from the source GridView.</p></li>\n</ul>\n\n</div></li><li><span class='pre'>overModel</span> : Ext.data.Model<div class='sub-desc'><p>The Model over which the drop gesture took place.</p>\n</div></li><li><span class='pre'>dropPosition</span> : String<div class='sub-desc'><p><code>\"before\"</code> or <code>\"after\"</code> depending on whether the mouse is above or below the midline\nof the node.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});