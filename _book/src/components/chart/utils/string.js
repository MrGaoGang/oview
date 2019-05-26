function isEmpty(obj) {

    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    }
    if (obj instanceof Object) {
        if (Object.keys(obj).length == 0) {
            return true;
        }
    }

    return  false;
}

/**
 * 获取Y轴
 * @param {*} position 
 */
function getY(position) {
    if (position.indexOf("*") != -1) {
        return position.substring(position.indexOf("*")+1);
    } else {
        return null;
    }
}
/**
 * 获取X轴
 * @param {*} position 
 */
function getX(position) {
    if (position.indexOf("*") != -1) {
        return position.substring(0, position.indexOf("*"));
    } else {
        return position;
    }
}

export {
    isEmpty,
    getX,
    getY
}