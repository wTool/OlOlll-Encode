function encode(params){
	/*
	if (params.indexOf("l(111)+l(111)+l(114)") != -1){
		$('div.result-wrap').html('<div class="alert alert-danger">这是已经加密过的代码，不必再重复加密！</div>');
		return
	}
	*/
	var _loc1_ = params.length, _loc2_, _loc3_ = '', i = 0;
	while (i < _loc1_){
		_loc2_ = params.charCodeAt(i++) * 990000 + Math.floor( Math.random() * 10000 );
		_loc3_ += "+O(" + _loc2_ + ")";
	}
	var _loc4_ = "eval(\"\"" + _loc3_ + ");";
    var _loc5_ = "OlOlll=\"(x)\";OllOlO=\" String\";OlllOO=\"tion\";OlOllO=\"Code(x)}\";OllOOO=\"Char\";OlllOl=\"func\";OllllO=\" l=\";OllOOl=\".from\";OllOll=\"{ return\";Olllll=\"var\";eval(Olllll+OllllO+OlllOl+OlllOO+OlOlll+OllOll+OllOlO+OllOOl+OllOOO+OlOllO);eval(l(79)+l(61)+l(102)+l(117)+l(110)+l(99)+l(116)+l(105)+l(111)+l(110)+l(40)+l(109)+l(41)+l(123)+l(114)+l(101)+l(116)+l(117)+l(114)+l(110)+l(32)+l(83)+l(116)+l(114)+l(105)+l(110)+l(103)+l(46)+l(102)+l(114)+l(111)+l(109)+l(67)+l(104)+l(97)+l(114)+l(67)+l(111)+l(100)+l(101)+l(40)+l(77)+l(97)+l(116)+l(104)+l(46)+l(102)+l(108)+l(111)+l(111)+l(114)+l(40)+l(109)+l(47)+l(49)+l(48)+l(48)+l(48)+l(48)+l(41)+l(47)+l(57)+l(57)+l(41)+l(59)+l(125));" + _loc4_;
	
	return _loc5_;
}

function O(params) {
    return String.fromCharCode( Math.floor( params / 10000 ) / 99 );
}

function decode(params){
    var _loc1_ = params.indexOf("eval(\"\"+");
    if ( _loc1_ == "-1" ){
        return false;
    }
    var _loc2_ = params.substring(_loc1_ + 8, params.length - 2);
    return eval(_loc2_);
}
