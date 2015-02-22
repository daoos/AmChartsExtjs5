Ext.data.JsonP.Ext_fx_target_CompositeElementCSS({"tagname":"class","name":"Ext.fx.target.CompositeElementCSS","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"CompositeElementCSS.js","href":"CompositeElementCSS.html#Ext-fx-target-CompositeElementCSS"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.fx.target.CompositeElement","mixins":[],"requires":["Ext.fx.target.ElementCSS"],"uses":[],"members":[{"name":"isAnimTarget","tagname":"property","owner":"Ext.fx.target.Target","id":"property-isAnimTarget","meta":{"private":true}},{"name":"isComposite","tagname":"property","owner":"Ext.fx.target.CompositeElement","id":"property-isComposite","meta":{}},{"name":"type","tagname":"property","owner":"Ext.fx.target.Element","id":"property-type","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Ext.fx.target.CompositeElement","id":"method-constructor","meta":{}},{"name":"getAttr","tagname":"method","owner":"Ext.fx.target.CompositeElement","id":"method-getAttr","meta":{"private":true}},{"name":"getElVal","tagname":"method","owner":"Ext.fx.target.Element","id":"method-getElVal","meta":{"private":true}},{"name":"getId","tagname":"method","owner":"Ext.fx.target.Target","id":"method-getId","meta":{"private":true}},{"name":"remove","tagname":"method","owner":"Ext.fx.target.CompositeElement","id":"method-remove","meta":{"private":true}},{"name":"setAttr","tagname":"method","owner":"Ext.fx.target.CompositeElementCSS","id":"method-setAttr","meta":{"private":true}},{"name":"setElVal","tagname":"method","owner":"Ext.fx.target.Element","id":"method-setElVal","meta":{"private":true}}],"code_type":"ext_define","id":"class-Ext.fx.target.CompositeElementCSS","short_doc":"This class represents a animation target for a Ext.CompositeElement, where the\nconstituent elements support CSS based...","component":false,"superclasses":["Ext.Base","Ext.fx.target.Target","Ext.fx.target.Element","Ext.fx.target.CompositeElement"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.fx.target.Target' rel='Ext.fx.target.Target' class='docClass'>Ext.fx.target.Target</a><div class='subclass '><a href='#!/api/Ext.fx.target.Element' rel='Ext.fx.target.Element' class='docClass'>Ext.fx.target.Element</a><div class='subclass '><a href='#!/api/Ext.fx.target.CompositeElement' rel='Ext.fx.target.CompositeElement' class='docClass'>Ext.fx.target.CompositeElement</a><div class='subclass '><strong>Ext.fx.target.CompositeElementCSS</strong></div></div></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.fx.target.ElementCSS' rel='Ext.fx.target.ElementCSS' class='docClass'>Ext.fx.target.ElementCSS</a></div><h4>Files</h4><div class='dependency'><a href='source/CompositeElementCSS.html#Ext-fx-target-CompositeElementCSS' target='_blank'>CompositeElementCSS.js</a></div></pre><div class='doc-contents'><p>This class represents a animation target for a Ext.CompositeElement, where the\nconstituent elements support CSS based animation. It allows each Ext.dom.Element in\nthe group to be animated as a whole. In general this class will not be created directly,\nthe Ext.CompositeElement will be passed to the animation and the appropriate target\nwill be created.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isAnimTarget' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Target' rel='Ext.fx.target.Target' class='defined-in docClass'>Ext.fx.target.Target</a><br/><a href='source/Target.html#Ext-fx-target-Target-property-isAnimTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.Target-property-isAnimTarget' class='name expandable'>isAnimTarget</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-isComposite' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.CompositeElement' rel='Ext.fx.target.CompositeElement' class='defined-in docClass'>Ext.fx.target.CompositeElement</a><br/><a href='source/CompositeElement.html#Ext-fx-target-CompositeElement-property-isComposite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.CompositeElement-property-isComposite' class='name expandable'>isComposite</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true in this class to identify an object as an instantiated CompositeElement, or subclass thereof. ...</div><div class='long'><p><code>true</code> in this class to identify an object as an instantiated CompositeElement, or subclass thereof.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-type' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Element' rel='Ext.fx.target.Element' class='defined-in docClass'>Ext.fx.target.Element</a><br/><a href='source/Element.html#Ext-fx-target-Element-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.Element-property-type' class='name expandable'>type</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>End Definitions ...</div><div class='long'><p>End Definitions</p>\n<p>Defaults to: <code>&#39;element&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.CompositeElement' rel='Ext.fx.target.CompositeElement' class='defined-in docClass'>Ext.fx.target.CompositeElement</a><br/><a href='source/CompositeElement.html#Ext-fx-target-CompositeElement-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.fx.target.CompositeElement-method-constructor' class='name expandable'>Ext.fx.target.CompositeElementCSS</a>( <span class='pre'>target</span> ) : <a href=\"#!/api/Ext.fx.target.CompositeElement\" rel=\"Ext.fx.target.CompositeElement\" class=\"docClass\">Ext.fx.target.CompositeElement</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates new Target. ...</div><div class='long'><p>Creates new Target.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.fx.target.CompositeElement\" rel=\"Ext.fx.target.CompositeElement\" class=\"docClass\">Ext.fx.target.CompositeElement</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Ext.fx.target.Target-method-constructor\" rel=\"Ext.fx.target.Target-method-constructor\" class=\"docClass\">Ext.fx.target.Target.constructor</a></p></div></div></div><div id='method-getAttr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.CompositeElement' rel='Ext.fx.target.CompositeElement' class='defined-in docClass'>Ext.fx.target.CompositeElement</a><br/><a href='source/CompositeElement.html#Ext-fx-target-CompositeElement-method-getAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.CompositeElement-method-getAttr' class='name expandable'>getAttr</a>( <span class='pre'>attr, val</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attr</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>val</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.fx.target.Element-method-getAttr\" rel=\"Ext.fx.target.Element-method-getAttr\" class=\"docClass\">Ext.fx.target.Element.getAttr</a></p></div></div></div><div id='method-getElVal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Element' rel='Ext.fx.target.Element' class='defined-in docClass'>Ext.fx.target.Element</a><br/><a href='source/Element.html#Ext-fx-target-Element-method-getElVal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.Element-method-getElVal' class='name expandable'>getElVal</a>( <span class='pre'>el, attr, val</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>attr</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>val</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Target' rel='Ext.fx.target.Target' class='defined-in docClass'>Ext.fx.target.Target</a><br/><a href='source/Target.html#Ext-fx-target-Target-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.Target-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-remove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.CompositeElement' rel='Ext.fx.target.CompositeElement' class='defined-in docClass'>Ext.fx.target.CompositeElement</a><br/><a href='source/CompositeElement.html#Ext-fx-target-CompositeElement-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.CompositeElement-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/Ext.fx.target.Target-method-remove\" rel=\"Ext.fx.target.Target-method-remove\" class=\"docClass\">Ext.fx.target.Target.remove</a></p></div></div></div><div id='method-setAttr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.target.CompositeElementCSS'>Ext.fx.target.CompositeElementCSS</span><br/><a href='source/CompositeElementCSS.html#Ext-fx-target-CompositeElementCSS-method-setAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.CompositeElementCSS-method-setAttr' class='name expandable'>setAttr</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>End Definitions ...</div><div class='long'><p>End Definitions</p>\n<p>Overrides: <a href=\"#!/api/Ext.fx.target.CompositeElement-method-setAttr\" rel=\"Ext.fx.target.CompositeElement-method-setAttr\" class=\"docClass\">Ext.fx.target.CompositeElement.setAttr</a></p></div></div></div><div id='method-setElVal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Element' rel='Ext.fx.target.Element' class='defined-in docClass'>Ext.fx.target.Element</a><br/><a href='source/Element.html#Ext-fx-target-Element-method-setElVal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.Element-method-setElVal' class='name expandable'>setElVal</a>( <span class='pre'>element, attr, value</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>attr</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});