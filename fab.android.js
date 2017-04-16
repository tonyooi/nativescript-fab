/*******************************************************
** NativeScript Floating Action Button ui/plugin
** Author : Tony Ooi
** File : fab.android.js
*******************************************************/

var common = require("./fab-common");
var Color = require("color").Color;
var ImageSource = require("image-source");
var Gestures = require("ui/gestures");
var view = require("ui/core/view");

require("utils/module-merge").merge(common, module.exports);

var FloatingActionButton = (function(_super){
	global.__extends(FloatingActionButton,_super);
	function FloatingActionButton(){
		_super.apply(this,arguments);
	}

	FloatingActionButton.prototype._createUI = function(){
		this._android = new android.support.design.widget.FloatingActionButton(this._context);
		this._android.setUseCompatPadding(true);

		var that = new WeakRef(this);
		var onFloatingActionButtonClickListener = new android.view.View.OnClickListener({
			onClick : function(fab){
				var instance = that.get();
				if(instance){
					instance._emit("tap");
				}
			}
		});

		this._android.setOnClickListener(onFloatingActionButtonClickListener);
	};

	FloatingActionButton.prototype.onLoaded = function(){
		_super.prototype.onLoaded.call(this);
		console.log(this._parent);
		console.log(this.anchorId);
		var fab = this._android; // set here or else not resolvable, undefined
		var fabParent  = this._parent;
		var anchorView = view.getViewById(this._parent,this.anchorId);
		console.log("anchorview is ", anchorView)
		if ( anchorView ) {
			// console.log(args.state);
			anchorView.on(Gestures.GestureTypes.pan, function(args){
				switch( args.state ) {
					// cancelled = 0 , began = 1 , changed = 2 , ended = 3
					case 1 : fab.hide();
							 // fab.animate({ scale : { x : 0 , y: 0 } , duration : 280}) ; // in use case where fab = this
							 break ;
					// end = 3
					case 3 : fab.show();
							 // fab.animate({ scale : { x : 1 , y: 1 } , duration : 280}) ; // in use case where fab = this
							 break ;
				}
			})			
		} else {
			console.log("Anchored view id "+this.anchorId+" could not be found/located");
			// Use parent as fallback
			fabParent.on(Gestures.GestureTypes.pan, function(args){
				// console.log(args.state);
				switch( args.state ) {
					// cancelled = 0 , began = 1 , changed = 2 , ended = 3
					case 1 : fab.hide();
							 // fab.animate({ scale : { x : 0 , y: 0 } , duration : 280}) ; // in use case where fab = this
							 break ;
					// end = 3
					case 3 : fab.show();
							 // fab.animate({ scale : { x : 1 , y: 1 } , duration : 280}) ; // in use case where fab = this
							 break ;
				}
			})
		}
	};

	Object.defineProperty(FloatingActionButton.prototype,"android",{
		get : function(){ return this._android ; }
	});

	return FloatingActionButton;
})(common.Fab);

exports.Fab = FloatingActionButton;

function onSizePropertyChanges(data){
	var fab = data.object;
	if ( !fab.android) {
		return false;
	}
	fab.android.setSize(data.newValue);
}
common.Fab.sizeProperty.metadata.onSetNativeValue = onSizePropertyChanges;

function onRippleColorPropertyChanges(data){
	var fab = data.object;
	if ( !fab.android) {
		return false;
	}
	if ( Color.isValid(data.newValue) ) {
		rippleColor = new Color(data.newValue); //color is valid color
		fab.android.setRippleColor(rippleColor.android); // convert to int when .android
	} else {
		console.log("Ripple color "+data.newValue+" is not a valid color. eg #fff or blue"); // automatically set to white during rippleColor initialization
	}
}
common.Fab.rippleColorProperty.metadata.onSetNativeValue = onRippleColorPropertyChanges;

function onElevationPropertyChanges(data){
	var fab = data.object;
	if ( !fab.android) {
		return false;
	}
	fab.android.setCompatElevation(data.newValue);
}
common.Fab.elevationProperty.metadata.onSetNativeValue = onElevationPropertyChanges;

function onImageResourcePropertyChanges(data){
	var fab = data.object;
	if ( !fab.android) {
		return false;
	}
	var img = data.newValue;
	var drawableImg = ImageSource.fromFileOrResource(img);
	if( drawableImg ) {
		fab.android.setImageBitmap(drawableImg.android);
	} else {
		console.log("Floating action image "+img+" is not found/available");
	}
}
common.Fab.imageResourceProperty.metadata.onSetNativeValue = onImageResourcePropertyChanges;

function onIconResourcePropertyChanges(data){
	var fab = data.object;
	if ( !fab.android) {
		return false;
	}
	var icon = data.newValue;
	var drawableIcon = null ;
	drawableId = android.content.res.Resources.getSystem().getIdentifier(icon,"drawable","android");
	drawableIcon = android.content.res.Resources.getSystem().getDrawable(drawableId);
	if( drawableIcon ) {
		fab.android.setImageDrawable(drawableIcon);
	} else {
		console.log("Floating Action Button icon "+icon+" is not found/available");
	}
	// fab.android.setImageResource(data.newValue); // this icon is an int value referring to eg android.R.drawable.ic_menu_add
}
common.Fab.iconResourceProperty.metadata.onSetNativeValue = onIconResourcePropertyChanges;

function onTintPropertyChanges(data){
	var fab = data.object;
	if ( !fab.android) {
		return false;
	}
	if( Color.isValid(data.newValue) ) {
		var tintColor = new Color(data.newValue).android;
		fab.android.setBackgroundTintList(android.content.res.ColorStateList.valueOf(tintColor));
	} else {
		console.log("Tint color is "+data.newValue+" not a valid color. eg #fff or blue");
	}
}
common.Fab.tintProperty.metadata.onSetNativeValue = onTintPropertyChanges;
