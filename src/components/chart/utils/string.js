function isEmpty(obj) {

    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    }
    if (obj instanceof Object) {
        if (Object.keys(obj).length == 0) {
            return true;
        }
    }


    return false;
}


export {
    isEmpty
}