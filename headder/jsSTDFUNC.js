/*******************************************************************************
	jsSTDFUNC2.js 2.0.0 リリースノート

	・追加された機能
		・総合妥当性検査関数 jsSTDFUNC_SumCheck が追加されました。
		・数字を「￥999,999,999」表示に編集するjsSTDFUNC_YenFormatが追加されました。
		・エレメントのキーコードがエンターキーならばfalseを返すIgnoreEnterKeyが追加されました。

	・性能向上，改良点
		・jsSTDFUNC_SumCheckに文字数チェックオプションを追加しました。
		  また、それに伴いオプションを1部変更しました。リリース前に使用
		  されていた場合は注意して下さい。

		・ブランクチェック jsSTDFUNC_ChkBlank で半角、全角スペース共にブランクとみなし
		  エラーを返すようになりました。

	・修正された不具合
		・jsSTDFUNC_SumCheckの「X」オプション使用時に、入力オブジェクトが2文字以下の
		  場合必ずエラーと返す不具合事項を修正しました。

	・既知の問題
		・jsSTDFUNC_CurrencyFormatで、3の倍数桁のマイナス表記を与えた場合、
		  「-,999,999,999」と編集してしまう。

*******************************************************************************/
/*******************************************************************************
	文字列の長さチェック（バイト単位）
	引数		1:対象とするエレメント
				2:長さ（バイト）
				3:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkLenB(objTarget, intLenB, strMessage){
	if (objTarget.value == "") return true;
	if (jsSTDFUNC_GetLenB(objTarget.value) == intLenB) return true;
	if (strMessage != '') {
		alert(strMessage);
		objTarget.focus();
		objTarget.select();
	}
	return false;
}
/*******************************************************************************
	文字列長の範囲チェック（バイト単位）
	引数		1:対象とするエレメント
				2:最小値
				3:最大値
				4:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkLenBRange(objTarget, nMin, nMax, strMessage){
	var intLength = jsSTDFUNC_GetLenB(objTarget.value);
	if (objTarget.value == "") return true;
	if ((intLength >= nMin) && (intLength <= nMax)) return true;
	if (strMessage != '') {
		alert(strMessage);
		objTarget.focus();
		objTarget.select();
	}
	return false;
}
/*******************************************************************************
	文字列の長さを取得する（バイト単位）
	引数		1:対象とする文字列
*******************************************************************************/
function jsSTDFUNC_GetLenB(strValue){
	var intCnt,intLen=0;

	for(intCnt=0; intCnt < strValue.length; intCnt++){
		if (escape(strValue.charAt(intCnt)).length >= 4) intLen+=2;
		else
		intLen++;
	}
	return intLen;
}
/*******************************************************************************
	ブランクチェック（テキストボックス限定）
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkBlank(objTarget, strMessage) {
	tmp = objTarget.value;
	tmp = tmp.replace("　", "");
	tmp = tmp.replace(" ", "");

	if (tmp == "") {
		if (strMessage != '') {
			alert(strMessage);
			objTarget.focus();
			objTarget.select();
		}
		return false;
	}
	return true;
}

/*******************************************************************************
	ブランクチェック（単一選択リスト限定）
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkLstBlank(objTarget, strMessage) {
	if (objTarget[objTarget.selectedIndex].value == "") {
		if (strMessage != '') {
			alert(strMessage);
			objTarget.focus();
		}
		return false;
	}
	return true;
}
/*******************************************************************************
	数値チェック
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkNum(objTarget, strMessage){
	if (isNaN(objTarget.value)) {
		if (strMessage != '') {
			alert(strMessage);
			objTarget.focus();
			objTarget.select();
		}
		return false;
	}
	return true;
}
/*******************************************************************************
	整数値チェック
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkIntNum(objTarget, strMessage) {
	if (jsSTDFUNC_ChkNum(objTarget, strMessage) == false) return false;
	if (jsSTDFUNC_IsIntNum(objTarget.value) == false) {
		if (strMessage != "") {
			alert(strMessage);
			objTarget.focus();
			objTarget.select();
		}
		return false;
	}
	return true;
}
/*******************************************************************************
	整数値判定
	引数		1:対象とする文字列
*******************************************************************************/
function jsSTDFUNC_IsIntNum(intValue) {
	if (isNaN(intValue)) return false;
	if (intValue.search(/[.]/) > 0) {
		return false;
	}
	return true;
}
/*******************************************************************************
	数値範囲チェック
	引数		1:対象とするエレメント
				2:最小値
				3:最大値
				4:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkNumRange(objTarget, nMin, nMax, strMessage){
	var intFlag=0;

	if (objTarget.value == "") return true;
	if (jsSTDFUNC_ChkNum(objTarget, strMessage) == false) return false;

	if (jsSTDFUNC_IsNumRange(objTarget.value, nMin, nMax) == false) {
		if (strMessage != "") {
			alert(strMessage);
			objTarget.focus();
			objTarget.select();
		}
		return false;
	}
	return true;
}
/*******************************************************************************
	数値範囲判定
	引数		1:対象とする文字列
				2:最小値
				3:最大値
*******************************************************************************/
function jsSTDFUNC_IsNumRange(intValue, nMin, nMax){
	var intFlag = 0;

	if (intValue == "") return true;
	if (isNaN(intValue)) return false;

	if ((intValue < nMin) || (intValue > nMax)) {
		return false;
	}
	return true;
}
/*******************************************************************************
	メールアドレスチェック
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkEmail(objTarget, strMessage) {
	if (objTarget.value == "") return true;
	if (jsSTDFUNC_IsEmail(objTarget.value) == false) {
		if (strMessage != "") {
			alert(strMessage);
		    objTarget.focus();
		    objTarget.select();
		}
	    return false;
	}
	return true;
}
/*******************************************************************************
	メールアドレス判定
	引数		1:対象とする文字列
*******************************************************************************/
function jsSTDFUNC_IsEmail(strValue) {
	if (window.RegExp) {
		var strReg1 = "(@.*@)|(\\.\\.)|(@\\.)|(\\.@)|(^\\.)";
		var strReg2 = "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$";
		var objReg1 = new RegExp(strReg1);
		var objReg2 = new RegExp(strReg2);
		if (!objReg1.test(strValue) && objReg2.test(strValue)) {
			return true;
	    } else {
		    return false;
		}
	} else {
		var intCnt   = 0;
		var bFlagAt  = false;
		var bFlagDot = false;

		if (strValue.indexOf("@") != -1) {
			bFlagAt  = true;
		} else if (strValue.indexOf(".") != -1) {
			bFlagDot = true;
		}

		for (intCnt=0; intCnt<strValue.length; intCnt++) {
			ch = strValue.substring(intCnt, intCnt + 1)
			if ((ch >= "A" && ch <= "Z") ||
				(ch >= "a" && ch <= "z") ||
				(ch == "@") 			 ||
				(ch == ".") 			 ||
				(ch == "_")				 ||
				(ch == "-")				 ||
				(ch >= "0" && ch <= "9")) {

				if (ch == "@") bFlagAt  = true;
				if (ch == ".") bFlagDot = true;
			}
		}

		if ((bFlagAt == true) && (bFlagDot == true)) {
			return true;
		} else {
			return false;
		}
	}
}
/*******************************************************************************
	URLアドレスチェック
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkUrl(objTarget, strMessage) {
	if (jsSTDFUNC_IsUrl(objTarget.value) == false) {
		if (strMessage != "") {
			alert(strMessage);
		    objTarget.focus();
		    objTarget.select();
		}
		return false;
	}
    return true;
}

/*******************************************************************************
	URLアドレス判定
	引数		1:対象とする文字列
*******************************************************************************/
function jsSTDFUNC_IsUrl(strValue) {
	if (strValue == "") return true;

	data = strValue.match(/(http|ftp):\/\/.+/);
	if (!data) return false;
	return true;

	//以下のコードでは、http://cogito.co.jpがエラーとなるので↑のコードにした。fujita
/*
	if (strValue == "") return true;
	var strReg1 = "[ 　]|(\\.\\.)|(\\.$)|(\\/\\.)|(\\.\\/)";
	var strReg2 = "^http:\/{2}[\w\W\\-\_~0-9]+\\.";
	var objReg1 = new RegExp(strReg1);
	var objReg2 = new RegExp(strReg2);
	if (!objReg1.test(strValue) && objReg2.test(strValue)) {
		return true;
    }
    return false;
*/
}

/*******************************************************************************
	日付チェック(yyyy/mm/dd)
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkDate(objTarget, strMessage){
	var bFlag=true;
	if (objTarget.value == "") return true;
	if (jsSTDFUNC_GetLenB(objTarget.value) != 10) bFlag=false;

	if (bFlag == true) {
		if (objTarget.value.substr(4,1) != "/") bFlag=false;
		if (objTarget.value.substr(7,1) != "/") bFlag=false;

		if (isNaN(objTarget.value.substr(0,4))) bFlag=false;
		if (isNaN(objTarget.value.substr(5,2))) bFlag=false;
		if (isNaN(objTarget.value.substr(8,2))) bFlag=false;
	}

	if (bFlag == true) {
		var intYear  = eval(objTarget.value.substr(0,4));
		var intMonth = eval(objTarget.value.substr(5,2));
		var intDay   = eval(objTarget.value.substr(8,2));
		if(!jsSTDFUNC_IsDate(intYear, intMonth, intDay)) bFlag = false;
	}

	if (bFlag == false) {
		if (strMessage != '') {
			alert(strMessage);
			objTarget.focus();
			objTarget.select();
		}
		return false;
	}
	return true;
}

/*******************************************************************************
	日付チェック Type2 
	引数		1:年を対象とするエレメント(yyyy)
				2:月を対象とするエレメント(mm)
				3:日を対象とするエレメント(dd)
				4:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkDate2(objTargetYY,objTargetMM,objTargetDD, strMessage){
	var bFlag=true;
	if ((objTargetYY.value == "") &&
		(objTargetMM.value == "") &&
		(objTargetDD.value == "")) return true;

	if (bFlag == true) {
		if (isNaN(objTargetYY.value)) bFlag=false;
		if (isNaN(objTargetMM.value)) bFlag=false;
		if (isNaN(objTargetDD.value)) bFlag=false;

	}

	if (bFlag == true) {
		var intYear  = eval(objTargetYY.value);
		var intMonth = eval(objTargetMM.value);
		var intDay   = eval(objTargetDD.value);
		if(!jsSTDFUNC_IsDate(intYear, intMonth, intDay)) bFlag = false;
	}
	if (bFlag == false) {
		if (strMessage != '') {
			alert(strMessage);
			objTargetYY.focus();
			objTargetYY.select();
		}
		return false;
	}
	return true;
}

/*******************************************************************************
	日付判定(1900以降のみOK)
	引数		1:年
				2:月
				3:日
*******************************************************************************/
function jsSTDFUNC_IsDate(intYear, intMonth, intDay){
	if (isNaN(intYear))  return false;
	if (isNaN(intMonth)) return false;
	if (isNaN(intDay))   return false;
	intYear  = eval(intYear);
	intMonth = eval(intMonth);
	intDay   = eval(intDay);

	var aryMonth = new Array(13);
	aryMonth[0]  = 0;
	aryMonth[1]  = 31;
	aryMonth[2]  = 28;
	aryMonth[3]  = 31;
	aryMonth[4]  = 30;
	aryMonth[5]  = 31;
	aryMonth[6]  = 30;
	aryMonth[7]  = 31;
	aryMonth[8]  = 31;
	aryMonth[9]  = 30;
	aryMonth[10] = 31;
	aryMonth[11] = 30;
	aryMonth[12] = 31;
	if (intYear % 4 == 0) {
		if (((intYear % 100) != 0) || ((intYear % 400) == 0)) {
			aryMonth[2] = 29;
		}
	}
	if (intYear < 1900) return false;
	if ((intMonth < 1) || (intMonth > 12)) return false;
	if ((intDay < 1) || (intDay > aryMonth[intMonth])) return false;
	return true;
}

/*******************************************************************************
	時刻チェック（hh:mm）
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkTime(objTarget, strMessage){
	var bFlag=true;
	if (objTarget.value == "") return true;
	if (jsSTDFUNC_GetLenB(objTarget.value) != 5) bFlag=false;

	if (bFlag == true) {
		if (objTarget.value.substr(2,1) != ":") bFlag=false;
		if (isNaN(objTarget.value.substr(0,2))) bFlag=false;
		if (objTarget.value.substr(0,2) < 0) bFlag=false;
		if (objTarget.value.substr(0,2) > 23) bFlag=false;
		if (isNaN(objTarget.value.substr(3,2))) bFlag=false;
		if (objTarget.value.substr(3,2) < 0) bFlag=false;
		if (objTarget.value.substr(3,2) > 59) bFlag=false;
	}

	if (bFlag == false) {
		if (strMessage != '') {
			alert(strMessage);
			objTarget.focus();
			objTarget.select();
		}
		return false;
	}
	return true;
}

/*******************************************************************************
	通貨フォーマット(円)（1,000,000,000）
	引数		1:対象とする文字列
*******************************************************************************/
function jsSTDFUNC_CurrencyFormat(strValue) {
	var strRetValue = "";
	var intCharAt   = 0;
	var intCnt      = 0;

	if (strValue == "") return strValue;
	for (intCnt=strValue.length - 1; intCnt>=0; intCnt--) {
		if ((intCharAt % 3 == 0) && (intCharAt != 0)) strRetValue = "," + strRetValue;
		strRetValue = strValue.charAt(intCnt) + strRetValue;
		intCharAt++;
	}
	return strRetValue;
}

/*******************************************************************************
数字を「，」区切りの通貨（円）表示に編集する
	引数		1:対象とする文字列
*******************************************************************************/
function jsSTDFUNC_YenFormat(strValue){
	var strRetValue = "";
	var minus_flag = "";

	if (strValue == "") return strValue;

	if(strValue.match(/^[ ]*-/) ) minus_flag = "-";

	inwrd = strValue.replace(/[^0-9]/g,"").replace(/^[0]+/,"");
	edwrd = inwrd.substring(inwrd.length - 3, inwrd.length);

	for (i = inwrd.length - 3;i > 0; i=i-3){ edwrd = inwrd.substring(i - 3, i) + "," + edwrd }
	strRetValue = (edwrd == "") ? "\\0" : "\\" + minus_flag + edwrd;

	return strRetValue;
}

/*******************************************************************************
	小文字(ひらがな) → 大文字(ひらがな)変換
	引数		1:対象とする文字列
*******************************************************************************/
function jsSTDFUNC_UCaseKana(strValue) {
	var intCnt      = 0;
	var strRetValue = "";
	var strAt       = "";

	for(intCnt=0; intCnt<strValue.length; intCnt++){
		strAt = strValue.charAt(intCnt);
		     if(strAt=="ぁ" || strAt=="ァ" || strAt=="ｧ") strRetValue += "あ";
		else if(strAt=="ぃ" || strAt=="ィ" || strAt=="ｨ") strRetValue += "い";
		else if(strAt=="ぅ" || strAt=="ゥ" || strAt=="ｩ") strRetValue += "う";
		else if(strAt=="ぇ" || strAt=="ェ" || strAt=="ｪ") strRetValue += "え";
		else if(strAt=="ぉ" || strAt=="ォ" || strAt=="ｫ") strRetValue += "お";
		else if(strAt=="っ" || strAt=="ッ" || strAt=="ｯ") strRetValue += "つ";
		else if(strAt=="ゃ" || strAt=="ャ" || strAt=="ｬ") strRetValue += "や";
		else if(strAt=="ゅ" || strAt=="ュ" || strAt=="ｭ") strRetValue += "ゆ";
		else if(strAt=="ょ" || strAt=="ョ" || strAt=="ｮ") strRetValue += "よ";
		else strRetValue += strAt;
	}
	return strRetValue;
}

/*******************************************************************************
	郵便番号チェック
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkZipCode(objTarget, strMessage) {
	if (objTarget.value == "") return true;
	var strReg = "^[0-9]{3}\\-[0-9]{4}$"
	var objReg = new RegExp(strReg);
	if (objReg.test(objTarget.value)) {
		return true;
    }
	if (strMessage != "") {
		alert(strMessage);
	    objTarget.focus();
	    objTarget.select();
	}
    return false;
}

/*******************************************************************************
	電話番号チェック("-"と半角数値のみＯＫ)
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkPhone(objTarget, strMessage) {
	if (objTarget.value == "") return true;
	var strReg1 = "[ 　]|(^\\-)|(\\-$)|(\\-\\-)";
	var strReg2 = "([a-zA-Z_])|(\\W)";
	var strReg3 = "[0-9].+\\-";
	var objReg1 = new RegExp(strReg1);
	var objReg2 = new RegExp(strReg2);
	var objReg3 = new RegExp(strReg3);
	if ((!objReg1.test(objTarget.value)) &&
		(!objReg2.test(objTarget.value.replace(/\-/g, ""))) &&
		(objReg3.test(objTarget.value))) {
		return true;
    }
	if (strMessage != "") {
		alert(strMessage);
	    objTarget.focus();
	    objTarget.select();
	}
    return false;
}

/*******************************************************************************
	画像ファイルチェック(拡張子のみチェック)
	引数		1:対象とするエレメント
				2:ファイル拡張子(jpg, gif など)
				3:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkImageFile(objTarget, strChkValue, strMessage) {
	if (objTarget.value == "") return true;
	var strReg = "[.]" + strChkValue + "$";
	var objReg = new RegExp(strReg, "i");

	if (objReg.test(objTarget.value)) {
			return true;
	}
	if (strMessage != "") {
		alert(strMessage);
	    objTarget.focus();
	    objTarget.select();
	}
	return false;
}

/*******************************************************************************
	画像ファイルサイズチェック
	引数		1:対象とするエレメント
				2:横最小サイズ
				3:縦最小サイズ
				4:横最大サイズ
				5:縦最大サイズ
				6:エラー時のメッセージ
				7:エラー時の対象とするエレメント
*******************************************************************************/
function jsSTDFUNC_ChkImageFileSize(objTarget, nMinWidth, nMinHeight, nMaxWidth, nMaxHeight, strMessage, objTarget2) {
	if (objTarget.value == "") return true;
	var intWidth = objTarget.width;
	var intHeight = objTarget.height;
	if ((intWidth  >= nMinWidth)  &&
		(intWidth  <= nMaxWidth)  &&
		(intHeight >= nMinHeight) &&
		(intHeight <= nMaxHeight)) {
		return true;
	}
	if (strMessage != "") {
		alert(strMessage);
		if (objTarget2) {
		    objTarget2.focus();
		    objTarget2.select();
		} else {
			objTarget.focus();
		}
	}
	return false;
}

/*******************************************************************************
	数字チェック
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkStrNum(objTarget, strMessage){
	var objStr = objTarget.value;
	if (objStr == "") return true;
	for (var intCnt=0; intCnt<objStr.length; intCnt++){
		ch = objStr.charAt(intCnt);
		if ((ch < "0") || (ch > "9")){
			if (strMessage != '') {
				alert(strMessage);
				objTarget.focus();
				objTarget.select();
				return false;
			}
		}
	}
	return true;
}

/*******************************************************************************
	PasswordCheck（数字・半角英字）
	引数		1:対象とするエレメント
				2:タイプチェック	使用できるタイプ　"0aA"
				3:長さチェック  	10桁の場合　"=10"
									4桁から１０桁の場合　"4/10"
				4:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkPass(objTarget, strChkT, strChkL, strMessage){
	var err = 0;
	var strValue = objTarget.value;

	var strType = "";
	for(i=0; i<strChkT.length; i++){
			 if(strChkT.charAt(i) == "0") strType += "0-9";
		else if(strChkT.charAt(i) == "a") strType += "a-z";
		else if(strChkT.charAt(i) == "A") strType += "A-Z";
	}
//	var strReg = "^[" + strType + "][" + strType + "]+[" + strType + "]$";	//del fujita
	var strReg = "^[" + strType + "]*[" + strType + "]$";					//add fujita
	var objReg = new RegExp(strReg);
	if(!objReg.test(strValue)) err += 1;

	if(strChkL.charAt(0) == "="){
		var strLeng = strChkL.substr(1,(strChkL.length -1));
		if(strValue.length != parseInt(strLeng)) err += 1;
	} else {
		var strLen = strChkL.split("/");
		if(strValue.length < parseInt(strLen[0])) err += 1;
		if(strValue.length > parseInt(strLen[1])) err += 1;
	}

	if(err == 0) return true;
	else if(strMessage != '') {
		alert(strMessage);
		objTarget.focus();
		objTarget.select();
	}
	return false;
}

/*******************************************************************************
	Inputタグ内の　Inputタグ及び記号チェック
	引数		1:対象とするエレメント
				2:エラー時のメッセージ
*******************************************************************************/
function jsSTDFUNC_ChkTag(objTarget, strMessage){
	var strValue = objTarget.value;
	if (strValue == "") return true;
	var intCnt   = 0;
	var bFlag    = true;

	     if (strValue.indexOf("<") != -1) bFlag = false;
	else if (strValue.indexOf(">") != -1) bFlag = false;
	else if (strValue.indexOf("\"") != -1) bFlag = false;
	else if (strValue.indexOf("\'") != -1) bFlag = false;

	if (bFlag) return true;
	else {
		if (strMessage != "") {
			alert(strMessage);
			objTarget.focus();
			objTarget.select();
		}
		return false;
	}
}

/*******************************************************************************
	ふりがなチェック
		引数		1:対象とするエレメント
		2006.04.04
*******************************************************************************/
function jsSTDFUNC_Furigana(objTarget, strMessage) {
	var strValue = objTarget.value;
	if (strValue == "") return true;
	if( strValue.match( /[^ぁ-んァ-ー0-9０-９a-zA-Zａ-ｚＡ-Ｚ　\s]+/ ) ) {
		if (strMessage != "") {
			alert(strMessage);
			objTarget.focus();
			objTarget.select();
		}
		return false;
	}
	return true;
}
/*******************************************************************************
	eエレメントのキーコードがEnterでないかを返す
*******************************************************************************/
function jsSTDFUNC_IgnoreEnter(e)
{
	if (getKEYCODE(e) == 13) {
		event.returnValue = false;
	}
}
/*******************************************************************************
	キーコードを返す。
*******************************************************************************/
function getKEYCODE(e)
{
    if(document.layers) return e.which
    if(document.all)    return event.keyCode
}

/*******************************************************************************
	総合Check (注意: 条件式のチェックは無し)
	引数	1:対象エレメント
			2:チェックの種類(使用例　"BTR/100")
				B: ブランクチェック（テキストボックス限定）
				S: ブランクチェック（単一選択リスト限定）
				T: タグ及び記号チェック
				L/200/: 入力可能文字数チェック（/バイト数/）
					L/10/  とすると、10byte以内ならばチェックOKとなる。
					L/5-8/ とすると、5以上～8以内ならばチェックOKとなる。
				R/2000-2500/: 数値範囲チェック
					R/2000-2500/  とすると、2000～2500の数値範囲ならばチェックOKとなる。
				N: 数値チェック
				I: 整数値チェック
				n: 数字チェック
				M: メールアドレスチェック
				U: URLアドレスチェック
				D: 日付チェック-1(yyyy/mm/dd)
				d/mm/dd: 日付チェック-2(/document.form.月エレメント/document.form.日エレメント/)
				H: 時刻チェック（hh:mm）
				Z: 郵便番号チェック
				P: 電話番号チェック
				X/0aA/6-8/: 半角英数文字チェック
				F: ふりがなチェック
				z: 全角文字チェック（半角カナも不可）
			3:エレメント名
******************************************************************************/
function jsSTDFUNC_SumCheck(objTarget, strChkT, strMessage){
	var objStr = objTarget.value;
	var err = 0;
	var chrType = "";

	for(var i=0; i<strChkT.length; i++){
		chrType = strChkT.charAt(i);

		if(chrType == "B"){
			strCmt = strMessage + "を入力して下さい。";
			if(!jsSTDFUNC_ChkBlank(objTarget, strCmt)) return false;
		} else if(chrType == "S"){
			strCmt = strMessage + "を選択して下さい。";
			if(!jsSTDFUNC_ChkLstBlank(objTarget, strCmt)) return false;
		} else if(chrType == "T"){
			strCmt = strMessage + "にはタグやクォーテーション記号を含めないで下さい。";
			if(!jsSTDFUNC_ChkTag(objTarget, strCmt)) return false;
		} else if(chrType == "L"){
			var len_start = 0;
			var len_end = 0;
			var arg = strChkT.substr(i+1,strChkT.length-i);
			var strSplit = arg.split("/");
			if(strSplit.length >= 3){
				var strSplit2 = strSplit[1].split("-");
				if(strSplit2.length == 2) {
					len_start = parseInt(strSplit2[0]);
					len_end = parseInt(strSplit2[1]);
					strCmt = strMessage + "には半角で" + len_start + " ～ "+ len_end + "文字の範囲で入力して下さい。";
				} else {
					len_end = parseInt(strSplit[1]);
					if(len_end != 0) var intB = parseInt(len_end/2);
					strCmt = strMessage + "には半角で" + len_end + "文字、全角で "+ intB + "文字以内で入力して下さい。";
				}
				if(!jsSTDFUNC_ChkLenBRange(objTarget,len_start, len_end, strCmt)) return false;

			} else {
				alert("[L]条件指定が間違っています。"); return false;
			}

		} else if(chrType == "R"){
			var range_start = 0;
			var range_end = 0;
			var arg = strChkT.substr(i+1,strChkT.length-i);
			var strSplit = arg.split("/");
			if(strSplit.length >= 3){
				var strSplit2 = strSplit[1].split("-");
				if(strSplit2.length == 2) {
					range_start = parseInt(strSplit2[0]);
					range_end = parseInt(strSplit2[1]);
					strCmt = strMessage + "には" + range_start + " ～ "+ range_end + "の範囲の値を入力して下さい。";

					if(!jsSTDFUNC_ChkNumRange(objTarget,range_start, range_end, strCmt)) return false;
				} else {
					alert("[R]条件指定が間違っています。"); return false;
				}
			} else {
				alert("[R]条件指定が間違っています。"); return false;
			}

		} else if(chrType == "X"){
			var arg = strChkT.substr(i+1,strChkT.length-i);
			var strSplit = arg.split("/");
			if(strSplit.length >= 4){
				var dummy = strSplit[2].split("-");
				if(dummy.length == 2){
					var strA = strSplit[1];
					var strB = parseInt(dummy[0])+"/"+parseInt(dummy[1]);
					var mesType = "";
					for(j=0; j<strA.length; j++){
							 if(strA.charAt(j) == "0") mesType += " 0-9";
						else if(strA.charAt(j) == "a") mesType += " a-z";
						else if(strA.charAt(j) == "A") mesType += " A-Z";
					}
					strCmt = strMessage + "で入力できる文字は" + mesType + " で文字数は " + strSplit[2] + " 文字以内です。";
					if(!jsSTDFUNC_ChkPass(objTarget, strA, strB, strCmt)) return false;
				} else {
					alert("[X]条件指定が間違っています。"); return false;
				}
			} else {
				alert("[X]条件指定が間違っています。"); return false;
			}
			i += strSplit[1].length + strSplit[2].length + 3;
		} else if(chrType == "N"){
			strCmt = strMessage + "は数値を入力して下さい。";
			if(!jsSTDFUNC_ChkNum(objTarget, strCmt)) return false;
		} else if(chrType == "I"){
			strCmt = strMessage + "は整数値を入力して下さい。";
			if(!jsSTDFUNC_ChkIntNum(objTarget, strCmt)) return false;
		} else if(chrType == "M"){
			strCmt = strMessage + "が不正です。";
			if(!jsSTDFUNC_ChkEmail(objTarget, strCmt)) return false;
		} else if(chrType == "U"){
			strCmt = strMessage + "が不正です。";
			if(!jsSTDFUNC_ChkUrl(objTarget, strCmt)) return false;
		} else if(chrType == "D"){
			strCmt = strMessage + "が不正です。";
			if(!jsSTDFUNC_ChkDate(objTarget, strCmt)) return false;
		} else if(chrType == "d"){
			var arg = strChkT.substr(i+1,strChkT.length-i);
			var strSplit = arg.split("/");
			if(strSplit.length >= 4){
				strCmt = strMessage + "が不正です。";
				if(!jsSTDFUNC_ChkDate2(objTarget,eval(strSplit[1]),eval(strSplit[2]),strCmt)) {return false;}
			} else {
				alert("[d]条件指定が間違っています。"); return false;
			}
			i += strSplit[1].length + strSplit[2].length + 3;
		} else if(chrType == "H"){
			strCmt = strMessage + "が不正です。";
			if(!jsSTDFUNC_ChkTime(objTarget, strCmt)) return false;
		} else if(chrType == "Z"){
			strCmt = strMessage + "が不正です。";
			if(!jsSTDFUNC_ChkZipCode(objTarget, strCmt)) return false;
		} else if(chrType == "P"){
			strCmt = strMessage + "が不正です。";
			if(!jsSTDFUNC_ChkPhone(objTarget, strCmt)) return false;
		} else if(chrType == "n"){
			strCmt = strMessage + "は数字のみ使用できます。";
			if(!jsSTDFUNC_ChkStrNum(objTarget, strCmt)) return false;
		} else if(chrType == "F"){
			strCmt = strMessage + "「ひらがな」・「カタカナ」のみで入力して下さい。";
			if(!jsSTDFUNC_Furigana(objTarget, strCmt)) return false;
		}
	}
	return true;
}
