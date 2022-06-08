"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/playGameOffline",{

/***/ "./components/OfflineGame.js":
/*!***********************************!*\
  !*** ./components/OfflineGame.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameBoard */ \"./components/GameBoard.js\");\n/* harmony import */ var _PlayerControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerControls */ \"./components/PlayerControls.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_playerSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/playerSlice */ \"./slices/playerSlice.js\");\n/* harmony import */ var _slices_enemyBoardSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slices/enemyBoardSlice */ \"./slices/enemyBoardSlice.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar OfflineGame = function(props) {\n    _s();\n    var playerHealth = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.player.playerHealth;\n    });\n    var playerLevel = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.player.playerLevel;\n    });\n    var maxPlayerHealth = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.player.maxPlayerHealth;\n    });\n    var enemyList = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.enemyBoard.enemyDeck;\n    });\n    var currentEnemy = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.enemyBoard.currentEnemy;\n    });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(enemyList);\n        console.log(currentEnemy);\n        if (currentEnemy === null || currentEnemy.health <= 0) {\n            if (enemyList.length > 0) {\n                console.log(\"setting next enemy\");\n                dispatch((0,_slices_enemyBoardSlice__WEBPACK_IMPORTED_MODULE_6__.setCurrentEnemy)(enemyList[0]));\n                dispatch((0,_slices_enemyBoardSlice__WEBPACK_IMPORTED_MODULE_6__.scaleCurrentEnemy)(playerLevel));\n                dispatch((0,_slices_enemyBoardSlice__WEBPACK_IMPORTED_MODULE_6__.shiftEnemyDeck)());\n            } else {\n                console.log(\"setting empty enemy\");\n                dispatch((0,_slices_enemyBoardSlice__WEBPACK_IMPORTED_MODULE_6__.setCurrentEnemy)({}));\n            }\n        }\n    }, [\n        currentEnemy,\n        enemyList,\n        playerLevel,\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"new maxPlayerHealth: \" + maxPlayerHealth);\n        dispatch((0,_slices_playerSlice__WEBPACK_IMPORTED_MODULE_5__.setPlayerHealth)(maxPlayerHealth));\n    }, [\n        maxPlayerHealth,\n        dispatch\n    ]);\n    // Watch for lose condition here:\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Current player health: \" + playerHealth);\n        if (playerHealth <= 0) {\n            console.log(\"Loser!\");\n        }\n    }, [\n        playerHealth\n    ]);\n    var attackHandler = function() {\n        var damage = Math.round(Math.random() * 3);\n        dispatch((0,_slices_enemyBoardSlice__WEBPACK_IMPORTED_MODULE_6__.decreaseEnemyHealthBy)(damage));\n        attackPlayer();\n    };\n    var healHandler = function() {\n        var heal = 10 //Math.round(Math.random() * (3 + playerLevel));\n        ;\n        console.log(\"Player heals for \" + heal + \" hp\");\n        dispatch((0,_slices_playerSlice__WEBPACK_IMPORTED_MODULE_5__.increaseHealthBy)(heal));\n        attackPlayer();\n    };\n    var attackPlayer = function() {\n        var damage = Math.round(Math.random() * 2);\n        console.log(currentEnemy.name + \" attacks player for \" + damage + \" hp\");\n        dispatch((0,_slices_playerSlice__WEBPACK_IMPORTED_MODULE_5__.decreaseHealthBy)(damage));\n    };\n    var resetHandler = function(status) {\n        dispatch((0,_slices_enemyBoardSlice__WEBPACK_IMPORTED_MODULE_6__.setEnemyDeck)());\n        dispatch((0,_slices_enemyBoardSlice__WEBPACK_IMPORTED_MODULE_6__.setFirstEnemy)());\n        if (status === \"continue\") {\n            console.log(\"new game +\");\n            var newPlayerLevel = playerLevel + 1;\n            dispatch((0,_slices_playerSlice__WEBPACK_IMPORTED_MODULE_5__.incrementPlayerLevel)());\n            dispatch((0,_slices_enemyBoardSlice__WEBPACK_IMPORTED_MODULE_6__.scaleCurrentEnemy)(newPlayerLevel));\n            dispatch((0,_slices_playerSlice__WEBPACK_IMPORTED_MODULE_5__.increaseMaxHealthBy)(newPlayerLevel * 2));\n        } else if (status === \"reset\") {\n            console.log(\"resetting game\");\n            dispatch((0,_slices_playerSlice__WEBPACK_IMPORTED_MODULE_5__.setPlayerHealth)(10));\n            dispatch((0,_slices_playerSlice__WEBPACK_IMPORTED_MODULE_5__.setMaxPlayerHealth)(10));\n            dispatch((0,_slices_playerSlice__WEBPACK_IMPORTED_MODULE_5__.resetPlayerLevel)());\n        } else {\n            console.log(\"Error: resetHandler status not handled\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GameBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                currentEnemy: currentEnemy,\n                resetHandler: resetHandler,\n                playerHealth: playerHealth,\n                playerLevel: playerLevel\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jeff\\\\Desktop\\\\Projects\\\\react-monster-cards\\\\components\\\\OfflineGame.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerControls__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                attackHandler: attackHandler,\n                healHandler: healHandler,\n                playerHealth: playerHealth,\n                maxPlayerHealth: maxPlayerHealth\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jeff\\\\Desktop\\\\Projects\\\\react-monster-cards\\\\components\\\\OfflineGame.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(OfflineGame, \"bH6EQrzvOVCW+RZLalMVJ1Ao7lc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = OfflineGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OfflineGame);\nvar _c;\n$RefreshReg$(_c, \"OfflineGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09mZmxpbmVHYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBa0M7QUFDRTtBQUNVO0FBQ1M7QUFDc0g7QUFDMUI7O0FBRW5KLElBQU1rQixXQUFXLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUM3QixJQUFNQyxZQUFZLEdBQUdoQix3REFBVyxDQUFDLFNBQUNpQixLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRixZQUFZO0tBQUEsQ0FBQztJQUN0RSxJQUFNRyxXQUFXLEdBQUduQix3REFBVyxDQUFDLFNBQUNpQixLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxXQUFXO0tBQUEsQ0FBQztJQUNwRSxJQUFNQyxlQUFlLEdBQUdwQix3REFBVyxDQUFDLFNBQUNpQixLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRSxlQUFlO0tBQUEsQ0FBQztJQUM1RSxJQUFNQyxTQUFTLEdBQUdyQix3REFBVyxDQUFDLFNBQUNpQixLQUFLO2VBQUtBLEtBQUssQ0FBQ0ssVUFBVSxDQUFDQyxTQUFTO0tBQUEsQ0FBQztJQUNwRSxJQUFNQyxZQUFZLEdBQUd4Qix3REFBVyxDQUFDLFNBQUNpQixLQUFLO2VBQUtBLEtBQUssQ0FBQ0ssVUFBVSxDQUFDRSxZQUFZO0tBQUEsQ0FBQztJQUMxRSxJQUFNQyxRQUFRLEdBQUcxQix3REFBVyxFQUFFO0lBRTlCSCxnREFBUyxDQUFDLFdBQU07UUFDZDhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixTQUFTLENBQUMsQ0FBQztRQUN2QkssT0FBTyxDQUFDQyxHQUFHLENBQUNILFlBQVksQ0FBQztRQUN6QixJQUFLQSxZQUFZLEtBQUssSUFBSSxJQUFJQSxZQUFZLENBQUNJLE1BQU0sSUFBSSxDQUFDLEVBQUc7WUFDdkQsSUFBS1AsU0FBUyxDQUFDUSxNQUFNLEdBQUcsQ0FBQyxFQUFHO2dCQUMxQkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDbENGLFFBQVEsQ0FBQ2hCLHdFQUFlLENBQUNZLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDSSxRQUFRLENBQUNiLDBFQUFpQixDQUFDTyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN6Q00sUUFBUSxDQUFDZCx1RUFBYyxFQUFFLENBQUMsQ0FBQzthQUM1QixNQUFNO2dCQUNMZSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNuQ0YsUUFBUSxDQUFDaEIsd0VBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7S0FFRixFQUFFO1FBQUNlLFlBQVk7UUFBRUgsU0FBUztRQUFFRixXQUFXO1FBQUVNLFFBQVE7S0FBQyxDQUFDLENBQUM7SUFFckQ3QixnREFBUyxDQUFDLFdBQU07UUFDZDhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixHQUFHUCxlQUFlLENBQUMsQ0FBQztRQUN2REssUUFBUSxDQUFDbEIsb0VBQWUsQ0FBQ2EsZUFBZSxDQUFDLENBQUMsQ0FBQztLQUM1QyxFQUFFO1FBQUNBLGVBQWU7UUFBRUssUUFBUTtLQUFDLENBQUMsQ0FBQztJQUVoQyxpQ0FBaUM7SUFDakM3QixnREFBUyxDQUFDLFdBQU07UUFDZDhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixHQUFHWCxZQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFJQSxZQUFZLElBQUksQ0FBQyxFQUFFO1lBQ3JCVSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QjtLQUNGLEVBQUU7UUFBQ1gsWUFBWTtLQUFDLENBQUMsQ0FBQztJQUVuQixJQUFNYyxhQUFhLEdBQUcsV0FBTTtRQUMxQixJQUFJQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQ1QsUUFBUSxDQUFDWiw4RUFBcUIsQ0FBQ2tCLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeENJLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0lBRUQsSUFBTUMsV0FBVyxHQUFHLFdBQU07UUFDeEIsSUFBSUMsSUFBSSxHQUFHLEVBQUUsaURBQWdEO1FBQWhEO1FBQ2JYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixHQUFHVSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaERaLFFBQVEsQ0FBQ3RCLHFFQUFnQixDQUFDa0MsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqQ0YsWUFBWSxFQUFFLENBQUM7S0FDaEI7SUFFRCxJQUFNQSxZQUFZLEdBQUcsV0FBTTtRQUN6QixJQUFJSixNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQ1IsT0FBTyxDQUFDQyxHQUFHLENBQUNILFlBQVksQ0FBQ2MsSUFBSSxHQUFHLHNCQUFzQixHQUFHUCxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDekVOLFFBQVEsQ0FBQ3ZCLHFFQUFnQixDQUFDNkIsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNwQztJQUVELElBQU1RLFlBQVksR0FBRyxTQUFDQyxNQUFNLEVBQUs7UUFDL0JmLFFBQVEsQ0FBQ2pCLHFFQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCaUIsUUFBUSxDQUFDZixzRUFBYSxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJOEIsTUFBTSxLQUFLLFVBQVUsRUFBRTtZQUN6QmQsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3pCLElBQUljLGNBQWMsR0FBR3RCLFdBQVcsR0FBRyxDQUFDO1lBQ3BDTSxRQUFRLENBQUNwQix5RUFBb0IsRUFBRSxDQUFDLENBQUM7WUFDakNvQixRQUFRLENBQUNiLDBFQUFpQixDQUFDNkIsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUM1Q2hCLFFBQVEsQ0FBQ3JCLHdFQUFtQixDQUFDcUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkQsTUFBTSxJQUFJRCxNQUFNLEtBQUssT0FBTyxFQUFFO1lBQzdCZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QkYsUUFBUSxDQUFDbEIsb0VBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCa0IsUUFBUSxDQUFDeEIsdUVBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQ3dCLFFBQVEsQ0FBQ25CLHFFQUFnQixFQUFFLENBQUMsQ0FBQztTQUM5QixNQUFNO1lBQ0xvQixPQUFPLENBQUNDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1NBQ3ZEO0tBQ0Y7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUM5QixrREFBUztnQkFDUjJCLFlBQVksRUFBRUEsWUFBWTtnQkFDMUJlLFlBQVksRUFBRUEsWUFBWTtnQkFDMUJ2QixZQUFZLEVBQUVBLFlBQVk7Z0JBQzFCRyxXQUFXLEVBQUVBLFdBQVc7Ozs7O3FCQUFJOzBCQUM5Qiw4REFBQ3JCLHVEQUFjO2dCQUNiZ0MsYUFBYSxFQUFFQSxhQUFhO2dCQUM1Qk0sV0FBVyxFQUFFQSxXQUFXO2dCQUN4QnBCLFlBQVksRUFBRUEsWUFBWTtnQkFDMUJJLGVBQWUsRUFBRUEsZUFBZTs7Ozs7cUJBQUk7O29CQUNyQyxDQUNIO0NBQ0g7R0ExRktOLFdBQVc7O1FBQ01kLG9EQUFXO1FBQ1pBLG9EQUFXO1FBQ1BBLG9EQUFXO1FBQ2pCQSxvREFBVztRQUNSQSxvREFBVztRQUNmRCxvREFBVzs7O0FBTnhCZSxLQUFBQSxXQUFXO0FBNEZqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvT2ZmbGluZUdhbWUuanM/ZGUzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9HYW1lQm9hcmQnO1xyXG5pbXBvcnQgUGxheWVyQ29udHJvbHMgZnJvbSAnLi9QbGF5ZXJDb250cm9scyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0TWF4UGxheWVySGVhbHRoLCBkZWNyZWFzZUhlYWx0aEJ5LCBpbmNyZWFzZUhlYWx0aEJ5LCBpbmNyZWFzZU1heEhlYWx0aEJ5LCBpbmNyZW1lbnRQbGF5ZXJMZXZlbCwgcmVzZXRQbGF5ZXJMZXZlbCwgc2V0UGxheWVySGVhbHRoIH0gZnJvbSAnLi4vc2xpY2VzL3BsYXllclNsaWNlJztcclxuaW1wb3J0IHsgc2V0RW5lbXlEZWNrLCBzZXRDdXJyZW50RW5lbXksIHNldEZpcnN0RW5lbXksIHNoaWZ0RW5lbXlEZWNrLCBzY2FsZUN1cnJlbnRFbmVteSwgZGVjcmVhc2VFbmVteUhlYWx0aEJ5IH0gZnJvbSAnLi4vc2xpY2VzL2VuZW15Qm9hcmRTbGljZSc7XHJcblxyXG5jb25zdCBPZmZsaW5lR2FtZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHBsYXllckhlYWx0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucGxheWVyLnBsYXllckhlYWx0aCk7XHJcbiAgY29uc3QgcGxheWVyTGV2ZWwgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBsYXllci5wbGF5ZXJMZXZlbCk7XHJcbiAgY29uc3QgbWF4UGxheWVySGVhbHRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wbGF5ZXIubWF4UGxheWVySGVhbHRoKTtcclxuICBjb25zdCBlbmVteUxpc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmVuZW15Qm9hcmQuZW5lbXlEZWNrKTtcclxuICBjb25zdCBjdXJyZW50RW5lbXkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmVuZW15Qm9hcmQuY3VycmVudEVuZW15KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlbmVteUxpc3QpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudEVuZW15KVxyXG4gICAgaWYgKCBjdXJyZW50RW5lbXkgPT09IG51bGwgfHwgY3VycmVudEVuZW15LmhlYWx0aCA8PSAwICkge1xyXG4gICAgICBpZiAoIGVuZW15TGlzdC5sZW5ndGggPiAwICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBuZXh0IGVuZW15XCIpO1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRFbmVteShlbmVteUxpc3RbMF0pKTtcclxuICAgICAgICBkaXNwYXRjaChzY2FsZUN1cnJlbnRFbmVteShwbGF5ZXJMZXZlbCkpO1xyXG4gICAgICAgIGRpc3BhdGNoKHNoaWZ0RW5lbXlEZWNrKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBlbXB0eSBlbmVteVwiKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50RW5lbXkoe30pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9LCBbY3VycmVudEVuZW15LCBlbmVteUxpc3QsIHBsYXllckxldmVsLCBkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAvLyBjYW4gcHJvYmFibHkgd2VhdmUgdGhpcyBsb2dpYyBzb21ld2hlcmUgZWxzZSBhbmQgcmVtb3ZlIHRoaXMgZWZmZWN0XHJcbiAgICBjb25zb2xlLmxvZyhcIm5ldyBtYXhQbGF5ZXJIZWFsdGg6IFwiICsgbWF4UGxheWVySGVhbHRoKTtcclxuICAgIGRpc3BhdGNoKHNldFBsYXllckhlYWx0aChtYXhQbGF5ZXJIZWFsdGgpKTtcclxuICB9LCBbbWF4UGxheWVySGVhbHRoLCBkaXNwYXRjaF0pO1xyXG5cclxuICAvLyBXYXRjaCBmb3IgbG9zZSBjb25kaXRpb24gaGVyZTpcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJDdXJyZW50IHBsYXllciBoZWFsdGg6IFwiICsgcGxheWVySGVhbHRoKTtcclxuICAgIGlmIChwbGF5ZXJIZWFsdGggPD0gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkxvc2VyIVwiKTtcclxuICAgIH1cclxuICB9LCBbcGxheWVySGVhbHRoXSk7XHJcblxyXG4gIGNvbnN0IGF0dGFja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGFtYWdlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICBkaXNwYXRjaChkZWNyZWFzZUVuZW15SGVhbHRoQnkoZGFtYWdlKSk7XHJcbiAgICBhdHRhY2tQbGF5ZXIoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoZWFsSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGxldCBoZWFsID0gMTAvL01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgzICsgcGxheWVyTGV2ZWwpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIGhlYWxzIGZvciBcIiArIGhlYWwgKyBcIiBocFwiKTtcclxuICAgIGRpc3BhdGNoKGluY3JlYXNlSGVhbHRoQnkoaGVhbCkpO1xyXG4gICAgYXR0YWNrUGxheWVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhdHRhY2tQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGFtYWdlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RW5lbXkubmFtZSArIFwiIGF0dGFja3MgcGxheWVyIGZvciBcIiArIGRhbWFnZSArIFwiIGhwXCIpO1xyXG4gICAgZGlzcGF0Y2goZGVjcmVhc2VIZWFsdGhCeShkYW1hZ2UpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldEhhbmRsZXIgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRFbmVteURlY2soKSk7XHJcbiAgICBkaXNwYXRjaChzZXRGaXJzdEVuZW15KCkpO1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gJ2NvbnRpbnVlJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm5ldyBnYW1lICtcIilcclxuICAgICAgbGV0IG5ld1BsYXllckxldmVsID0gcGxheWVyTGV2ZWwgKyAxO1xyXG4gICAgICBkaXNwYXRjaChpbmNyZW1lbnRQbGF5ZXJMZXZlbCgpKTtcclxuICAgICAgZGlzcGF0Y2goc2NhbGVDdXJyZW50RW5lbXkobmV3UGxheWVyTGV2ZWwpKTtcclxuICAgICAgZGlzcGF0Y2goaW5jcmVhc2VNYXhIZWFsdGhCeShuZXdQbGF5ZXJMZXZlbCAqIDIpKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAncmVzZXQnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzZXR0aW5nIGdhbWVcIilcclxuICAgICAgZGlzcGF0Y2goc2V0UGxheWVySGVhbHRoKDEwKSk7XHJcbiAgICAgIGRpc3BhdGNoKHNldE1heFBsYXllckhlYWx0aCgxMCkpO1xyXG4gICAgICBkaXNwYXRjaChyZXNldFBsYXllckxldmVsKCkpO1xyXG4gICAgfSBlbHNlIHsgIC8vIHN0YXR1cyBub3QgaGFuZGxlZFxyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiByZXNldEhhbmRsZXIgc3RhdHVzIG5vdCBoYW5kbGVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2FtZUJvYXJkXHJcbiAgICAgICAgY3VycmVudEVuZW15PXtjdXJyZW50RW5lbXl9XHJcbiAgICAgICAgcmVzZXRIYW5kbGVyPXtyZXNldEhhbmRsZXJ9XHJcbiAgICAgICAgcGxheWVySGVhbHRoPXtwbGF5ZXJIZWFsdGh9XHJcbiAgICAgICAgcGxheWVyTGV2ZWw9e3BsYXllckxldmVsfSAvPlxyXG4gICAgICA8UGxheWVyQ29udHJvbHNcclxuICAgICAgICBhdHRhY2tIYW5kbGVyPXthdHRhY2tIYW5kbGVyfVxyXG4gICAgICAgIGhlYWxIYW5kbGVyPXtoZWFsSGFuZGxlcn1cclxuICAgICAgICBwbGF5ZXJIZWFsdGg9e3BsYXllckhlYWx0aH1cclxuICAgICAgICBtYXhQbGF5ZXJIZWFsdGg9e21heFBsYXllckhlYWx0aH0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZsaW5lR2FtZTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiR2FtZUJvYXJkIiwiUGxheWVyQ29udHJvbHMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0TWF4UGxheWVySGVhbHRoIiwiZGVjcmVhc2VIZWFsdGhCeSIsImluY3JlYXNlSGVhbHRoQnkiLCJpbmNyZWFzZU1heEhlYWx0aEJ5IiwiaW5jcmVtZW50UGxheWVyTGV2ZWwiLCJyZXNldFBsYXllckxldmVsIiwic2V0UGxheWVySGVhbHRoIiwic2V0RW5lbXlEZWNrIiwic2V0Q3VycmVudEVuZW15Iiwic2V0Rmlyc3RFbmVteSIsInNoaWZ0RW5lbXlEZWNrIiwic2NhbGVDdXJyZW50RW5lbXkiLCJkZWNyZWFzZUVuZW15SGVhbHRoQnkiLCJPZmZsaW5lR2FtZSIsInByb3BzIiwicGxheWVySGVhbHRoIiwic3RhdGUiLCJwbGF5ZXIiLCJwbGF5ZXJMZXZlbCIsIm1heFBsYXllckhlYWx0aCIsImVuZW15TGlzdCIsImVuZW15Qm9hcmQiLCJlbmVteURlY2siLCJjdXJyZW50RW5lbXkiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJoZWFsdGgiLCJsZW5ndGgiLCJhdHRhY2tIYW5kbGVyIiwiZGFtYWdlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiYXR0YWNrUGxheWVyIiwiaGVhbEhhbmRsZXIiLCJoZWFsIiwibmFtZSIsInJlc2V0SGFuZGxlciIsInN0YXR1cyIsIm5ld1BsYXllckxldmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OfflineGame.js\n");

/***/ })

});