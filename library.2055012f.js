!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequireb5a7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){r[e]=n},e.parcelRequireb5a7=t);var o=t("74hJy"),u=t("dmTlY"),a=t("kIlwO"),i="click",d=document.querySelector(".gallery-js"),c=document.querySelector("#lib-watched-tab"),l=document.querySelector("#lib-queue-tab"),f="watched";function s(e){var n=[];switch(f=e){case"watched":n=o.movieLocalStorage.watchedArray;break;case"queue":n=o.movieLocalStorage.queueArray}var r=n.map((function(e){return e.stringGenres=e.genres.map((function(e){return e.name})).join(", "),(0,a.markupCardMovie)(e)}));d.innerHTML=r.join("")}u.buttonAddWatch.addEventListener(i,(function(){return s(f)})),u.buttonAddQueue.addEventListener(i,(function(){return s(f)})),c.addEventListener(i,(function(){return s("watched")})),l.addEventListener(i,(function(){return s("queue")})),s(f),t("dmTlY"),t("bUBQC"),t("deWps")}();
//# sourceMappingURL=library.2055012f.js.map
