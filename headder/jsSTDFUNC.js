/*******************************************************************************
	jsSTDFUNC2.js 2.0.0 �����[�X�m�[�g

	�E�ǉ����ꂽ�@�\
		�E�����Ó��������֐� jsSTDFUNC_SumCheck ���ǉ�����܂����B
		�E�������u��999,999,999�v�\���ɕҏW����jsSTDFUNC_YenFormat���ǉ�����܂����B
		�E�G�������g�̃L�[�R�[�h���G���^�[�L�[�Ȃ��false��Ԃ�IgnoreEnterKey���ǉ�����܂����B

	�E���\����C���Ǔ_
		�EjsSTDFUNC_SumCheck�ɕ������`�F�b�N�I�v�V������ǉ����܂����B
		  �܂��A����ɔ����I�v�V������1���ύX���܂����B�����[�X�O�Ɏg�p
		  ����Ă����ꍇ�͒��ӂ��ĉ������B

		�E�u�����N�`�F�b�N jsSTDFUNC_ChkBlank �Ŕ��p�A�S�p�X�y�[�X���Ƀu�����N�Ƃ݂Ȃ�
		  �G���[��Ԃ��悤�ɂȂ�܂����B

	�E�C�����ꂽ�s�
		�EjsSTDFUNC_SumCheck�́uX�v�I�v�V�����g�p���ɁA���̓I�u�W�F�N�g��2�����ȉ���
		  �ꍇ�K���G���[�ƕԂ��s��������C�����܂����B

	�E���m�̖��
		�EjsSTDFUNC_CurrencyFormat�ŁA3�̔{�����̃}�C�i�X�\�L��^�����ꍇ�A
		  �u-,999,999,999�v�ƕҏW���Ă��܂��B

*******************************************************************************/
/*******************************************************************************
	������̒����`�F�b�N�i�o�C�g�P�ʁj
	����		1:�ΏۂƂ���G�������g
				2:�����i�o�C�g�j
				3:�G���[���̃��b�Z�[�W
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
	�����񒷂͈̔̓`�F�b�N�i�o�C�g�P�ʁj
	����		1:�ΏۂƂ���G�������g
				2:�ŏ��l
				3:�ő�l
				4:�G���[���̃��b�Z�[�W
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
	������̒������擾����i�o�C�g�P�ʁj
	����		1:�ΏۂƂ��镶����
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
	�u�����N�`�F�b�N�i�e�L�X�g�{�b�N�X����j
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
*******************************************************************************/
function jsSTDFUNC_ChkBlank(objTarget, strMessage) {
	tmp = objTarget.value;
	tmp = tmp.replace("�@", "");
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
	�u�����N�`�F�b�N�i�P��I�����X�g����j
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
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
	���l�`�F�b�N
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
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
	�����l�`�F�b�N
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
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
	�����l����
	����		1:�ΏۂƂ��镶����
*******************************************************************************/
function jsSTDFUNC_IsIntNum(intValue) {
	if (isNaN(intValue)) return false;
	if (intValue.search(/[.]/) > 0) {
		return false;
	}
	return true;
}
/*******************************************************************************
	���l�͈̓`�F�b�N
	����		1:�ΏۂƂ���G�������g
				2:�ŏ��l
				3:�ő�l
				4:�G���[���̃��b�Z�[�W
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
	���l�͈͔���
	����		1:�ΏۂƂ��镶����
				2:�ŏ��l
				3:�ő�l
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
	���[���A�h���X�`�F�b�N
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
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
	���[���A�h���X����
	����		1:�ΏۂƂ��镶����
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
	URL�A�h���X�`�F�b�N
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
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
	URL�A�h���X����
	����		1:�ΏۂƂ��镶����
*******************************************************************************/
function jsSTDFUNC_IsUrl(strValue) {
	if (strValue == "") return true;

	data = strValue.match(/(http|ftp):\/\/.+/);
	if (!data) return false;
	return true;

	//�ȉ��̃R�[�h�ł́Ahttp://cogito.co.jp���G���[�ƂȂ�̂Ł��̃R�[�h�ɂ����Bfujita
/*
	if (strValue == "") return true;
	var strReg1 = "[ �@]|(\\.\\.)|(\\.$)|(\\/\\.)|(\\.\\/)";
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
	���t�`�F�b�N(yyyy/mm/dd)
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
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
	���t�`�F�b�N Type2 
	����		1:�N��ΏۂƂ���G�������g(yyyy)
				2:����ΏۂƂ���G�������g(mm)
				3:����ΏۂƂ���G�������g(dd)
				4:�G���[���̃��b�Z�[�W
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
	���t����(1900�ȍ~�̂�OK)
	����		1:�N
				2:��
				3:��
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
	�����`�F�b�N�ihh:mm�j
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
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
	�ʉ݃t�H�[�}�b�g(�~)�i1,000,000,000�j
	����		1:�ΏۂƂ��镶����
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
�������u�C�v��؂�̒ʉ݁i�~�j�\���ɕҏW����
	����		1:�ΏۂƂ��镶����
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
	������(�Ђ炪��) �� �啶��(�Ђ炪��)�ϊ�
	����		1:�ΏۂƂ��镶����
*******************************************************************************/
function jsSTDFUNC_UCaseKana(strValue) {
	var intCnt      = 0;
	var strRetValue = "";
	var strAt       = "";

	for(intCnt=0; intCnt<strValue.length; intCnt++){
		strAt = strValue.charAt(intCnt);
		     if(strAt=="��" || strAt=="�@" || strAt=="�") strRetValue += "��";
		else if(strAt=="��" || strAt=="�B" || strAt=="�") strRetValue += "��";
		else if(strAt=="��" || strAt=="�D" || strAt=="�") strRetValue += "��";
		else if(strAt=="��" || strAt=="�F" || strAt=="�") strRetValue += "��";
		else if(strAt=="��" || strAt=="�H" || strAt=="�") strRetValue += "��";
		else if(strAt=="��" || strAt=="�b" || strAt=="�") strRetValue += "��";
		else if(strAt=="��" || strAt=="��" || strAt=="�") strRetValue += "��";
		else if(strAt=="��" || strAt=="��" || strAt=="�") strRetValue += "��";
		else if(strAt=="��" || strAt=="��" || strAt=="�") strRetValue += "��";
		else strRetValue += strAt;
	}
	return strRetValue;
}

/*******************************************************************************
	�X�֔ԍ��`�F�b�N
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
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
	�d�b�ԍ��`�F�b�N("-"�Ɣ��p���l�݂̂n�j)
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
*******************************************************************************/
function jsSTDFUNC_ChkPhone(objTarget, strMessage) {
	if (objTarget.value == "") return true;
	var strReg1 = "[ �@]|(^\\-)|(\\-$)|(\\-\\-)";
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
	�摜�t�@�C���`�F�b�N(�g���q�̂݃`�F�b�N)
	����		1:�ΏۂƂ���G�������g
				2:�t�@�C���g���q(jpg, gif �Ȃ�)
				3:�G���[���̃��b�Z�[�W
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
	�摜�t�@�C���T�C�Y�`�F�b�N
	����		1:�ΏۂƂ���G�������g
				2:���ŏ��T�C�Y
				3:�c�ŏ��T�C�Y
				4:���ő�T�C�Y
				5:�c�ő�T�C�Y
				6:�G���[���̃��b�Z�[�W
				7:�G���[���̑ΏۂƂ���G�������g
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
	�����`�F�b�N
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
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
	PasswordCheck�i�����E���p�p���j
	����		1:�ΏۂƂ���G�������g
				2:�^�C�v�`�F�b�N	�g�p�ł���^�C�v�@"0aA"
				3:�����`�F�b�N  	10���̏ꍇ�@"=10"
									4������P�O���̏ꍇ�@"4/10"
				4:�G���[���̃��b�Z�[�W
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
	Input�^�O���́@Input�^�O�y�ыL���`�F�b�N
	����		1:�ΏۂƂ���G�������g
				2:�G���[���̃��b�Z�[�W
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
	�ӂ肪�ȃ`�F�b�N
		����		1:�ΏۂƂ���G�������g
		2006.04.04
*******************************************************************************/
function jsSTDFUNC_Furigana(objTarget, strMessage) {
	var strValue = objTarget.value;
	if (strValue == "") return true;
	if( strValue.match( /[^��-��@-�[0-9�O-�Xa-zA-Z��-���`-�y�@\s]+/ ) ) {
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
	e�G�������g�̃L�[�R�[�h��Enter�łȂ�����Ԃ�
*******************************************************************************/
function jsSTDFUNC_IgnoreEnter(e)
{
	if (getKEYCODE(e) == 13) {
		event.returnValue = false;
	}
}
/*******************************************************************************
	�L�[�R�[�h��Ԃ��B
*******************************************************************************/
function getKEYCODE(e)
{
    if(document.layers) return e.which
    if(document.all)    return event.keyCode
}

/*******************************************************************************
	����Check (����: �������̃`�F�b�N�͖���)
	����	1:�ΏۃG�������g
			2:�`�F�b�N�̎��(�g�p��@"BTR/100")
				B: �u�����N�`�F�b�N�i�e�L�X�g�{�b�N�X����j
				S: �u�����N�`�F�b�N�i�P��I�����X�g����j
				T: �^�O�y�ыL���`�F�b�N
				L/200/: ���͉\�������`�F�b�N�i/�o�C�g��/�j
					L/10/  �Ƃ���ƁA10byte�ȓ��Ȃ�΃`�F�b�NOK�ƂȂ�B
					L/5-8/ �Ƃ���ƁA5�ȏ�`8�ȓ��Ȃ�΃`�F�b�NOK�ƂȂ�B
				R/2000-2500/: ���l�͈̓`�F�b�N
					R/2000-2500/  �Ƃ���ƁA2000�`2500�̐��l�͈͂Ȃ�΃`�F�b�NOK�ƂȂ�B
				N: ���l�`�F�b�N
				I: �����l�`�F�b�N
				n: �����`�F�b�N
				M: ���[���A�h���X�`�F�b�N
				U: URL�A�h���X�`�F�b�N
				D: ���t�`�F�b�N-1(yyyy/mm/dd)
				d/mm/dd: ���t�`�F�b�N-2(/document.form.���G�������g/document.form.���G�������g/)
				H: �����`�F�b�N�ihh:mm�j
				Z: �X�֔ԍ��`�F�b�N
				P: �d�b�ԍ��`�F�b�N
				X/0aA/6-8/: ���p�p�������`�F�b�N
				F: �ӂ肪�ȃ`�F�b�N
				z: �S�p�����`�F�b�N�i���p�J�i���s�j
			3:�G�������g��
******************************************************************************/
function jsSTDFUNC_SumCheck(objTarget, strChkT, strMessage){
	var objStr = objTarget.value;
	var err = 0;
	var chrType = "";

	for(var i=0; i<strChkT.length; i++){
		chrType = strChkT.charAt(i);

		if(chrType == "B"){
			strCmt = strMessage + "����͂��ĉ������B";
			if(!jsSTDFUNC_ChkBlank(objTarget, strCmt)) return false;
		} else if(chrType == "S"){
			strCmt = strMessage + "��I�����ĉ������B";
			if(!jsSTDFUNC_ChkLstBlank(objTarget, strCmt)) return false;
		} else if(chrType == "T"){
			strCmt = strMessage + "�ɂ̓^�O��N�H�[�e�[�V�����L�����܂߂Ȃ��ŉ������B";
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
					strCmt = strMessage + "�ɂ͔��p��" + len_start + " �` "+ len_end + "�����͈̔͂œ��͂��ĉ������B";
				} else {
					len_end = parseInt(strSplit[1]);
					if(len_end != 0) var intB = parseInt(len_end/2);
					strCmt = strMessage + "�ɂ͔��p��" + len_end + "�����A�S�p�� "+ intB + "�����ȓ��œ��͂��ĉ������B";
				}
				if(!jsSTDFUNC_ChkLenBRange(objTarget,len_start, len_end, strCmt)) return false;

			} else {
				alert("[L]�����w�肪�Ԉ���Ă��܂��B"); return false;
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
					strCmt = strMessage + "�ɂ�" + range_start + " �` "+ range_end + "�͈̔͂̒l����͂��ĉ������B";

					if(!jsSTDFUNC_ChkNumRange(objTarget,range_start, range_end, strCmt)) return false;
				} else {
					alert("[R]�����w�肪�Ԉ���Ă��܂��B"); return false;
				}
			} else {
				alert("[R]�����w�肪�Ԉ���Ă��܂��B"); return false;
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
					strCmt = strMessage + "�œ��͂ł��镶����" + mesType + " �ŕ������� " + strSplit[2] + " �����ȓ��ł��B";
					if(!jsSTDFUNC_ChkPass(objTarget, strA, strB, strCmt)) return false;
				} else {
					alert("[X]�����w�肪�Ԉ���Ă��܂��B"); return false;
				}
			} else {
				alert("[X]�����w�肪�Ԉ���Ă��܂��B"); return false;
			}
			i += strSplit[1].length + strSplit[2].length + 3;
		} else if(chrType == "N"){
			strCmt = strMessage + "�͐��l����͂��ĉ������B";
			if(!jsSTDFUNC_ChkNum(objTarget, strCmt)) return false;
		} else if(chrType == "I"){
			strCmt = strMessage + "�͐����l����͂��ĉ������B";
			if(!jsSTDFUNC_ChkIntNum(objTarget, strCmt)) return false;
		} else if(chrType == "M"){
			strCmt = strMessage + "���s���ł��B";
			if(!jsSTDFUNC_ChkEmail(objTarget, strCmt)) return false;
		} else if(chrType == "U"){
			strCmt = strMessage + "���s���ł��B";
			if(!jsSTDFUNC_ChkUrl(objTarget, strCmt)) return false;
		} else if(chrType == "D"){
			strCmt = strMessage + "���s���ł��B";
			if(!jsSTDFUNC_ChkDate(objTarget, strCmt)) return false;
		} else if(chrType == "d"){
			var arg = strChkT.substr(i+1,strChkT.length-i);
			var strSplit = arg.split("/");
			if(strSplit.length >= 4){
				strCmt = strMessage + "���s���ł��B";
				if(!jsSTDFUNC_ChkDate2(objTarget,eval(strSplit[1]),eval(strSplit[2]),strCmt)) {return false;}
			} else {
				alert("[d]�����w�肪�Ԉ���Ă��܂��B"); return false;
			}
			i += strSplit[1].length + strSplit[2].length + 3;
		} else if(chrType == "H"){
			strCmt = strMessage + "���s���ł��B";
			if(!jsSTDFUNC_ChkTime(objTarget, strCmt)) return false;
		} else if(chrType == "Z"){
			strCmt = strMessage + "���s���ł��B";
			if(!jsSTDFUNC_ChkZipCode(objTarget, strCmt)) return false;
		} else if(chrType == "P"){
			strCmt = strMessage + "���s���ł��B";
			if(!jsSTDFUNC_ChkPhone(objTarget, strCmt)) return false;
		} else if(chrType == "n"){
			strCmt = strMessage + "�͐����̂ݎg�p�ł��܂��B";
			if(!jsSTDFUNC_ChkStrNum(objTarget, strCmt)) return false;
		} else if(chrType == "F"){
			strCmt = strMessage + "�u�Ђ炪�ȁv�E�u�J�^�J�i�v�݂̂œ��͂��ĉ������B";
			if(!jsSTDFUNC_Furigana(objTarget, strCmt)) return false;
		}
	}
	return true;
}
