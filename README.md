# nativescript-fab
Android Floating Action Button module for NativeScript

**Usage**
- use image resource
```
<FAB:fab rippleColor="white" tap="FABClicked" size="0" imageResource="res://icon" tint="cyan" anchorId="mylistview" class="fab-button" />
```

or
- use android icons
```
<FAB:fab rippleColor="white" tap="FABClicked" size="1" iconResource="ic_menu_add" class="fab-button" />
```

where
```
exports.FABClicked = function(args){
    console.log(args.object);
};
```
and the css class
```
.fab-button {
    height: 70;
    width: 70;
    horizontal-align: right;
    vertical-align: bottom;
}
```
