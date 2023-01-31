function ShowHideOptions(el, showMoreText, showFewerText)
{
 var elPop = document.getElementById("moresearchoptionsdiv");
 if (elPop.style.display=="block")
 {
 elPop.style.display = "none";
 el.innerHTML = showMoreText;
 }
 else
 {
 elPop.style.display = "block";
 el.innerHTML = showFewerText;
 }
}