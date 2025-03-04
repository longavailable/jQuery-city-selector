const specialValues = [11, 12, 31, 71, 50, 81, 82];

function initComplexArea(a, k, h, p, q, d, b, l) {
    var f = initComplexArea.arguments;
    var m = document.getElementById(a);
    var o = document.getElementById(k);
    var n = document.getElementById(h);
    var e = 0;
    var c = 0;
    if (p != undefined) {
        if (d != undefined) {
            d = parseInt(d);
			
			if (specialValues.includes(d)) {
				if ($("#" + h + "_div"))
				{ $("#" + h + "_div").hide(); }
			}
			else {
				if ($("#" + h + "_div")) { $("#" + h + "_div").show(); }
			}
			
			if (b != undefined) {
				b = parseInt(b);
				
				if (l != undefined) {
					l = parseInt(l);
				}
				else {
					l = 0;
				}
			}
			else {
				b = 0;
			}
        }
        else {
            d = 0;
        }
		//省市区情形，区默认不可用
        n[0] = new Option("请选择 ", 0);
		
        for (e = 0; e < p.length; e++) {
            if (p[e] == undefined) {
                continue;
            }
            if (f[6]) {
                if (f[6] == true) {
                    if (e == 0) {
                        continue
                    }
                }
            }
            m[c] = new Option(p[e], e);
            if (d == e) {
                m[c].selected = true;
            }
            c++
        }
        if (q[d] != undefined) {
            c = 0; for (e = 0; e < q[d].length; e++) {
                if (q[d][e] == undefined) { continue }
                if (f[6]) {
                    if ((f[6] == true) && (d != 71) && (d != 81) && (d != 82)) {
                        if ((e % 100) == 0) { continue }
                    }
                } o[c] = new Option(q[d][e], e);
                if (b == e) { o[c].selected = true } c++
            }
        }
    }
}
function changeComplexProvince(f, k, e, d) {
	var c = changeComplexProvince.arguments;
	var h = document.getElementById(e);
	var g = document.getElementById(d); 
	var b = 0; 
	var a = 0;
	//市州一级
	removeOptions(h);
	$("#" + e).unbind("change");
	f = parseInt(f);
	if (k[f] != undefined) {
		for (b = 0; b < k[f].length; b++) {
		    if (k[f][b] == undefined) { continue }
		    if (c[3]) { if ((c[3] == true) && (f != 71) && (f != 81) && (f != 82)) { if ((b % 100) == 0) { continue } } }
		    h[a] = new Option(k[f][b], b); a++
		}
	}
	//区县一级
	removeOptions(g);
	g[0] = new Option("请选择 ", 0);
	if (specialValues.includes(f)) {
		if ($("#" + d + "_div")){
			$("#" + d + "_div").hide();
		}
	}
	else {
		if ($("#" + d + "_div")) {
			$("#" + d + "_div").show();
		}
	}
}

function changeCity(c, a) {
    $("#" + a).html('<option value="0" >请选择</option>');
    $("#" + a).unbind("change");
    c = parseInt(c); 
    var _d = sub_arr[c];
    var str = "";     
    str += "<option value='0' >请选择</option>";
    for (var i = c * 100; i < _d.length; i++) {
        if (_d[i] == undefined) continue; 
        str += "<option value='" + i + "' >" + _d[i] + "</option>";
    }
    $("#" + a).html(str);    
}

function removeOptions(c) {
    if ((c != undefined) && (c.options != undefined)) {
        var a = c.options.length;
        for (var b = 0; b < a; b++) {
            c.options[0] = null;
        }
    }
}
