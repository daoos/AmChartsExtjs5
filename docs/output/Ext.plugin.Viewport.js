Ext.data.JsonP.Ext_plugin_Viewport({"tagname":"class","name":"Ext.plugin.Viewport","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Viewport.js","href":"Viewport2.html#Ext-plugin-Viewport"}],"since":"5.0.0","aliases":{"plugin":["viewport"]},"alternateClassNames":[],"extends":"Ext.plugin.Responsive","mixins":[],"requires":[],"uses":[],"members":[{"name":"maxUserScale","tagname":"cfg","owner":"Ext.plugin.Viewport","id":"cfg-maxUserScale","meta":{}},{"name":"isPlugin","tagname":"property","owner":"Ext.plugin.Responsive","id":"property-isPlugin","meta":{"private":true}},{"name":"pluginId","tagname":"property","owner":"Ext.plugin.Responsive","id":"property-pluginId","meta":{"private":true}},{"name":"privates","tagname":"property","owner":"Ext.plugin.Viewport","id":"property-privates","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Ext.plugin.Responsive","id":"method-constructor","meta":{}},{"name":"init","tagname":"method","owner":"Ext.plugin.Responsive","id":"method-init","meta":{"private":true}},{"name":"decorate","tagname":"method","owner":"Ext.plugin.Viewport","id":"static-method-decorate","meta":{"private":true,"static":true}}],"code_type":"ext_define","id":"class-Ext.plugin.Viewport","short_doc":"This plugin can be applied to any Component (although almost always to a Container)\nto make it fill the browser viewp...","component":false,"superclasses":["Ext.mixin.Responsive","Ext.plugin.Responsive"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.mixin.Responsive<div class='subclass '><a href='#!/api/Ext.plugin.Responsive' rel='Ext.plugin.Responsive' class='docClass'>Ext.plugin.Responsive</a><div class='subclass '><strong>Ext.plugin.Viewport</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Viewport2.html#Ext-plugin-Viewport' target='_blank'>Viewport.js</a></div></pre><div class='doc-contents'><p>This plugin can be applied to any <code>Component</code> (although almost always to a <code>Container</code>)\nto make it fill the browser viewport. This plugin is used internally by the more familiar\n<code><a href=\"#!/api/Ext.container.Viewport\" rel=\"Ext.container.Viewport\" class=\"docClass\">Ext.container.Viewport</a></code> class.</p>\n\n<p>The <code>Viewport</code> container is commonly used but it can be an issue if you need to fill the\nviewport with a container that derives from another class (e.g., <code><a href=\"#!/api/Ext.tab.Panel\" rel=\"Ext.tab.Panel\" class=\"docClass\">Ext.tab.Panel</a></code>). Prior\nto this plugin, you would have to do this:</p>\n\n<pre><code> Ext.create('<a href=\"#!/api/Ext.container.Viewport\" rel=\"Ext.container.Viewport\" class=\"docClass\">Ext.container.Viewport</a>', {\n     layout: 'fit', // full the viewport with the tab panel\n\n     items: [{\n         xtype: 'tabpanel',\n         items: [{\n             ...\n         }]\n     }]\n });\n</code></pre>\n\n<p>With this plugin you can create the <code>tabpanel</code> as the viewport:</p>\n\n<pre><code> Ext.create('<a href=\"#!/api/Ext.tab.Panel\" rel=\"Ext.tab.Panel\" class=\"docClass\">Ext.tab.Panel</a>', {\n     plugins: 'viewport',\n\n     items: [{\n         ...\n     }]\n });\n</code></pre>\n\n<p>More importantly perhaps is that as a plugin, the view class can be reused in other\ncontexts such as the content of a <code><a href=\"#!/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">window</a></code>.</p>\n\n<p>The Viewport renders itself to the document body, and automatically sizes itself to the size of\nthe browser viewport and manages window resizing. There may only be one Viewport created\nin a page.</p>\n\n<h2>Responsive Design</h2>\n\n<p>This plugin enables Ext.mixin.Responsive.responsiveConfig for the target component.</p>\n        <p>Available since: <b>5.0.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-maxUserScale' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.plugin.Viewport'>Ext.plugin.Viewport</span><br/><a href='source/Viewport2.html#Ext-plugin-Viewport-cfg-maxUserScale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.Viewport-cfg-maxUserScale' class='name expandable'>maxUserScale</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The maximum zoom scale. ...</div><div class='long'><p>The maximum zoom scale. Only applicable for touch devices. Set this to 1 to\ndisable zooming.  Setting this to any value other than \"1\" will disable all\nmulti-touch gestures.</p>\n<p>Defaults to: <code>1</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isPlugin' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.Responsive' rel='Ext.plugin.Responsive' class='defined-in docClass'>Ext.plugin.Responsive</a><br/><a href='source/Responsive.html#Ext-plugin-Responsive-property-isPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.Responsive-property-isPlugin' class='name expandable'>isPlugin</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-pluginId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.Responsive' rel='Ext.plugin.Responsive' class='defined-in docClass'>Ext.plugin.Responsive</a><br/><a href='source/Responsive.html#Ext-plugin-Responsive-property-pluginId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.Responsive-property-pluginId' class='name expandable'>pluginId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;responsive&#39;</code></p></div></div></div><div id='property-privates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.plugin.Viewport'>Ext.plugin.Viewport</span><br/><a href='source/Viewport2.html#Ext-plugin-Viewport-property-privates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.Viewport-property-privates' class='name expandable'>privates</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/Ext.plugin.Responsive-property-privates\" rel=\"Ext.plugin.Responsive-property-privates\" class=\"docClass\">Ext.plugin.Responsive.privates</a></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.Responsive' rel='Ext.plugin.Responsive' class='defined-in docClass'>Ext.plugin.Responsive</a><br/><a href='source/Responsive.html#Ext-plugin-Responsive-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.plugin.Responsive-method-constructor' class='name expandable'>Ext.plugin.Viewport</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.plugin.Responsive\" rel=\"Ext.plugin.Responsive\" class=\"docClass\">Ext.plugin.Responsive</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.plugin.Responsive\" rel=\"Ext.plugin.Responsive\" class=\"docClass\">Ext.plugin.Responsive</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.Responsive' rel='Ext.plugin.Responsive' class='defined-in docClass'>Ext.plugin.Responsive</a><br/><a href='source/Responsive.html#Ext-plugin-Responsive-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.Responsive-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-decorate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.plugin.Viewport'>Ext.plugin.Viewport</span><br/><a href='source/Viewport2.html#Ext-plugin-Viewport-static-method-decorate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.Viewport-static-method-decorate' class='name expandable'>decorate</a>( <span class='pre'>target</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});