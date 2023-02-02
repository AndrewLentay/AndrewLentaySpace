var imgs = [
  "img/ultrashit/Glory_to_Ukraine.png",
  "img/ultrashit/Cat.png",
  "img/ultrashit/russian_warship_go_fuck_yourself.jpg",
  "img/ultrashit/ale.png",
  "img/ultrashit/govno_s_dymom.jpg",
  "img/ultrashit/sanyawin11.png",
  "img/ultrashit/2028.jpg",
  "img/ultrashit/blyat_ache_vibrat.png",
  "img/ultrashit/tryapka.png",
  "img/ultrashit/4pozicii.png",
  "img/ultrashit/aqua.gif",
];
var txts = [
  "Слава Україні!",
  "XD",
  "русский военный корабль, <b>иди на хуй!</b>",
  "FoxAle)0)))00",
  "Говно с дымом!",
  "Ох мой виндоус 11-чан я тебя люблю ня~~~~ аххххххх давай глубже ааааааах",
  "Новый год 2028",
  "Блять, аче выбрать?",
  "Витирайте ноги!",
  "А я сейчас вам покажу, откуда на Беларусь готовилось нападение. И если бы за шесть часов до операции не был нанесён превентивный удар по позициям — четыре позиции, я сейчас покажу карту, привёз — они бы атаковали наши войска, Беларуси и России, которые были на учениях. Поэтому не мы развязали эту войну, у нас совесть чиста. Хорошо, что начали. Биологическое оружие, самые большие электростанции атомные — и всё это были готовы взорвать.",
  "Водичка с подозрительными грибами",
];
var max = imgs.length - 1;
var min = 0;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // [Максимум; Минимум]
}
ran = getRandomIntInclusive(min, max)
function bannrand() {
  document.getElementById("bannerimg").src = imgs[ran];
  document.getElementById("bannertext").innerHTML = txts[ran];
}
bannrand()
