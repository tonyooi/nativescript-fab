/*******************************************************
** NativeScript Floating Action Button ui/plugin
** Author : Tony Ooi
** File : fab-common.js
*******************************************************/

var view = require("ui/core/view");
var dObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");

var FloatingActionButton = (function(_super){
	/*************** Properties definition ******************
	** fabSize, fabSizeProperty
	** rippleColor, rippleColorProperty
	** elevation , elevationProperrty
	** imageResource, imageResourceProperty
	** iconResource, iconResourceProperty
	** tint, tintProperty
	********************************************************/

	global.__extends(FloatingActionButton,_super);
	function FloatingActionButton(){
		_super.call(this);

		// this._show = true; // shown at beginning
	}

	FloatingActionButton.prototype._inheritProperties = function(parent){
		this._parent = parent;
	};

	/*****************************************************************************
	** scenario 1 : if used for common platform, just uncomment and add 
	** implementation code. consider this function definition.
	** scenario 2 : for specific platform, place function definition in the 
	** platform specific file and use this as function declaration. If use as
	** function declaration then remove line _super.prototype.onLoaded.call(this);
	******************************************************************************/
	// FloatingActionButton.prototype.onLoaded = function(){
	// 	_super.prototype.onLoaded.call(this);
	//  // add implementation code
	// }

	Object.defineProperty(FloatingActionButton.prototype,"size",{
		get : function(){
			return this._getValue(FloatingActionButton.sizeProperty);
		},
		set : function(newValue){
			this._setValue(FloatingActionButton.sizeProperty,newValue);
		}
	});
	FloatingActionButton.sizeProperty = new dObservable.Property("size","FloatingActionButton", new proxy.PropertyMetadata(0,dObservable.PropertyMetadataSettings.AffectsLayout));

	Object.defineProperty(FloatingActionButton.prototype,"rippleColor",{
		get : function(){
			return this._getValue(FloatingActionButton.rippleColorProperty);
		},
		set : function(newValue){
			this._setValue(FloatingActionButton.rippleColorProperty,newValue);
		}
	});
	FloatingActionButton.rippleColorProperty = new dObservable.Property("rippleColor","FloatingActionButton", new proxy.PropertyMetadata(0,dObservable.PropertyMetadataSettings.AffectsLayout));	

	Object.defineProperty(FloatingActionButton.prototype,"elevation",{
		get : function(){
			return this._getValue(FloatingActionButton.elevationProperty);
		},
		set : function(newValue){
			this._setValue(FloatingActionButton.elevationProperty,newValue);
		}
	});
	FloatingActionButton.elevationProperty = new dObservable.Property("elevation","FloatingActionButton", new proxy.PropertyMetadata(0,dObservable.PropertyMetadataSettings.AffectsLayout));		

	Object.defineProperty(FloatingActionButton.prototype,"imageResource",{
		get : function(){
			return this._getValue(FloatingActionButton.imageResourceProperty);
		},
		set : function(newValue){
			this._setValue(FloatingActionButton.imageResourceProperty,newValue);
		}
	});
	FloatingActionButton.imageResourceProperty = new dObservable.Property("imageResource","FloatingActionButton", new proxy.PropertyMetadata(0,dObservable.PropertyMetadataSettings.AffectsLayout));		

	Object.defineProperty(FloatingActionButton.prototype,"iconResource",{
		get : function(){
			return this._getValue(FloatingActionButton.iconResourceProperty);
		},
		set : function(newValue){
			this._setValue(FloatingActionButton.iconResourceProperty,newValue);
		}
	});
	FloatingActionButton.iconResourceProperty = new dObservable.Property("iconResource","FloatingActionButton", new proxy.PropertyMetadata(0,dObservable.PropertyMetadataSettings.AffectsLayout));		

	Object.defineProperty(FloatingActionButton.prototype,"tint",{
		get : function(){
			return this._getValue(FloatingActionButton.tintProperty);
		},
		set : function(newValue){
			this._setValue(FloatingActionButton.tintProperty,newValue);
		}
	});
	FloatingActionButton.tintProperty = new dObservable.Property("tint","FloatingActionButton", new proxy.PropertyMetadata(0,dObservable.PropertyMetadataSettings.AffectsLayout));		

	return FloatingActionButton;

})(view.View);

exports.Fab = FloatingActionButton;

