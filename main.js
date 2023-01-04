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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://css.gg/notes.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 1.1rem;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n* ::-webkit-scrollbar {\n  width: 10px;\n}\n* ::-webkit-scrollbar-track {\n  background: inherit;\n}\n* ::-webkit-scrollbar-thumb {\n  background: rgb(36, 60, 37);\n  border-radius: 10px;\n}\n* ::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\nbody {\n  background-color: black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 100vh;\n  width: 100vw;\n}\n\nheader {\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: rgb(25, 40, 32);\n  gap: 20px;\n  padding: 0px 10px;\n}\nheader .headerTitle {\n  font-size: 3rem;\n}\n\nfooter {\n  grid-row: 10/11;\n  grid-column: 1/-1;\n  background-color: rgb(25, 40, 32);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nnav {\n  grid-row: 2/10;\n  grid-column: 1/3;\n  background-color: rgb(57, 81, 68);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\nnav .projectTitle {\n  height: fit-content;\n  width: 100%;\n  font-size: 2rem;\n  padding: 15px;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n}\nnav .projectList {\n  display: grid;\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 5px;\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n  justify-items: center;\n  align-items: top;\n  overflow: auto;\n  width: 100%;\n}\nnav .projectList .project {\n  border: 3px solid black;\n  width: fit-content;\n  height: fit-content;\n  padding: 0px 10px;\n  border-radius: 5px;\n  background-color: rgb(240, 235, 206);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 15px;\n  width: 14rem;\n}\nnav .projectList .project .title {\n  color: black;\n  font-size: 1.5rem;\n  width: 100%;\n  height: 1.9rem;\n  overflow: hidden;\n  overflow-x: auto;\n}\nnav .projectList .project .title::-webkit-scrollbar {\n  display: none;\n}\nnav .projectList .project .title:hover {\n  cursor: pointer;\n}\nnav .projectList .project .titleInput {\n  color: black;\n  font-size: 1.5rem;\n  height: 90%;\n  width: 9rem;\n  background-color: inherit;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 0px 5px;\n}\nnav .projectList .project .delete {\n  height: 1.5rem;\n  width: 1.5rem;\n  background-color: grey;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnav .projectList .project .delete:before, nav .projectList .project .delete:after {\n  content: \"\";\n  height: 90%;\n  width: 20%;\n  background-color: black;\n  position: absolute;\n}\nnav .projectList .project .delete:before {\n  transform: rotate(45deg);\n}\nnav .projectList .project .delete:after {\n  transform: rotate(-45deg);\n}\nnav .projectList .project:hover {\n  background-color: grey;\n}\nnav .btns {\n  height: 7%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 15px;\n  padding-bottom: 5px;\n}\nnav .btns .btn {\n  height: 90%;\n  width: 45%;\n  border-radius: 5px;\n  border: none;\n  background-color: rgb(170, 139, 86);\n  transition: 0.2s;\n  font-weight: 600;\n}\nnav .btns .btn:hover {\n  background-color: rgb(130, 90, 21);\n}\nnav .btns .btn:active {\n  scale: 0.95;\n}\nnav .btns .delete {\n  left: 5px;\n  color: rgb(128, 31, 31);\n}\n\nmain {\n  grid-column: 3/-1;\n  grid-row: 2/10;\n  background-color: rgb(78, 108, 80);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\nmain .toDoListTitle {\n  width: 100%;\n  height: fit-content;\n  text-align: center;\n  font-size: 3rem;\n  margin: 20px;\n}\nmain .addToDoBtn {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: black;\n  padding: 0px 10px;\n}\nmain .toDoList {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 5px;\n  justify-items: center;\n  overflow-y: auto;\n}\nmain .toDoList .addToDo {\n  height: 1.7rem;\n  width: 60%;\n  display: flex;\n  background-color: rgb(240, 235, 206);\n  border-radius: 5px;\n  align-items: center;\n}\nmain .toDoList .addToDo .addToDoBtn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  margin-left: 5px;\n  position: relative;\n}\nmain .toDoList .addToDo .addToDoBtn:before, main .toDoList .addToDo .addToDoBtn:after {\n  content: \"\";\n  height: 60%;\n  width: 8%;\n  background-color: black;\n  position: absolute;\n}\nmain .toDoList .addToDo .addToDoBtn:before {\n  transform: rotate(90deg);\n}\nmain .toDoList .addToDo .addToDoBtnTitle {\n  color: black;\n  display: flex;\n  align-items: center;\n}\nmain .toDoList .addToDo:hover {\n  background-color: rgb(167, 163, 143);\n  cursor: pointer;\n}\nmain .toDoList .toDoInputField {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 1.7rem;\n  gap: 15px;\n  background-color: rgb(240, 235, 206);\n  border-radius: 5px;\n  width: 60%;\n  padding: 0px 10px;\n  display: none;\n}\nmain .toDoList .toDoInputField #toDoInput {\n  border: 1px solid black;\n  background-color: inherit;\n  border-radius: 5px;\n  height: 90%;\n  color: black;\n  padding: 0px 20px;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #toDoInputDate {\n  color: black;\n  border: none;\n  padding: 0px 15px;\n  background-color: rgb(195, 191, 166);\n  border-radius: 5px;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight .toDoInputBtns {\n  height: 1.5rem;\n  width: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  transition: 0.1s;\n  border: none;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight .toDoInputBtns:hover {\n  scale: 1.1;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight .toDoInputBtns:active {\n  scale: 0.95;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(178, 86, 86);\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:before, main .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:after {\n  content: \"\";\n  height: 70%;\n  width: 8%;\n  background-color: white;\n  position: absolute;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:before {\n  transform: rotate(45deg);\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:after {\n  transform: rotate(-45deg);\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #submitToDoInput {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  background-color: green;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #submitToDoInput:after {\n  content: \"\";\n  position: absolute;\n  width: 20%;\n  height: 50%;\n  border-width: 0 2px 2px 0;\n  border-style: solid;\n  transform: rotate(45deg);\n}\nmain .toDoList .toDo {\n  background-color: rgb(255, 169, 169);\n  border: none;\n  border-radius: 5px;\n  height: 1.7rem;\n  width: 60%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 10px;\n}\nmain .toDoList .toDo .toDoNumber {\n  aspect-ratio: 1/1;\n  height: 90%;\n  display: flex;\n  color: white;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  background-color: rgb(84, 82, 82);\n  border-radius: 15px;\n  margin: 0px 10px;\n}\nmain .toDoList .toDo .toDoTitleInput {\n  border: 1px solid black;\n  background-color: inherit;\n  border-radius: 5px;\n  height: 70%;\n  color: black;\n  padding: 0px 10px;\n  width: 26rem;\n}\nmain .toDoList .toDo .toDoTitle:focus {\n  outline: 1px solid black;\n}\nmain .toDoList .toDo .toDoTitle {\n  color: black;\n  font-size: 1.5rem;\n  width: 50%;\n  height: 1.5rem;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  overflow: auto;\n  cursor: pointer;\n  background-color: inherit;\n  border: none;\n}\nmain .toDoList .toDo .toDoTitle::-webkit-scrollbar {\n  display: none;\n}\nmain .toDoList .toDo .markDone {\n  color: black;\n  padding: 0px 0px;\n  border-radius: 5px;\n  border: none;\n  background-color: inherit;\n  width: 7.5rem;\n}\nmain .toDoList .toDo .markDone:hover {\n  cursor: pointer;\n  background-color: lightgrey;\n}\nmain .toDoList .toDo .toDoRightSide {\n  display: flex;\n  align-items: center;\n  gap: 25px;\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn {\n  height: 1.3rem;\n  width: 1.3rem;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:before, main .toDoList .toDo .toDoRightSide #deleteToDoBtn:after {\n  content: \"\";\n  height: 90%;\n  width: 10%;\n  background-color: black;\n  position: absolute;\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:before {\n  transform: rotate(45deg);\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:after {\n  transform: rotate(-45deg);\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:hover {\n  background-color: lightgrey;\n}\nmain .toDoList .toDo .toDoRightSide #date {\n  color: black;\n  border: none;\n  padding: 0px 15px;\n  background-color: rgb(195, 191, 166);\n  border-radius: 5px;\n}\nmain .toDoList .toDo .toDoRightSide #date:focus {\n  outline: none;\n}\nmain .titleBtns {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  height: 2rem;\n  margin-left: 20px;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\nmain .titleBtns .titleInputBtns {\n  height: 2rem;\n  width: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  transition: 0.1s;\n  border: none;\n}\nmain .titleBtns .titleInputBtns:hover {\n  scale: 1.1;\n}\nmain .titleBtns .titleInputBtns:active {\n  scale: 0.9;\n}\nmain .titleBtns #cancelTitleInput {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(178, 86, 86);\n}\nmain .titleBtns #cancelTitleInput:before, main .titleBtns #cancelTitleInput:after {\n  content: \"\";\n  height: 70%;\n  width: 8%;\n  background-color: white;\n  position: absolute;\n}\nmain .titleBtns #cancelTitleInput:before {\n  transform: rotate(45deg);\n}\nmain .titleBtns #cancelTitleInput:after {\n  transform: rotate(-45deg);\n}\nmain .titleBtns #submitTitleInput {\n  background-color: rgb(56, 137, 56);\n}\nmain .titleBtns #projectTitle {\n  height: 2rem;\n  border: none;\n  border-radius: 15px;\n  padding: 0px 20px;\n  color: black;\n  width: fit-content;\n}\nmain #projectTitle:focus {\n  outline: none;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@import url('https://css.gg/notes.css');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 1.1rem;\n    font-family: 'Roboto', sans-serif;\n    color: white;\n    ::-webkit-scrollbar {\n        width: 10px;\n      }\n      \n      /* Track */\n      ::-webkit-scrollbar-track {\n        background: inherit; \n      }\n       \n      /* Handle */\n      ::-webkit-scrollbar-thumb {\n        background: rgb(36, 60, 37); \n        border-radius: 10px;\n      }\n      \n      /* Handle on hover */\n      ::-webkit-scrollbar-thumb:hover {\n        background: #555; \n      }\n}\n$header-footer: rgb(25, 40, 32);\n$nav: rgb(57, 81, 68);\n$main:rgb(78, 108, 80);\n$todo:rgb(240, 235, 206);\n$buttons: rgb(170, 139, 86);\n$date-bc: rgb(195, 191, 166);\n$toDoBR: 5px;\n$todoInput: rgb(255, 250, 220);\n\n@mixin flex-v {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n@mixin hf {\n    background-color: $header-footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\nbody {\n    background-color: black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    height: 100vh;\n    width: 100vw;\n}\nheader {\n    grid-row: 1 / 2;\n    grid-column: 1/ -1;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: $header-footer;\n    gap: 20px;\n    padding: 0px 10px;\n    .headerTitle {\n        font-size: 3rem;\n    }\n}\nfooter {\n    grid-row: 10/11;\n    grid-column: 1/ -1;\n    @include hf\n}\n\nnav {\n    grid-row: 2 / 10;\n    grid-column: 1/3;\n    background-color: $nav;\n    position: relative;\n    @include flex-v;\n    .projectTitle {\n        height: fit-content;\n        width: 100%;\n        font-size: 2rem;\n        padding: 15px;\n        font-weight: 600;\n        display: flex;\n        justify-content: center;\n    }\n    .projectList {\n        display: grid;\n        grid-auto-flow: row;\n        grid-auto-rows: min-content;\n        gap: 5px;\n        height: 100%;\n        width: 100%;\n        padding: 15px;\n        justify-items: center;\n        align-items: top;\n        overflow: auto;\n        width: 100%;\n        .project {\n            border: 3px solid black;\n            width: fit-content;\n            height: fit-content;\n            padding: 0px 10px;\n            border-radius: 5px;\n            background-color: $todo;\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n            gap: 15px;\n            width: 14rem;\n            .title{\n                color: black;\n                font-size: 1.5rem;\n                width: 100%;\n                height: 1.9rem;\n                overflow: hidden;\n                overflow-x: auto;\n            }\n            .title::-webkit-scrollbar{\n                display: none;\n            }\n            .title:hover {\n                cursor: pointer;\n            }\n            .titleInput {\n                color: black;\n                font-size: 1.5rem;\n                height: 90%;\n                width: 9rem;\n                background-color: inherit;\n                border: 1px solid black;\n                border-radius: 5px;\n                padding: 0px 5px;\n            }\n            .titleInput:focus {}\n            .delete {\n                height: 1.5rem;\n                width: 1.5rem;\n                background-color: grey;\n                position: relative;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n            .delete:before, .delete:after {\n                content: '';\n                height: 90%;\n                width: 20%;\n                background-color: black;\n                position: absolute;\n            }\n            .delete:before {\n                transform: rotate(45deg);\n            }\n            .delete:after {\n                transform: rotate(-45deg);\n            }\n        }\n        .project:hover{\n            background-color: grey;\n        }\n    }\n    .btns {\n        height: 7%;\n        width: 100%;\n        display: flex;\n        justify-content: space-around;\n        margin-top: 15px;\n        padding-bottom: 5px;\n        .btn {\n            height: 90%;\n            width: 45%;\n            border-radius: 5px;\n            border: none;\n            background-color: $buttons;\n            transition: 0.2s;\n            font-weight: 600;\n        }\n        .btn:hover {\n            background-color: rgb(130, 90, 21);\n        }\n        .btn:active {\n            scale: 0.95;\n        }\n        .delete {\n            left: 5px;\n            color: rgb(128, 31, 31);\n        }\n    }\n}\n\nmain {\n    grid-column: 3 / -1;\n    grid-row: 2/10;\n    background-color: $main;\n    position: relative;\n    @include flex-v;\n    .toDoListTitle {\n        width: 100%;\n        height: fit-content;\n        text-align: center;\n        font-size: 3rem;\n        margin: 20px;\n    }\n    .addToDoBtn {\n      display: flex;  \n      align-items: center;\n      gap: 5px;\n      color: black;\n      padding: 0px 10px;\n    }\n    .toDoList {\n        width: 100%;\n        height: 100%;\n        display: grid;\n        grid-auto-flow: row;\n        grid-auto-rows: min-content;\n        gap: 5px;\n        justify-items: center;\n        overflow-y: auto;\n        .addToDo {\n            height: 1.7rem;\n            width: 60%;\n            display: flex;\n            background-color: $todo;\n            border-radius: $toDoBR;\n            align-items: center;\n            .addToDoBtn {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                width: 1.7rem;\n                height: 1.7rem;\n                margin-left: 5px;\n                position: relative;\n            }\n            .addToDoBtn:before, .addToDoBtn:after {\n                content: '';\n                height: 60%;\n                width: 8%;\n                background-color: black;\n                position: absolute;\n            }\n            .addToDoBtn:before {\n                transform: rotate(90deg);\n            }\n            .addToDoBtnTitle {\n                color: black;\n                display: flex;\n                align-items: center;\n            }\n        }\n        .addToDo:hover {\n            background-color: rgb(167, 163, 143);\n            cursor: pointer;\n        }\n        .toDoInputField {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            height: 1.7rem;\n            gap: 15px;\n            background-color: $todo;\n            border-radius: $toDoBR;\n            width: 60%;\n            padding: 0px 10px;\n            display: none;\n            #toDoInput {\n                border: 1px solid black;\n                background-color: inherit;\n                border-radius: $toDoBR;\n                height: 90%;\n                color: black;\n                padding: 0px 20px;\n            }\n            .toDoInputFieldRight {\n                display: flex;\n                gap: 5px;\n                align-items: center;\n                #toDoInputDate{\n                    color: black;\n                    border: none;\n                    padding: 0px 15px;\n                    background-color: $date-bc;\n                    border-radius: 5px;\n                }\n               \n                .toDoInputBtns {\n                    height: 1.5rem;\n                    width: 1.5rem;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    border-radius: 15px;\n                    transition: 0.1s;\n                    border: none;\n                }\n                .toDoInputBtns:hover {\n                    scale: 1.1\n                }\n                .toDoInputBtns:active {\n                    scale: 0.95\n                }\n                #cancelToDoInput {\n                    position: relative;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    background-color: rgb(178, 86, 86);\n                }\n                #cancelToDoInput:before, #cancelToDoInput:after {\n                    content: '';\n                    height: 70%;\n                    width: 8%;\n                    background-color: white;\n                    position: absolute;\n                }\n                #cancelToDoInput:before {\n                    transform: rotate(45deg);\n                }\n                #cancelToDoInput:after {\n                    transform: rotate(-45deg);\n                }\n                #submitToDoInput {\n                    position: relative;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    border-radius: 15px;\n                    background-color: green;\n                }\n                #submitToDoInput:after {\n                    content: \"\";\n                    position: absolute;\n                    width: 20%;\n                    height: 50%;\n                    border-width: 0 2px 2px 0;\n                    border-style: solid;\n                    transform: rotate(45deg)\n                }\n            }\n            \n        }\n        .toDo {\n            background-color: rgb(255, 169, 169);\n            border: none;\n            border-radius: $toDoBR;\n            height: 1.7rem;\n            width: 60%;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding-right: 10px;\n            .toDoNumber {\n                aspect-ratio: 1/1;\n                height: 90%;\n                display: flex;\n                color: white;\n                justify-content: center;\n                align-items: center;\n                font-size: 1rem;\n                background-color: rgb(84, 82, 82);\n                border-radius: 15px;\n                margin: 0px 10px;\n            }\n            .toDoTitleInput {\n                border: 1px solid black;\n                background-color: inherit;\n                border-radius: $toDoBR;\n                height: 70%;\n                color: black;\n                padding: 0px 10px;  \n                width: 26rem;\n            }\n            .toDoTitle:focus {\n                outline: 1px solid black;\n            }\n            .toDoTitle {\n                color: black;\n                font-size: 1.5rem;\n                width: 50%;\n                height: 1.5rem;\n                display: flex;\n                align-items: center;\n                overflow: hidden;\n                overflow: auto;\n                cursor: pointer;\n                background-color: inherit;\n                border: none;\n            }\n            \n            .toDoTitle::-webkit-scrollbar {\n                display: none;\n              }\n            .markDone {\n                color: black;\n                padding: 0px 0px;\n                border-radius: 5px;\n                border: none;\n                background-color: inherit;\n                width: 7.5rem;\n            }\n            .markDone:hover {\n                cursor: pointer;\n                background-color: lightgrey;\n            }\n            \n            .toDoRightSide {\n                display: flex;\n                align-items: center;\n                gap: 25px\n                ;\n                #deleteToDoBtn {\n                    height: 1.3rem;\n                    width: 1.3rem;\n                    position: relative;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                }\n                #deleteToDoBtn:before, #deleteToDoBtn:after {\n                    content: '';\n                    height: 90%;\n                    width: 10%;\n                    background-color: black;\n                    position: absolute;\n                }\n                #deleteToDoBtn:before {\n                    transform: rotate(45deg);\n                }\n                #deleteToDoBtn:after {\n                    transform: rotate(-45deg);\n                }\n                #deleteToDoBtn:hover {\n                    background-color: lightgrey;\n                }\n                #date {\n                    color: black;\n                    border: none;\n                    padding: 0px 15px;\n                    background-color: $date-bc;\n                    border-radius: 5px;\n                }\n                #date:focus {\n                    outline: none\n                }\n            }\n            \n        }\n    }\n\n    .titleBtns {\n        position: absolute;\n        bottom: 10px;\n        left: 10px;\n        height: 2rem;\n        margin-left: 20px;\n        display: none;\n        justify-content: center;\n        align-items: center;\n        gap: 5px;\n        .titleInputBtns{\n            height: 2rem;\n            width: 2rem;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            border-radius: 15px;\n            transition: 0.1s;\n            border: none;\n        }\n        .titleInputBtns:hover {\n            scale: 1.1\n        }\n        .titleInputBtns:active {\n            scale: 0.9\n        }\n        #cancelTitleInput {\n            position: relative;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            background-color: rgb(178, 86, 86);\n        }\n        #cancelTitleInput:before, #cancelTitleInput:after {\n            content: '';\n            height: 70%;\n            width: 8%;\n            background-color: white;\n            position: absolute;\n        }\n        #cancelTitleInput:before {\n            transform: rotate(45deg);\n        }\n        #cancelTitleInput:after {\n            transform: rotate(-45deg);\n        }\n        #submitTitleInput {\n            background-color: rgb(56, 137, 56);\n        }\n        #projectTitle {\n            height: 2rem;\n            border: none;\n            border-radius: 15px;\n            padding: 0px 20px;\n            color: black;\n            width: fit-content;\n        }\n    }\n    #projectTitle:focus {\n        outline: none;\n    }\n    \n    \n}\n\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/cachingDom.js":
/*!***************************!*\
  !*** ./src/cachingDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
let arr = [1, 2, 3, 4, 5]

 function test (k) {
    for(let i = 0; i < k; i++) {
        (function log () {
            console.log(arr)
        })()
    }
}

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
/* harmony import */ var _cachingDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cachingDom */ "./src/cachingDom.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");







(function() {
    
    let todoApp = {
        projectListArr : [],
    init: function() {
        this.boot();
        this.cacheDom();
        this.bindEvents();
        this.renderProjectList();
    },
    boot: function () {
        if(JSON.parse(localStorage.getItem('projectListArr')) === null) {
            this.projectListArr = [];
        } else {
            this.projectListArr = JSON.parse(localStorage.getItem('projectListArr'));
            for(let e = 0; e < this.projectListArr.length; e++) {
                this.projectListArr[e].selected = false
            }
        }

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
        this.toDoInputField = document.getElementById('toDoInput')
        this.cancelToDoInputBtn = document.getElementById('cancelToDoInput')
        this.toDoInputDate = document.getElementById('toDoInputDate')
        this.toDoListDOM = document.getElementById('toDoList')
        this.toDoListTitle = document.getElementById('toDoListTitle')
    },
    updateLocalStorage: function() {
        localStorage.setItem('projectListArr', 
        JSON.stringify(this.projectListArr))
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
            this.updateLocalStorage();
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
        console.log(target.children[1])
        this.renderProjectList();

        if(target.children[1].textContent == this.toDoListTitle.textContent) {
            this.toDoListTitle.textContent = 'Project Title';

            while (this.toDoListDOM.firstChild) {
            this.toDoListDOM.removeChild(this.toDoListDOM.firstChild)
        };}

        this.updateLocalStorage();
    },
    

    renderProjectList: function () {

        let n;

        while (this.projectList.firstChild) {
            this.projectList.removeChild(this.projectList.firstChild);
        };

        
        

        for(let i = 0; i < this.projectListArr.length; i++) {
            this.div = document.createElement('div')
            this.div.setAttribute('data-id', `${i}`)
            this.div.classList.add('project')
            switch (this.projectListArr[i].selected) {
                case true:
                    this.div.style.backgroundColor  = 'grey'
                    break;
                case false:
                    this.div.style.backgroundColor = 'rgb(240, 235, 206)'
                    break;
            }
            this.title = document.createElement('div')
            this.title.classList.add('title')
            this.deleteBtn = document.createElement('button')
            this.deleteBtn.classList.add('delete')
            this.deleteBtn.addEventListener('click', (e) => {this.deleteProject(e)})
            this.div.appendChild(this.deleteBtn)
            this.div.appendChild(this.title)


            this.title.textContent = this.projectListArr[i].title

            this.projectList.appendChild(this.div)

            this.title.addEventListener('click', (e) => {
                const target = e.target.parentNode
                target.style.backgroundColor = 'grey'
                console.log(target)
                n = target.dataset.id
                for(let w = 0; w < this.projectListArr.length; w++) {
                    this.projectListArr[w].selected = false
                }
                this.projectListArr[n].selected = true;
                this.renderToDoList(n)
                this.toDoListTitle.textContent = target.textContent
                this.renderProjectList();
            })
        }
        
},
renderToDoList: function (n) {
    
    while (this.toDoListDOM.firstChild) {
        this.toDoListDOM.removeChild(this.toDoListDOM.firstChild)
     };

    for(let u = 0; u < this.projectListArr[n].toDos.length; u++) {
    if (this.projectListArr[n].toDos[u] === "add ToDo") {
        this.createAddToDoBtn(n)
        this.createToDoInputForm(n)
        this.addLaterEventListenersFirstHalf(n)
        
    } else {
        this.createToDoDOM(u);
        this.addLaterEventListenersSecondHalf(n)
    }



}
},

    createAddToDoBtn: function (n) {
        const addToDo = document.createElement('div')
            addToDo.style.display = 'flex'
            addToDo.classList.add('addToDo')
            addToDo.setAttribute('id', `addToDo`);
            addToDo.setAttribute('data-id', `${n}`)
            const addToDoBtn = document.createElement('div')
            addToDoBtn.classList.add('addToDoBtn')
            const addToDoBtnTitle = document.createElement('div')
            addToDoBtnTitle.classList.add('addToDoBtnTitle')
            addToDoBtnTitle.textContent = 'Add a Task';

            addToDo.appendChild(addToDoBtn)
            addToDo.appendChild(addToDoBtnTitle)
            this.toDoListDOM.appendChild(addToDo)
    },
    createToDoInputForm: function(n) {
            this.toDoInputFieldForm = document.createElement('form')
            this.toDoInputFieldForm.classList.add('toDoInputField')
            this.toDoInputFieldForm.setAttribute('id','toDoInputField')
            this.toDoInputFieldForm.setAttribute('data-id', `${n}`)
            this.toDoInputFieldForm.style.display =  'none'

            this.toDoInput = document.createElement('input')
            this.toDoInput.setAttribute('type', 'text')
            this.toDoInput.setAttribute('id', 'toDoInput')
            this.toDoInput.setAttribute('placeholder','Task Title')

            this.toDoInputFieldRight = document.createElement('div')
            this.toDoInputFieldRight.classList.add('toDoInputFieldRight')

            this.inputDate = document.createElement('input')
            this.inputDate.setAttribute('type','date')
            this.inputDate.setAttribute('id','toDoInputDate')

            this.inputSubmitBtn = document.createElement('button')
            this.inputSubmitBtn.classList.add('toDoInputBtns')
            this.inputSubmitBtn.setAttribute('id','submitToDoInput')

            this.inputCancelBtn = document.createElement('button')
            this.inputCancelBtn.classList.add('toDoInputBtns')
            this.inputCancelBtn.setAttribute('id','cancelToDoInput')

            this.toDoInputFieldRight.appendChild(this.inputDate)
            this.toDoInputFieldRight.appendChild(this.inputSubmitBtn)
            this.toDoInputFieldRight.appendChild(this.inputCancelBtn)

            this.toDoInputFieldForm.appendChild(this.toDoInput)
            this.toDoInputFieldForm.appendChild(this.toDoInputFieldRight)

            this.toDoListDOM.appendChild(this.toDoInputFieldForm)
    },

    addLaterEventListenersFirstHalf: function(n) {

        addToDo.addEventListener('click', () => {
            addToDo.style.display = 'none'
            this.toDoInputFieldForm.style.display = 'flex'
            this.toDoInput.focus();
        }, {once: true})

        this.toDoInputFieldForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createTodo();
            this.addToDo();
            this.toDoInputFieldForm.style.display = 'none'
            this.toDoInput.value = '';
            this.inputDate.value = '';
            console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos)
            localStorage.projectArray = this.projectListArr
            this.updateLocalStorage();
            this.renderToDoList(n);
        } , {once: true}) 

        this.inputCancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.toDoInputFieldForm.style.display = 'none'
            this.toDoInput.value = '';
            this.inputDate.value = '';
            addToDo.style.display = 'flex'
            this.updateLocalStorage();
            this.renderToDoList(n)
        })
    },
    addLaterEventListenersSecondHalf: function(n) {
        

        this.deleteToDoBtn.addEventListener('click', (e) => {
            const target = e.currentTarget.parentNode.parentNode
            this.toDoListDOM.removeChild(target)
            this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos.splice(target.dataset.id, 1)
            console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos)
            localStorage.projectArray = this.projectListArr
            this.updateLocalStorage();
            this.renderToDoList(n)

        },{once:true})

        this.toDoTitle.addEventListener('click', (e) => {
            const target = e.target
            const todo = e.target.parentNode;
            const title = todo.children[1]
            const input = todo.children[2].children[0]
            console.log(todo.children)
            title.style.display = 'none'

            input.value = target.textContent
            input.style.display = 'block'
            input.focus()
        })

        this.toDoTitleInputForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target
            console.log(form)
            const formInput = form.parentNode.children[2].children[0]
            const todoTitle =  form.parentNode.children[1]
            todoTitle.textContent = formInput.value
            this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[form.dataset.id].title = formInput.value
            localStorage.projectArray = this.projectListArr
            formInput.style.display = 'none'
            todoTitle.style.display = 'flex'
            formInput.value = ''
            this.updateLocalStorage();
        })
        

    },
    createToDoDOM: function (u) {
            this.toDo = document.createElement('div')
            this.toDo.classList.add('toDo')
            this.toDo.setAttribute('data-id', `${u}`)
            this.toDo.style.backgroundColor = this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].done ? "lightgreen" : "'rgb(255, 169, 169)"

            this.todoNumber = document.createElement('div')
            this.todoNumber.textContent = `${u}`
            this.todoNumber.classList.add('toDoNumber')

            this.toDoTitle = document.createElement('div')
            this.toDoTitle.classList.add('toDoTitle')
            this.toDoTitle.setAttribute('data-id',`${u}`)
            this.toDoTitle.textContent =  this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].title;
            this.toDoTitleInputForm = document.createElement('form')
            this.toDoTitleInputForm.setAttribute('data-id',`${u}`)
            this.toDoTitleInput = document.createElement('input')
            this.toDoTitleInput.setAttribute('type','text')
            this.toDoTitleInput.setAttribute('data-id',`${u}`)
            this.toDoTitleInput.classList.add('toDoTitleInput')
            this.toDoTitleInput.style.display = 'none'

           

            this.toDoRightSide = document.createElement('div')
            this.toDoRightSide.classList.add('toDoRightSide')

            this.date = document.createElement('input')
            this.date.setAttribute('type', 'date')
            this.date.setAttribute('id', 'date')
            this.date.value =  this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].date

            this.markDone = document.createElement('button')
            this.markDone.classList.add('markDone')
            this.markDone.setAttribute('data-id',`${u}`)
            this.markDone.setAttribute('id', 'markDone')
            this.markDone.textContent = this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].done ? 'Mark Undone' : 'Mark Done'
            
            this.markDone.addEventListener('click', (e) => {
                const target = e.currentTarget.parentNode.parentNode

                switch (e.target.textContent) {
                    case 'Mark Done':
                        e.target.textContent = 'Mark Undone';
                        target.style.backgroundColor = 'lightgreen';
                        this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[e.target.dataset.id].done = true
                        console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[e.target.dataset.id].done)
                        break;
                    
                    case 'Mark Undone':
                        e.target.textContent = 'Mark Done'
                        target.style.backgroundColor = 'rgb(255, 169, 169)'
                        this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[e.target.dataset.id].done = false
                        console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[e.target.dataset.id].done)
                        break;

                }
            })
        
            this.deleteToDoBtn = document.createElement('div')
            this.deleteToDoBtn.setAttribute('id', 'deleteToDoBtn')

            this.toDo.appendChild(this.todoNumber)
            this.toDoRightSide.appendChild(this.date)
            this.toDoRightSide.appendChild(this.markDone)
            this.toDoRightSide.appendChild(this.deleteToDoBtn)
            this.toDo.appendChild(this.toDoTitle)
            
            this.toDoTitleInputForm.appendChild(this.toDoTitleInput)
            this.toDo.appendChild(this.toDoTitleInputForm)
            this.toDo.appendChild(this.toDoRightSide)

            this.toDoListDOM.appendChild(this.toDo)
    },

    createTodo: function() {
        class ToDo {
            constructor (title, date) {
                this.title = title;
                this.date = date;
                this.done = false;
            }
        }
        this.toDo = new ToDo(this.toDoInput.value, this.inputDate.value)
    },

    addToDo: function() {
        this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos.push(this.toDo)
    },

    

    

    

}
todoApp.init();
})()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSCxnRkFBZ0Y7QUFDaEY7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixzQkFBc0Isd0NBQXdDLGlCQUFpQiwyREFBMkQseUJBQXlCLGdCQUFnQixHQUFHLCtCQUErQix3QkFBd0IsR0FBRywrQkFBK0IsZ0NBQWdDLHdCQUF3QixHQUFHLHFDQUFxQyxxQkFBcUIsR0FBRyxVQUFVLDRCQUE0QixrQkFBa0IsMkNBQTJDLHdDQUF3QyxrQkFBa0IsaUJBQWlCLEdBQUcsWUFBWSxrQkFBa0Isc0JBQXNCLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLHNDQUFzQyxjQUFjLHNCQUFzQixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRyxZQUFZLG9CQUFvQixzQkFBc0Isc0NBQXNDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsU0FBUyxtQkFBbUIscUJBQXFCLHNDQUFzQyx1QkFBdUIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixnQkFBZ0Isb0JBQW9CLGtCQUFrQixxQkFBcUIsa0JBQWtCLDRCQUE0QixHQUFHLG9CQUFvQixrQkFBa0Isd0JBQXdCLGdDQUFnQyxhQUFhLGlCQUFpQixnQkFBZ0Isa0JBQWtCLDBCQUEwQixxQkFBcUIsbUJBQW1CLGdCQUFnQixHQUFHLDZCQUE2Qiw0QkFBNEIsdUJBQXVCLHdCQUF3QixzQkFBc0IsdUJBQXVCLHlDQUF5QyxrQkFBa0IsZ0NBQWdDLHdCQUF3QixjQUFjLGlCQUFpQixHQUFHLG9DQUFvQyxpQkFBaUIsc0JBQXNCLGdCQUFnQixtQkFBbUIscUJBQXFCLHFCQUFxQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRywwQ0FBMEMsb0JBQW9CLEdBQUcseUNBQXlDLGlCQUFpQixzQkFBc0IsZ0JBQWdCLGdCQUFnQiw4QkFBOEIsNEJBQTRCLHVCQUF1QixxQkFBcUIsR0FBRyxxQ0FBcUMsbUJBQW1CLGtCQUFrQiwyQkFBMkIsdUJBQXVCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcscUZBQXFGLGtCQUFrQixnQkFBZ0IsZUFBZSw0QkFBNEIsdUJBQXVCLEdBQUcsNENBQTRDLDZCQUE2QixHQUFHLDJDQUEyQyw4QkFBOEIsR0FBRyxtQ0FBbUMsMkJBQTJCLEdBQUcsYUFBYSxlQUFlLGdCQUFnQixrQkFBa0Isa0NBQWtDLHFCQUFxQix3QkFBd0IsR0FBRyxrQkFBa0IsZ0JBQWdCLGVBQWUsdUJBQXVCLGlCQUFpQix3Q0FBd0MscUJBQXFCLHFCQUFxQixHQUFHLHdCQUF3Qix1Q0FBdUMsR0FBRyx5QkFBeUIsZ0JBQWdCLEdBQUcscUJBQXFCLGNBQWMsNEJBQTRCLEdBQUcsVUFBVSxzQkFBc0IsbUJBQW1CLHVDQUF1Qyx1QkFBdUIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsd0JBQXdCLEdBQUcsdUJBQXVCLGdCQUFnQix3QkFBd0IsdUJBQXVCLG9CQUFvQixpQkFBaUIsR0FBRyxvQkFBb0Isa0JBQWtCLHdCQUF3QixhQUFhLGlCQUFpQixzQkFBc0IsR0FBRyxrQkFBa0IsZ0JBQWdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLGdDQUFnQyxhQUFhLDBCQUEwQixxQkFBcUIsR0FBRywyQkFBMkIsbUJBQW1CLGVBQWUsa0JBQWtCLHlDQUF5Qyx1QkFBdUIsd0JBQXdCLEdBQUcsdUNBQXVDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGtCQUFrQixtQkFBbUIscUJBQXFCLHVCQUF1QixHQUFHLHlGQUF5RixrQkFBa0IsZ0JBQWdCLGNBQWMsNEJBQTRCLHVCQUF1QixHQUFHLDhDQUE4Qyw2QkFBNkIsR0FBRyw0Q0FBNEMsaUJBQWlCLGtCQUFrQix3QkFBd0IsR0FBRyxpQ0FBaUMseUNBQXlDLG9CQUFvQixHQUFHLGtDQUFrQyxrQkFBa0Isd0JBQXdCLG1DQUFtQyxtQkFBbUIsY0FBYyx5Q0FBeUMsdUJBQXVCLGVBQWUsc0JBQXNCLGtCQUFrQixHQUFHLDZDQUE2Qyw0QkFBNEIsOEJBQThCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLHVEQUF1RCxrQkFBa0IsYUFBYSx3QkFBd0IsR0FBRyxzRUFBc0UsaUJBQWlCLGlCQUFpQixzQkFBc0IseUNBQXlDLHVCQUF1QixHQUFHLHNFQUFzRSxtQkFBbUIsa0JBQWtCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHdCQUF3QixxQkFBcUIsaUJBQWlCLEdBQUcsNEVBQTRFLGVBQWUsR0FBRyw2RUFBNkUsZ0JBQWdCLEdBQUcsd0VBQXdFLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1Q0FBdUMsR0FBRywySkFBMkosa0JBQWtCLGdCQUFnQixjQUFjLDRCQUE0Qix1QkFBdUIsR0FBRywrRUFBK0UsNkJBQTZCLEdBQUcsOEVBQThFLDhCQUE4QixHQUFHLHdFQUF3RSx1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLDRCQUE0QixHQUFHLDhFQUE4RSxrQkFBa0IsdUJBQXVCLGVBQWUsZ0JBQWdCLDhCQUE4Qix3QkFBd0IsNkJBQTZCLEdBQUcsd0JBQXdCLHlDQUF5QyxpQkFBaUIsdUJBQXVCLG1CQUFtQixlQUFlLGtCQUFrQixtQ0FBbUMsd0JBQXdCLHdCQUF3QixHQUFHLG9DQUFvQyxzQkFBc0IsZ0JBQWdCLGtCQUFrQixpQkFBaUIsNEJBQTRCLHdCQUF3QixvQkFBb0Isc0NBQXNDLHdCQUF3QixxQkFBcUIsR0FBRyx3Q0FBd0MsNEJBQTRCLDhCQUE4Qix1QkFBdUIsZ0JBQWdCLGlCQUFpQixzQkFBc0IsaUJBQWlCLEdBQUcseUNBQXlDLDZCQUE2QixHQUFHLG1DQUFtQyxpQkFBaUIsc0JBQXNCLGVBQWUsbUJBQW1CLGtCQUFrQix3QkFBd0IscUJBQXFCLG1CQUFtQixvQkFBb0IsOEJBQThCLGlCQUFpQixHQUFHLHNEQUFzRCxrQkFBa0IsR0FBRyxrQ0FBa0MsaUJBQWlCLHFCQUFxQix1QkFBdUIsaUJBQWlCLDhCQUE4QixrQkFBa0IsR0FBRyx3Q0FBd0Msb0JBQW9CLGdDQUFnQyxHQUFHLHVDQUF1QyxrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxzREFBc0QsbUJBQW1CLGtCQUFrQix1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyx1SEFBdUgsa0JBQWtCLGdCQUFnQixlQUFlLDRCQUE0Qix1QkFBdUIsR0FBRyw2REFBNkQsNkJBQTZCLEdBQUcsNERBQTRELDhCQUE4QixHQUFHLDREQUE0RCxnQ0FBZ0MsR0FBRyw2Q0FBNkMsaUJBQWlCLGlCQUFpQixzQkFBc0IseUNBQXlDLHVCQUF1QixHQUFHLG1EQUFtRCxrQkFBa0IsR0FBRyxtQkFBbUIsdUJBQXVCLGlCQUFpQixlQUFlLGlCQUFpQixzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsYUFBYSxHQUFHLG1DQUFtQyxpQkFBaUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHdCQUF3QixxQkFBcUIsaUJBQWlCLEdBQUcseUNBQXlDLGVBQWUsR0FBRywwQ0FBMEMsZUFBZSxHQUFHLHFDQUFxQyx1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUNBQXVDLEdBQUcscUZBQXFGLGtCQUFrQixnQkFBZ0IsY0FBYyw0QkFBNEIsdUJBQXVCLEdBQUcsNENBQTRDLDZCQUE2QixHQUFHLDJDQUEyQyw4QkFBOEIsR0FBRyxxQ0FBcUMsdUNBQXVDLEdBQUcsaUNBQWlDLGlCQUFpQixpQkFBaUIsd0JBQXdCLHNCQUFzQixpQkFBaUIsdUJBQXVCLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxhQUFhLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxVQUFV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aURBQWlELEVBQUU7QUFDbkQ7O0FBRUE7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQzs7QUFFQTtBQUNBO0FBQ0EscURBQXFELEVBQUU7QUFDdkQ7QUFDQTtBQUNBLDhEQUE4RCxFQUFFO0FBQ2hFO0FBQ0E7QUFDQSwwREFBMEQsRUFBRTtBQUM1RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0Ly4vc3JjL2NhY2hpbmdEb20uanMiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLS0tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2Nzcy5nZy9ub3Rlcy5jc3MpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBUcmFjayAqL1xcbiAgLyogSGFuZGxlICovXFxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cXG59XFxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG4qIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG59XFxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgNjAsIDM3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiogOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDQwLCAzMik7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuaGVhZGVyIC5oZWFkZXJUaXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBncmlkLXJvdzogMTAvMTE7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgNDAsIDMyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiB7XFxuICBncmlkLXJvdzogMi8xMDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDgxLCA2OCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm5hdiAucHJvamVjdFRpdGxlIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5uYXYgLnByb2plY3RMaXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgZ2FwOiA1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogdG9wO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxubmF2IC5wcm9qZWN0TGlzdCAucHJvamVjdCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzNSwgMjA2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbiAgd2lkdGg6IDE0cmVtO1xcbn1cXG5uYXYgLnByb2plY3RMaXN0IC5wcm9qZWN0IC50aXRsZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxLjlyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG59XFxubmF2IC5wcm9qZWN0TGlzdCAucHJvamVjdCAudGl0bGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbm5hdiAucHJvamVjdExpc3QgLnByb2plY3QgLnRpdGxlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxubmF2IC5wcm9qZWN0TGlzdCAucHJvamVjdCAudGl0bGVJbnB1dCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDlyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwcHggNXB4O1xcbn1cXG5uYXYgLnByb2plY3RMaXN0IC5wcm9qZWN0IC5kZWxldGUge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm5hdiAucHJvamVjdExpc3QgLnByb2plY3QgLmRlbGV0ZTpiZWZvcmUsIG5hdiAucHJvamVjdExpc3QgLnByb2plY3QgLmRlbGV0ZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5uYXYgLnByb2plY3RMaXN0IC5wcm9qZWN0IC5kZWxldGU6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxubmF2IC5wcm9qZWN0TGlzdCAucHJvamVjdCAuZGVsZXRlOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcbm5hdiAucHJvamVjdExpc3QgLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxubmF2IC5idG5zIHtcXG4gIGhlaWdodDogNyU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5uYXYgLmJ0bnMgLmJ0biB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA0NSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxMzksIDg2KTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5uYXYgLmJ0bnMgLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCA5MCwgMjEpO1xcbn1cXG5uYXYgLmJ0bnMgLmJ0bjphY3RpdmUge1xcbiAgc2NhbGU6IDAuOTU7XFxufVxcbm5hdiAuYnRucyAuZGVsZXRlIHtcXG4gIGxlZnQ6IDVweDtcXG4gIGNvbG9yOiByZ2IoMTI4LCAzMSwgMzEpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAzLy0xO1xcbiAgZ3JpZC1yb3c6IDIvMTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDEwOCwgODApO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC50b0RvTGlzdFRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxubWFpbiAuYWRkVG9Eb0J0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcbm1haW4gLnRvRG9MaXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICBnYXA6IDVweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbm1haW4gLnRvRG9MaXN0IC5hZGRUb0RvIHtcXG4gIGhlaWdodDogMS43cmVtO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzUsIDIwNik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC50b0RvTGlzdCAuYWRkVG9EbyAuYWRkVG9Eb0J0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEuN3JlbTtcXG4gIGhlaWdodDogMS43cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLmFkZFRvRG8gLmFkZFRvRG9CdG46YmVmb3JlLCBtYWluIC50b0RvTGlzdCAuYWRkVG9EbyAuYWRkVG9Eb0J0bjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IDglO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbm1haW4gLnRvRG9MaXN0IC5hZGRUb0RvIC5hZGRUb0RvQnRuOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbm1haW4gLnRvRG9MaXN0IC5hZGRUb0RvIC5hZGRUb0RvQnRuVGl0bGUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnRvRG9MaXN0IC5hZGRUb0RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDE2MywgMTQzKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxLjdyZW07XFxuICBnYXA6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzUsIDIwNik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgI3RvRG9JbnB1dCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0ICN0b0RvSW5wdXREYXRlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTkxLCAxNjYpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgLnRvRG9JbnB1dEJ0bnMge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgLnRvRG9JbnB1dEJ0bnM6aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0IC50b0RvSW5wdXRCdG5zOmFjdGl2ZSB7XFxuICBzY2FsZTogMC45NTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0ICNjYW5jZWxUb0RvSW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzgsIDg2LCA4Nik7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvSW5wdXRGaWVsZCAudG9Eb0lucHV0RmllbGRSaWdodCAjY2FuY2VsVG9Eb0lucHV0OmJlZm9yZSwgbWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0ICNjYW5jZWxUb0RvSW5wdXQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiA4JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgI2NhbmNlbFRvRG9JbnB1dDpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgI2NhbmNlbFRvRG9JbnB1dDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgI3N1Ym1pdFRvRG9JbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgI3N1Ym1pdFRvRG9JbnB1dDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjksIDE2OSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDEuN3JlbTtcXG4gIHdpZHRoOiA2MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvTnVtYmVyIHtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCA4MiwgODIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMHB4IDEwcHg7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvVGl0bGVJbnB1dCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgd2lkdGg6IDI2cmVtO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyAudG9Eb1RpdGxlOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9UaXRsZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9UaXRsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLm1hcmtEb25lIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDBweCAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IDcuNXJlbTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLm1hcmtEb25lOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9SaWdodFNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI1cHg7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvUmlnaHRTaWRlICNkZWxldGVUb0RvQnRuIHtcXG4gIGhlaWdodDogMS4zcmVtO1xcbiAgd2lkdGg6IDEuM3JlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvUmlnaHRTaWRlICNkZWxldGVUb0RvQnRuOmJlZm9yZSwgbWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9SaWdodFNpZGUgI2RlbGV0ZVRvRG9CdG46YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9SaWdodFNpZGUgI2RlbGV0ZVRvRG9CdG46YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9SaWdodFNpZGUgI2RlbGV0ZVRvRG9CdG46YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9SaWdodFNpZGUgI2RlbGV0ZVRvRG9CdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyAudG9Eb1JpZ2h0U2lkZSAjZGF0ZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwcHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE5MSwgMTY2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9SaWdodFNpZGUgI2RhdGU6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxubWFpbiAudGl0bGVCdG5zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGxlZnQ6IDEwcHg7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxubWFpbiAudGl0bGVCdG5zIC50aXRsZUlucHV0QnRucyB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxubWFpbiAudGl0bGVCdG5zIC50aXRsZUlucHV0QnRuczpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5tYWluIC50aXRsZUJ0bnMgLnRpdGxlSW5wdXRCdG5zOmFjdGl2ZSB7XFxuICBzY2FsZTogMC45O1xcbn1cXG5tYWluIC50aXRsZUJ0bnMgI2NhbmNlbFRpdGxlSW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzgsIDg2LCA4Nik7XFxufVxcbm1haW4gLnRpdGxlQnRucyAjY2FuY2VsVGl0bGVJbnB1dDpiZWZvcmUsIG1haW4gLnRpdGxlQnRucyAjY2FuY2VsVGl0bGVJbnB1dDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogNzAlO1xcbiAgd2lkdGg6IDglO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbm1haW4gLnRpdGxlQnRucyAjY2FuY2VsVGl0bGVJbnB1dDpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5tYWluIC50aXRsZUJ0bnMgI2NhbmNlbFRpdGxlSW5wdXQ6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxubWFpbiAudGl0bGVCdG5zICNzdWJtaXRUaXRsZUlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgMTM3LCA1Nik7XFxufVxcbm1haW4gLnRpdGxlQnRucyAjcHJvamVjdFRpdGxlIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxubWFpbiAjcHJvamVjdFRpdGxlOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBS0UsVUFBQTtFQUtBLFdBQUE7RUFNQSxvQkFBQTtBQWJOO0FBRkk7RUFDSSxXQUFBO0FBSVI7QUFBTTtFQUNFLG1CQUFBO0FBRVI7QUFFTTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUlNO0VBQ0UsZ0JBQUE7QUFGUjs7QUEyQkE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUF4Qko7O0FBMEJBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7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QUFBO0FBZnBCO0FBc0JJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXBCUjtBQXFCUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQW5CWjtBQXFCUTtFQUNJLFVBQUE7QUFuQlo7QUFxQlE7RUFDSSxVQUFBO0FBbkJaO0FBcUJRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBbkJaO0FBcUJRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQW5CWjtBQXFCUTtFQUNJLHdCQUFBO0FBbkJaO0FBcUJRO0VBQ0kseUJBQUE7QUFuQlo7QUFxQlE7RUFDSSxrQ0FBQTtBQW5CWjtBQXFCUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQW5CWjtBQXNCSTtFQUNJLGFBQUE7QUFwQlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2Nzcy5nZy9ub3Rlcy5jc3MnKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIC8qIFRyYWNrICovXFxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0OyBcXG4gICAgICB9XFxuICAgICAgIFxcbiAgICAgIC8qIEhhbmRsZSAqL1xcbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDM2LCA2MCwgMzcpOyBcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzU1NTsgXFxuICAgICAgfVxcbn1cXG4kaGVhZGVyLWZvb3RlcjogcmdiKDI1LCA0MCwgMzIpO1xcbiRuYXY6IHJnYig1NywgODEsIDY4KTtcXG4kbWFpbjpyZ2IoNzgsIDEwOCwgODApO1xcbiR0b2RvOnJnYigyNDAsIDIzNSwgMjA2KTtcXG4kYnV0dG9uczogcmdiKDE3MCwgMTM5LCA4Nik7XFxuJGRhdGUtYmM6IHJnYigxOTUsIDE5MSwgMTY2KTtcXG4kdG9Eb0JSOiA1cHg7XFxuJHRvZG9JbnB1dDogcmdiKDI1NSwgMjUwLCAyMjApO1xcblxcbkBtaXhpbiBmbGV4LXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBoZiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMS8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1mb290ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIC5oZWFkZXJUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgIH1cXG59XFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEwLzExO1xcbiAgICBncmlkLWNvbHVtbjogMS8gLTE7XFxuICAgIEBpbmNsdWRlIGhmXFxufVxcblxcbm5hdiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMTA7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgQGluY2x1ZGUgZmxleC12O1xcbiAgICAucHJvamVjdFRpdGxlIHtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0TGlzdCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHRvcDtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAucHJvamVjdCB7XFxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b2RvO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxNHJlbTtcXG4gICAgICAgICAgICAudGl0bGV7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOXJlbTtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnRpdGxlOjotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnRpdGxlOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudGl0bGVJbnB1dCB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogOXJlbTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnRpdGxlSW5wdXQ6Zm9jdXMge31cXG4gICAgICAgICAgICAuZGVsZXRlIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5kZWxldGU6YmVmb3JlLCAuZGVsZXRlOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuZGVsZXRlOmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmRlbGV0ZTphZnRlciB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLnByb2plY3Q6aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuYnRucyB7XFxuICAgICAgICBoZWlnaHQ6IDclO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgICAgIC5idG4ge1xcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9ucztcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICB9XFxuICAgICAgICAuYnRuOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCA5MCwgMjEpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJ0bjphY3RpdmUge1xcbiAgICAgICAgICAgIHNjYWxlOiAwLjk1O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmRlbGV0ZSB7XFxuICAgICAgICAgICAgbGVmdDogNXB4O1xcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTI4LCAzMSwgMzEpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbm1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgICBncmlkLXJvdzogMi8xMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgQGluY2x1ZGUgZmxleC12O1xcbiAgICAudG9Eb0xpc3RUaXRsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBtYXJnaW46IDIwcHg7XFxuICAgIH1cXG4gICAgLmFkZFRvRG9CdG4ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7ICBcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogNXB4O1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgfVxcbiAgICAudG9Eb0xpc3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIC5hZGRUb0RvIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvZG87XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvRG9CUjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIC5hZGRUb0RvQnRuIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjdyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMS43cmVtO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5hZGRUb0RvQnRuOmJlZm9yZSwgLmFkZFRvRG9CdG46YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4JTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmFkZFRvRG9CdG46YmVmb3JlIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuYWRkVG9Eb0J0blRpdGxlIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5hZGRUb0RvOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAxNjMsIDE0Myk7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRvRG9JbnB1dEZpZWxkIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGhlaWdodDogMS43cmVtO1xcbiAgICAgICAgICAgIGdhcDogMTVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9kbztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkdG9Eb0JSO1xcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAjdG9Eb0lucHV0IHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR0b0RvQlI7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudG9Eb0lucHV0RmllbGRSaWdodCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAjdG9Eb0lucHV0RGF0ZXtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGUtYmM7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgLnRvRG9JbnB1dEJ0bnMge1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC50b0RvSW5wdXRCdG5zOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLjFcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAudG9Eb0lucHV0QnRuczphY3RpdmUge1xcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDAuOTVcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjY2FuY2VsVG9Eb0lucHV0IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc4LCA4NiwgODYpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNjYW5jZWxUb0RvSW5wdXQ6YmVmb3JlLCAjY2FuY2VsVG9Eb0lucHV0OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOCU7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjY2FuY2VsVG9Eb0lucHV0OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2NhbmNlbFRvRG9JbnB1dDphZnRlciB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNzdWJtaXRUb0RvSW5wdXQge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjc3VibWl0VG9Eb0lucHV0OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZylcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIC50b0RvIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNjksIDE2OSk7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR0b0RvQlI7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxLjdyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgICAgICAgLnRvRG9OdW1iZXIge1xcbiAgICAgICAgICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCA4MiwgODIpO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudG9Eb1RpdGxlSW5wdXQge1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvRG9CUjtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7ICBcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudG9Eb1RpdGxlOmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAudG9Eb1RpdGxlIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgLnRvRG9UaXRsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5tYXJrRG9uZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA3LjVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5tYXJrRG9uZTpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAudG9Eb1JpZ2h0U2lkZSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGdhcDogMjVweFxcbiAgICAgICAgICAgICAgICA7XFxuICAgICAgICAgICAgICAgICNkZWxldGVUb0RvQnRuIHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4zcmVtO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuM3JlbTtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2RlbGV0ZVRvRG9CdG46YmVmb3JlLCAjZGVsZXRlVG9Eb0J0bjphZnRlciB7XFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNkZWxldGVUb0RvQnRuOmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2RlbGV0ZVRvRG9CdG46YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjZGVsZXRlVG9Eb0J0bjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2RhdGUge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0ZS1iYztcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjZGF0ZTpmb2N1cyB7XFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnRpdGxlQnRucyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDEwcHg7XFxuICAgICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgICAgICAudGl0bGVJbnB1dEJ0bnN7XFxuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRpdGxlSW5wdXRCdG5zOmhvdmVyIHtcXG4gICAgICAgICAgICBzY2FsZTogMS4xXFxuICAgICAgICB9XFxuICAgICAgICAudGl0bGVJbnB1dEJ0bnM6YWN0aXZlIHtcXG4gICAgICAgICAgICBzY2FsZTogMC45XFxuICAgICAgICB9XFxuICAgICAgICAjY2FuY2VsVGl0bGVJbnB1dCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc4LCA4NiwgODYpO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2NhbmNlbFRpdGxlSW5wdXQ6YmVmb3JlLCAjY2FuY2VsVGl0bGVJbnB1dDphZnRlciB7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDglO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgICNjYW5jZWxUaXRsZUlucHV0OmJlZm9yZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2NhbmNlbFRpdGxlSW5wdXQ6YWZ0ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICB9XFxuICAgICAgICAjc3VibWl0VGl0bGVJbnB1dCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCAxMzcsIDU2KTtcXG4gICAgICAgIH1cXG4gICAgICAgICNwcm9qZWN0VGl0bGUge1xcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICNwcm9qZWN0VGl0bGU6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgYXJyID0gWzEsIDIsIDMsIDQsIDVdXG5cbiBleHBvcnQgZnVuY3Rpb24gdGVzdCAoaykge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgKGZ1bmN0aW9uIGxvZyAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcnIpXG4gICAgICAgIH0pKClcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgYWRkIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgdGggfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuaW1wb3J0IHsgdGVzdCB9IGZyb20gJy4vY2FjaGluZ0RvbSc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgbGV0IHRvZG9BcHAgPSB7XG4gICAgICAgIHByb2plY3RMaXN0QXJyIDogW10sXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYm9vdCgpO1xuICAgICAgICB0aGlzLmNhY2hlRG9tKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLnJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgfSxcbiAgICBib290OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0QXJyJykpID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0QXJyID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0QXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3RBcnInKSk7XG4gICAgICAgICAgICBmb3IobGV0IGUgPSAwOyBlIDwgdGhpcy5wcm9qZWN0TGlzdEFyci5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3RBcnJbZV0uc2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIGNhY2hlRG9tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpXG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKVxuICAgICAgICB0aGlzLmRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJylcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKVxuICAgICAgICB0aGlzLnByb2plY3RUaXRsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlRm9ybScpXG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVCdG5zJylcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dENvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0VGl0bGVJbnB1dCcpXG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXRDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsVGl0bGVJbnB1dCcpXG4gICAgICAgIHRoaXMuYWRkVG9Eb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUb0RvJylcbiAgICAgICAgdGhpcy50b0RvSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvSW5wdXQnKVxuICAgICAgICB0aGlzLmNhbmNlbFRvRG9JbnB1dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxUb0RvSW5wdXQnKVxuICAgICAgICB0aGlzLnRvRG9JbnB1dERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0lucHV0RGF0ZScpXG4gICAgICAgIHRoaXMudG9Eb0xpc3RET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0xpc3QnKVxuICAgICAgICB0aGlzLnRvRG9MaXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0xpc3RUaXRsZScpXG4gICAgfSxcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3RBcnInLCBcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0TGlzdEFycikpXG4gICAgfSxcbiAgICBiaW5kRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgdGhpcy5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICB0aGlzLnByb2plY3RUaXRsZUlucHV0RGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dC5mb2N1cygpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb2plY3RUaXRsZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgdGhpcy5hZGRQcm9qZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXREaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXRDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgICAgICB0aGlzLnByb2plY3RUaXRsZUlucHV0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0sXG4gICAgY3JlYXRlUHJvamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsYXNzIFByb2plY3Qge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgIChwcm9qZWN0VGl0bGVJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBwcm9qZWN0VGl0bGVJbnB1dFxuICAgICAgICAgICAgICAgIHRoaXMudG9Eb3MgPSBbJ2FkZCBUb0RvJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gbmV3IFByb2plY3QodGhpcy5wcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSlcbiAgICB9LFxuICAgIGFkZFByb2plY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0QXJyLnB1c2godGhpcy5wcm9qZWN0KVxuICAgIH0sXG4gICAgZGVsZXRlUHJvamVjdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlXG4gICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdEFyci5zcGxpY2UodGFyZ2V0LmRhdGFzZXQuaWQsIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC5jaGlsZHJlblsxXSlcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0TGlzdCgpO1xuXG4gICAgICAgIGlmKHRhcmdldC5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9PSB0aGlzLnRvRG9MaXN0VGl0bGUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudG9Eb0xpc3RUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0IFRpdGxlJztcblxuICAgICAgICAgICAgd2hpbGUgKHRoaXMudG9Eb0xpc3RET00uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy50b0RvTGlzdERPTS5yZW1vdmVDaGlsZCh0aGlzLnRvRG9MaXN0RE9NLmZpcnN0Q2hpbGQpXG4gICAgICAgIH07fVxuXG4gICAgICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfSxcbiAgICBcblxuICAgIHJlbmRlclByb2plY3RMaXN0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IG47XG5cbiAgICAgICAgd2hpbGUgKHRoaXMucHJvamVjdExpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5yZW1vdmVDaGlsZCh0aGlzLnByb2plY3RMaXN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0TGlzdEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy5kaXYuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYCR7aX1gKVxuICAgICAgICAgICAgdGhpcy5kaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucHJvamVjdExpc3RBcnJbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciAgPSAnZ3JleSdcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNDAsIDIzNSwgMjA2KSdcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMudGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgICAgICAgICAgdGhpcy5kZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgdGhpcy5kZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJylcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHt0aGlzLmRlbGV0ZVByb2plY3QoZSl9KVxuICAgICAgICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVCdG4pXG4gICAgICAgICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKVxuXG5cbiAgICAgICAgICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3RMaXN0QXJyW2ldLnRpdGxlXG5cbiAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3QuYXBwZW5kQ2hpbGQodGhpcy5kaXYpXG5cbiAgICAgICAgICAgIHRoaXMudGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KVxuICAgICAgICAgICAgICAgIG4gPSB0YXJnZXQuZGF0YXNldC5pZFxuICAgICAgICAgICAgICAgIGZvcihsZXQgdyA9IDA7IHcgPCB0aGlzLnByb2plY3RMaXN0QXJyLmxlbmd0aDsgdysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3RBcnJbd10uc2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0QXJyW25dLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRvRG9MaXN0KG4pXG4gICAgICAgICAgICAgICAgdGhpcy50b0RvTGlzdFRpdGxlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbn0sXG5yZW5kZXJUb0RvTGlzdDogZnVuY3Rpb24gKG4pIHtcbiAgICBcbiAgICB3aGlsZSAodGhpcy50b0RvTGlzdERPTS5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMudG9Eb0xpc3RET00ucmVtb3ZlQ2hpbGQodGhpcy50b0RvTGlzdERPTS5maXJzdENoaWxkKVxuICAgICB9O1xuXG4gICAgZm9yKGxldCB1ID0gMDsgdSA8IHRoaXMucHJvamVjdExpc3RBcnJbbl0udG9Eb3MubGVuZ3RoOyB1KyspIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0TGlzdEFycltuXS50b0Rvc1t1XSA9PT0gXCJhZGQgVG9Eb1wiKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQWRkVG9Eb0J0bihuKVxuICAgICAgICB0aGlzLmNyZWF0ZVRvRG9JbnB1dEZvcm0obilcbiAgICAgICAgdGhpcy5hZGRMYXRlckV2ZW50TGlzdGVuZXJzRmlyc3RIYWxmKG4pXG4gICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3JlYXRlVG9Eb0RPTSh1KTtcbiAgICAgICAgdGhpcy5hZGRMYXRlckV2ZW50TGlzdGVuZXJzU2Vjb25kSGFsZihuKVxuICAgIH1cblxuXG5cbn1cbn0sXG5cbiAgICBjcmVhdGVBZGRUb0RvQnRuOiBmdW5jdGlvbiAobikge1xuICAgICAgICBjb25zdCBhZGRUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGFkZFRvRG8uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAgICAgYWRkVG9Eby5jbGFzc0xpc3QuYWRkKCdhZGRUb0RvJylcbiAgICAgICAgICAgIGFkZFRvRG8uc2V0QXR0cmlidXRlKCdpZCcsIGBhZGRUb0RvYCk7XG4gICAgICAgICAgICBhZGRUb0RvLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke259YClcbiAgICAgICAgICAgIGNvbnN0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgYWRkVG9Eb0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRUb0RvQnRuJylcbiAgICAgICAgICAgIGNvbnN0IGFkZFRvRG9CdG5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBhZGRUb0RvQnRuVGl0bGUuY2xhc3NMaXN0LmFkZCgnYWRkVG9Eb0J0blRpdGxlJylcbiAgICAgICAgICAgIGFkZFRvRG9CdG5UaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgYSBUYXNrJztcblxuICAgICAgICAgICAgYWRkVG9Eby5hcHBlbmRDaGlsZChhZGRUb0RvQnRuKVxuICAgICAgICAgICAgYWRkVG9Eby5hcHBlbmRDaGlsZChhZGRUb0RvQnRuVGl0bGUpXG4gICAgICAgICAgICB0aGlzLnRvRG9MaXN0RE9NLmFwcGVuZENoaWxkKGFkZFRvRG8pXG4gICAgfSxcbiAgICBjcmVhdGVUb0RvSW5wdXRGb3JtOiBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICB0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICAgICAgdGhpcy50b0RvSW5wdXRGaWVsZEZvcm0uY2xhc3NMaXN0LmFkZCgndG9Eb0lucHV0RmllbGQnKVxuICAgICAgICAgICAgdGhpcy50b0RvSW5wdXRGaWVsZEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsJ3RvRG9JbnB1dEZpZWxkJylcbiAgICAgICAgICAgIHRoaXMudG9Eb0lucHV0RmllbGRGb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke259YClcbiAgICAgICAgICAgIHRoaXMudG9Eb0lucHV0RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAgJ25vbmUnXG5cbiAgICAgICAgICAgIHRoaXMudG9Eb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgdGhpcy50b0RvSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgICAgICAgICAgdGhpcy50b0RvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0b0RvSW5wdXQnKVxuICAgICAgICAgICAgdGhpcy50b0RvSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1Rhc2sgVGl0bGUnKVxuXG4gICAgICAgICAgICB0aGlzLnRvRG9JbnB1dEZpZWxkUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50b0RvSW5wdXRGaWVsZFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3RvRG9JbnB1dEZpZWxkUmlnaHQnKVxuXG4gICAgICAgICAgICB0aGlzLmlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuICAgICAgICAgICAgdGhpcy5pbnB1dERhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvRG9JbnB1dERhdGUnKVxuXG4gICAgICAgICAgICB0aGlzLmlucHV0U3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9Eb0lucHV0QnRucycpXG4gICAgICAgICAgICB0aGlzLmlucHV0U3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdzdWJtaXRUb0RvSW5wdXQnKVxuXG4gICAgICAgICAgICB0aGlzLmlucHV0Q2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIHRoaXMuaW5wdXRDYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgndG9Eb0lucHV0QnRucycpXG4gICAgICAgICAgICB0aGlzLmlucHV0Q2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdjYW5jZWxUb0RvSW5wdXQnKVxuXG4gICAgICAgICAgICB0aGlzLnRvRG9JbnB1dEZpZWxkUmlnaHQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dERhdGUpXG4gICAgICAgICAgICB0aGlzLnRvRG9JbnB1dEZpZWxkUmlnaHQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dFN1Ym1pdEJ0bilcbiAgICAgICAgICAgIHRoaXMudG9Eb0lucHV0RmllbGRSaWdodC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0Q2FuY2VsQnRuKVxuXG4gICAgICAgICAgICB0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5hcHBlbmRDaGlsZCh0aGlzLnRvRG9JbnB1dClcbiAgICAgICAgICAgIHRoaXMudG9Eb0lucHV0RmllbGRGb3JtLmFwcGVuZENoaWxkKHRoaXMudG9Eb0lucHV0RmllbGRSaWdodClcblxuICAgICAgICAgICAgdGhpcy50b0RvTGlzdERPTS5hcHBlbmRDaGlsZCh0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybSlcbiAgICB9LFxuXG4gICAgYWRkTGF0ZXJFdmVudExpc3RlbmVyc0ZpcnN0SGFsZjogZnVuY3Rpb24obikge1xuXG4gICAgICAgIGFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRUb0RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIHRoaXMudG9Eb0lucHV0RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgICAgIHRoaXMudG9Eb0lucHV0LmZvY3VzKCk7XG4gICAgICAgIH0sIHtvbmNlOiB0cnVlfSlcblxuICAgICAgICB0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb2RvKCk7XG4gICAgICAgICAgICB0aGlzLmFkZFRvRG8oKTtcbiAgICAgICAgICAgIHRoaXMudG9Eb0lucHV0RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIHRoaXMudG9Eb0lucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmlucHV0RGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0TGlzdEFyclt0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5kYXRhc2V0LmlkXS50b0RvcylcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0QXJyYXkgPSB0aGlzLnByb2plY3RMaXN0QXJyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJUb0RvTGlzdChuKTtcbiAgICAgICAgfSAsIHtvbmNlOiB0cnVlfSkgXG5cbiAgICAgICAgdGhpcy5pbnB1dENhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB0aGlzLnRvRG9JbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5pbnB1dERhdGUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGFkZFRvRG8uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVG9Eb0xpc3QobilcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGFkZExhdGVyRXZlbnRMaXN0ZW5lcnNTZWNvbmRIYWxmOiBmdW5jdGlvbihuKSB7XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuZGVsZXRlVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlXG4gICAgICAgICAgICB0aGlzLnRvRG9MaXN0RE9NLnJlbW92ZUNoaWxkKHRhcmdldClcbiAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3RBcnJbdGhpcy50b0RvSW5wdXRGaWVsZEZvcm0uZGF0YXNldC5pZF0udG9Eb3Muc3BsaWNlKHRhcmdldC5kYXRhc2V0LmlkLCAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0TGlzdEFyclt0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5kYXRhc2V0LmlkXS50b0RvcylcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0QXJyYXkgPSB0aGlzLnByb2plY3RMaXN0QXJyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJUb0RvTGlzdChuKVxuXG4gICAgICAgIH0se29uY2U6dHJ1ZX0pXG5cbiAgICAgICAgdGhpcy50b0RvVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0b2RvLmNoaWxkcmVuWzFdXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRvZG8uY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8uY2hpbGRyZW4pXG4gICAgICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50XG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMudG9Eb1RpdGxlSW5wdXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm0pXG4gICAgICAgICAgICBjb25zdCBmb3JtSW5wdXQgPSBmb3JtLnBhcmVudE5vZGUuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF1cbiAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9ICBmb3JtLnBhcmVudE5vZGUuY2hpbGRyZW5bMV1cbiAgICAgICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGZvcm1JbnB1dC52YWx1ZVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdEFyclt0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5kYXRhc2V0LmlkXS50b0Rvc1tmb3JtLmRhdGFzZXQuaWRdLnRpdGxlID0gZm9ybUlucHV0LnZhbHVlXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucHJvamVjdEFycmF5ID0gdGhpcy5wcm9qZWN0TGlzdEFyclxuICAgICAgICAgICAgZm9ybUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIHRvZG9UaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgICAgICBmb3JtSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG5cbiAgICB9LFxuICAgIGNyZWF0ZVRvRG9ET006IGZ1bmN0aW9uICh1KSB7XG4gICAgICAgICAgICB0aGlzLnRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50b0RvLmNsYXNzTGlzdC5hZGQoJ3RvRG8nKVxuICAgICAgICAgICAgdGhpcy50b0RvLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke3V9YClcbiAgICAgICAgICAgIHRoaXMudG9Eby5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnByb2plY3RMaXN0QXJyW3RoaXMudG9Eb0lucHV0RmllbGRGb3JtLmRhdGFzZXQuaWRdLnRvRG9zW3VdLmRvbmUgPyBcImxpZ2h0Z3JlZW5cIiA6IFwiJ3JnYigyNTUsIDE2OSwgMTY5KVwiXG5cbiAgICAgICAgICAgIHRoaXMudG9kb051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRvZG9OdW1iZXIudGV4dENvbnRlbnQgPSBgJHt1fWBcbiAgICAgICAgICAgIHRoaXMudG9kb051bWJlci5jbGFzc0xpc3QuYWRkKCd0b0RvTnVtYmVyJylcblxuICAgICAgICAgICAgdGhpcy50b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGhpcy50b0RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9Eb1RpdGxlJylcbiAgICAgICAgICAgIHRoaXMudG9Eb1RpdGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsYCR7dX1gKVxuICAgICAgICAgICAgdGhpcy50b0RvVGl0bGUudGV4dENvbnRlbnQgPSAgdGhpcy5wcm9qZWN0TGlzdEFyclt0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5kYXRhc2V0LmlkXS50b0Rvc1t1XS50aXRsZTtcbiAgICAgICAgICAgIHRoaXMudG9Eb1RpdGxlSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgICAgICB0aGlzLnRvRG9UaXRsZUlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLGAke3V9YClcbiAgICAgICAgICAgIHRoaXMudG9Eb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICB0aGlzLnRvRG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgICAgICAgICAgdGhpcy50b0RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLGAke3V9YClcbiAgICAgICAgICAgIHRoaXMudG9Eb1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9Eb1RpdGxlSW5wdXQnKVxuICAgICAgICAgICAgdGhpcy50b0RvVGl0bGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHRoaXMudG9Eb1JpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aGlzLnRvRG9SaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgndG9Eb1JpZ2h0U2lkZScpXG5cbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgICAgICAgICB0aGlzLmRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJylcbiAgICAgICAgICAgIHRoaXMuZGF0ZS52YWx1ZSA9ICB0aGlzLnByb2plY3RMaXN0QXJyW3RoaXMudG9Eb0lucHV0RmllbGRGb3JtLmRhdGFzZXQuaWRdLnRvRG9zW3VdLmRhdGVcblxuICAgICAgICAgICAgdGhpcy5tYXJrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICB0aGlzLm1hcmtEb25lLmNsYXNzTGlzdC5hZGQoJ21hcmtEb25lJylcbiAgICAgICAgICAgIHRoaXMubWFya0RvbmUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJyxgJHt1fWApXG4gICAgICAgICAgICB0aGlzLm1hcmtEb25lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFya0RvbmUnKVxuICAgICAgICAgICAgdGhpcy5tYXJrRG9uZS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdExpc3RBcnJbdGhpcy50b0RvSW5wdXRGaWVsZEZvcm0uZGF0YXNldC5pZF0udG9Eb3NbdV0uZG9uZSA/ICdNYXJrIFVuZG9uZScgOiAnTWFyayBEb25lJ1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1hcmtEb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlXG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ01hcmsgRG9uZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdNYXJrIFVuZG9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdEFyclt0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5kYXRhc2V0LmlkXS50b0Rvc1tlLnRhcmdldC5kYXRhc2V0LmlkXS5kb25lID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0TGlzdEFyclt0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5kYXRhc2V0LmlkXS50b0Rvc1tlLnRhcmdldC5kYXRhc2V0LmlkXS5kb25lKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjYXNlICdNYXJrIFVuZG9uZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9ICdNYXJrIERvbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTUsIDE2OSwgMTY5KSdcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdExpc3RBcnJbdGhpcy50b0RvSW5wdXRGaWVsZEZvcm0uZGF0YXNldC5pZF0udG9Eb3NbZS50YXJnZXQuZGF0YXNldC5pZF0uZG9uZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RMaXN0QXJyW3RoaXMudG9Eb0lucHV0RmllbGRGb3JtLmRhdGFzZXQuaWRdLnRvRG9zW2UudGFyZ2V0LmRhdGFzZXQuaWRdLmRvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kZWxldGVUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVG9Eb0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZVRvRG9CdG4nKVxuXG4gICAgICAgICAgICB0aGlzLnRvRG8uYXBwZW5kQ2hpbGQodGhpcy50b2RvTnVtYmVyKVxuICAgICAgICAgICAgdGhpcy50b0RvUmlnaHRTaWRlLmFwcGVuZENoaWxkKHRoaXMuZGF0ZSlcbiAgICAgICAgICAgIHRoaXMudG9Eb1JpZ2h0U2lkZS5hcHBlbmRDaGlsZCh0aGlzLm1hcmtEb25lKVxuICAgICAgICAgICAgdGhpcy50b0RvUmlnaHRTaWRlLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlVG9Eb0J0bilcbiAgICAgICAgICAgIHRoaXMudG9Eby5hcHBlbmRDaGlsZCh0aGlzLnRvRG9UaXRsZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50b0RvVGl0bGVJbnB1dEZvcm0uYXBwZW5kQ2hpbGQodGhpcy50b0RvVGl0bGVJbnB1dClcbiAgICAgICAgICAgIHRoaXMudG9Eby5hcHBlbmRDaGlsZCh0aGlzLnRvRG9UaXRsZUlucHV0Rm9ybSlcbiAgICAgICAgICAgIHRoaXMudG9Eby5hcHBlbmRDaGlsZCh0aGlzLnRvRG9SaWdodFNpZGUpXG5cbiAgICAgICAgICAgIHRoaXMudG9Eb0xpc3RET00uYXBwZW5kQ2hpbGQodGhpcy50b0RvKVxuICAgIH0sXG5cbiAgICBjcmVhdGVUb2RvOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xhc3MgVG9EbyB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvRG8gPSBuZXcgVG9Ebyh0aGlzLnRvRG9JbnB1dC52YWx1ZSwgdGhpcy5pbnB1dERhdGUudmFsdWUpXG4gICAgfSxcblxuICAgIGFkZFRvRG86IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0QXJyW3RoaXMudG9Eb0lucHV0RmllbGRGb3JtLmRhdGFzZXQuaWRdLnRvRG9zLnB1c2godGhpcy50b0RvKVxuICAgIH0sXG5cbiAgICBcblxuICAgIFxuXG4gICAgXG5cbn1cbnRvZG9BcHAuaW5pdCgpO1xufSkoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9