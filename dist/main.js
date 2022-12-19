/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://css.gg/check.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 1.1rem;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n* ::-webkit-scrollbar {\n  width: 10px;\n}\n* ::-webkit-scrollbar-track {\n  background: inherit;\n}\n* ::-webkit-scrollbar-thumb {\n  background: rgb(36, 60, 37);\n  border-radius: 10px;\n}\n* ::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\nbody {\n  background-color: black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 100vh;\n  width: 100vw;\n}\n\nheader {\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background-color: rgb(170, 139, 86);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter {\n  grid-row: 10/11;\n  grid-column: 1/-1;\n  background-color: rgb(170, 139, 86);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nnav {\n  grid-row: 2/10;\n  grid-column: 1/3;\n  background-color: rgb(57, 81, 68);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\nnav .projectTitle {\n  height: fit-content;\n  width: 100%;\n  font-size: 2rem;\n  padding: 15px;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n}\nnav .projectList {\n  display: grid;\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 5px;\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n  justify-items: left;\n  align-items: top;\n  overflow: auto;\n  width: 100%;\n}\nnav .projectList .project {\n  border: 3px solid grey;\n  width: fit-content;\n  height: fit-content;\n  padding: 0px 10px;\n  border-radius: 5px;\n  background-color: rgb(240, 235, 206);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n}\nnav .projectList .project .title {\n  color: black;\n  font-size: 1.5rem;\n}\nnav .projectList .project .title:hover {\n  cursor: pointer;\n}\nnav .projectList .project .delete {\n  height: 1.5rem;\n  width: 1.5rem;\n  background-color: grey;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnav .projectList .project .delete:before, nav .projectList .project .delete:after {\n  content: \"\";\n  height: 90%;\n  width: 20%;\n  background-color: black;\n  position: absolute;\n}\nnav .projectList .project .delete:before {\n  transform: rotate(45deg);\n}\nnav .projectList .project .delete:after {\n  transform: rotate(-45deg);\n}\nnav .projectList .project:hover {\n  background-color: grey;\n}\nnav .btns {\n  height: 7%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 15px;\n  padding-bottom: 5px;\n}\nnav .btns .btn {\n  height: 90%;\n  width: 45%;\n  border-radius: 5px;\n  border: none;\n  background-color: rgb(170, 139, 86);\n  transition: 0.2s;\n  font-weight: 600;\n}\nnav .btns .btn:hover {\n  background-color: rgb(130, 90, 21);\n}\nnav .btns .btn:active {\n  scale: 0.95;\n}\nnav .btns .delete {\n  left: 5px;\n  color: rgb(128, 31, 31);\n}\n\nmain {\n  grid-column: 3/-1;\n  grid-row: 2/10;\n  background-color: rgb(78, 108, 80);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\nmain .toDoListTitle {\n  width: 100%;\n  height: fit-content;\n  text-align: center;\n  font-size: 3rem;\n  margin: 20px;\n}\nmain .addToDoBtn {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: black;\n  padding: 0px 10px;\n}\nmain .toDoList {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 5px;\n  justify-items: center;\n  overflow-y: auto;\n}\nmain .toDoList .addToDo {\n  height: 1.7rem;\n  width: 60%;\n  display: flex;\n  background-color: rgb(240, 235, 206);\n  border-radius: 5px;\n  align-items: center;\n}\nmain .toDoList .addToDo .addToDoBtn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  margin-left: 5px;\n  position: relative;\n}\nmain .toDoList .addToDo .addToDoBtn:before, main .toDoList .addToDo .addToDoBtn:after {\n  content: \"\";\n  height: 60%;\n  width: 8%;\n  background-color: black;\n  position: absolute;\n}\nmain .toDoList .addToDo .addToDoBtn:before {\n  transform: rotate(90deg);\n}\nmain .toDoList .addToDo .addToDoBtnTitle {\n  color: black;\n  display: flex;\n  align-items: center;\n}\nmain .toDoList .addToDo:hover {\n  background-color: rgb(167, 163, 143);\n  cursor: pointer;\n}\nmain .toDoList .toDoInputField {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 1.7rem;\n  gap: 15px;\n  background-color: rgb(240, 235, 206);\n  border-radius: 5px;\n  width: 60%;\n  padding: 0px 10px;\n  display: none;\n}\nmain .toDoList .toDoInputField #toDoInput {\n  border: 1px solid black;\n  background-color: rgb(240, 235, 206);\n  border-radius: 5px;\n  height: 90%;\n  color: black;\n  padding: 0px 20px;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #toDoInputDate {\n  color: black;\n  border: none;\n  padding: 0px 15px;\n  background-color: rgb(195, 191, 166);\n  border-radius: 5px;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight .toDoInputBtns {\n  height: 1.5rem;\n  width: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  transition: 0.1s;\n  border: none;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight .toDoInputBtns:hover {\n  scale: 1.1;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight .toDoInputBtns:active {\n  scale: 0.95;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(178, 86, 86);\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:before, main .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:after {\n  content: \"\";\n  height: 70%;\n  width: 8%;\n  background-color: white;\n  position: absolute;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:before {\n  transform: rotate(45deg);\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:after {\n  transform: rotate(-45deg);\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #submitToDoInput {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  background-color: green;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #submitToDoInput:after {\n  content: \"\";\n  position: absolute;\n  width: 20%;\n  height: 50%;\n  border-width: 0 2px 2px 0;\n  border-style: solid;\n  transform: rotate(45deg);\n}\nmain .toDoList .toDo {\n  background-color: rgb(255, 169, 169);\n  border: none;\n  border-radius: 5px;\n  height: 1.7rem;\n  width: 60%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 15px;\n}\nmain .toDoList .toDo .toDoTitle {\n  color: black;\n  font-size: 1.5rem;\n  width: 50%;\n  height: 1.7rem;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  overflow: auto;\n}\nmain .toDoList .toDo .toDoTitle::-webkit-scrollbar {\n  display: none;\n}\nmain .toDoList .toDo .markDone {\n  color: black;\n  padding: 0px 5px;\n}\nmain .toDoList .toDo .markDone:hover {\n  cursor: pointer;\n  background-color: rgb(174, 110, 110);\n}\nmain .toDoList .toDo .toDoRightSide {\n  display: flex;\n  align-items: center;\n  gap: 25px;\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn {\n  height: 1.3rem;\n  width: 1.3rem;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:before, main .toDoList .toDo .toDoRightSide #deleteToDoBtn:after {\n  content: \"\";\n  height: 90%;\n  width: 10%;\n  background-color: black;\n  position: absolute;\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:before {\n  transform: rotate(45deg);\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:after {\n  transform: rotate(-45deg);\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:hover {\n  background-color: rgb(174, 110, 110);\n}\nmain .toDoList .toDo .toDoRightSide #date {\n  color: black;\n  border: none;\n  padding: 0px 15px;\n  background-color: rgb(195, 191, 166);\n  border-radius: 5px;\n}\nmain .toDoList .toDo .toDoRightSide #date:focus {\n  outline: none;\n}\nmain .titleBtns {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  height: 2rem;\n  margin-left: 20px;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\nmain .titleBtns .titleInputBtns {\n  height: 2rem;\n  width: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  transition: 0.1s;\n  border: none;\n}\nmain .titleBtns .titleInputBtns:hover {\n  scale: 1.1;\n}\nmain .titleBtns .titleInputBtns:active {\n  scale: 0.9;\n}\nmain .titleBtns #cancelTitleInput {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(178, 86, 86);\n}\nmain .titleBtns #cancelTitleInput:before, main .titleBtns #cancelTitleInput:after {\n  content: \"\";\n  height: 70%;\n  width: 8%;\n  background-color: white;\n  position: absolute;\n}\nmain .titleBtns #cancelTitleInput:before {\n  transform: rotate(45deg);\n}\nmain .titleBtns #cancelTitleInput:after {\n  transform: rotate(-45deg);\n}\nmain .titleBtns #submitTitleInput {\n  background-color: rgb(56, 137, 56);\n}\nmain .titleBtns #projectTitle {\n  height: 2rem;\n  border: none;\n  border-radius: 15px;\n  padding: 0px 20px;\n  color: black;\n  width: fit-content;\n}\nmain #projectTitle:focus {\n  outline: none;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import url('https://css.gg/check.css');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 1.1rem;\n    font-family: 'Roboto', sans-serif;\n    color: white;\n    ::-webkit-scrollbar {\n        width: 10px;\n      }\n      \n      /* Track */\n      ::-webkit-scrollbar-track {\n        background: inherit; \n      }\n       \n      /* Handle */\n      ::-webkit-scrollbar-thumb {\n        background: rgb(36, 60, 37); \n        border-radius: 10px;\n      }\n      \n      /* Handle on hover */\n      ::-webkit-scrollbar-thumb:hover {\n        background: #555; \n      }\n}\n$header-footer: rgb(170, 139, 86);\n$nav: rgb(57, 81, 68);\n$main:rgb(78, 108, 80);\n$todo:rgb(240, 235, 206);\n$buttons: rgb(170, 139, 86);\n$date-bc: rgb(195, 191, 166);\n$toDoBR: 5px;\n$todoInput: rgb(255, 250, 220);\n\n@mixin flex-v {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n@mixin hf {\n    background-color: $header-footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\nbody {\n    background-color: black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    height: 100vh;\n    width: 100vw;\n}\nheader {\n    grid-row: 1 / 2;\n    grid-column: 1/ -1;\n    @include hf\n}\nfooter {\n    grid-row: 10/11;\n    grid-column: 1/ -1;\n    @include hf\n}\n\nnav {\n    grid-row: 2 / 10;\n    grid-column: 1/3;\n    background-color: $nav;\n    position: relative;\n    @include flex-v;\n    .projectTitle {\n        height: fit-content;\n        width: 100%;\n        font-size: 2rem;\n        padding: 15px;\n        font-weight: 600;\n        display: flex;\n        justify-content: center;\n    }\n    .projectList {\n        display: grid;\n        grid-auto-flow: row;\n        grid-auto-rows: min-content;\n        gap: 5px;\n        height: 100%;\n        width: 100%;\n        padding: 15px;\n        justify-items: left;\n        align-items: top;\n        overflow: auto;\n        width: 100%;\n        .project {\n            border: 3px solid grey;\n            width: fit-content;\n            height: fit-content;\n            padding: 0px 10px;\n            border-radius: 5px;\n            background-color: $todo;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            gap: 15px;\n            .title{\n                color: black;\n                font-size: 1.5rem;\n            }\n            .title:hover {\n                cursor: pointer;\n            }\n            .delete {\n                height: 1.5rem;\n                width: 1.5rem;\n                background-color: grey;\n                position: relative;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n            .delete:before, .delete:after {\n                content: '';\n                height: 90%;\n                width: 20%;\n                background-color: black;\n                position: absolute;\n            }\n            .delete:before {\n                transform: rotate(45deg);\n            }\n            .delete:after {\n                transform: rotate(-45deg);\n            }\n        }\n        .project:hover{\n            background-color: grey;\n        }\n    }\n    .btns {\n        height: 7%;\n        width: 100%;\n        display: flex;\n        justify-content: space-around;\n        margin-top: 15px;\n        padding-bottom: 5px;\n        .btn {\n            height: 90%;\n            width: 45%;\n            border-radius: 5px;\n            border: none;\n            background-color: $buttons;\n            transition: 0.2s;\n            font-weight: 600;\n        }\n        .btn:hover {\n            background-color: rgb(130, 90, 21);\n        }\n        .btn:active {\n            scale: 0.95;\n        }\n        .delete {\n            left: 5px;\n            color: rgb(128, 31, 31);\n        }\n    }\n}\n\nmain {\n    grid-column: 3 / -1;\n    grid-row: 2/10;\n    background-color: $main;\n    position: relative;\n    @include flex-v;\n    .toDoListTitle {\n        width: 100%;\n        height: fit-content;\n        text-align: center;\n        font-size: 3rem;\n        margin: 20px;\n    }\n    .addToDoBtn {\n      display: flex;  \n      align-items: center;\n      gap: 5px;\n      color: black;\n      padding: 0px 10px;\n    }\n    .toDoList {\n        width: 100%;\n        height: 100%;\n        display: grid;\n        grid-auto-flow: row;\n        grid-auto-rows: min-content;\n        gap: 5px;\n        justify-items: center;\n        overflow-y: auto;\n        .addToDo {\n            height: 1.7rem;\n            width: 60%;\n            display: flex;\n            background-color: $todo;\n            border-radius: $toDoBR;\n            align-items: center;\n            .addToDoBtn {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                width: 1.7rem;\n                height: 1.7rem;\n                margin-left: 5px;\n                position: relative;\n            }\n            .addToDoBtn:before, .addToDoBtn:after {\n                content: '';\n                height: 60%;\n                width: 8%;\n                background-color: black;\n                position: absolute;\n            }\n            .addToDoBtn:before {\n                transform: rotate(90deg);\n            }\n            .addToDoBtnTitle {\n                color: black;\n                display: flex;\n                align-items: center;\n            }\n        }\n        .addToDo:hover {\n            background-color: rgb(167, 163, 143);\n            cursor: pointer;\n        }\n        .toDoInputField {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            height: 1.7rem;\n            gap: 15px;\n            background-color: $todo;\n            border-radius: $toDoBR;\n            width: 60%;\n            padding: 0px 10px;\n            display: none;\n            #toDoInput {\n                border: 1px solid black;\n                background-color: $todo;\n                border-radius: $toDoBR;\n                height: 90%;\n                color: black;\n                padding: 0px 20px;\n            }\n            .toDoInputFieldRight {\n                display: flex;\n                gap: 5px;\n                align-items: center;\n                #toDoInputDate{\n                    color: black;\n                    border: none;\n                    padding: 0px 15px;\n                    background-color: $date-bc;\n                    border-radius: 5px;\n                }\n               \n                .toDoInputBtns {\n                    height: 1.5rem;\n                    width: 1.5rem;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    border-radius: 15px;\n                    transition: 0.1s;\n                    border: none;\n                }\n                .toDoInputBtns:hover {\n                    scale: 1.1\n                }\n                .toDoInputBtns:active {\n                    scale: 0.95\n                }\n                #cancelToDoInput {\n                    position: relative;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    background-color: rgb(178, 86, 86);\n                }\n                #cancelToDoInput:before, #cancelToDoInput:after {\n                    content: '';\n                    height: 70%;\n                    width: 8%;\n                    background-color: white;\n                    position: absolute;\n                }\n                #cancelToDoInput:before {\n                    transform: rotate(45deg);\n                }\n                #cancelToDoInput:after {\n                    transform: rotate(-45deg);\n                }\n                #submitToDoInput {\n                    position: relative;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    border-radius: 15px;\n                    background-color: green;\n                }\n                #submitToDoInput:after {\n                    content: \"\";\n                    position: absolute;\n                    width: 20%;\n                    height: 50%;\n                    border-width: 0 2px 2px 0;\n                    border-style: solid;\n                    transform: rotate(45deg)\n                }\n            }\n            \n        }\n        .toDo {\n            background-color: rgb(255, 169, 169);\n            border: none;\n            border-radius: $toDoBR;\n            height: 1.7rem;\n            width: 60%;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 0px 15px;\n            .toDoTitle {\n                color: black;\n                font-size: 1.5rem;\n                width: 50%;\n                height: 1.7rem;\n                display: flex;\n                align-items: center;\n                overflow: hidden;\n                overflow: auto;\n            }\n            .toDoTitle::-webkit-scrollbar {\n                display: none;\n              }\n            .markDone {\n                color: black;\n                padding: 0px 5px;\n            }\n            .markDone:hover {\n                cursor: pointer;\n                background-color: rgb(174, 110, 110)\n            }\n            \n            .toDoRightSide {\n                display: flex;\n                align-items: center;\n                gap: 25px\n                ;\n                #deleteToDoBtn {\n                    height: 1.3rem;\n                    width: 1.3rem;\n                    position: relative;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                }\n                #deleteToDoBtn:before, #deleteToDoBtn:after {\n                    content: '';\n                    height: 90%;\n                    width: 10%;\n                    background-color: black;\n                    position: absolute;\n                }\n                #deleteToDoBtn:before {\n                    transform: rotate(45deg);\n                }\n                #deleteToDoBtn:after {\n                    transform: rotate(-45deg);\n                }\n                #deleteToDoBtn:hover {\n                    background-color: rgb(174, 110, 110);\n                }\n                #date {\n                    color: black;\n                    border: none;\n                    padding: 0px 15px;\n                    background-color: $date-bc;\n                    border-radius: 5px;\n                }\n                #date:focus {\n                    outline: none\n                }\n            }\n            \n        }\n    }\n\n    .titleBtns {\n        position: absolute;\n        bottom: 10px;\n        left: 10px;\n        height: 2rem;\n        margin-left: 20px;\n        display: none;\n        justify-content: center;\n        align-items: center;\n        gap: 5px;\n        .titleInputBtns{\n            height: 2rem;\n            width: 2rem;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            border-radius: 15px;\n            transition: 0.1s;\n            border: none;\n        }\n        .titleInputBtns:hover {\n            scale: 1.1\n        }\n        .titleInputBtns:active {\n            scale: 0.9\n        }\n        #cancelTitleInput {\n            position: relative;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            background-color: rgb(178, 86, 86);\n        }\n        #cancelTitleInput:before, #cancelTitleInput:after {\n            content: '';\n            height: 70%;\n            width: 8%;\n            background-color: white;\n            position: absolute;\n        }\n        #cancelTitleInput:before {\n            transform: rotate(45deg);\n        }\n        #cancelTitleInput:after {\n            transform: rotate(-45deg);\n        }\n        #submitTitleInput {\n            background-color: rgb(56, 137, 56);\n        }\n        #projectTitle {\n            height: 2rem;\n            border: none;\n            border-radius: 15px;\n            padding: 0px 20px;\n            color: black;\n            width: fit-content;\n        }\n    }\n    #projectTitle:focus {\n        outline: none;\n    }\n    \n    \n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");




(function() {
    
    let todoApp = {
        projectListArr : [],
    init: function() {
        this.cacheDom();
        this.bindEvents();
        this.renderProjectList();
    },
    cacheDom: function() {
        this.addProjectBtn = document.getElementById('add')
        this.projectList = document.getElementById('projectList')
        this.deleteProjectBtn = document.querySelectorAll('.delete')
        this.projectTitleInput = document.getElementById('projectTitle')
        this.projectTitleForm = document.getElementById('projectTitleForm')
        this.projectTitleInputDiv = document.getElementById('titleBtns')
        this.projectTitleInputConfirm = document.getElementById('submitTitleInput')
        this.projectTitleInputCancel = document.getElementById('cancelTitleInput')
        this.addToDoBtn = document.getElementById('addToDo')
        this.toDoInputFieldForm = document.getElementById('toDoInputField')
        this.toDoInputField = document.getElementById('toDoInput')
        this.cancelToDoInputBtn = document.getElementById('cancelToDoInput')
        this.toDoInputDate = document.getElementById('toDoInputDate')
        this.toDoListDOM = document.getElementById('toDoList')
    },
    bindEvents: function() {
           this.addProjectBtn.addEventListener('click', () => {
           this.projectTitleInputDiv.style.display = 'flex'
           this.projectTitleInput.focus()
        });
        this.projectTitleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createProject();
            this.addProject();
            this.projectTitleInput.value = ''
            this.projectTitleInputDiv.style.display = 'none'
            this.renderProjectList();
        }),
        this.projectTitleInputCancel.addEventListener('click', (e) => {
            e.preventDefault();
            this.projectTitleInput.value = ''
            this.projectTitleInputDiv.style.display = 'none'
        })
        
        
    },
    createProject: function() {
        class Project {
            constructor  (projectTitleInput) {
                this.title = projectTitleInput
                this.toDos = ['add ToDo']
            }
            }
        this.project = new Project(this.projectTitleInput.value)
    },
    addProject: function() {
        this.projectListArr.push(this.project)
    },
    deleteProject: function(event) {
        const target = event.currentTarget.parentNode
        target.remove();
        this.projectListArr.splice(target.dataset.id, 1)

    },
    renderProjectList: function () {
        while (this.projectList.firstChild) {
            this.projectList.removeChild(this.projectList.firstChild);
        };

        while (this.toDoListDOM.children[1]) {
           this.toDoListDOM.removeChild(this.toDoListDOM.children[1])
        };
        
        for(let i = 0; i < this.projectListArr.length; i++) {
            const div = document.createElement('div')
            div.setAttribute('data-id', `${i}`)
            const title = document.createElement('div')
            title.classList.add('title')
            title.addEventListener('click', (e) => {this.renderToDo(e)})
            div.classList.add('project')
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete')
            deleteBtn.addEventListener('click', (e) => {this.deleteProject(e)})
            div.appendChild(deleteBtn)
            div.appendChild(title)
            title.textContent = this.projectListArr[i].title
            this.projectList.appendChild(div)


            for(let u = 0; u < this.projectListArr[i].toDos.length; u++) {
                if(this.projectListArr[i].toDos[u] === "add ToDo") {

                    const addToDo = document.createElement('div')
                    addToDo.style.display = 'flex'
                    addToDo.classList.add('addToDo')
                    addToDo.setAttribute('id', `addToDo`);
                    addToDo.setAttribute('data-id', `${i}`)
                    const addToDoBtn = document.createElement('div')
                    addToDoBtn.classList.add('addToDoBtn')
                    const addToDoBtnTitle = document.createElement('div')
                    addToDoBtnTitle.classList.add('addToDoBtnTitle')
                    addToDoBtnTitle.textContent = 'Add a Task';
    
                    addToDo.appendChild(addToDoBtn)
                    addToDo.appendChild(addToDoBtnTitle)
                    this.toDoListDOM.appendChild(addToDo)

                    addToDo.addEventListener('click', () => {
                        this.toDoInputFieldForm.style.display = 'flex'
                        addToDo.style.display = 'none'
                        this.toDoInputFieldForm.setAttribute('data-id', `${i}`)
                        this.toDoInputField.focus();
                    })

                    this.toDoInputFieldForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        this.createToDo();
                        this.addToDo();
                        this.renderProjectList();
                        this.toDoInputFieldForm.style.display = 'none'
                        this.toDoInputField.value = '';
                        this.toDoInputDate.value = '';
                    } , {once: true}) 
            
                } else {

                    const toDo = document.createElement('div')
                    toDo.classList.add('toDo')
                    toDo.setAttribute('data-id', `${u}`)

                    const toDoTitle = document.createElement('div')
                    toDoTitle.classList.add('toDoTitle')
                    toDoTitle.textContent =  this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].title;

                    const toDoRightSide = document.createElement('div')
                    toDoRightSide.classList.add('toDoRightSide')

                    const date = document.createElement('input')
                    date.setAttribute('type', 'date')
                    date.setAttribute('id', 'date')
                    date.value =  this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].date

                    const markDone = document.createElement('div')
                    markDone.classList.add('markDone')
                    markDone.setAttribute('id', 'markDone')
                    markDone.textContent = 'Mark Done'
                    markDone.addEventListener('click', () => {
                    
                        // switch (markDone.textContent) {
                        //     case 'Mark Done':
                        //         markDone.textContent = 'Mark Undone';
                        //         toDo.style.backgroundColor = 'lightgreen';
                        //         break;
                            
                        //     case 'Mark Undone':
                        //         markDone.textContent = 'Mark Done'
                        //         toDo.style.backgroundColor = 'red'
                        // }


                  
                    
                    })
                
                    const deleteToDoBtn = document.createElement('div')
                    deleteToDoBtn.setAttribute('id', 'deleteToDoBtn')

                    toDoRightSide.appendChild(date)
                    toDoRightSide.appendChild(markDone)
                    toDoRightSide.appendChild(deleteToDoBtn)

                    toDo.appendChild(toDoTitle)
                    toDo.appendChild(toDoRightSide)

                    this.toDoListDOM.appendChild(toDo)

                    deleteToDoBtn.addEventListener('click', (e) => {
                        const target = e.currentTarget.parentNode.parentNode
                        this.toDoListDOM.removeChild(target)
                        this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos.splice(target.dataset.id, 1)
                        console.log( this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos)

                    })
                }
            }
        }
    },
    createToDo: function () {
        class ToDo {
            constructor (title, date) {
                this.title = title;
                this.date = date;
            }
        }
        this.toDo = new ToDo(this.toDoInputField.value, this.toDoInputDate.value)
    },

    addToDo: function (o) {
        this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos.push(this.toDo)
    },

}
todoApp.init();
})()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSCxnRkFBZ0Y7QUFDaEY7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixzQkFBc0Isd0NBQXdDLGlCQUFpQiwyREFBMkQseUJBQXlCLGdCQUFnQixHQUFHLCtCQUErQix3QkFBd0IsR0FBRywrQkFBK0IsZ0NBQWdDLHdCQUF3QixHQUFHLHFDQUFxQyxxQkFBcUIsR0FBRyxVQUFVLDRCQUE0QixrQkFBa0IsMkNBQTJDLHdDQUF3QyxrQkFBa0IsaUJBQWlCLEdBQUcsWUFBWSxrQkFBa0Isc0JBQXNCLHdDQUF3QyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLFlBQVksb0JBQW9CLHNCQUFzQix3Q0FBd0Msa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxTQUFTLG1CQUFtQixxQkFBcUIsc0NBQXNDLHVCQUF1QixrQkFBa0IsMkJBQTJCLG1DQUFtQyx3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLGdCQUFnQixvQkFBb0Isa0JBQWtCLHFCQUFxQixrQkFBa0IsNEJBQTRCLEdBQUcsb0JBQW9CLGtCQUFrQix3QkFBd0IsZ0NBQWdDLGFBQWEsaUJBQWlCLGdCQUFnQixrQkFBa0Isd0JBQXdCLHFCQUFxQixtQkFBbUIsZ0JBQWdCLEdBQUcsNkJBQTZCLDJCQUEyQix1QkFBdUIsd0JBQXdCLHNCQUFzQix1QkFBdUIseUNBQXlDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMsR0FBRyxvQ0FBb0MsaUJBQWlCLHNCQUFzQixHQUFHLDBDQUEwQyxvQkFBb0IsR0FBRyxxQ0FBcUMsbUJBQW1CLGtCQUFrQiwyQkFBMkIsdUJBQXVCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcscUZBQXFGLGtCQUFrQixnQkFBZ0IsZUFBZSw0QkFBNEIsdUJBQXVCLEdBQUcsNENBQTRDLDZCQUE2QixHQUFHLDJDQUEyQyw4QkFBOEIsR0FBRyxtQ0FBbUMsMkJBQTJCLEdBQUcsYUFBYSxlQUFlLGdCQUFnQixrQkFBa0Isa0NBQWtDLHFCQUFxQix3QkFBd0IsR0FBRyxrQkFBa0IsZ0JBQWdCLGVBQWUsdUJBQXVCLGlCQUFpQix3Q0FBd0MscUJBQXFCLHFCQUFxQixHQUFHLHdCQUF3Qix1Q0FBdUMsR0FBRyx5QkFBeUIsZ0JBQWdCLEdBQUcscUJBQXFCLGNBQWMsNEJBQTRCLEdBQUcsVUFBVSxzQkFBc0IsbUJBQW1CLHVDQUF1Qyx1QkFBdUIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsd0JBQXdCLEdBQUcsdUJBQXVCLGdCQUFnQix3QkFBd0IsdUJBQXVCLG9CQUFvQixpQkFBaUIsR0FBRyxvQkFBb0Isa0JBQWtCLHdCQUF3QixhQUFhLGlCQUFpQixzQkFBc0IsR0FBRyxrQkFBa0IsZ0JBQWdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLGdDQUFnQyxhQUFhLDBCQUEwQixxQkFBcUIsR0FBRywyQkFBMkIsbUJBQW1CLGVBQWUsa0JBQWtCLHlDQUF5Qyx1QkFBdUIsd0JBQXdCLEdBQUcsdUNBQXVDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGtCQUFrQixtQkFBbUIscUJBQXFCLHVCQUF1QixHQUFHLHlGQUF5RixrQkFBa0IsZ0JBQWdCLGNBQWMsNEJBQTRCLHVCQUF1QixHQUFHLDhDQUE4Qyw2QkFBNkIsR0FBRyw0Q0FBNEMsaUJBQWlCLGtCQUFrQix3QkFBd0IsR0FBRyxpQ0FBaUMseUNBQXlDLG9CQUFvQixHQUFHLGtDQUFrQyxrQkFBa0Isd0JBQXdCLG1DQUFtQyxtQkFBbUIsY0FBYyx5Q0FBeUMsdUJBQXVCLGVBQWUsc0JBQXNCLGtCQUFrQixHQUFHLDZDQUE2Qyw0QkFBNEIseUNBQXlDLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLHVEQUF1RCxrQkFBa0IsYUFBYSx3QkFBd0IsR0FBRyxzRUFBc0UsaUJBQWlCLGlCQUFpQixzQkFBc0IseUNBQXlDLHVCQUF1QixHQUFHLHNFQUFzRSxtQkFBbUIsa0JBQWtCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHdCQUF3QixxQkFBcUIsaUJBQWlCLEdBQUcsNEVBQTRFLGVBQWUsR0FBRyw2RUFBNkUsZ0JBQWdCLEdBQUcsd0VBQXdFLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1Q0FBdUMsR0FBRywySkFBMkosa0JBQWtCLGdCQUFnQixjQUFjLDRCQUE0Qix1QkFBdUIsR0FBRywrRUFBK0UsNkJBQTZCLEdBQUcsOEVBQThFLDhCQUE4QixHQUFHLHdFQUF3RSx1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLDRCQUE0QixHQUFHLDhFQUE4RSxrQkFBa0IsdUJBQXVCLGVBQWUsZ0JBQWdCLDhCQUE4Qix3QkFBd0IsNkJBQTZCLEdBQUcsd0JBQXdCLHlDQUF5QyxpQkFBaUIsdUJBQXVCLG1CQUFtQixlQUFlLGtCQUFrQixtQ0FBbUMsd0JBQXdCLHNCQUFzQixHQUFHLG1DQUFtQyxpQkFBaUIsc0JBQXNCLGVBQWUsbUJBQW1CLGtCQUFrQix3QkFBd0IscUJBQXFCLG1CQUFtQixHQUFHLHNEQUFzRCxrQkFBa0IsR0FBRyxrQ0FBa0MsaUJBQWlCLHFCQUFxQixHQUFHLHdDQUF3QyxvQkFBb0IseUNBQXlDLEdBQUcsdUNBQXVDLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLHNEQUFzRCxtQkFBbUIsa0JBQWtCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLHVIQUF1SCxrQkFBa0IsZ0JBQWdCLGVBQWUsNEJBQTRCLHVCQUF1QixHQUFHLDZEQUE2RCw2QkFBNkIsR0FBRyw0REFBNEQsOEJBQThCLEdBQUcsNERBQTRELHlDQUF5QyxHQUFHLDZDQUE2QyxpQkFBaUIsaUJBQWlCLHNCQUFzQix5Q0FBeUMsdUJBQXVCLEdBQUcsbURBQW1ELGtCQUFrQixHQUFHLG1CQUFtQix1QkFBdUIsaUJBQWlCLGVBQWUsaUJBQWlCLHNCQUFzQixrQkFBa0IsNEJBQTRCLHdCQUF3QixhQUFhLEdBQUcsbUNBQW1DLGlCQUFpQixnQkFBZ0Isa0JBQWtCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLHFCQUFxQixpQkFBaUIsR0FBRyx5Q0FBeUMsZUFBZSxHQUFHLDBDQUEwQyxlQUFlLEdBQUcscUNBQXFDLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1Q0FBdUMsR0FBRyxxRkFBcUYsa0JBQWtCLGdCQUFnQixjQUFjLDRCQUE0Qix1QkFBdUIsR0FBRyw0Q0FBNEMsNkJBQTZCLEdBQUcsMkNBQTJDLDhCQUE4QixHQUFHLHFDQUFxQyx1Q0FBdUMsR0FBRyxpQ0FBaUMsaUJBQWlCLGlCQUFpQix3QkFBd0Isc0JBQXNCLGlCQUFpQix1QkFBdUIsR0FBRyw0QkFBNEIsa0JBQWtCLEdBQUcsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsYUFBYSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFB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Q0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLS0tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vY3NzLmdnL2NoZWNrLmNzcyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC8qIFRyYWNrICovXFxuICAvKiBIYW5kbGUgKi9cXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbn1cXG4qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbiogOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG4qIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogcmdiKDM2LCA2MCwgMzcpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxMzksIDg2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBncmlkLXJvdzogMTAvMTE7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDEzOSwgODYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2IHtcXG4gIGdyaWQtcm93OiAyLzEwO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgODEsIDY4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubmF2IC5wcm9qZWN0VGl0bGUge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbm5hdiAucHJvamVjdExpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICBnYXA6IDVweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGp1c3RpZnktaXRlbXM6IGxlZnQ7XFxuICBhbGlnbi1pdGVtczogdG9wO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxubmF2IC5wcm9qZWN0TGlzdCAucHJvamVjdCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM1LCAyMDYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxubmF2IC5wcm9qZWN0TGlzdCAucHJvamVjdCAudGl0bGUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbm5hdiAucHJvamVjdExpc3QgLnByb2plY3QgLnRpdGxlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxubmF2IC5wcm9qZWN0TGlzdCAucHJvamVjdCAuZGVsZXRlIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5uYXYgLnByb2plY3RMaXN0IC5wcm9qZWN0IC5kZWxldGU6YmVmb3JlLCBuYXYgLnByb2plY3RMaXN0IC5wcm9qZWN0IC5kZWxldGU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAyMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxubmF2IC5wcm9qZWN0TGlzdCAucHJvamVjdCAuZGVsZXRlOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbm5hdiAucHJvamVjdExpc3QgLnByb2plY3QgLmRlbGV0ZTphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5uYXYgLnByb2plY3RMaXN0IC5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcbm5hdiAuYnRucyB7XFxuICBoZWlnaHQ6IDclO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxubmF2IC5idG5zIC5idG4ge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogNDUlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMTM5LCA4Nik7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxubmF2IC5idG5zIC5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgOTAsIDIxKTtcXG59XFxubmF2IC5idG5zIC5idG46YWN0aXZlIHtcXG4gIHNjYWxlOiAwLjk1O1xcbn1cXG5uYXYgLmJ0bnMgLmRlbGV0ZSB7XFxuICBsZWZ0OiA1cHg7XFxuICBjb2xvcjogcmdiKDEyOCwgMzEsIDMxKTtcXG59XFxuXFxubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMy8tMTtcXG4gIGdyaWQtcm93OiAyLzEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCAxMDgsIDgwKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAudG9Eb0xpc3RUaXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW46IDIwcHg7XFxufVxcbm1haW4gLmFkZFRvRG9CdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbn1cXG5tYWluIC50b0RvTGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiA1cHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5tYWluIC50b0RvTGlzdCAuYWRkVG9EbyB7XFxuICBoZWlnaHQ6IDEuN3JlbTtcXG4gIHdpZHRoOiA2MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM1LCAyMDYpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAudG9Eb0xpc3QgLmFkZFRvRG8gLmFkZFRvRG9CdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxLjdyZW07XFxuICBoZWlnaHQ6IDEuN3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbm1haW4gLnRvRG9MaXN0IC5hZGRUb0RvIC5hZGRUb0RvQnRuOmJlZm9yZSwgbWFpbiAudG9Eb0xpc3QgLmFkZFRvRG8gLmFkZFRvRG9CdG46YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHdpZHRoOiA4JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5tYWluIC50b0RvTGlzdCAuYWRkVG9EbyAuYWRkVG9Eb0J0bjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5tYWluIC50b0RvTGlzdCAuYWRkVG9EbyAuYWRkVG9Eb0J0blRpdGxlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC50b0RvTGlzdCAuYWRkVG9Ebzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAxNjMsIDE0Myk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvSW5wdXRGaWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMS43cmVtO1xcbiAgZ2FwOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM1LCAyMDYpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkICN0b0RvSW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzUsIDIwNik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0ICN0b0RvSW5wdXREYXRlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTkxLCAxNjYpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgLnRvRG9JbnB1dEJ0bnMge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgLnRvRG9JbnB1dEJ0bnM6aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0IC50b0RvSW5wdXRCdG5zOmFjdGl2ZSB7XFxuICBzY2FsZTogMC45NTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0ICNjYW5jZWxUb0RvSW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzgsIDg2LCA4Nik7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvSW5wdXRGaWVsZCAudG9Eb0lucHV0RmllbGRSaWdodCAjY2FuY2VsVG9Eb0lucHV0OmJlZm9yZSwgbWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0ICNjYW5jZWxUb0RvSW5wdXQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiA4JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgI2NhbmNlbFRvRG9JbnB1dDpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgI2NhbmNlbFRvRG9JbnB1dDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgI3N1Ym1pdFRvRG9JbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgI3N1Ym1pdFRvRG9JbnB1dDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjksIDE2OSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDEuN3JlbTtcXG4gIHdpZHRoOiA2MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyAudG9Eb1RpdGxlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMS43cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvVGl0bGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC5tYXJrRG9uZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAwcHggNXB4O1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyAubWFya0RvbmU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMTEwLCAxMTApO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyAudG9Eb1JpZ2h0U2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjVweDtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9SaWdodFNpZGUgI2RlbGV0ZVRvRG9CdG4ge1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxuICB3aWR0aDogMS4zcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9SaWdodFNpZGUgI2RlbGV0ZVRvRG9CdG46YmVmb3JlLCBtYWluIC50b0RvTGlzdCAudG9EbyAudG9Eb1JpZ2h0U2lkZSAjZGVsZXRlVG9Eb0J0bjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyAudG9Eb1JpZ2h0U2lkZSAjZGVsZXRlVG9Eb0J0bjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyAudG9Eb1JpZ2h0U2lkZSAjZGVsZXRlVG9Eb0J0bjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyAudG9Eb1JpZ2h0U2lkZSAjZGVsZXRlVG9Eb0J0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAxMTAsIDExMCk7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvUmlnaHRTaWRlICNkYXRlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTkxLCAxNjYpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyAudG9Eb1JpZ2h0U2lkZSAjZGF0ZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5tYWluIC50aXRsZUJ0bnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgbGVmdDogMTBweDtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5tYWluIC50aXRsZUJ0bnMgLnRpdGxlSW5wdXRCdG5zIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5tYWluIC50aXRsZUJ0bnMgLnRpdGxlSW5wdXRCdG5zOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcbm1haW4gLnRpdGxlQnRucyAudGl0bGVJbnB1dEJ0bnM6YWN0aXZlIHtcXG4gIHNjYWxlOiAwLjk7XFxufVxcbm1haW4gLnRpdGxlQnRucyAjY2FuY2VsVGl0bGVJbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OCwgODYsIDg2KTtcXG59XFxubWFpbiAudGl0bGVCdG5zICNjYW5jZWxUaXRsZUlucHV0OmJlZm9yZSwgbWFpbiAudGl0bGVCdG5zICNjYW5jZWxUaXRsZUlucHV0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICB3aWR0aDogOCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxubWFpbiAudGl0bGVCdG5zICNjYW5jZWxUaXRsZUlucHV0OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbm1haW4gLnRpdGxlQnRucyAjY2FuY2VsVGl0bGVJbnB1dDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5tYWluIC50aXRsZUJ0bnMgI3N1Ym1pdFRpdGxlSW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCAxMzcsIDU2KTtcXG59XFxubWFpbiAudGl0bGVCdG5zICNwcm9qZWN0VGl0bGUge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5tYWluICNwcm9qZWN0VGl0bGU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFL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LGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUFkWjtBQWdCUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFkWjtBQWdCUTtFQUNJLHdCQUFBO0FBZFo7QUFnQlE7RUFDSSx5QkFBQTtBQWRaO0FBZ0JRO0VBQ0ksa0NBQUE7QUFkWjtBQWdCUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWRaO0FBaUJJO0VBQ0ksYUFBQTtBQWZSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jc3MuZ2cvY2hlY2suY3NzJyk7XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAvKiBUcmFjayAqL1xcbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDsgXFxuICAgICAgfVxcbiAgICAgICBcXG4gICAgICAvKiBIYW5kbGUgKi9cXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNjAsIDM3KTsgXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM1NTU7IFxcbiAgICAgIH1cXG59XFxuJGhlYWRlci1mb290ZXI6IHJnYigxNzAsIDEzOSwgODYpO1xcbiRuYXY6IHJnYig1NywgODEsIDY4KTtcXG4kbWFpbjpyZ2IoNzgsIDEwOCwgODApO1xcbiR0b2RvOnJnYigyNDAsIDIzNSwgMjA2KTtcXG4kYnV0dG9uczogcmdiKDE3MCwgMTM5LCA4Nik7XFxuJGRhdGUtYmM6IHJnYigxOTUsIDE5MSwgMTY2KTtcXG4kdG9Eb0JSOiA1cHg7XFxuJHRvZG9JbnB1dDogcmdiKDI1NSwgMjUwLCAyMjApO1xcblxcbkBtaXhpbiBmbGV4LXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBoZiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMS8gLTE7XFxuICAgIEBpbmNsdWRlIGhmXFxufVxcbmZvb3RlciB7XFxuICAgIGdyaWQtcm93OiAxMC8xMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvIC0xO1xcbiAgICBAaW5jbHVkZSBoZlxcbn1cXG5cXG5uYXYge1xcbiAgICBncmlkLXJvdzogMiAvIDEwO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIEBpbmNsdWRlIGZsZXgtdjtcXG4gICAgLnByb2plY3RUaXRsZSB7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAucHJvamVjdExpc3Qge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgICAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGxlZnQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogdG9wO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC5wcm9qZWN0IHtcXG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9kbztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICAgICAgICAgIC50aXRsZXtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnRpdGxlOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuZGVsZXRlIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5kZWxldGU6YmVmb3JlLCAuZGVsZXRlOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuZGVsZXRlOmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmRlbGV0ZTphZnRlciB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLnByb2plY3Q6aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuYnRucyB7XFxuICAgICAgICBoZWlnaHQ6IDclO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgICAgIC5idG4ge1xcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9ucztcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICB9XFxuICAgICAgICAuYnRuOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCA5MCwgMjEpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJ0bjphY3RpdmUge1xcbiAgICAgICAgICAgIHNjYWxlOiAwLjk1O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmRlbGV0ZSB7XFxuICAgICAgICAgICAgbGVmdDogNXB4O1xcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTI4LCAzMSwgMzEpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbm1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgICBncmlkLXJvdzogMi8xMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgQGluY2x1ZGUgZmxleC12O1xcbiAgICAudG9Eb0xpc3RUaXRsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBtYXJnaW46IDIwcHg7XFxuICAgIH1cXG4gICAgLmFkZFRvRG9CdG4ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7ICBcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogNXB4O1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgfVxcbiAgICAudG9Eb0xpc3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIC5hZGRUb0RvIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvZG87XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvRG9CUjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIC5hZGRUb0RvQnRuIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjdyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMS43cmVtO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5hZGRUb0RvQnRuOmJlZm9yZSwgLmFkZFRvRG9CdG46YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4JTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmFkZFRvRG9CdG46YmVmb3JlIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuYWRkVG9Eb0J0blRpdGxlIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5hZGRUb0RvOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAxNjMsIDE0Myk7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvRG9JbnB1dEZpZWxkIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGhlaWdodDogMS43cmVtO1xcbiAgICAgICAgICAgIGdhcDogMTVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9kbztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkdG9Eb0JSO1xcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAjdG9Eb0lucHV0IHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b2RvO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkdG9Eb0JSO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnRvRG9JbnB1dEZpZWxkUmlnaHQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgI3RvRG9JbnB1dERhdGV7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRlLWJjO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC50b0RvSW5wdXRCdG5zIHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAudG9Eb0lucHV0QnRuczpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMS4xXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnRvRG9JbnB1dEJ0bnM6YWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAwLjk1XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2NhbmNlbFRvRG9JbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OCwgODYsIDg2KTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjY2FuY2VsVG9Eb0lucHV0OmJlZm9yZSwgI2NhbmNlbFRvRG9JbnB1dDphZnRlciB7XFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDglO1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2NhbmNlbFRvRG9JbnB1dDpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNjYW5jZWxUb0RvSW5wdXQ6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjc3VibWl0VG9Eb0lucHV0IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI3N1Ym1pdFRvRG9JbnB1dDphZnRlciB7XFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAudG9EbyB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY5LCAxNjkpO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkdG9Eb0JSO1xcbiAgICAgICAgICAgIGhlaWdodDogMS43cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcXG4gICAgICAgICAgICAudG9Eb1RpdGxlIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjdyZW07XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudG9Eb1RpdGxlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgLm1hcmtEb25lIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAubWFya0RvbmU6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzQsIDExMCwgMTEwKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAudG9Eb1JpZ2h0U2lkZSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogMjVweFxcbiAgICAgICAgICAgICAgICA7XFxuICAgICAgICAgICAgICAgICNkZWxldGVUb0RvQnRuIHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4zcmVtO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuM3JlbTtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2RlbGV0ZVRvRG9CdG46YmVmb3JlLCAjZGVsZXRlVG9Eb0J0bjphZnRlciB7XFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNkZWxldGVUb0RvQnRuOmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2RlbGV0ZVRvRG9CdG46YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjZGVsZXRlVG9Eb0J0bjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAxMTAsIDExMCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2RhdGUge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0ZS1iYztcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjZGF0ZTpmb2N1cyB7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlQnRucyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDEwcHg7XFxuICAgICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgICAgICAudGl0bGVJbnB1dEJ0bnN7XFxuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRpdGxlSW5wdXRCdG5zOmhvdmVyIHtcXG4gICAgICAgICAgICBzY2FsZTogMS4xXFxuICAgICAgICB9XFxuICAgICAgICAudGl0bGVJbnB1dEJ0bnM6YWN0aXZlIHtcXG4gICAgICAgICAgICBzY2FsZTogMC45XFxuICAgICAgICB9XFxuICAgICAgICAjY2FuY2VsVGl0bGVJbnB1dCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc4LCA4NiwgODYpO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2NhbmNlbFRpdGxlSW5wdXQ6YmVmb3JlLCAjY2FuY2VsVGl0bGVJbnB1dDphZnRlciB7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDglO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgICNjYW5jZWxUaXRsZUlucHV0OmJlZm9yZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2NhbmNlbFRpdGxlSW5wdXQ6YWZ0ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICB9XFxuICAgICAgICAjc3VibWl0VGl0bGVJbnB1dCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCAxMzcsIDU2KTtcXG4gICAgICAgIH1cXG4gICAgICAgICNwcm9qZWN0VGl0bGUge1xcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICNwcm9qZWN0VGl0bGU6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBhZGQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyB0aCB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbihmdW5jdGlvbigpIHtcbiAgICBcbiAgICBsZXQgdG9kb0FwcCA9IHtcbiAgICAgICAgcHJvamVjdExpc3RBcnIgOiBbXSxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jYWNoZURvbSgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgIH0sXG4gICAgY2FjaGVEb206IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkJylcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TGlzdCcpXG4gICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKVxuICAgICAgICB0aGlzLnByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpXG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGVGb3JtJylcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUJ0bnMnKVxuICAgICAgICB0aGlzLnByb2plY3RUaXRsZUlucHV0Q29uZmlybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRUaXRsZUlucHV0JylcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dENhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxUaXRsZUlucHV0JylcbiAgICAgICAgdGhpcy5hZGRUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRvRG8nKVxuICAgICAgICB0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvSW5wdXRGaWVsZCcpXG4gICAgICAgIHRoaXMudG9Eb0lucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0lucHV0JylcbiAgICAgICAgdGhpcy5jYW5jZWxUb0RvSW5wdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsVG9Eb0lucHV0JylcbiAgICAgICAgdGhpcy50b0RvSW5wdXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9JbnB1dERhdGUnKVxuICAgICAgICB0aGlzLnRvRG9MaXN0RE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9MaXN0JylcbiAgICB9LFxuICAgIGJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICB0aGlzLmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXREaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAgICB0aGlzLnByb2plY3RUaXRsZUlucHV0LmZvY3VzKClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmFkZFByb2plY3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLnByb2plY3RUaXRsZUlucHV0Q2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9LFxuICAgIGNyZWF0ZVByb2plY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yICAocHJvamVjdFRpdGxlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gcHJvamVjdFRpdGxlSW5wdXRcbiAgICAgICAgICAgICAgICB0aGlzLnRvRG9zID0gWydhZGQgVG9EbyddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvamVjdCA9IG5ldyBQcm9qZWN0KHRoaXMucHJvamVjdFRpdGxlSW5wdXQudmFsdWUpXG4gICAgfSxcbiAgICBhZGRQcm9qZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdEFyci5wdXNoKHRoaXMucHJvamVjdClcbiAgICB9LFxuICAgIGRlbGV0ZVByb2plY3Q6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZVxuICAgICAgICB0YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3RBcnIuc3BsaWNlKHRhcmdldC5kYXRhc2V0LmlkLCAxKVxuXG4gICAgfSxcbiAgICByZW5kZXJQcm9qZWN0TGlzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5wcm9qZWN0TGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHRoaXMucHJvamVjdExpc3QuZmlyc3RDaGlsZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd2hpbGUgKHRoaXMudG9Eb0xpc3RET00uY2hpbGRyZW5bMV0pIHtcbiAgICAgICAgICAgdGhpcy50b0RvTGlzdERPTS5yZW1vdmVDaGlsZCh0aGlzLnRvRG9MaXN0RE9NLmNoaWxkcmVuWzFdKVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucHJvamVjdExpc3RBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYCR7aX1gKVxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge3RoaXMucmVuZGVyVG9EbyhlKX0pXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge3RoaXMuZGVsZXRlUHJvamVjdChlKX0pXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3RMaXN0QXJyW2ldLnRpdGxlXG4gICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LmFwcGVuZENoaWxkKGRpdilcblxuXG4gICAgICAgICAgICBmb3IobGV0IHUgPSAwOyB1IDwgdGhpcy5wcm9qZWN0TGlzdEFycltpXS50b0Rvcy5sZW5ndGg7IHUrKykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvamVjdExpc3RBcnJbaV0udG9Eb3NbdV0gPT09IFwiYWRkIFRvRG9cIikge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICBhZGRUb0RvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9Eby5jbGFzc0xpc3QuYWRkKCdhZGRUb0RvJylcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9Eby5zZXRBdHRyaWJ1dGUoJ2lkJywgYGFkZFRvRG9gKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9Eby5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgJHtpfWApXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICBhZGRUb0RvQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZFRvRG9CdG4nKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRUb0RvQnRuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICBhZGRUb0RvQnRuVGl0bGUuY2xhc3NMaXN0LmFkZCgnYWRkVG9Eb0J0blRpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9Eb0J0blRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBhIFRhc2snO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBhZGRUb0RvLmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvRG8uYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0blRpdGxlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvRG9MaXN0RE9NLmFwcGVuZENoaWxkKGFkZFRvRG8pXG5cbiAgICAgICAgICAgICAgICAgICAgYWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9Eb0lucHV0RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRG8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b0RvSW5wdXRGaWVsZEZvcm0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYCR7aX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b0RvSW5wdXRGaWVsZC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9Eb0lucHV0RmllbGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRvRG8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9EbygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b0RvSW5wdXRGaWVsZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b0RvSW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b0RvSW5wdXREYXRlLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH0gLCB7b25jZTogdHJ1ZX0pIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgdG9Eby5jbGFzc0xpc3QuYWRkKCd0b0RvJylcbiAgICAgICAgICAgICAgICAgICAgdG9Eby5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgJHt1fWApXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvRG9UaXRsZScpXG4gICAgICAgICAgICAgICAgICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9ICB0aGlzLnByb2plY3RMaXN0QXJyW3RoaXMudG9Eb0lucHV0RmllbGRGb3JtLmRhdGFzZXQuaWRdLnRvRG9zW3VdLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9SaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICB0b0RvUmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ3RvRG9SaWdodFNpZGUnKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIGRhdGUudmFsdWUgPSAgdGhpcy5wcm9qZWN0TGlzdEFyclt0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5kYXRhc2V0LmlkXS50b0Rvc1t1XS5kYXRlXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICBtYXJrRG9uZS5jbGFzc0xpc3QuYWRkKCdtYXJrRG9uZScpXG4gICAgICAgICAgICAgICAgICAgIG1hcmtEb25lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFya0RvbmUnKVxuICAgICAgICAgICAgICAgICAgICBtYXJrRG9uZS50ZXh0Q29udGVudCA9ICdNYXJrIERvbmUnXG4gICAgICAgICAgICAgICAgICAgIG1hcmtEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN3aXRjaCAobWFya0RvbmUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjYXNlICdNYXJrIERvbmUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXJrRG9uZS50ZXh0Q29udGVudCA9ICdNYXJrIFVuZG9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvRG8uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjYXNlICdNYXJrIFVuZG9uZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1hcmtEb25lLnRleHRDb250ZW50ID0gJ01hcmsgRG9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9Eby5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRvRG9CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVUb0RvQnRuJylcblxuICAgICAgICAgICAgICAgICAgICB0b0RvUmlnaHRTaWRlLmFwcGVuZENoaWxkKGRhdGUpXG4gICAgICAgICAgICAgICAgICAgIHRvRG9SaWdodFNpZGUuYXBwZW5kQ2hpbGQobWFya0RvbmUpXG4gICAgICAgICAgICAgICAgICAgIHRvRG9SaWdodFNpZGUuYXBwZW5kQ2hpbGQoZGVsZXRlVG9Eb0J0bilcblxuICAgICAgICAgICAgICAgICAgICB0b0RvLmFwcGVuZENoaWxkKHRvRG9UaXRsZSlcbiAgICAgICAgICAgICAgICAgICAgdG9Eby5hcHBlbmRDaGlsZCh0b0RvUmlnaHRTaWRlKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9Eb0xpc3RET00uYXBwZW5kQ2hpbGQodG9EbylcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGVUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9Eb0xpc3RET00ucmVtb3ZlQ2hpbGQodGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdEFyclt0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5kYXRhc2V0LmlkXS50b0Rvcy5zcGxpY2UodGFyZ2V0LmRhdGFzZXQuaWQsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5wcm9qZWN0TGlzdEFyclt0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5kYXRhc2V0LmlkXS50b0RvcylcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlVG9EbzogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGFzcyBUb0RvIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9EbyA9IG5ldyBUb0RvKHRoaXMudG9Eb0lucHV0RmllbGQudmFsdWUsIHRoaXMudG9Eb0lucHV0RGF0ZS52YWx1ZSlcbiAgICB9LFxuXG4gICAgYWRkVG9EbzogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdEFyclt0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5kYXRhc2V0LmlkXS50b0Rvcy5wdXNoKHRoaXMudG9EbylcbiAgICB9LFxuXG59XG50b2RvQXBwLmluaXQoKTtcbn0pKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==