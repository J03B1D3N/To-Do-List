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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 1.1rem;\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n* ::-webkit-scrollbar {\n  width: 10px;\n}\n* ::-webkit-scrollbar-track {\n  background: inherit;\n}\n* ::-webkit-scrollbar-thumb {\n  background: rgb(36, 60, 37);\n  border-radius: 10px;\n}\n* ::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\nbody {\n  background-color: black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 100vh;\n  width: 100vw;\n}\n\nheader {\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  background-color: rgb(170, 139, 86);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter {\n  grid-row: 10/11;\n  grid-column: 1/-1;\n  background-color: rgb(170, 139, 86);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nnav {\n  grid-row: 2/10;\n  grid-column: 1/3;\n  background-color: rgb(57, 81, 68);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\nnav .projectTitle {\n  height: fit-content;\n  width: 100%;\n  font-size: 2rem;\n  padding: 15px;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n}\nnav .projectList {\n  display: grid;\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 5px;\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n  justify-items: left;\n  align-items: top;\n  overflow: auto;\n  width: 100%;\n}\nnav .projectList .project {\n  border: 3px solid grey;\n  width: fit-content;\n  height: fit-content;\n  padding: 0px 10px;\n  border-radius: 5px;\n  background-color: rgb(240, 235, 206);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n}\nnav .projectList .project .title {\n  color: black;\n  font-size: 1.5rem;\n}\nnav .projectList .project .title:hover {\n  cursor: pointer;\n}\nnav .projectList .project .delete {\n  height: 1.5rem;\n  width: 1.5rem;\n  background-color: grey;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnav .projectList .project .delete:before, nav .projectList .project .delete:after {\n  content: \"\";\n  height: 90%;\n  width: 20%;\n  background-color: black;\n  position: absolute;\n}\nnav .projectList .project .delete:before {\n  transform: rotate(45deg);\n}\nnav .projectList .project .delete:after {\n  transform: rotate(-45deg);\n}\nnav .projectList .project:hover {\n  background-color: grey;\n}\nnav .btns {\n  height: 7%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 15px;\n  padding-bottom: 5px;\n}\nnav .btns .btn {\n  height: 90%;\n  width: 45%;\n  border-radius: 5px;\n  border: none;\n  background-color: rgb(170, 139, 86);\n  transition: 0.2s;\n  font-weight: 600;\n}\nnav .btns .btn:hover {\n  background-color: rgb(130, 90, 21);\n}\nnav .btns .btn:active {\n  scale: 0.95;\n}\nnav .btns .delete {\n  left: 5px;\n  color: rgb(128, 31, 31);\n}\n\nmain {\n  grid-column: 3/-1;\n  grid-row: 2/10;\n  background-color: rgb(78, 108, 80);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\nmain .toDoListTitle {\n  width: 100%;\n  height: fit-content;\n  text-align: center;\n  font-size: 3rem;\n  margin: 20px;\n}\nmain .addToDoBtn {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: black;\n  padding: 0px 10px;\n}\nmain .toDoList {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-auto-flow: row;\n  grid-auto-rows: min-content;\n  gap: 5px;\n  justify-items: center;\n}\nmain .toDoList .addToDo {\n  height: 1.7rem;\n  width: 60%;\n  display: flex;\n  background-color: rgb(240, 235, 206);\n  border-radius: 5px;\n  align-items: center;\n}\nmain .toDoList .addToDo .addToDoBtn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  margin-left: 5px;\n  position: relative;\n}\nmain .toDoList .addToDo .addToDoBtn:before, main .toDoList .addToDo .addToDoBtn:after {\n  content: \"\";\n  height: 60%;\n  width: 8%;\n  background-color: black;\n  position: absolute;\n}\nmain .toDoList .addToDo .addToDoBtn:before {\n  transform: rotate(90deg);\n}\nmain .toDoList .addToDo .addToDoBtnTitle {\n  color: black;\n  display: flex;\n  align-items: center;\n}\nmain .toDoList .addToDo:hover {\n  background-color: rgb(167, 163, 143);\n  cursor: pointer;\n}\nmain .toDoList .toDoInputField {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 1.7rem;\n  gap: 15px;\n  background-color: rgb(240, 235, 206);\n  border-radius: 5px;\n  width: 60%;\n  padding: 0px 10px;\n  display: none;\n}\nmain .toDoList .toDoInputField #toDoInput {\n  border: 1px solid black;\n  background-color: rgb(240, 235, 206);\n  border-radius: 5px;\n  height: 90%;\n  color: black;\n  padding: 0px 20px;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #toDoInputDate {\n  color: black;\n  border: none;\n  padding: 0px 15px;\n  background-color: rgb(195, 191, 166);\n  border-radius: 5px;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight .toDoInputBtns {\n  height: 1.5rem;\n  width: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  transition: 0.1s;\n  border: none;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight .toDoInputBtns:hover {\n  scale: 1.1;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight .toDoInputBtns:active {\n  scale: 0.95;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(178, 86, 86);\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:before, main .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:after {\n  content: \"\";\n  height: 70%;\n  width: 8%;\n  background-color: white;\n  position: absolute;\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:before {\n  transform: rotate(45deg);\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #cancelToDoInput:after {\n  transform: rotate(-45deg);\n}\nmain .toDoList .toDoInputField .toDoInputFieldRight #submitToDoInput {\n  background-color: rgb(56, 137, 56);\n}\nmain .toDoList .toDo {\n  background-color: rgb(255, 169, 169);\n  border: none;\n  border-radius: 5px;\n  height: 1.7rem;\n  width: 60%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 15px;\n}\nmain .toDoList .toDo .toDoTitle {\n  color: black;\n  font-size: 1.5rem;\n}\nmain .toDoList .toDo .markDone {\n  color: black;\n  padding: 0px 5px;\n}\nmain .toDoList .toDo .markDone:hover {\n  cursor: pointer;\n  background-color: rgb(174, 110, 110);\n}\nmain .toDoList .toDo .toDoRightSide {\n  display: flex;\n  align-items: center;\n  gap: 25px;\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn {\n  height: 1.3rem;\n  width: 1.3rem;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:before, main .toDoList .toDo .toDoRightSide #deleteToDoBtn:after {\n  content: \"\";\n  height: 90%;\n  width: 10%;\n  background-color: black;\n  position: absolute;\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:before {\n  transform: rotate(45deg);\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:after {\n  transform: rotate(-45deg);\n}\nmain .toDoList .toDo .toDoRightSide #deleteToDoBtn:hover {\n  background-color: rgb(174, 110, 110);\n}\nmain .toDoList .toDo .toDoRightSide #date {\n  color: black;\n  border: none;\n  padding: 0px 15px;\n  background-color: rgb(195, 191, 166);\n  border-radius: 5px;\n}\nmain .toDoList .toDo .toDoRightSide #date:focus {\n  outline: none;\n}\nmain .titleBtns {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  height: 2rem;\n  margin-left: 20px;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\nmain .titleBtns .titleInputBtns {\n  height: 2rem;\n  width: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  transition: 0.1s;\n  border: none;\n}\nmain .titleBtns .titleInputBtns:hover {\n  scale: 1.1;\n}\nmain .titleBtns .titleInputBtns:active {\n  scale: 0.9;\n}\nmain .titleBtns #cancelTitleInput {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(178, 86, 86);\n}\nmain .titleBtns #cancelTitleInput:before, main .titleBtns #cancelTitleInput:after {\n  content: \"\";\n  height: 70%;\n  width: 8%;\n  background-color: white;\n  position: absolute;\n}\nmain .titleBtns #cancelTitleInput:before {\n  transform: rotate(45deg);\n}\nmain .titleBtns #cancelTitleInput:after {\n  transform: rotate(-45deg);\n}\nmain .titleBtns #submitTitleInput {\n  background-color: rgb(56, 137, 56);\n}\nmain .titleBtns #projectTitle {\n  height: 2rem;\n  border: none;\n  border-radius: 15px;\n  padding: 0px 20px;\n  color: black;\n  width: fit-content;\n}\nmain #projectTitle:focus {\n  outline: none;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 1.1rem;\n    font-family: 'Roboto', sans-serif;\n    color: white;\n    ::-webkit-scrollbar {\n        width: 10px;\n      }\n      \n      /* Track */\n      ::-webkit-scrollbar-track {\n        background: inherit; \n      }\n       \n      /* Handle */\n      ::-webkit-scrollbar-thumb {\n        background: rgb(36, 60, 37); \n        border-radius: 10px;\n      }\n      \n      /* Handle on hover */\n      ::-webkit-scrollbar-thumb:hover {\n        background: #555; \n      }\n}\n$header-footer: rgb(170, 139, 86);\n$nav: rgb(57, 81, 68);\n$main:rgb(78, 108, 80);\n$todo:rgb(240, 235, 206);\n$buttons: rgb(170, 139, 86);\n$date-bc: rgb(195, 191, 166);\n$toDoBR: 5px;\n$todoInput: rgb(255, 250, 220);\n\n@mixin flex-v {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n@mixin hf {\n    background-color: $header-footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\nbody {\n    background-color: black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    height: 100vh;\n    width: 100vw;\n}\nheader {\n    grid-row: 1 / 2;\n    grid-column: 1/ -1;\n    @include hf\n}\nfooter {\n    grid-row: 10/11;\n    grid-column: 1/ -1;\n    @include hf\n}\n\nnav {\n    grid-row: 2 / 10;\n    grid-column: 1/3;\n    background-color: $nav;\n    position: relative;\n    @include flex-v;\n    .projectTitle {\n        height: fit-content;\n        width: 100%;\n        font-size: 2rem;\n        padding: 15px;\n        font-weight: 600;\n        display: flex;\n        justify-content: center;\n    }\n    .projectList {\n        display: grid;\n        grid-auto-flow: row;\n        grid-auto-rows: min-content;\n        gap: 5px;\n        height: 100%;\n        width: 100%;\n        padding: 15px;\n        justify-items: left;\n        align-items: top;\n        overflow: auto;\n        width: 100%;\n        .project {\n            border: 3px solid grey;\n            width: fit-content;\n            height: fit-content;\n            padding: 0px 10px;\n            border-radius: 5px;\n            background-color: $todo;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            gap: 15px;\n            .title{\n                color: black;\n                font-size: 1.5rem;\n            }\n            .title:hover {\n                cursor: pointer;\n            }\n            .delete {\n                height: 1.5rem;\n                width: 1.5rem;\n                background-color: grey;\n                position: relative;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n            .delete:before, .delete:after {\n                content: '';\n                height: 90%;\n                width: 20%;\n                background-color: black;\n                position: absolute;\n            }\n            .delete:before {\n                transform: rotate(45deg);\n            }\n            .delete:after {\n                transform: rotate(-45deg);\n            }\n        }\n        .project:hover{\n            background-color: grey;\n        }\n    }\n    .btns {\n        height: 7%;\n        width: 100%;\n        display: flex;\n        justify-content: space-around;\n        margin-top: 15px;\n        padding-bottom: 5px;\n        .btn {\n            height: 90%;\n            width: 45%;\n            border-radius: 5px;\n            border: none;\n            background-color: $buttons;\n            transition: 0.2s;\n            font-weight: 600;\n        }\n        .btn:hover {\n            background-color: rgb(130, 90, 21);\n        }\n        .btn:active {\n            scale: 0.95;\n        }\n        .delete {\n            left: 5px;\n            color: rgb(128, 31, 31);\n        }\n    }\n}\n\nmain {\n    grid-column: 3 / -1;\n    grid-row: 2/10;\n    background-color: $main;\n    position: relative;\n    @include flex-v;\n    .toDoListTitle {\n        width: 100%;\n        height: fit-content;\n        text-align: center;\n        font-size: 3rem;\n        margin: 20px;\n    }\n    .addToDoBtn {\n      display: flex;  \n      align-items: center;\n      gap: 5px;\n      color: black;\n      padding: 0px 10px;\n    }\n    .toDoList {\n        width: 100%;\n        height: 100%;\n        display: grid;\n        grid-auto-flow: row;\n        grid-auto-rows: min-content;\n        gap: 5px;\n        justify-items: center;\n        \n        .addToDo {\n            height: 1.7rem;\n            width: 60%;\n            display: flex;\n            background-color: $todo;\n            border-radius: $toDoBR;\n            align-items: center;\n            .addToDoBtn {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                width: 1.7rem;\n                height: 1.7rem;\n                margin-left: 5px;\n                position: relative;\n            }\n            .addToDoBtn:before, .addToDoBtn:after {\n                content: '';\n                height: 60%;\n                width: 8%;\n                background-color: black;\n                position: absolute;\n            }\n            .addToDoBtn:before {\n                transform: rotate(90deg);\n            }\n            .addToDoBtnTitle {\n                color: black;\n                display: flex;\n                align-items: center;\n            }\n        }\n        .addToDo:hover {\n            background-color: rgb(167, 163, 143);\n            cursor: pointer;\n        }\n        .toDoInputField {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            height: 1.7rem;\n            gap: 15px;\n            background-color: $todo;\n            border-radius: $toDoBR;\n            width: 60%;\n            padding: 0px 10px;\n            display: none;\n            #toDoInput {\n                border: 1px solid black;\n                background-color: $todo;\n                border-radius: $toDoBR;\n                height: 90%;\n                color: black;\n                padding: 0px 20px;\n            }\n            .toDoInputFieldRight {\n                display: flex;\n                gap: 5px;\n                align-items: center;\n                #toDoInputDate{\n                    color: black;\n                    border: none;\n                    padding: 0px 15px;\n                    background-color: $date-bc;\n                    border-radius: 5px;\n                }\n               \n                .toDoInputBtns {\n                    height: 1.5rem;\n                    width: 1.5rem;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    border-radius: 15px;\n                    transition: 0.1s;\n                    border: none;\n                }\n                .toDoInputBtns:hover {\n                    scale: 1.1\n                }\n                .toDoInputBtns:active {\n                    scale: 0.95\n                }\n                #cancelToDoInput {\n                    position: relative;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    background-color: rgb(178, 86, 86);\n                }\n                #cancelToDoInput:before, #cancelToDoInput:after {\n                    content: '';\n                    height: 70%;\n                    width: 8%;\n                    background-color: white;\n                    position: absolute;\n                }\n                #cancelToDoInput:before {\n                    transform: rotate(45deg);\n                }\n                #cancelToDoInput:after {\n                    transform: rotate(-45deg);\n                }\n                #submitToDoInput {\n                    background-color: rgb(56, 137, 56);\n                }\n            }\n            \n        }\n        .toDo {\n            background-color: rgb(255, 169, 169);\n            border: none;\n            border-radius: $toDoBR;\n            height: 1.7rem;\n            width: 60%;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 0px 15px;\n            .toDoTitle {\n                color: black;\n                font-size: 1.5rem;\n\n            }\n            .markDone {\n                color: black;\n                padding: 0px 5px;\n            }\n            .markDone:hover {\n                cursor: pointer;\n                background-color: rgb(174, 110, 110)\n            }\n            \n            .toDoRightSide {\n                display: flex;\n                align-items: center;\n                gap: 25px\n                ;\n                #deleteToDoBtn {\n                    height: 1.3rem;\n                    width: 1.3rem;\n                    position: relative;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                }\n                #deleteToDoBtn:before, #deleteToDoBtn:after {\n                    content: '';\n                    height: 90%;\n                    width: 10%;\n                    background-color: black;\n                    position: absolute;\n                }\n                #deleteToDoBtn:before {\n                    transform: rotate(45deg);\n                }\n                #deleteToDoBtn:after {\n                    transform: rotate(-45deg);\n                }\n                #deleteToDoBtn:hover {\n                    background-color: rgb(174, 110, 110);\n                }\n                #date {\n                    color: black;\n                    border: none;\n                    padding: 0px 15px;\n                    background-color: $date-bc;\n                    border-radius: 5px;\n                }\n                #date:focus {\n                    outline: none\n                }\n            }\n            \n        }\n    }\n\n    .titleBtns {\n        position: absolute;\n        bottom: 10px;\n        left: 10px;\n        height: 2rem;\n        margin-left: 20px;\n        display: none;\n        justify-content: center;\n        align-items: center;\n        gap: 5px;\n        .titleInputBtns{\n            height: 2rem;\n            width: 2rem;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            border-radius: 15px;\n            transition: 0.1s;\n            border: none;\n        }\n        .titleInputBtns:hover {\n            scale: 1.1\n        }\n        .titleInputBtns:active {\n            scale: 0.9\n        }\n        #cancelTitleInput {\n            position: relative;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            background-color: rgb(178, 86, 86);\n        }\n        #cancelTitleInput:before, #cancelTitleInput:after {\n            content: '';\n            height: 70%;\n            width: 8%;\n            background-color: white;\n            position: absolute;\n        }\n        #cancelTitleInput:before {\n            transform: rotate(45deg);\n        }\n        #cancelTitleInput:after {\n            transform: rotate(-45deg);\n        }\n        #submitTitleInput {\n            background-color: rgb(56, 137, 56);\n        }\n        #projectTitle {\n            height: 2rem;\n            border: none;\n            border-radius: 15px;\n            padding: 0px 20px;\n            color: black;\n            width: fit-content;\n        }\n    }\n    #projectTitle:focus {\n        outline: none;\n    }\n    \n    \n}\n\n"],"sourceRoot":""}]);
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
        this.toDoDOM = document.querySelector('.toDo')
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
            // this.renderToDo();
        }),
        this.projectTitleInputCancel.addEventListener('click', (e) => {
            e.preventDefault();
            this.projectTitleInput.value = ''
            this.projectTitleInputDiv.style.display = 'none'
        })
        
        this.toDoInputFieldForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createToDo();
          
        }) 

        this.toDoInputDate.addEventListener('change', () => {
            console.log(this.toDoInputDate.value)
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

        // while (this.toDoDOM) {
        //    this.toDoDOM.remove()
        //     console.log('removed')
        // };
        
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
                    addToDo.setAttribute('id', `addToDo${i}`);
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
                    })
                }
            }
        }
    },
    createToDo: function () {
        class Task {
            constructor (title, date) {
                this.title = title;
                this.date = date;
            }
        }
        this.toDo = new Task(this.toDoInputField.value, this.toDoInputDate.value)
    },

    addToDo: function (n) {
        this.projectListArr[n].toDos.push(this.toDo)
    },

    renderToDo: function () {
        // while (this.toDoListDOM.firstChild) {
        //     this.toDoListDOM.removeChild(this.toDoListDOM.firstChild);
        // }

        // for(let i = 0; i < this.projectListArr.toDos.length; i++) {
        //     if(this.projectListArr[i].toDos === "add ToDo") {
        //         const addToDo = document.createElement('div')
        //         addToDo.classList.add('addToDo')
        //         addToDo.setAttribute('id', `addToDo${i}`);
        //         const addToDoBtn = createElement('div')
        //         addToDoBtn.classList.add('addToDoBtn')
        //         const addToDoBtnTitle = document.createElement('div')
        //         addToDoBtnTitle.classList.add('addToDoBtnTitle')
        //         addToDoBtnTitle.textContent = 'Add a Task';

        //         addToDo.appendChild(addToDoBtn)
        //         addToDo.appendChild(addToDoBtnTitle)
        //         this.toDoListDOM.appendChild(addToDo)

        //     }
        // }
    }
    
   
    
}
todoApp.init();
})()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxN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QUM3QztBQUNBO0FBQ0Esb0RBQW9ELG1CQUFtQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Qsc0JBQXNCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwyQkFBMkIseUNBQXlDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixzQ0FBc0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLS0tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLS0tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tLS1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by0tLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLyogVHJhY2sgKi9cXG4gIC8qIEhhbmRsZSAqL1xcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXFxufVxcbiogOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuKiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcbiogOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDYwLCAzNyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4qIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzU1NTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDEzOSwgODYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtcm93OiAxMC8xMTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMTM5LCA4Nik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYge1xcbiAgZ3JpZC1yb3c6IDIvMTA7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCA4MSwgNjgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5uYXYgLnByb2plY3RUaXRsZSB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxubmF2IC5wcm9qZWN0TGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gIGdhcDogNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAganVzdGlmeS1pdGVtczogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiB0b3A7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5uYXYgLnByb2plY3RMaXN0IC5wcm9qZWN0IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGdyZXk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzUsIDIwNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5uYXYgLnByb2plY3RMaXN0IC5wcm9qZWN0IC50aXRsZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxubmF2IC5wcm9qZWN0TGlzdCAucHJvamVjdCAudGl0bGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5uYXYgLnByb2plY3RMaXN0IC5wcm9qZWN0IC5kZWxldGUge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm5hdiAucHJvamVjdExpc3QgLnByb2plY3QgLmRlbGV0ZTpiZWZvcmUsIG5hdiAucHJvamVjdExpc3QgLnByb2plY3QgLmRlbGV0ZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5uYXYgLnByb2plY3RMaXN0IC5wcm9qZWN0IC5kZWxldGU6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxubmF2IC5wcm9qZWN0TGlzdCAucHJvamVjdCAuZGVsZXRlOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcbm5hdiAucHJvamVjdExpc3QgLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxubmF2IC5idG5zIHtcXG4gIGhlaWdodDogNyU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5uYXYgLmJ0bnMgLmJ0biB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA0NSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAxMzksIDg2KTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5uYXYgLmJ0bnMgLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCA5MCwgMjEpO1xcbn1cXG5uYXYgLmJ0bnMgLmJ0bjphY3RpdmUge1xcbiAgc2NhbGU6IDAuOTU7XFxufVxcbm5hdiAuYnRucyAuZGVsZXRlIHtcXG4gIGxlZnQ6IDVweDtcXG4gIGNvbG9yOiByZ2IoMTI4LCAzMSwgMzEpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAzLy0xO1xcbiAgZ3JpZC1yb3c6IDIvMTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDEwOCwgODApO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC50b0RvTGlzdFRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxubWFpbiAuYWRkVG9Eb0J0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcbm1haW4gLnRvRG9MaXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICBnYXA6IDVweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAudG9Eb0xpc3QgLmFkZFRvRG8ge1xcbiAgaGVpZ2h0OiAxLjdyZW07XFxuICB3aWR0aDogNjAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzNSwgMjA2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnRvRG9MaXN0IC5hZGRUb0RvIC5hZGRUb0RvQnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMS43cmVtO1xcbiAgaGVpZ2h0OiAxLjdyZW07XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5tYWluIC50b0RvTGlzdCAuYWRkVG9EbyAuYWRkVG9Eb0J0bjpiZWZvcmUsIG1haW4gLnRvRG9MaXN0IC5hZGRUb0RvIC5hZGRUb0RvQnRuOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogOCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLmFkZFRvRG8gLmFkZFRvRG9CdG46YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLmFkZFRvRG8gLmFkZFRvRG9CdG5UaXRsZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiAudG9Eb0xpc3QgLmFkZFRvRG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMTYzLCAxNDMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEuN3JlbTtcXG4gIGdhcDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIzNSwgMjA2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvSW5wdXRGaWVsZCAjdG9Eb0lucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjM1LCAyMDYpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvSW5wdXRGaWVsZCAudG9Eb0lucHV0RmllbGRSaWdodCAjdG9Eb0lucHV0RGF0ZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwcHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE5MSwgMTY2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0IC50b0RvSW5wdXRCdG5zIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0IC50b0RvSW5wdXRCdG5zOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvSW5wdXRGaWVsZCAudG9Eb0lucHV0RmllbGRSaWdodCAudG9Eb0lucHV0QnRuczphY3RpdmUge1xcbiAgc2NhbGU6IDAuOTU7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvSW5wdXRGaWVsZCAudG9Eb0lucHV0RmllbGRSaWdodCAjY2FuY2VsVG9Eb0lucHV0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc4LCA4NiwgODYpO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9Eb0lucHV0RmllbGQgLnRvRG9JbnB1dEZpZWxkUmlnaHQgI2NhbmNlbFRvRG9JbnB1dDpiZWZvcmUsIG1haW4gLnRvRG9MaXN0IC50b0RvSW5wdXRGaWVsZCAudG9Eb0lucHV0RmllbGRSaWdodCAjY2FuY2VsVG9Eb0lucHV0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICB3aWR0aDogOCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0ICNjYW5jZWxUb0RvSW5wdXQ6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0ICNjYW5jZWxUb0RvSW5wdXQ6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG9JbnB1dEZpZWxkIC50b0RvSW5wdXRGaWVsZFJpZ2h0ICNzdWJtaXRUb0RvSW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCAxMzcsIDU2KTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY5LCAxNjkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAxLjdyZW07XFxuICB3aWR0aDogNjAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTVweDtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9UaXRsZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLm1hcmtEb25lIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC5tYXJrRG9uZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAxMTAsIDExMCk7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvUmlnaHRTaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyAudG9Eb1JpZ2h0U2lkZSAjZGVsZXRlVG9Eb0J0biB7XFxuICBoZWlnaHQ6IDEuM3JlbTtcXG4gIHdpZHRoOiAxLjNyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5tYWluIC50b0RvTGlzdCAudG9EbyAudG9Eb1JpZ2h0U2lkZSAjZGVsZXRlVG9Eb0J0bjpiZWZvcmUsIG1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvUmlnaHRTaWRlICNkZWxldGVUb0RvQnRuOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvUmlnaHRTaWRlICNkZWxldGVUb0RvQnRuOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvUmlnaHRTaWRlICNkZWxldGVUb0RvQnRuOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvUmlnaHRTaWRlICNkZWxldGVUb0RvQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzQsIDExMCwgMTEwKTtcXG59XFxubWFpbiAudG9Eb0xpc3QgLnRvRG8gLnRvRG9SaWdodFNpZGUgI2RhdGUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMHB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAxOTEsIDE2Nik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbm1haW4gLnRvRG9MaXN0IC50b0RvIC50b0RvUmlnaHRTaWRlICNkYXRlOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbm1haW4gLnRpdGxlQnRucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwcHg7XFxuICBsZWZ0OiAxMHB4O1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcbm1haW4gLnRpdGxlQnRucyAudGl0bGVJbnB1dEJ0bnMge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbm1haW4gLnRpdGxlQnRucyAudGl0bGVJbnB1dEJ0bnM6aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxubWFpbiAudGl0bGVCdG5zIC50aXRsZUlucHV0QnRuczphY3RpdmUge1xcbiAgc2NhbGU6IDAuOTtcXG59XFxubWFpbiAudGl0bGVCdG5zICNjYW5jZWxUaXRsZUlucHV0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc4LCA4NiwgODYpO1xcbn1cXG5tYWluIC50aXRsZUJ0bnMgI2NhbmNlbFRpdGxlSW5wdXQ6YmVmb3JlLCBtYWluIC50aXRsZUJ0bnMgI2NhbmNlbFRpdGxlSW5wdXQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiA4JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5tYWluIC50aXRsZUJ0bnMgI2NhbmNlbFRpdGxlSW5wdXQ6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxubWFpbiAudGl0bGVCdG5zICNjYW5jZWxUaXRsZUlucHV0OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcbm1haW4gLnRpdGxlQnRucyAjc3VibWl0VGl0bGVJbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDEzNywgNTYpO1xcbn1cXG5tYWluIC50aXRsZUJ0bnMgI3Byb2plY3RUaXRsZSB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMHB4IDIwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbm1haW4gI3Byb2plY3RUaXRsZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUtFLFVBQUE7RUFLQSxXQUFBO0VBTUEsb0JBQUE7QUFiTjtBQUZJO0VBQ0ksV0FBQTtBQUlSO0FBQU07RUFDRSxtQkFBQTtBQUVSO0FBRU07RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFJTTtFQUNFLGdCQUFBO0FBRlI7O0FBMkJBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBeEJKOztBQTBCQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQWZBLG1DQWpCWTtFQWtCWixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVBKOztBQXNCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQXBCQSxtQ0FqQlk7RUFrQlosYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFtQkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0EzQ0U7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cEI7QUFtQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBakJSO0FBa0JRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBaEJaO0FBa0JRO0VBQ0ksVUFBQTtBQWhCWjtBQWtCUTtFQUNJLFVBQUE7QUFoQlo7QUFrQlE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUFoQlo7QUFrQlE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBaEJaO0FBa0JRO0VBQ0ksd0JBQUE7QUFoQlo7QUFrQlE7RUFDSSx5QkFBQTtBQWhCWjtBQWtCUTtFQUNJLGtDQUFBO0FBaEJaO0FBa0JRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBaEJaO0FBbUJJO0VBQ0ksYUFBQTtBQWpCUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAvKiBUcmFjayAqL1xcbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDsgXFxuICAgICAgfVxcbiAgICAgICBcXG4gICAgICAvKiBIYW5kbGUgKi9cXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigzNiwgNjAsIDM3KTsgXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIH1cXG4gICAgICBcXG4gICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICM1NTU7IFxcbiAgICAgIH1cXG59XFxuJGhlYWRlci1mb290ZXI6IHJnYigxNzAsIDEzOSwgODYpO1xcbiRuYXY6IHJnYig1NywgODEsIDY4KTtcXG4kbWFpbjpyZ2IoNzgsIDEwOCwgODApO1xcbiR0b2RvOnJnYigyNDAsIDIzNSwgMjA2KTtcXG4kYnV0dG9uczogcmdiKDE3MCwgMTM5LCA4Nik7XFxuJGRhdGUtYmM6IHJnYigxOTUsIDE5MSwgMTY2KTtcXG4kdG9Eb0JSOiA1cHg7XFxuJHRvZG9JbnB1dDogcmdiKDI1NSwgMjUwLCAyMjApO1xcblxcbkBtaXhpbiBmbGV4LXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBoZiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMS8gLTE7XFxuICAgIEBpbmNsdWRlIGhmXFxufVxcbmZvb3RlciB7XFxuICAgIGdyaWQtcm93OiAxMC8xMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvIC0xO1xcbiAgICBAaW5jbHVkZSBoZlxcbn1cXG5cXG5uYXYge1xcbiAgICBncmlkLXJvdzogMiAvIDEwO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIEBpbmNsdWRlIGZsZXgtdjtcXG4gICAgLnByb2plY3RUaXRsZSB7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAucHJvamVjdExpc3Qge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgICAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGxlZnQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogdG9wO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC5wcm9qZWN0IHtcXG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9kbztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICAgICAgICAgIC50aXRsZXtcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnRpdGxlOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuZGVsZXRlIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5kZWxldGU6YmVmb3JlLCAuZGVsZXRlOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuZGVsZXRlOmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmRlbGV0ZTphZnRlciB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLnByb2plY3Q6aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAuYnRucyB7XFxuICAgICAgICBoZWlnaHQ6IDclO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgICAgIC5idG4ge1xcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9ucztcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICB9XFxuICAgICAgICAuYnRuOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCA5MCwgMjEpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJ0bjphY3RpdmUge1xcbiAgICAgICAgICAgIHNjYWxlOiAwLjk1O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmRlbGV0ZSB7XFxuICAgICAgICAgICAgbGVmdDogNXB4O1xcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTI4LCAzMSwgMzEpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbm1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIC0xO1xcbiAgICBncmlkLXJvdzogMi8xMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgQGluY2x1ZGUgZmxleC12O1xcbiAgICAudG9Eb0xpc3RUaXRsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBtYXJnaW46IDIwcHg7XFxuICAgIH1cXG4gICAgLmFkZFRvRG9CdG4ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7ICBcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogNXB4O1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgfVxcbiAgICAudG9Eb0xpc3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgXFxuICAgICAgICAuYWRkVG9EbyB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxLjdyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b2RvO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICR0b0RvQlI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAuYWRkVG9Eb0J0biB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMS43cmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuYWRkVG9Eb0J0bjpiZWZvcmUsIC5hZGRUb0RvQnRuOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogOCU7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5hZGRUb0RvQnRuOmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmFkZFRvRG9CdG5UaXRsZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYWRkVG9Ebzpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMTYzLCAxNDMpO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgIC50b0RvSW5wdXRGaWVsZCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcXG4gICAgICAgICAgICBnYXA6IDE1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvZG87XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvRG9CUjtcXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgI3RvRG9JbnB1dCB7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9kbztcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvRG9CUjtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC50b0RvSW5wdXRGaWVsZFJpZ2h0IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgZ2FwOiA1cHg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICN0b0RvSW5wdXREYXRle1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0ZS1iYztcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAudG9Eb0lucHV0QnRucyB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLnRvRG9JbnB1dEJ0bnM6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEuMVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC50b0RvSW5wdXRCdG5zOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogMC45NVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNjYW5jZWxUb0RvSW5wdXQge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzgsIDg2LCA4Nik7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2NhbmNlbFRvRG9JbnB1dDpiZWZvcmUsICNjYW5jZWxUb0RvSW5wdXQ6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4JTtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNjYW5jZWxUb0RvSW5wdXQ6YmVmb3JlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjY2FuY2VsVG9Eb0lucHV0OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI3N1Ym1pdFRvRG9JbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDEzNywgNTYpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgLnRvRG8ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE2OSwgMTY5KTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvRG9CUjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XFxuICAgICAgICAgICAgLnRvRG9UaXRsZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5tYXJrRG9uZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLm1hcmtEb25lOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAxMTAsIDExMClcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgLnRvRG9SaWdodFNpZGUge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDI1cHhcXG4gICAgICAgICAgICAgICAgO1xcbiAgICAgICAgICAgICAgICAjZGVsZXRlVG9Eb0J0biB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuM3JlbTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjNyZW07XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNkZWxldGVUb0RvQnRuOmJlZm9yZSwgI2RlbGV0ZVRvRG9CdG46YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAjZGVsZXRlVG9Eb0J0bjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNkZWxldGVUb0RvQnRuOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2RlbGV0ZVRvRG9CdG46aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMTEwLCAxMTApO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICNkYXRlIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGUtYmM7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgI2RhdGU6Zm9jdXMge1xcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC50aXRsZUJ0bnMge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAxMHB4O1xcbiAgICAgICAgbGVmdDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgLnRpdGxlSW5wdXRCdG5ze1xcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgICAgIC50aXRsZUlucHV0QnRuczpob3ZlciB7XFxuICAgICAgICAgICAgc2NhbGU6IDEuMVxcbiAgICAgICAgfVxcbiAgICAgICAgLnRpdGxlSW5wdXRCdG5zOmFjdGl2ZSB7XFxuICAgICAgICAgICAgc2NhbGU6IDAuOVxcbiAgICAgICAgfVxcbiAgICAgICAgI2NhbmNlbFRpdGxlSW5wdXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OCwgODYsIDg2KTtcXG4gICAgICAgIH1cXG4gICAgICAgICNjYW5jZWxUaXRsZUlucHV0OmJlZm9yZSwgI2NhbmNlbFRpdGxlSW5wdXQ6YWZ0ZXIge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA4JTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB9XFxuICAgICAgICAjY2FuY2VsVGl0bGVJbnB1dDpiZWZvcmUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIH1cXG4gICAgICAgICNjYW5jZWxUaXRsZUlucHV0OmFmdGVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgI3N1Ym1pdFRpdGxlSW5wdXQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgMTM3LCA1Nik7XFxuICAgICAgICB9XFxuICAgICAgICAjcHJvamVjdFRpdGxlIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAjcHJvamVjdFRpdGxlOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgIFxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgYWRkIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgdGggfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgbGV0IHRvZG9BcHAgPSB7XG4gICAgICAgIHByb2plY3RMaXN0QXJyIDogW10sXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2FjaGVEb20oKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICB9LFxuICAgIGNhY2hlRG9tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5hZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpXG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKVxuICAgICAgICB0aGlzLmRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJylcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKVxuICAgICAgICB0aGlzLnByb2plY3RUaXRsZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlRm9ybScpXG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVCdG5zJylcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dENvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0VGl0bGVJbnB1dCcpXG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXRDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsVGl0bGVJbnB1dCcpXG4gICAgICAgIHRoaXMuYWRkVG9Eb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUb0RvJylcbiAgICAgICAgdGhpcy50b0RvSW5wdXRGaWVsZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb0lucHV0RmllbGQnKVxuICAgICAgICB0aGlzLnRvRG9JbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRG9JbnB1dCcpXG4gICAgICAgIHRoaXMuY2FuY2VsVG9Eb0lucHV0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFRvRG9JbnB1dCcpXG4gICAgICAgIHRoaXMudG9Eb0lucHV0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvSW5wdXREYXRlJylcbiAgICAgICAgdGhpcy50b0RvTGlzdERPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvTGlzdCcpXG4gICAgICAgIHRoaXMudG9Eb0RPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvJylcbiAgICB9LFxuICAgIGJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICB0aGlzLmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXREaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAgICB0aGlzLnByb2plY3RUaXRsZUlucHV0LmZvY3VzKClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmFkZFByb2plY3QoKTtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICAvLyB0aGlzLnJlbmRlclRvRG8oKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlSW5wdXRDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgICAgICB0aGlzLnByb2plY3RUaXRsZUlucHV0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHRoaXMudG9Eb0lucHV0RmllbGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRvRG8oKTtcbiAgICAgICAgICBcbiAgICAgICAgfSkgXG5cbiAgICAgICAgdGhpcy50b0RvSW5wdXREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9Eb0lucHV0RGF0ZS52YWx1ZSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGNyZWF0ZVByb2plY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yICAocHJvamVjdFRpdGxlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gcHJvamVjdFRpdGxlSW5wdXRcbiAgICAgICAgICAgICAgICB0aGlzLnRvRG9zID0gWydhZGQgVG9EbyddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvamVjdCA9IG5ldyBQcm9qZWN0KHRoaXMucHJvamVjdFRpdGxlSW5wdXQudmFsdWUpXG4gICAgfSxcbiAgICBhZGRQcm9qZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdEFyci5wdXNoKHRoaXMucHJvamVjdClcbiAgICB9LFxuICAgIGRlbGV0ZVByb2plY3Q6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZVxuICAgICAgICB0YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3RBcnIuc3BsaWNlKHRhcmdldC5kYXRhc2V0LmlkLCAxKVxuXG4gICAgfSxcbiAgICByZW5kZXJQcm9qZWN0TGlzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5wcm9qZWN0TGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHRoaXMucHJvamVjdExpc3QuZmlyc3RDaGlsZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gd2hpbGUgKHRoaXMudG9Eb0RPTSkge1xuICAgICAgICAvLyAgICB0aGlzLnRvRG9ET00ucmVtb3ZlKClcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkJylcbiAgICAgICAgLy8gfTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RMaXN0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGAke2l9YClcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICAgICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHt0aGlzLnJlbmRlclRvRG8oZSl9KVxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKVxuICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHt0aGlzLmRlbGV0ZVByb2plY3QoZSl9KVxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0TGlzdEFycltpXS50aXRsZVxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChkaXYpXG5cblxuICAgICAgICAgICAgZm9yKGxldCB1ID0gMDsgdSA8IHRoaXMucHJvamVjdExpc3RBcnJbaV0udG9Eb3MubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb2plY3RMaXN0QXJyW2ldLnRvRG9zW3VdID09PSBcImFkZCBUb0RvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvRG8uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAgICAgICAgICAgICBhZGRUb0RvLmNsYXNzTGlzdC5hZGQoJ2FkZFRvRG8nKVxuICAgICAgICAgICAgICAgICAgICBhZGRUb0RvLnNldEF0dHJpYnV0ZSgnaWQnLCBgYWRkVG9EbyR7aX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvRG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkVG9Eb0J0bicpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZFRvRG9CdG5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvRG9CdG5UaXRsZS5jbGFzc0xpc3QuYWRkKCdhZGRUb0RvQnRuVGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICBhZGRUb0RvQnRuVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIGEgVGFzayc7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvRG8uYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bilcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9Eby5hcHBlbmRDaGlsZChhZGRUb0RvQnRuVGl0bGUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9Eb0xpc3RET00uYXBwZW5kQ2hpbGQoYWRkVG9EbylcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvRG9JbnB1dEZpZWxkRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZVRvRG86IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xhc3MgVGFzayB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvRG8gPSBuZXcgVGFzayh0aGlzLnRvRG9JbnB1dEZpZWxkLnZhbHVlLCB0aGlzLnRvRG9JbnB1dERhdGUudmFsdWUpXG4gICAgfSxcblxuICAgIGFkZFRvRG86IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3RBcnJbbl0udG9Eb3MucHVzaCh0aGlzLnRvRG8pXG4gICAgfSxcblxuICAgIHJlbmRlclRvRG86IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gd2hpbGUgKHRoaXMudG9Eb0xpc3RET00uZmlyc3RDaGlsZCkge1xuICAgICAgICAvLyAgICAgdGhpcy50b0RvTGlzdERPTS5yZW1vdmVDaGlsZCh0aGlzLnRvRG9MaXN0RE9NLmZpcnN0Q2hpbGQpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucHJvamVjdExpc3RBcnIudG9Eb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGlmKHRoaXMucHJvamVjdExpc3RBcnJbaV0udG9Eb3MgPT09IFwiYWRkIFRvRG9cIikge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGFkZFRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyAgICAgICAgIGFkZFRvRG8uY2xhc3NMaXN0LmFkZCgnYWRkVG9EbycpXG4gICAgICAgIC8vICAgICAgICAgYWRkVG9Eby5zZXRBdHRyaWJ1dGUoJ2lkJywgYGFkZFRvRG8ke2l9YCk7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYWRkVG9Eb0J0biA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vICAgICAgICAgYWRkVG9Eb0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRUb0RvQnRuJylcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBhZGRUb0RvQnRuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyAgICAgICAgIGFkZFRvRG9CdG5UaXRsZS5jbGFzc0xpc3QuYWRkKCdhZGRUb0RvQnRuVGl0bGUnKVxuICAgICAgICAvLyAgICAgICAgIGFkZFRvRG9CdG5UaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgYSBUYXNrJztcblxuICAgICAgICAvLyAgICAgICAgIGFkZFRvRG8uYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bilcbiAgICAgICAgLy8gICAgICAgICBhZGRUb0RvLmFwcGVuZENoaWxkKGFkZFRvRG9CdG5UaXRsZSlcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnRvRG9MaXN0RE9NLmFwcGVuZENoaWxkKGFkZFRvRG8pXG5cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBcbiAgIFxuICAgIFxufVxudG9kb0FwcC5pbml0KCk7XG59KSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=