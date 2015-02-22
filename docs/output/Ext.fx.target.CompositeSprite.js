Ext.data.JsonP.Ext_fx_target_CompositeSprite({"tagname":"class","name":"Ext.fx.target.CompositeSprite","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"CompositeSprite.js","href":"CompositeSprite.html#Ext-fx-target-CompositeSprite"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.fx.target.Sprite","mixins":[],"requires":[],"uses":[],"members":[{"name":"isAnimTarget","tagname":"property","owner":"Ext.fx.target.Target","id":"property-isAnimTarget","meta":{"private":true}},{"name":"type","tagname":"property","owner":"Ext.fx.target.Sprite","id":"property-type","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Ext.fx.target.Target","id":"method-constructor","meta":{}},{"name":"getAttr","tagname":"method","owner":"Ext.fx.target.CompositeSprite","id":"method-getAttr","meta":{"private":true}},{"name":"getFromPrim","tagname":"method","owner":"Ext.fx.target.Sprite","id":"method-getFromPrim","meta":{"private":true}},{"name":"getId","tagname":"method","owner":"Ext.fx.target.Target","id":"method-getId","meta":{"private":true}},{"name":"remove","tagname":"method","owner":"Ext.fx.target.Target","id":"method-remove","meta":{"private":true}},{"name":"setAttr","tagname":"method","owner":"Ext.fx.target.Sprite","id":"method-setAttr","meta":{"private":true}}],"code_type":"ext_define","id":"class-Ext.fx.target.CompositeSprite","short_doc":"This class represents a animation target for a Ext.draw.sprite.Composite. ...","component":false,"superclasses":["Ext.Base","Ext.fx.target.Target","Ext.fx.target.Sprite"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.fx.target.Target' rel='Ext.fx.target.Target' class='docClass'>Ext.fx.target.Target</a><div class='subclass '><a href='#!/api/Ext.fx.target.Sprite' rel='Ext.fx.target.Sprite' class='docClass'>Ext.fx.target.Sprite</a><div class='subclass '><strong>Ext.fx.target.CompositeSprite</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/CompositeSprite.html#Ext-fx-target-CompositeSprite' target='_blank'>CompositeSprite.js</a></div></pre><div class='doc-contents'><p>This class represents a animation target for a Ext.draw.sprite.Composite. It allows\neach Ext.draw.sprite.Sprite in the group to be animated as a whole. In general this class will not be\ncreated directly, the Ext.draw.sprite.Composite will be passed to the animation and\nand the appropriate target will be created.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isAnimTarget' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Target' rel='Ext.fx.target.Target' class='defined-in docClass'>Ext.fx.target.Target</a><br/><a href='source/Target.html#Ext-fx-target-Target-property-isAnimTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.Target-property-isAnimTarget' class='name expandable'>isAnimTarget</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-type' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Sprite' rel='Ext.fx.target.Sprite' class='defined-in docClass'>Ext.fx.target.Sprite</a><br/><a href='source/Sprite.html#Ext-fx-target-Sprite-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.Sprite-property-type' class='name expandable'>type</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>End Definitions ...</div><div class='long'><p>End Definitions</p>\n<p>Defaults to: <code>&#39;draw&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Target' rel='Ext.fx.target.Target' class='defined-in docClass'>Ext.fx.target.Target</a><br/><a href='source/Target.html#Ext-fx-target-Target-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.fx.target.Target-method-constructor' class='name expandable'>Ext.fx.target.CompositeSprite</a>( <span class='pre'>target</span> ) : <a href=\"#!/api/Ext.fx.target.Target\" rel=\"Ext.fx.target.Target\" class=\"docClass\">Ext.fx.target.Target</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates new Target. ...</div><div class='long'><p>Creates new Target.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Ext.Component/Ext.dom.Element/Ext.draw.sprite.Sprite<div class='sub-desc'><p>The object to be animated</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.fx.target.Target\" rel=\"Ext.fx.target.Target\" class=\"docClass\">Ext.fx.target.Target</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAttr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.target.CompositeSprite'>Ext.fx.target.CompositeSprite</span><br/><a href='source/CompositeSprite.html#Ext-fx-target-CompositeSprite-method-getAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.CompositeSprite-method-getAttr' class='name expandable'>getAttr</a>( <span class='pre'>attr, val</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>End Definitions ...</div><div class='long'><p>End Definitions</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attr</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>val</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.fx.target.Sprite-method-getAttr\" rel=\"Ext.fx.target.Sprite-method-getAttr\" class=\"docClass\">Ext.fx.target.Sprite.getAttr</a></p></div></div></div><div id='method-getFromPrim' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Sprite' rel='Ext.fx.target.Sprite' class='defined-in docClass'>Ext.fx.target.Sprite</a><br/><a href='source/Sprite.html#Ext-fx-target-Sprite-method-getFromPrim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.Sprite-method-getFromPrim' class='name expandable'>getFromPrim</a>( <span class='pre'>sprite, attr</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sprite</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>attr</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Target' rel='Ext.fx.target.Target' class='defined-in docClass'>Ext.fx.target.Target</a><br/><a href='source/Target.html#Ext-fx-target-Target-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.Target-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-remove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Target' rel='Ext.fx.target.Target' class='defined-in docClass'>Ext.fx.target.Target</a><br/><a href='source/Target.html#Ext-fx-target-Target-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.Target-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setAttr' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.target.Sprite' rel='Ext.fx.target.Sprite' class='defined-in docClass'>Ext.fx.target.Sprite</a><br/><a href='source/Sprite.html#Ext-fx-target-Sprite-method-setAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.target.Sprite-method-setAttr' class='name expandable'>setAttr</a>( <span class='pre'>targetData</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetData</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});