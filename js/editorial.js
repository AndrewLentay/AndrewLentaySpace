if (!self.__WB_pmw) { self.__WB_pmw = function (obj) { this.__WB_source = obj; return this; } }
{

    var iTimeoutId;
    var bModOccured = false; function RotateHomeImages(aArrayArg) {
        /* Turn off the former tab item */
        oHomeInfoPaneTextTitleOff = document.getElementById(sFormerText.toString());
        oHomeInfoPaneTextTitleOff.style.display = 'none';

        oHomeCurrentTabOff = document.getElementById(sFormerTab.toString());
        oHomeCurrentTabOff.style.backgroundImage = 'url(' + sFormerTabBackground + ')';


        if (!bModOccured) {
            if (iCurrentArrayImg < (aArrayArg.length - 1)) {
                /* Increment to the next array item */
                iCurrentArrayImg++;
            } else {
                /* Stop rotation after the last item */
                clearTimeout(iTimeoutId);
            }
        }


        /* Switch the main info pane image to the next image in the passed array object */
        oInfoPaneMain = document.getElementById("ImgInfoPaneMain");
        oInfoPaneMain.src = aArrayArg[iCurrentArrayImg][0];

        var sCurrentTab = "DivInfoPaneTab0" + (iCurrentArrayImg + 1);
        sFormerTab = sCurrentTab;
        sFormerTabBackground = aArrayArg[iCurrentArrayImg][2];
        oHomeCurrentTab = document.getElementById(sCurrentTab.toString());
        oHomeCurrentTab.style.backgroundImage = 'url(' + aArrayArg[iCurrentArrayImg][1] + ')';

        var sCurrentText = "SpanDescription0" + (iCurrentArrayImg + 1);
        sFormerText = sCurrentText;

        oHomeInfoPaneTextTitle = document.getElementById(sCurrentText.toString());
        oHomeInfoPaneTextTitle.style.display = 'block';
    }

    function ModRotation(iJumpToID) {
        iJumpToID = iJumpToID;
        clearTimeout(iTimeoutId);
        iCurrentArrayImg = iJumpToID;
        bModOccured = true;
        RotateHomeImages(aInfoPaneImg);
    }


    /*
    Sub Page Image Rotation
    */
    var iCurrentArrayImg = 0;
    var iImgLength;
    var sFormerText = 'SpanDescription01';
    var sFormerTab = 'DivInfoPaneTab01';
    var sFormerTabBackground = 'img/InfoPaneTabs01Off.gif';

    function RotateSubPageImages(aArrayArg) {
        oSubInfoPaneTextTitleOff = document.getElementById(sFormerText.toString());
        oSubInfoPaneTextTitleOff.style.display = 'none';


        if (iCurrentArrayImg < (aArrayArg.length - 1)) {
            iCurrentArrayImg++;
        } else {
            iCurrentArrayImg = 0;
        }

        oInfoPaneSubMain = document.getElementById("ImgInfoPaneSubMain");
        oInfoPaneSubMain.src = aArrayArg[iCurrentArrayImg];

        var sCurrentText = "SpanDescription0" + (iCurrentArrayImg + 1);
        sFormerText = sCurrentText;

        oSubInfoPaneTextTitle = document.getElementById(sCurrentText.toString());
        oSubInfoPaneTextTitle.style.display = 'block';
    }

    /* determine height for <div> element  */
    function getDivSize(DivID) {
        var d = document.getElementById(DivID);
        var divHeight = 0;
        if (d.offsetHeight) {
            divHeight = d.offsetHeight;
        }
        else if (d.style.pixelHeight) {
            divHeight = d.style.pixelHeight;
        }
        return divHeight;
    }
}
