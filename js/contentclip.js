
    var _defaults = {
        defElem: $('.app__content-postcontent p')
    }

    function getParagraphTextLength() {
        var elemLength = _defaults.defElem.length
        var elem       = _defaults.defElem
        if(elemLength >= 400){
            elem.slice(-3).append("<em>...</em>")
        }
    }
