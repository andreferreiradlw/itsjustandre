(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 36px;\n  margin: 10px 0px 40px;\n}\nh3::before {\n  counter-increment: section 1;\n  content: \"0\" counter(section) \".\";\n  margin-right: 10px;\n  font-weight: normal;\n  color: rgb(111, 111, 252);\n  font-size: 20px;\n  position: relative;\n  bottom: -5px;\n}\nh3::after {\n  content: \"\";\n  display: block;\n  height: 2px;\n  width: 30%;\n  max-width: 300px;\n  background-color: rgb(111, 111, 252);\n  position: relative;\n  top: 5px;\n  margin-left: 20px;\n}\n.about-flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.about-content-container {\n  width: 60%;\n}\n.about-content-container p {\n  margin: 0px 0px 15px;\n  font-family: 'Lato', sans-serif;\n}\n.about-content-container a {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  position: relative;\n  cursor: pointer;\n  color: rgb(111, 111, 252);\n  font-weight: 700;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.about-content-container a::after {\n  content: \"\";\n  display: block;\n  width: 0px;\n  height: 2px;\n  position: relative;\n  background-color: rgb(111, 111, 252);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.about-content-container a:hover::after {\n  width: 100%;\n}\n.skills-container {\n  display: grid;\n  grid-template-columns: minmax(140px, 200px) minmax(140px, 200px);\n  margin-top: 20px;\n  overflow: hidden;\n}\n.skills-container .about-skill {\n  position: relative;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  font-size: 16px;\n  color: black;\n}\n.skills-container .about-skill::before {\n  content: \"▹\";\n  position: absolute;\n  left: 0px;\n  color: rgb(111, 111, 252);\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 12px;\n}\n.about-pic-container {\n  position: relative;\n  width: 40%;\n  max-width: 300px;\n  margin-left: 60px;\n}\n.about-avatar-container {\n  width: 100%;\n  position: relative;\n  margin-left: -20px;\n  border-radius: 2px;\n}\n.about-avatar-container::before {\n  top: 6%;\n  left: 6%;\n  z-index: -1;\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 3px solid rgb(111, 111, 252);\n  border-radius: 5px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.about-avatar-container:hover::before {\n  top: 3%;\n  left: 3%;\n}\n.about-avatar {\n  filter: grayscale(100%) contrast(1);\n  border-radius: 5px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.about-avatar:hover {\n  filter: none;\n}\n.about-avatar img {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center center;\n     object-position: center center;\n  border-radius: 5px;\n}\n/*MEDIA SCREENS*/\n@media only screen and (min-width: 768px) {\n}\n@media only screen and (max-width: 767px) {\n  :host {\n    padding: 80px 25px !important;\n  }\n  h3 {\n    font-size: 24px;\n  }\n  h3::before {\n    font-size: 18px;\n  }\n  h3::after {\n    width: 100%;\n  }\n  .about-flex-container {\n    display: block;\n  }\n  .about-content-container {\n    width: 100%;\n  }\n  .about-pic-container {\n    /*margin: 60px auto 0px;*/\n    display: none;\n  }\n}\n@media only screen and (max-width: 479px) {\n  h3 {\n    font-size: 18px;\n  }\n  h3::after {\n    margin-left: 10px;\n  }\n  .about-content-container p {\n    font-size: 16px;\n  }\n  .skills-container .about-skill {\n    font-size: 13px;\n  }\n  .about-pic-container {\n    width: 70%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUdsQixhQUFhO0VBR1QsbUJBQW1CO0VBQ3ZCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUI7QUFDbkI7QUFDQTtFQUdFLGFBQWE7RUFHVCw4QkFBOEI7RUFHOUIsdUJBQXVCO0FBQzdCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFHckIsNkRBQTZEO0FBQy9EO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUdwQyw2REFBNkQ7QUFDL0Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBRUUsYUFBYTtFQUViLGdFQUFnRTtFQUNoRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFHbEIsNkRBQTZEO0FBQy9EO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsUUFBUTtBQUNWO0FBQ0E7RUFFVSxtQ0FBbUM7RUFDM0Msa0JBQWtCO0VBR2xCLDZEQUE2RDtBQUMvRDtBQUNBO0VBRVUsWUFBWTtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7S0FDakIsaUJBQWlCO0VBQ3BCLGlDQUFpQztLQUM5Qiw4QkFBOEI7RUFDakMsa0JBQWtCO0FBQ3BCO0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbjogMTBweCAwcHggNDBweDtcbn1cbmgzOjpiZWZvcmUge1xuICBjb3VudGVyLWluY3JlbWVudDogc2VjdGlvbiAxO1xuICBjb250ZW50OiBcIjBcIiBjb3VudGVyKHNlY3Rpb24pIFwiLlwiO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC01cHg7XG59XG5oMzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAzMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uYWJvdXQtZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmFib3V0LWNvbnRlbnQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDYwJTtcbn1cbi5hYm91dC1jb250ZW50LWNvbnRhaW5lciBwIHtcbiAgbWFyZ2luOiAwcHggMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG4uYWJvdXQtY29udGVudC1jb250YWluZXIgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG59XG4uYWJvdXQtY29udGVudC1jb250YWluZXIgYTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG59XG4uYWJvdXQtY29udGVudC1jb250YWluZXIgYTpob3Zlcjo6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5za2lsbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogLW1zLWdyaWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC1tcy1ncmlkLWNvbHVtbnM6IG1pbm1heCgxNDBweCwgMjAwcHgpIG1pbm1heCgxNDBweCwgMjAwcHgpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNDBweCwgMjAwcHgpIG1pbm1heCgxNDBweCwgMjAwcHgpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNraWxscy1jb250YWluZXIgLmFib3V0LXNraWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnNraWxscy1jb250YWluZXIgLmFib3V0LXNraWxsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKWuVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cbi5hYm91dC1waWMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cbi5hYm91dC1hdmF0YXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYWJvdXQtYXZhdGFyLWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgdG9wOiA2JTtcbiAgbGVmdDogNiU7XG4gIHotaW5kZXg6IC0xO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuLmFib3V0LWF2YXRhci1jb250YWluZXI6aG92ZXI6OmJlZm9yZSB7XG4gIHRvcDogMyU7XG4gIGxlZnQ6IDMlO1xufVxuLmFib3V0LWF2YXRhciB7XG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgY29udHJhc3QoMSk7XG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgY29udHJhc3QoMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuLmFib3V0LWF2YXRhcjpob3ZlciB7XG4gIC13ZWJraXQtZmlsdGVyOiBub25lO1xuICAgICAgICAgIGZpbHRlcjogbm9uZTtcbn1cbi5hYm91dC1hdmF0YXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIC1vLW9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qTUVESUEgU0NSRUVOUyovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiA4MHB4IDI1cHggIWltcG9ydGFudDtcbiAgfVxuICBoMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIGgzOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBoMzo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5hYm91dC1mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmFib3V0LWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYWJvdXQtcGljLWNvbnRhaW5lciB7XG4gICAgLyptYXJnaW46IDYwcHggYXV0byAwcHg7Ki9cbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBoMzo6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5hYm91dC1jb250ZW50LWNvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnNraWxscy1jb250YWluZXIgLmFib3V0LXNraWxsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLmFib3V0LXBpYy1jb250YWluZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"heading\">About Me</h3>\n<div class=\"about-flex-container\">\n  <div class=\"about-content-container\">\n    <div>\n      <p>I'm a front-end developer who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces while being clean and efficient behind the scenes.</p>\n      <p>After graduating from\n        <a href=\"https://www.mdx.ac.uk/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">Middlesex University</a>\n        in 2017, I joined the development team at\n        <a href=\"https://talenteam.com/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">TalenTeam</a>\n        where I've continued improving my skills. Now working at\n        <a href=\"https://www.delaware.co.uk/en-gb/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">delaware</a>\n        , I enjoy constantly learning the many new technologies that power the web!</p>\n      <p>Here's a few things I love to work with:</p>\n    </div>\n    <ul class=\"skills-container\">\n      <li class=\"about-skill\">Javascript (ES6)</li>\n      <li class=\"about-skill\">HTML5 & CSS3</li>\n      <li class=\"about-skill\">Angular 2+</li>\n      <li class=\"about-skill\">Node.Js</li>\n      <li class=\"about-skill\">Typescript</li>\n      <li class=\"about-skill\">REST APIs</li>\n      <li class=\"about-skill\">Bootstrap 4</li>\n      <li class=\"about-skill\">jQuery</li>\n    </ul>\n  </div>\n  <div class=\"about-pic-container\">\n    <div class=\"about-avatar-container\">\n      <div class=\"about-avatar\">\n        <div style=\"width: 100%; padding-bottom: 100%;\"></div>\n        <img src=\"../../assets/andre_ferreira.jpg\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#root {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  grid-template-columns: 100%;\n}#root > *:nth-child(1) {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n}#root > *:nth-child(2) {\n  -ms-grid-row: 2;\n  -ms-grid-column: 1;\n}.container .hero {\n  width: 100vw;\n  height: 100vh;\n  background-color: black;\n  margin: 0;\n  padding: 0;\n}.container main {\n  width: 100%;\n  counter-reset: section 0;\n  margin: 0px auto;\n}.section {\n  max-width: 1200px;\n  display: flex;\n  justify-content: center;\n  -webkit-box-align: center;\n  flex-direction: column;\n  align-items: flex-start;\n  min-height: 100vh;\n  margin: 0px auto;\n  padding: 0px 25px;\n}.jobs-section {\n  justify-content: flex-start;\n  padding-top: 25%;\n}/*MEDIA SCREENS*/@media only screen and (min-width: 1200px) {\n  .section {\n    padding: 0px 150px;\n  }\n  .jobs-section {\n    padding-top: 14%;\n  }\n}@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .section {\n    padding: 0px 100px;\n  }\n  .jobs-section {\n    padding-top: 20%;\n  }\n}@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .section {\n    padding: 0px 70px;\n  }\n  .jobs-section {\n    padding-top: 25%;\n  }\n}@media only screen and (min-width: 480px) and (max-width: 767px) {\n  .section {\n    padding: 0px 20px;\n  }\n  .jobs-section {\n    padding-top: 30%;\n  }\n}@media only screen and (max-width: 479px) {\n  .section {\n    padding: 0px 10px;\n  }\n  .jobs-section {\n    padding-top: 40% !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFFakIsYUFBYTtFQUViLDRCQUE0QjtFQUU1QiwyQkFBMkI7QUFDN0IsQ0FBQztFQUNDLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIsQ0FBQztFQUNDLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIsQ0FDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0FBQ1osQ0FDQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCLENBQ0E7RUFDRSxpQkFBaUI7RUFHakIsYUFBYTtFQUdULHVCQUF1QjtFQUMzQix5QkFBeUI7RUFJakIsc0JBQXNCO0VBR3RCLHVCQUF1QjtFQUMvQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQixDQUNBO0VBR00sMkJBQTJCO0VBQy9CLGdCQUFnQjtBQUNsQixDQUNBLGdCQUFnQixDQUNoQjtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRixDQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGLENBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YsQ0FFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRixDQUdBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm9vdCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtbXMtZ3JpZDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgLW1zLWdyaWQtcm93czogMWZyIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG4gIC1tcy1ncmlkLWNvbHVtbnM6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbn0jcm9vdCA+ICo6bnRoLWNoaWxkKDEpIHtcbiAgLW1zLWdyaWQtcm93OiAxO1xuICAtbXMtZ3JpZC1jb2x1bW46IDE7XG59I3Jvb3QgPiAqOm50aC1jaGlsZCgyKSB7XG4gIC1tcy1ncmlkLXJvdzogMjtcbiAgLW1zLWdyaWQtY29sdW1uOiAxO1xufVxuLmNvbnRhaW5lciAuaGVybyB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250YWluZXIgbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb3VudGVyLXJlc2V0OiBzZWN0aW9uIDA7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uc2VjdGlvbiB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcGFkZGluZzogMHB4IDI1cHg7XG59XG4uam9icy1zZWN0aW9uIHtcbiAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiAyNSU7XG59XG4vKk1FRElBIFNDUkVFTlMqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDBweCAxNTBweDtcbiAgfVxuICAuam9icy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMTQlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDBweCAxMDBweDtcbiAgfVxuICAuam9icy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMHB4IDcwcHg7XG4gIH1cbiAgLmpvYnMtc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDI1JTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG4gIC5qb2JzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAzMCU7XG4gIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gIC5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxuICAuam9icy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogNDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading (loadFinished)=\"onLoadFinished($event)\"></app-loading>\n<div id=\"root\">\n  <div class=\"container\">\n    <app-menu [fadeIn]=\"fadeItems\"></app-menu>\n    <app-social [fadeIn]=\"fadeItems\"></app-social>\n    <app-email [fadeIn]=\"fadeItems\"></app-email>\n    <div class=\"hero\">\n      <app-hero id=\"home\" class=\"section\" [fadeIn]=\"fadeItems\"></app-hero>\n    </div>\n    <main id=\"content\">\n      <app-about id=\"about\" class=\"section\"></app-about>\n      <app-experience id=\"experience\" class=\"section jobs-section\"></app-experience>\n      <app-projects id=\"projects\" class=\"section\"></app-projects>\n      <app-repositories id=\"repositories\" class=\"section\"></app-repositories>\n      <app-contact id=\"contact\" class=\"section\"></app-contact>\n    </main>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.fadeItems = 'start';
    }
    AppComponent.prototype.onBeforeUnload = function (event) {
        // scroll to top before exiting website
        window.scrollTo(0, 0);
    };
    AppComponent.prototype.onLoadFinished = function (loaded) {
        if (loaded) {
            setTimeout(this.fadeItems = 'end', 650);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onBeforeUnload", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./repositories/repositories.component */ "./src/app/repositories/repositories.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _experience_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./experience/tabs/tabs.component */ "./src/app/experience/tabs/tabs.component.ts");
/* harmony import */ var _experience_tab_tab_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./experience/tab/tab.component */ "./src/app/experience/tab/tab.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _hero_hero_component__WEBPACK_IMPORTED_MODULE_8__["HeroComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
                _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_12__["RepositoriesComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _experience_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["TabsComponent"],
                _experience_tab_tab_component__WEBPACK_IMPORTED_MODULE_16__["TabComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_17__["SocialComponent"],
                _email_email_component__WEBPACK_IMPORTED_MODULE_18__["EmailComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__["ScrollToModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  text-align: center;\n  align-items: center !important;\n}\n.contact-container {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  flex-grow: 1;\n}\n.contact-heading {\n  position: relative;\n  align-items: center;\n  white-space: nowrap;\n  display: block;\n  color: rgb(111, 111, 252);\n  font-size: 15px;\n  font-weight: normal;\n  justify-content: center;\n  margin: 10px 0px;\n}\n.contact-heading::before {\n  counter-increment: section 1;\n  content: \"0\" counter(section) \".\";\n  margin-right: 10px;\n  font-weight: 700;\n  color: rgb(111, 111, 252);\n  font-size: 13px;\n}\n.contact-title {\n  font-size: 60px;\n  margin: 0px 0px 20px;\n}\np {\n  font-size: 16px;\n  margin: 0px 0px 15px;\n}\n.contact-email {\n  color: white;\n  background-color: black;\n  font-size: 14px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n  line-height: 1;\n  margin-top: 50px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(111, 111, 252);\n  -o-border-image: initial;\n     border-image: initial;\n  border-radius: 2px;\n  padding: 16px 23px;\n}\n.contact-email:hover {\n  color: white;\n  background-color: rgb(111, 111, 252);\n}\napp-footer {\n  width: 100vw;\n  justify-self: flex-end;\n}\n@media only screen and (max-width: 479px) {\n  .contact-title {\n    font-size: 40px;\n  }\n}\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  .contact-title {\n    font-size: 40px;\n  }\n  p {\n    font-size: 17px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .contact-heading {\n    font-size: 16px;\n  }\n  .contact-heading::before {\n    font-size: 14px;\n  }\n  .contact-title {\n    font-size: 50px;\n  }\n  p {\n    font-size: 18px;\n  }\n}\n@media only screen and (min-width: 992px) {\n  p {\n    font-size: 20px;\n  }\n  .contact-heading {\n    font-size: 17px;\n  }\n  .contact-heading::before {\n    font-size: 15px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFHViw4QkFBOEI7QUFDeEM7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBR1YsYUFBYTtFQUlMLHNCQUFzQjtFQUd0QixtQkFBbUI7RUFHbkIsdUJBQXVCO0VBQy9CLFdBQVc7RUFHSCxZQUFZO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFHZCxtQkFBbUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUdmLHVCQUF1QjtFQUMzQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBRTNCLHdCQUF3QjtLQUNyQixxQkFBcUI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbn1cbi5jb250YWN0LWhlYWRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmNvbnRhY3QtaGVhZGluZzo6YmVmb3JlIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IHNlY3Rpb24gMTtcbiAgY29udGVudDogXCIwXCIgY291bnRlcihzZWN0aW9uKSBcIi5cIjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uY29udGFjdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG59XG5wIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDBweCAwcHggMTVweDtcbn1cbi5jb250YWN0LWVtYWlsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICAtd2Via2l0LWJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICAgICAtby1ib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDE2cHggMjNweDtcbn1cbi5jb250YWN0LWVtYWlsOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG59XG5hcHAtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gIC5jb250YWN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY29udGFjdC1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNvbnRhY3QtaGVhZGluZzo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmNvbnRhY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLmNvbnRhY3QtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG4gIC5jb250YWN0LWhlYWRpbmc6OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-container\">\n  <h3 class=\"contact-heading\">What's next?</h3>\n  <h4 class=\"contact-title\">Get In Touch</h4>\n  <div>\n    <p>Although I'm not currently looking for any freelance opportunities, my inbox is always open.\n      <br>Whether for a potential project or just to say hi, I'll try my best to answer your email!</p>\n  </div>\n  <a href=\"mailto:ferreirandre25@gmail.com\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" class=\"contact-email\">Say Hello</a>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/email/email.component.css":
/*!*******************************************!*\
  !*** ./src/app/email/email.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 40px;\n  position: fixed;\n  bottom: 0px;\n  right: 40px;\n  color: rgb(111, 111, 252);\n}\n:host div {\n  width: 100%;\n  margin: 0px auto;\n}\n.email-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.email-container::after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  background-color: rgb(111, 111, 252);\n  margin: 0px auto;\n}\n.email-link {\n  font-size: 15px;\n  letter-spacing: 1px;\n  writing-mode: vertical-rl;\n  margin: 20px auto 0;\n  padding: 10px 10px 10px 14px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.email-link:hover {\n  transform: translateY(-10px);\n}\n@media only screen and (max-width: 1199px) {\n  :host {\n    right: 10px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  :host {\n    right: 5px;\n  }\n  .email-container::after {\n    height: 65px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  :host {\n    display: none;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwvZW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUdFLGFBQWE7RUFJTCxzQkFBc0I7RUFHMUIsbUJBQW1CO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxVQUFVO0VBQ1YsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFHZix5QkFBeUI7RUFDN0IsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBR2hCLDZEQUE2RDtBQUMvRDtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvZW1haWwvZW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDQwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBjb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xufVxuOmhvc3QgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uZW1haWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZW1haWwtY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5lbWFpbC1saW5rIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAtd2Via2l0LXdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gIC1tcy13cml0aW5nLW1vZGU6IHRiLXJsO1xuICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTRweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuLmVtYWlsLWxpbms6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICA6aG9zdCB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICA6aG9zdCB7XG4gICAgcmlnaHQ6IDVweDtcbiAgfVxuICAuZW1haWwtY29udGFpbmVyOjphZnRlciB7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/email/email.component.html":
/*!********************************************!*\
  !*** ./src/app/email/email.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@fadeInRight]=\"fadeIn\">\n  <div class=\"email-container\">\n      <a href=\"mailto:ferreirandre25@gmail.com\" class=\"email-link\">ferreirandre25@gmail.com</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/email/email.component.ts":
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EmailComponent.prototype, "fadeIn", void 0);
    EmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/email/email.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'translateX(50%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('start => end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms 1000ms cubic-bezier(0.215, 0.61, 0.355, 1)'))
                ])
            ],
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/email/email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 36px;\n  margin: 10px 0px 40px;\n}\nh3::before {\n  counter-increment: section 1;\n  content: \"0\" counter(section) \".\";\n  margin-right: 10px;\n  font-weight: normal;\n  color: rgb(111, 111, 252);\n  font-size: 20px;\n  position: relative;\n  bottom: -5px;\n}\nh3::after {\n  content: \"\";\n  display: block;\n  height: 2px;\n  width: 30%;\n  max-width: 300px;\n  background-color: rgb(111, 111, 252);\n  position: relative;\n  top: 5px;\n  margin-left: 20px;\n}\n.job-title {\n  font-size: 22px;\n  margin: 0 0 5px;\n}\n.job-company {\n  color: rgb(111, 111, 252);\n}\n.job-company a {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  position: relative;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.job-company a::after {\n  content: \"\";\n  display: block;\n  width: 0px;\n  height: 2px;\n  position: relative;\n  background-color: rgb(111, 111, 252);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.job-company a:hover::after {\n  width: 100%;\n}\n.job-time {\n  font-size: 15px;\n  font-weight: normal;\n  letter-spacing: 0.5px;\n  color: rgb(111, 111, 252);\n  margin: 10px 0 20px;\n}\n.tab-content ul {\n  font-size: 16px;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  font-family: 'Lato', sans-serif;\n}\n.tab-content ul li {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n}\n.tab-content ul li::before {\n  content: \"▹\";\n  position: absolute;\n  left: 0px;\n  color: rgb(111, 111, 252);\n  line-height: 20px;\n}\n/*MEDIA SCREENS*/\n@media only screen and (max-width: 767px) {\n  h3 {\n    font-size: 24px;\n  }\n  h3::before {\n    font-size: 18px;\n  }\n  h3::after {\n    width: 100%;\n  }\n  .tabs-container {\n    display: block;\n    max-width: 100%;\n  }\n}\n@media only screen and (max-width: 479px) {\n  :host {\n    padding-top: 80px !important;\n    padding-bottom: 20px !important;\n  }\n  h3 {\n    font-size: 18px;\n  }\n  h3::after {\n    margin-left: 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFHbEIsYUFBYTtFQUdULG1CQUFtQjtFQUN2QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUNBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUdyQiw2REFBNkQ7QUFDL0Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBR3BDLDZEQUE2RDtBQUMvRDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUNBLGdCQUFnQjtBQUVoQjtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luOiAxMHB4IDBweCA0MHB4O1xufVxuaDM6OmJlZm9yZSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBzZWN0aW9uIDE7XG4gIGNvbnRlbnQ6IFwiMFwiIGNvdW50ZXIoc2VjdGlvbikgXCIuXCI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTVweDtcbn1cbmgzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDMwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmpvYi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAwIDAgNXB4O1xufVxuLmpvYi1jb21wYW55IHtcbiAgY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbn1cbi5qb2ItY29tcGFueSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cbi5qb2ItY29tcGFueSBhOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cbi5qb2ItY29tcGFueSBhOmhvdmVyOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmpvYi10aW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIG1hcmdpbjogMTBweCAwIDIwcHg7XG59XG4udGFiLWNvbnRlbnQgdWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG4udGFiLWNvbnRlbnQgdWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi50YWItY29udGVudCB1bCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLilrlcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIGNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLypNRURJQSBTQ1JFRU5TKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBoMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIGgzOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBoMzo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50YWJzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmctdG9wOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgfVxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIGgzOjphZnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"heading\">Were I've Worked</h3>\n<div class=\"tabs-container\">\n  <app-tabs>\n    <app-tab class=\"tab-content\" tabTitle=\"delaware\">\n      <h4 class=\"job-title\">\n        <span>SAP UI5 Developer</span>\n        <span class=\"job-company\">\n          &nbsp;@&nbsp;\n          <a href=\"http://delaware.pro/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">delaware</a>\n        </span>\n      </h4>\n      <h5 class=\"job-time\">\n        <span>Sep 2018 - Present</span>\n      </h5>\n      <div>\n        <ul>\n          <li>Develop enterprise solutions and digital platforms centered around the SAP product stack (HANA, S/4, SAP\n            Cloud Platform) as part of the SAP consulting team</li>\n          <li>Build, configure and enhance standard SAP business applications</li>\n          <li>Design and create engaging new user interfaces and develop custom business intelligence platforms with\n            SAP Fiori and SAP UI5</li>\n          <li>Collaborate with clients to identify and design the right solutions and successfully see these through\n            the entire project life-cycle</li>\n          <li>Work closely with the consulting and development teams on SAP implementation projects from start to\n            finish, remotely and at client site</li>\n        </ul>\n      </div>\n    </app-tab>\n    <app-tab class=\"tab-content\" tabTitle=\"TalenTeam\">\n      <h4 class=\"job-title\">\n        <span>SAP Technical Consultant</span>\n        <span class=\"job-company\">\n          &nbsp;@&nbsp;\n          <a href=\"https://www.talenteam.com/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">TalenTeam</a>\n        </span>\n      </h4>\n      <h5 class=\"job-time\">\n        <span>Feb 2017 - Aug 2018</span>\n      </h5>\n      <div>\n        <ul>\n          <li>Created SAP SuccessFactors Fiori extensions using SAPUI5 and SAP Cloud Platform tools such as SAP Web IDE\n            for development and SAP Build for prototyping</li>\n          <li>Developed and maintained code for in-house and web applications primarily using HTML, XML, JavaScript,\n            and jQuery</li>\n          <li>Managed and developed the company’s website using WordPress</li>\n          <li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and\n            responsiveness</li>\n          <li>Other multiple technical tasks in-house</li>\n        </ul>\n      </div>\n    </app-tab>\n    <app-tab id=\"middlesexUni\" class=\"tab-content\" tabTitle=\"Middlesex University\">\n      <h4 class=\"job-title\">\n        <span>Student Learning Assistant</span>\n        <span class=\"job-company\">\n          &nbsp;@&nbsp;\n          <a href=\"https://www.mdx.ac.uk/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">Middlesex University</a>\n        </span>\n      </h4>\n      <h5 class=\"job-time\">\n        <span>Oct 2015 - Apr 2016</span>\n      </h5>\n      <div>\n        <ul>\n          <li>Assisted senior lecturer on the File Systems Analysis Module</li>\n          <li>Enhanced student academic performance by facilitating learning either in classes or 1-on-1 sessions</li>\n          <li>Reported monthly documented reflections</li>\n        </ul>\n      </div>\n    </app-tab>\n  </app-tabs>\n</div>\n\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/experience/tab/tab.component.css":
/*!**************************************************!*\
  !*** ./src/app/experience/tab/tab.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvdGFiL3RhYi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/experience/tab/tab.component.html":
/*!***************************************************!*\
  !*** ./src/app/experience/tab/tab.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!active\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/experience/tab/tab.component.ts":
/*!*************************************************!*\
  !*** ./src/app/experience/tab/tab.component.ts ***!
  \*************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs/tabs.component */ "./src/app/experience/tabs/tabs.component.ts");



var TabComponent = /** @class */ (function () {
    function TabComponent(tabs) {
        this.active = false;
        tabs.addTab(this);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabComponent.prototype, "tabTitle", void 0);
    TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab',
            template: __webpack_require__(/*! ./tab.component.html */ "./src/app/experience/tab/tab.component.html"),
            styles: [__webpack_require__(/*! ./tab.component.css */ "./src/app/experience/tab/tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"]])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/experience/tabs/tabs.component.css":
/*!****************************************************!*\
  !*** ./src/app/experience/tabs/tabs.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  align-items: flex-start;\n  position: relative;\n}\n.experience-tabs {\n  display: block;\n  position: relative;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  z-index: 3;\n}\n.experience-tabs .tab {\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 42px;\n  text-align: left;\n  white-space: nowrap;\n  font-size: 15px;\n  text-decoration: none;\n  padding: 0px 20px 2px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n\n  font-weight: 700;\n}\n.active {\n  background-color: rgb(194, 246, 255);\n  color: rgb(111, 111, 252);\n  border-left: 3px solid rgb(111, 111, 252);\n}\n.not-active {\n  background-color: white;\n  color: black;\n  border-left: 3px solid white;\n}\n.not-active:hover {\n  background-color: rgb(194, 246, 255);\n  color: rgb(111, 111, 252);\n}\n.jobs-container {\n  position: relative;\n  flex-grow: 1;\n  padding: 20px;\n  background-color: black;\n  color: white;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\nng-content {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n@media only screen and (max-width: 767px) {\n  :host {\n    display: block;\n  }\n  .experience-tabs {\n    display: flex;\n    max-width: 100%;\n    overflow-x: auto;\n  }\n  .experience-tabs .tab {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    min-width: 120px;\n    padding: 0px 15px 2px;\n    border-left: 0px;\n    border-bottom: 2px solid rgb(51, 63, 88);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS90YWJzL3RhYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLGFBQWE7RUFHTCx1QkFBdUI7RUFDL0Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsaUNBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZUFBZTtFQUdmLGFBQWE7RUFHVCxtQkFBbUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7RUFDckIscUJBQXFCO0VBR3JCLDZEQUE2RDs7RUFFN0QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUdkLFlBQVk7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBR1osNkRBQTZEO0FBQy9EO0FBQ0E7RUFHRSw2REFBNkQ7QUFDL0Q7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBR0UsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUdFLGFBQWE7SUFHVCx1QkFBdUI7SUFHdkIsbUJBQW1CO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix3Q0FBd0M7RUFDMUM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvdGFicy90YWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZXhwZXJpZW5jZS10YWJzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IC13ZWJraXQtbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHotaW5kZXg6IDM7XG59XG4uZXhwZXJpZW5jZS10YWJzIC50YWIge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMHB4IDIwcHggMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG5cbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAyNDYsIDI1NSk7XG4gIGNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiKDExMSwgMTExLCAyNTIpO1xufVxuLm5vdC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xufVxuLm5vdC1hY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAyNDYsIDI1NSk7XG4gIGNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG59XG4uam9icy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICAgICAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG59XG5uZy1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuZXhwZXJpZW5jZS10YWJzIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG4gIC5leHBlcmllbmNlLXRhYnMgLnRhYiB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgcGFkZGluZzogMHB4IDE1cHggMnB4O1xuICAgIGJvcmRlci1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYig1MSwgNjMsIDg4KTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/experience/tabs/tabs.component.html":
/*!*****************************************************!*\
  !*** ./src/app/experience/tabs/tabs.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<ul>\n  <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\">{{ tab.tabTitle }}</li>\n</ul>\n<ng-content></ng-content>\n-->\n<div class=\"experience-tabs\">\n  <a class=\"tab\" *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [ngClass]=\"tab.active ? 'active' : 'not-active'\">{{ tab.tabTitle }}</a>\n</div>\n<div class=\"jobs-container\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/experience/tabs/tabs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/experience/tabs/tabs.component.ts ***!
  \***************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = [];
    }
    TabsComponent.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (otherTab) {
            otherTab.active = false;
        });
        tab.active = true;
    };
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/experience/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/experience/tabs/tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: black;\n  color: rgb(111, 111, 252);\n  text-align: center;\n  height: auto;\n  padding: 15px;\n}\n.social-container {\n  color: white;\n  width: 100%;\n  max-width: 270px;\n  display: block;\n  margin: 0px auto 10px;\n}\n.social-item-list {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer-social-link {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  position: relative;\n  padding: 10px;\n}\n.footer-social-link svg {\n  width: 20px;\n  height: 20px;\n  fill: currentcolor;\n  vertical-align: middle;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.footer-social-link svg:hover {\n  fill: rgb(111, 111, 252);\n}\np {\n  margin: 0 0 5px;\n}\n.footer-link {\n  color: rgb(111, 111, 252);\n  font-size: 13px;\n  font-weight: 700;\n}\n.footer-link:hover {\n  color: white;\n}\n@media only screen and (min-width: 767px) {\n  .social-container {\n    display: none;\n  }\n  .footer-link {\n    font-size: 15px;\n  }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsYUFBYTtFQUdULHVCQUF1QjtFQUd2QixtQkFBbUI7RUFJZixzQkFBc0I7RUFDOUIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBR0UsYUFBYTtFQUdULDhCQUE4QjtFQUc5QixtQkFBbUI7QUFDekI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixpQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUd0Qiw2REFBNkQ7QUFDL0Q7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc29jaWFsLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjcwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweCBhdXRvIDEwcHg7XG59XG4uc29jaWFsLWl0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vdGVyLXNvY2lhbC1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5mb290ZXItc29jaWFsLWxpbmsgc3ZnIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZmlsbDogY3VycmVudGNvbG9yO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG59XG4uZm9vdGVyLXNvY2lhbC1saW5rIHN2Zzpob3ZlciB7XG4gIGZpbGw6IHJnYigxMTEsIDExMSwgMjUyKTtcbn1cbnAge1xuICBtYXJnaW46IDAgMCA1cHg7XG59XG4uZm9vdGVyLWxpbmsge1xuICBjb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9vdGVyLWxpbms6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgLnNvY2lhbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmZvb3Rlci1saW5rIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-container\">\n  <div class=\"social-container\">\n    <ul class=\"social-item-list\">\n      <li>\n        <a href=\"https://www.linkedin.com/in/ferreirandre25/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"LinkedIn\" class=\"footer-social-link\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 430.117 430.117\">\n            <title>LinkedIn</title>\n            <path d=\"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z\"></path></svg>\n        </a>\n      </li>\n      <li>\n        <a href=\"https://github.com/andreferreiradlw\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"Github\" class=\"footer-social-link\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 438.549 438.549\">\n            <title>Github</title>\n            <path d=\"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z\"></path>\n          </svg>\n        </a>\n      </li>\n      <li>\n        <a href=\"https://stackoverflow.com/users/9261332/andre-f?tab=profile\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"StackOverflow\" class=\"footer-social-link\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n            <title>Stack Overflow</title>\n            <path d=\"M0 0v24h24v-24h-24zm10.488 8.272l5.531 3.243-.686 1.162-5.532-3.243.687-1.162zm-1.456 3.113l6.185 1.739-.331 1.23-6.204-1.667.35-1.302zm-.672 2.813l6.498.65-.118 1.28-6.504-.586.124-1.344zm-.193 2.469h6.667v1.333h-6.667v-1.333zm8.833 3.333h-11v-7h1v6h9v-6h1v7zm-.852-8.704l-3.56-5.219 1.115-.76 3.559 5.219-1.114.76zm1.356-.841l-1.08-6.224 1.328-.231 1.081 6.224-1.329.231z\"/>\n          </svg>\n        </a>\n      </li>\n      <li>\n        <a href=\"https://codepen.io/ferreirandre/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"Codepen\" class=\"footer-social-link\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 31.665 31.665\">\n            <title>Codepen</title>\n            <path d=\"M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444 c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086 v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215 l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215 V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z\"></path></svg>\n        </a>\n      </li>\n      <li>\n        <a href=\"https://stackblitz.com/@andreferreiradlw\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"StackBlitz\" class=\"footer-social-link\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n            <title>StackBlitz</title>\n            <polygon points=\"20.972,0 5.076,15.803 10.972,15.803 6.44,27.793 22.716,11.989 16.819,11.989\"/>\n          </svg>\n        </a>\n      </li>\n    </ul>\n  </div>\n  <p>\n    <a href=\"https://github.com/andreferreiradlw/itsjustandre\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" class=\"footer-link\">\n      Designed &amp; Developed by Andre Ferreira.\n    </a>\n  </p>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/github.service.ts":
/*!***********************************!*\
  !*** ./src/app/github.service.ts ***!
  \***********************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var GithubService = /** @class */ (function () {
    function GithubService(http) {
        this.http = http;
        this.apiUrl = 'https://api.github.com/users/andreferreiradlw/repos';
        this.githubRepos = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    GithubService.prototype.getRepos = function () {
        var _this = this;
        this.http.get(this.apiUrl)
            .subscribe(function (reposData) {
            // convert object into array
            var reposArray = Object.keys(reposData).map(function (i) { return reposData[i]; });
            // for each repository loop
            reposArray.forEach(function (repository) {
                // create new empty key in array for languages
                repository['repoLanguages'] = [];
                // get languages
                var languageUrl = 'https://api.github.com/repos/andreferreiradlw/' + repository.name + '/languages';
                _this.http.get(languageUrl)
                    .subscribe(function (repoLanguages) {
                    // get languages names
                    for (var language in repoLanguages) {
                        if (language) {
                            // for every language push into repo object key
                            repository.repoLanguages.push(language);
                        }
                    }
                });
            });
            _this.githubRepos.next(reposArray);
        });
    };
    GithubService.prototype.getReposUpdateListener = function () {
        return this.githubRepos.asObservable();
        // listen to the subject
    };
    GithubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "./src/app/hero/hero.component.css":
/*!*****************************************!*\
  !*** ./src/app/hero/hero.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: black;\n  color: white;\n}\nh5 {\n  color: rgb(111, 111, 252);\n  font-size: 12px;\n  margin: 0px 0px 20px 3px;\n  font-family: 'Lato', sans-serif;\n\n}\nh1 {\n  font-size: 35px;\n  line-height: 1.1;\n  margin: 0 0 10px;\n  text-transform: uppercase;\n}\nh2 {\n  color: rgb(111, 111, 252);\n  font-size: 25px;\n  line-height: 1.1;\n  margin: 0px;\n}\n.hero-blurb {\n  width: 100%;\n  margin-top: 25px;\n  max-width: 500px;\n}\n.hero-blurb p {\n  margin: 0px 0px 15px;\n  font-family: 'Lato', sans-serif;\n  font-size: 13px;\n}\n.hero-blurb p b {\n  color: rgb(111, 111, 252);\n  font-weight: 700;\n}\n.hero-button {\n  width: 100%;\n}\n.hero-email {\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n  color: white;\n  background-color: transparent;\n  line-height: 1;\n  cursor: pointer;\n  font-size: 13px;\n  margin-top: 50px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(111, 111, 252);\n  -o-border-image: initial;\n     border-image: initial;\n  border-radius: 2px;\n  padding: 18px 23px;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.hero-email:hover {\n  background-color: rgb(111, 111, 252);\n}\n/*MEDIA SCREENS*/\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  h5 {\n    font-size: 13px;\n  }\n  h1, h2 {\n    font-size: 45px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  h5 {\n    font-size: 14px;\n  }\n  h1, h2 {\n    font-size: 55px;\n  }\n  .hero-blurb p {\n    font-size: 15px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  h5 {\n    font-size: 15px;\n  }\n  h1, h2 {\n    font-size: 60px;\n  }\n  .hero-blurb p {\n    font-size: 16px;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  .hero-blurb p {\n    font-size: 18px;\n  }\n  h5 {\n    font-size: 15px;\n  }\n  h1 {\n    font-size: 80px;\n  }\n  h2 {\n    font-size: 65px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby9oZXJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QiwrQkFBK0I7O0FBRWpDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBRTNCLHdCQUF3QjtLQUNyQixxQkFBcUI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFHckIsNkRBQTZEO0FBQy9EO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQSxnQkFBZ0I7QUFFaEI7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuaDUge1xuICBjb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDNweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblxufVxuaDEge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5oMiB7XG4gIGNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgbWFyZ2luOiAwcHg7XG59XG4uaGVyby1ibHVyYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuLmhlcm8tYmx1cmIgcCB7XG4gIG1hcmdpbjogMHB4IDBweCAxNXB4O1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uaGVyby1ibHVyYiBwIGIge1xuICBjb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmhlcm8tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVyby1lbWFpbCB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICAtd2Via2l0LWJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICAgICAtby1ib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDE4cHggMjNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG59XG4uaGVyby1lbWFpbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbn1cblxuLypNRURJQSBTQ1JFRU5TKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGg1IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgaDEsIGgyIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIGg1IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgaDEsIGgyIHtcbiAgICBmb250LXNpemU6IDU1cHg7XG4gIH1cbiAgLmhlcm8tYmx1cmIgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBoMSwgaDIge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxuICAuaGVyby1ibHVyYiBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlcm8tYmx1cmIgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIGg1IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiA2NXB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/hero/hero.component.html":
/*!******************************************!*\
  !*** ./src/app/hero/hero.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 [@fadeInUp]=\"hi\" class=\"hero-hi\">Hi, my name is</h5>\n<h1 [@fadeInUp]=\"name\" class=\"hero-name\">Andre Ferreira.</h1>\n<h2 [@fadeInUp]=\"subtitle\" class=\"hero-subtitle\">I build things for the web.</h2>\n<div [@fadeInUp]=\"blurb\" class=\"hero-blurb\">\n  <p>I'm a front-end developer based in <b>London</b> and specialised in high quality, mobile-first API driven web applications.\n    Currently working at <b>delaware</b> as an SAP UI5 Developer.</p>\n</div>\n<div [@fadeInUp]=\"button\" class=\"hero-button\">\n  <a href=\"mailto:ferreirandre25@gmail.com\" class=\"hero-email\">Get In Touch</a>\n</div>\n"

/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
        // animation strings for delays
        this.hi = 'start';
        this.name = 'start';
        this.subtitle = 'start';
        this.blurb = 'start';
        this.button = 'start';
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    // detect filter changes
    HeroComponent.prototype.ngOnChanges = function (changes) {
        // if changes @Input() fadeIn = end
        if (changes['fadeIn'].currentValue === 'end') {
            setTimeout(this.hi = changes['fadeIn'].currentValue, 500);
            setTimeout(this.name = changes['fadeIn'].currentValue, 600);
            setTimeout(this.subtitle = changes['fadeIn'].currentValue, 700);
            setTimeout(this.blurb = changes['fadeIn'].currentValue, 800);
            setTimeout(this.button = changes['fadeIn'].currentValue, 900);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeroComponent.prototype, "fadeIn", void 0);
    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/hero/hero.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'translateY(50%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('start => end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms 650ms cubic-bezier(0.215, 0.61, 0.355, 1)'))
                ])
            ],
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/hero/hero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-background {\n  background-color: white;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.svg-container {\n  display: block;\n}\n.path {\n  stroke-dasharray: 2555;\n  stroke-dashoffset: 2555;\n}\n.animate-path {\n  -webkit-animation: dash 2.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0ms 1 normal forwards;\n          animation: dash 2.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0ms 1 normal forwards;\n}\n/*dash animation*/\n@-webkit-keyframes dash {\n  0% {\n    stroke-dashoffset: 2555;\n    fill: white;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    fill: black;\n    stroke-width: 2;\n  }\n}\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 2555;\n    fill: white;\n  }\n  70% {\n    stroke-dashoffset: 0;\n    fill: white;\n    stroke-width: 7;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    fill: black;\n    stroke-width: 4;\n  }\n}\n/*zoom out animation*/\n@-webkit-keyframes zoomout {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.8);\n    display: none;\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n@keyframes zoomout {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.8);\n    display: none;\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFHYixhQUFhO0VBSUwsc0JBQXNCO0VBR3RCLHVCQUF1QjtFQUd2QixtQkFBbUI7QUFDN0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVGQUF1RjtVQUMvRSwrRUFBK0U7QUFDekY7QUFDQSxpQkFBaUI7QUFDakI7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7RUFDQTtJQUNFLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0FBQ0Y7QUFDQSxxQkFBcUI7QUFDckI7RUFDRTtJQUVVLG1CQUFtQjtJQUMzQixVQUFVO0VBQ1o7RUFDQTtJQUVVLHFCQUFxQjtJQUM3QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUVVLG1CQUFtQjtJQUMzQixVQUFVO0VBQ1o7RUFDQTtJQUVVLHFCQUFxQjtJQUM3QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zdmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucGF0aCB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDI1NTU7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAyNTU1O1xufVxuLmFuaW1hdGUtcGF0aCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoIDIuNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBtcyAxIG5vcm1hbCBmb3J3YXJkcztcbiAgICAgICAgICBhbmltYXRpb246IGRhc2ggMi41cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMG1zIDEgbm9ybWFsIGZvcndhcmRzO1xufVxuLypkYXNoIGFuaW1hdGlvbiovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaCB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjU1NTtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICBmaWxsOiBibGFjaztcbiAgICBzdHJva2Utd2lkdGg6IDI7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZGFzaCB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjU1NTtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuICA3MCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIGZpbGw6IHdoaXRlO1xuICAgIHN0cm9rZS13aWR0aDogNztcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICBmaWxsOiBibGFjaztcbiAgICBzdHJva2Utd2lkdGg6IDQ7XG4gIH1cbn1cbi8qem9vbSBvdXQgYW5pbWF0aW9uKi9cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tb3V0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21vdXQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@fadeOut]=\"pageLoaded\" class=\"loading-background\">\n  <div [@zoomOut]=\"pageLoaded\" class=\"svg-container\">\n    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      width=\"300px\" height=\"300px\" viewBox=\"0 0 566.9 566.9\" enable-background=\"new 0 0 340 333\" xml:space=\"preserve\">\n     <path class=\"path\" [ngClass]=\"pageInit === 'end' ? 'animate-path' : ''\" fill=\"#FFFFFF\" stroke=\"#000000\" stroke-width=\"1\" stroke-miterlimit=\"10\" d=\"M475.6,386.5c-2.9,7.1-8.5,11.6-14.9,11.6l-150.8-1.7V536.6H280.5V396.1l-191-2.2,16.3-28,174.7,1.6V234.8c0-11.6,7.6-21.1,17-21.1h63.3l-22.9-41.6-58.1-104L218.5,172.6l-27.9-.2,14-24.4h.1L266,39.3l.6-1.1a16.1,16.1,0,0,1,7.6-6.6,9.4,9.4,0,0,1,1.5-.6l1.5-.4,2.4-.3,3,.2,1.4.4h.2l3.4,1.7,1.7,1.1,1.6,1.6,1.1,1.3a10.1,10.1,0,0,1,1.4,2.1h.1l60.4,108.7,36.8,66.2h49.7v28.1H309.9v126l137,1.4-55.8-99.7h30.2l52.8,94.8A25.1,25.1,0,0,1,475.6,386.5Z\"/>\n    </svg>\n  </div>\n  <h1>Loading</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(renderer) {
        this.renderer = renderer;
        this.pageLoaded = 'start';
        this.pageInit = 'start';
        // event emitter
        this.loadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoadingComponent.prototype.ngOnInit = function () {
        // disable scrolling
        this.renderer.addClass(document.body, 'no-scroll');
        this.pageInit = 'end';
    };
    LoadingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // trigger animations
        setTimeout(function () {
            _this.pageLoaded = 'end';
            // allow scrolling after animations
            setTimeout(function () {
                _this.renderer.removeClass(document.body, 'no-scroll');
                _this.loadFinished.emit(true);
            }, 2500);
        }, 200);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoadingComponent.prototype, "loadFinished", void 0);
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        display: 'flex',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        display: 'none',
                        visibility: 'hidden',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('start => end', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms 2500ms ease-out'),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@zoomOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()
                        ])
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('zoomOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(0.8)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('start => end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms cubic-bezier(0.6, -4, 0.735, 0.045)'))
                ])
            ],
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0px;\n  background-color: black;\n  z-index: 11;\n  width: 100%;\n  transform: translateY(0px);\n  filter: none !important;\n  pointer-events: auto !important;\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n          user-select: auto !important;\n  padding: 10px 5%;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  color: white;\n}\nnav {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  counter-reset: item 0;\n  position: relative;\n  z-index: 12;\n}\nnav .header-burger {\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition-timing-function: linear;\n  transition-duration: 0.15s;\n  transition-property: opacity, filter;\n  text-transform: none;\n  color: inherit;\n  background-color: transparent;\n  display: none;\n  overflow: visible;\n  margin: 0px -12px 0px 0px;\n  padding: 15px;\n  border-width: 0px;\n  border-style: initial;\n  border-color: initial;\n  -o-border-image: initial;\n     border-image: initial;\n}\nnav .header-burger-box {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 24px;\n}\nnav .header-burger-inner {\n  background-color: white;\n  position: absolute;\n  width: 30px;\n  height: 2px;\n  top: 50%;\n  left: 0px;\n  right: 0px;\n  transition-duration: 0.22s;\n  transition-property: transform;\n  transition-delay: 0s;\n  transform: rotate(0deg);\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  border-radius: 2px;\n}\nnav .header-burger-inner.open {\n  transform: rotate(225deg);\n}\nnav .header-burger-inner::before,\nnav .header-burger-inner::after {\n  content: \"\";\n  display: block;\n  background-color: white;\n  position: absolute;\n  left: auto;\n  right: 0px;\n  width: 30px;\n  height: 2px;\n  transition-timing-function: ease;\n  transition-duration: 0.15s;\n  transition-property: transform;\n  border-radius: 4px;\n}\nnav .closed::before {\n  width: 120%;\n  top: -10px;\n  opacity: 1;\n  transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in 0s;\n}\nnav .closed::after {\n  width: 80%;\n  bottom: -10px;\n  transform: rotate(0deg);\n  transition: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s;\n}\nnav .open::before {\n  width: 100%;\n  top: 0px;\n  opacity: 0;\n  transition: top 0.1s ease-out 0s, opacity 0.1s ease-out 0.12s;\n}\nnav .open::after {\n  width: 100%;\n  bottom: 0px;\n  transform: rotate(-90deg);\n  transition: bottom 0.1s ease-out 0s, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;\n}\nnav .header-logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnav .header-logo > .header-logo-link {\n  color: white;\n  width: 42px;\n  height: 42px;\n}\nnav .header-logo > .header-logo-link svg {\n  width: 100%;\n  height: 100%;\n  fill: currentcolor;\n  stroke: currentColor;\n  vertical-align: middle;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\nnav .header-logo > .header-logo-link svg:hover {\n  fill: rgb(111, 111, 252);\n  stroke: rgb(111, 111, 252);\n}\nnav > .header-nav-links {\n  display: flex;\n  align-items: center;\n}\nnav .header-nav-list {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\nnav .header-nav-list > div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nnav .header-nav-list .header-nav-list-item {\n  transition-delay: 0ms;\n  position: relative;\n  font-size: 16px;\n  text-transform: uppercase;\n  counter-increment: item 1;\n  margin: 0px 10px;\n}\nnav .header-nav-list .header-nav-list-item::before {\n  content: \"0\" counter(item) \".\";\n  text-align: right;\n  color: rgb(111, 111, 252);\n  font-size: 12px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n}\nnav .header-nav-list .header-nav-list-item > a {\n  display: inline-block;\n  padding: 12px 10px;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\nnav .header-nav-list .header-nav-list-item > a:hover {\n  color: rgb(111, 111, 252);\n}\nnav .resume-button > a {\n  color: white;\n  background-color: transparent;\n  line-height: 1;\n  cursor: pointer;\n  margin-left: 10px;\n  font-size: 16px;\n  font-weight: 700;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(111, 111, 252);\n  -o-border-image: initial;\n     border-image: initial;\n  border-radius: 2px;\n  padding: 12px 17px;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  position: relative;\n}\nnav .resume-button > a:hover {\n  background-color: rgb(111, 111, 252);\n}\nheader .slider-menu-container {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  height: 100vh;\n  z-index: 10;\n  visibility: hidden;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  outline: 0px;\n  background-color: rgba(0, 0, 0, 0.85);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.slider-menu-container .slider-menu {\n  width: 100%;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n}\n.header-slider-list {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  width: 100%;\n}\n.header-slider-list .header-slider-list-item {\n  position: relative;\n  font-size: 20px;\n  counter-increment: item 1;\n  margin: 0px auto 20px;\n}\n.header-slider-list .header-slider-list-item::before {\n  display: block;\n  content: \"0\" counter(item) \".\";\n  color: rgb(111, 111, 252);\n  font-size: 15px;\n  margin-bottom: 5px;\n}\n.header-slider-list .header-slider-list-item a {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.slider-menu .resume-button {\n  color: rgb(111, 111, 252);\n  background-color: transparent;\n  font-size: 18px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n  line-height: 1;\n  cursor: pointer;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(111, 111, 252);\n  -o-border-image: initial;\n     border-image: initial;\n  border-radius: 2px;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 18px 50px;\n}\n.slider-menu .resume-button:hover {\n  color: white;\n  background-color: rgb(111, 111, 252);\n}\n/*MEDIA SCREENS*/\n@media only screen and (max-width: 479px) {\n  nav .header-burger {\n    display: flex;\n  }\n  nav .header-nav-links {\n    display: none;\n  }\n  header .slider-menu-container {\n    display: flex;\n    visibility: visible;\n    width: 100%;\n  }\n  .header-slider-list .header-slider-list-item a {\n    padding: 0 0 5px;\n  }\n}\n@media only screen and (min-width: 480px) and (max-width: 767px) {\n  nav .header-burger {\n    display: flex;\n  }\n  nav .header-nav-links {\n    display: none;\n  }\n  header .slider-menu-container {\n    display: flex;\n    visibility: visible;\n    width: 60%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxhQUFhO0VBR1QsOEJBQThCO0VBRzlCLG1CQUFtQjtFQUN2QixlQUFlO0VBQ2YsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUdILDBCQUEwQjtFQUUxQix1QkFBdUI7RUFDL0IsK0JBQStCO0VBQy9CLG9DQUFvQztLQUNqQyxpQ0FBaUM7VUFFNUIsNEJBQTRCO0VBQ3BDLGdCQUFnQjtFQUdoQiw2REFBNkQ7RUFDN0QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBR1gsYUFBYTtFQUdULDhCQUE4QjtFQUc5QixtQkFBbUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUdNLHVCQUF1QjtFQUd2QixtQkFBbUI7RUFDdkIsZUFBZTtFQUdQLGtDQUFrQztFQUdsQywwQkFBMEI7RUFJbEMsb0NBQW9DO0VBRXBDLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUVoQix3QkFBd0I7S0FDckIscUJBQXFCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFHRiwwQkFBMEI7RUFJbEMsOEJBQThCO0VBSXRCLG9CQUFvQjtFQUdwQix1QkFBdUI7RUFHdkIsa0VBQWtFO0VBQzFFLGtCQUFrQjtBQUNwQjtBQUNBO0VBR1UseUJBQXlCO0FBQ25DO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFHSCxnQ0FBZ0M7RUFHaEMsMEJBQTBCO0VBSWxDLDhCQUE4QjtFQUU5QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtFQUdWLDJEQUEyRDtBQUM3RDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFHTCx1QkFBdUI7RUFJL0IsZ0dBQWdHO0FBRWxHO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLFVBQVU7RUFHViw2REFBNkQ7QUFDL0Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBR0gseUJBQXlCO0VBSWpDLDhGQUE4RjtBQUVoRztBQUNBO0VBR0UsYUFBYTtFQUdULHVCQUF1QjtFQUd2QixtQkFBbUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBR3RCLDZEQUE2RDtBQUMvRDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1QjtBQUNBO0VBR0UsYUFBYTtFQUdULG1CQUFtQjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUdFLGFBQWE7RUFHVCw4QkFBOEI7RUFHOUIsbUJBQW1CO0FBQ3pCO0FBQ0E7RUFHVSxxQkFBcUI7RUFDN0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUNBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7RUFHckIsNkRBQTZEO0FBQy9EO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUUzQix3QkFBd0I7S0FDckIscUJBQXFCO0VBQzdCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBR3JCLDZEQUE2RDtFQUM3RCxxQkFBcUI7RUFDckIsaUNBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFJTCxzQkFBc0I7RUFHdEIsbUJBQW1CO0VBR25CLHVCQUF1QjtFQUMvQixZQUFZO0VBQ1oscUNBQXFDO0VBR3JDLDZEQUE2RDtBQUMvRDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFHWixhQUFhO0VBR1QsOEJBQThCO0VBRzlCLG1CQUFtQjtFQUlmLHNCQUFzQjtFQUM5QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUNBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gscUJBQXFCO0VBR3JCLDZEQUE2RDtFQUM3RCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUUzQix3QkFBd0I7S0FDckIscUJBQXFCO0VBQzdCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFHckIsNkRBQTZEO0VBQzdELGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztBQUN0QztBQUNBLGdCQUFnQjtBQUNoQjtFQUNFO0lBR0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUdFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztFQUNiO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBQ0U7SUFHRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBR0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6IDExO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICBmaWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0byAhaW1wb3J0YW50O1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogYXV0byAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDUlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbm5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb3VudGVyLXJlc2V0OiBpdGVtIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTI7XG59XG5uYXYgLmhlYWRlci1idXJnZXIge1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIC13ZWJraXQtZmlsdGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCAtd2Via2l0LWZpbHRlcjtcbiAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgZmlsdGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBmaWx0ZXI7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIGZpbHRlciwgLXdlYmtpdC1maWx0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBtYXJnaW46IDBweCAtMTJweCAwcHggMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgYm9yZGVyLXN0eWxlOiBpbml0aWFsO1xuICBib3JkZXItY29sb3I6IGluaXRpYWw7XG4gIC13ZWJraXQtYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgICAgIC1vLWJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG59XG5uYXYgLmhlYWRlci1idXJnZXItYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5uYXYgLmhlYWRlci1idXJnZXItaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yMnM7XG4gICAgICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yMnM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yMnM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xuICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxubmF2IC5oZWFkZXItYnVyZ2VyLWlubmVyLm9wZW4ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xufVxubmF2IC5oZWFkZXItYnVyZ2VyLWlubmVyOjpiZWZvcmUsXG5uYXYgLmhlYWRlci1idXJnZXItaW5uZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgICAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XG4gIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIC13ZWJraXQtdHJhbnNmb3JtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5uYXYgLmNsb3NlZDo6YmVmb3JlIHtcbiAgd2lkdGg6IDEyMCU7XG4gIHRvcDogLTEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZS1pbiAwLjI1cywgb3BhY2l0eSAwLjFzIGVhc2UtaW4gMHM7XG4gIC1vLXRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2UtaW4gMC4yNXMsIG9wYWNpdHkgMC4xcyBlYXNlLWluIDBzO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLWluIDAuMjVzLCBvcGFjaXR5IDAuMXMgZWFzZS1pbiAwcztcbn1cbm5hdiAuY2xvc2VkOjphZnRlciB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvdHRvbTogLTEwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZS1pbiAwLjI1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSkgMHM7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2UtaW4gMC4yNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpIDBzO1xuICAtby10cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLWluIDAuMjVzLCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSkgMHM7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2UtaW4gMC4yNXMsIHRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KSAwcztcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZS1pbiAwLjI1cywgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpIDBzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KSAwcztcbn1cbm5hdiAub3Blbjo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMHB4O1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0IDBzLCBvcGFjaXR5IDAuMXMgZWFzZS1vdXQgMC4xMnM7XG4gIC1vLXRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0IDBzLCBvcGFjaXR5IDAuMXMgZWFzZS1vdXQgMC4xMnM7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0IDBzLCBvcGFjaXR5IDAuMXMgZWFzZS1vdXQgMC4xMnM7XG59XG5uYXYgLm9wZW46OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvdHRvbSAwLjFzIGVhc2Utb3V0IDBzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSAwLjEycztcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXMgZWFzZS1vdXQgMHMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIDAuMTJzO1xuICAtby10cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLW91dCAwcywgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIDAuMTJzO1xuICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLW91dCAwcywgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIDAuMTJzO1xuICB0cmFuc2l0aW9uOiBib3R0b20gMC4xcyBlYXNlLW91dCAwcywgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIDAuMTJzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSAwLjEycztcbn1cbm5hdiAuaGVhZGVyLWxvZ28ge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubmF2IC5oZWFkZXItbG9nbyA+IC5oZWFkZXItbG9nby1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xufVxubmF2IC5oZWFkZXItbG9nbyA+IC5oZWFkZXItbG9nby1saW5rIHN2ZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZpbGw6IGN1cnJlbnRjb2xvcjtcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cbm5hdiAuaGVhZGVyLWxvZ28gPiAuaGVhZGVyLWxvZ28tbGluayBzdmc6aG92ZXIge1xuICBmaWxsOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIHN0cm9rZTogcmdiKDExMSwgMTExLCAyNTIpO1xufVxubmF2ID4gLmhlYWRlci1uYXYtbGlua3Mge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubmF2IC5oZWFkZXItbmF2LWxpc3Qge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxubmF2IC5oZWFkZXItbmF2LWxpc3QgPiBkaXYge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubmF2IC5oZWFkZXItbmF2LWxpc3QgLmhlYWRlci1uYXYtbGlzdC1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwbXM7XG4gICAgICAgLW8tdHJhbnNpdGlvbi1kZWxheTogMG1zO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBtcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBpdGVtIDE7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG59XG5uYXYgLmhlYWRlci1uYXYtbGlzdCAuaGVhZGVyLW5hdi1saXN0LWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiMFwiIGNvdW50ZXIoaXRlbSkgXCIuXCI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5uYXYgLmhlYWRlci1uYXYtbGlzdCAuaGVhZGVyLW5hdi1saXN0LWl0ZW0gPiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cbm5hdiAuaGVhZGVyLW5hdi1saXN0IC5oZWFkZXItbmF2LWxpc3QtaXRlbSA+IGE6aG92ZXIge1xuICBjb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xufVxubmF2IC5yZXN1bWUtYnV0dG9uID4gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbiAgLXdlYmtpdC1ib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgICAgLW8tYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAxMnB4IDE3cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubmF2IC5yZXN1bWUtYnV0dG9uID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbn1cbmhlYWRlciAuc2xpZGVyLW1lbnUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDEwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdXRsaW5lOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cbi5zbGlkZXItbWVudS1jb250YWluZXIgLnNsaWRlci1tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyLXNsaWRlci1saXN0IHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyLXNsaWRlci1saXN0IC5oZWFkZXItc2xpZGVyLWxpc3QtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb3VudGVyLWluY3JlbWVudDogaXRlbSAxO1xuICBtYXJnaW46IDBweCBhdXRvIDIwcHg7XG59XG4uaGVhZGVyLXNsaWRlci1saXN0IC5oZWFkZXItc2xpZGVyLWxpc3QtaXRlbTo6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiMFwiIGNvdW50ZXIoaXRlbSkgXCIuXCI7XG4gIGNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmhlYWRlci1zbGlkZXItbGlzdCAuaGVhZGVyLXNsaWRlci1saXN0LWl0ZW0gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgcGFkZGluZzogM3B4IDIwcHggMjBweDtcbn1cbi5zbGlkZXItbWVudSAucmVzdW1lLWJ1dHRvbiB7XG4gIGNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAtd2Via2l0LW1heC1jb250ZW50O1xuICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIC13ZWJraXQtYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgICAgIC1vLWJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIHBhZGRpbmc6IDE4cHggNTBweDtcbn1cbi5zbGlkZXItbWVudSAucmVzdW1lLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xufVxuLypNRURJQSBTQ1JFRU5TKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgbmF2IC5oZWFkZXItYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIG5hdiAuaGVhZGVyLW5hdi1saW5rcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBoZWFkZXIgLnNsaWRlci1tZW51LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5oZWFkZXItc2xpZGVyLWxpc3QgLmhlYWRlci1zbGlkZXItbGlzdC1pdGVtIGEge1xuICAgIHBhZGRpbmc6IDAgMCA1cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIG5hdiAuaGVhZGVyLWJ1cmdlciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBuYXYgLmhlYWRlci1uYXYtbGlua3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIC5zbGlkZXItbWVudS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header [@fadeInDown]=\"fadeIn\">\n  <nav>\n    <div class=\"header-logo\" (click)=\"onMenuOptionClick('home')\">\n      <a (click)=\"onMenuOptionClick('home')\" class=\"header-logo-link\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 566.9 566.9\">\n          <title>Andre Ferreira</title>\n          <path class=\"a\" d=\"M475.6,386.5c-2.9,7.1-8.5,11.6-14.9,11.6l-150.8-1.7V536.6H280.5V396.1l-191-2.2,16.3-28,174.7,1.6V234.8c0-11.6,7.6-21.1,17-21.1h63.3l-22.9-41.6-58.1-104L218.5,172.6l-27.9-.2,14-24.4h.1L266,39.3l.6-1.1a16.1,16.1,0,0,1,7.6-6.6,9.4,9.4,0,0,1,1.5-.6l1.5-.4,2.4-.3,3,.2,1.4.4h.2l3.4,1.7,1.7,1.1,1.6,1.6,1.1,1.3a10.1,10.1,0,0,1,1.4,2.1h.1l60.4,108.7,36.8,66.2h49.7v28.1H309.9v126l137,1.4-55.8-99.7h30.2l52.8,94.8A25.1,25.1,0,0,1,475.6,386.5Z\"/>\n        </svg>\n      </a>\n    </div>\n    <div>\n      <div class=\"header-burger\" (click)=\"onBurgerClick()\">\n        <div class=\"header-burger-box\">\n          <div class=\"header-burger-inner\" [ngClass]=\"menuOpen ? 'open' : 'closed'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"header-nav-links\">\n      <ol class=\"header-nav-list\">\n        <div>\n          <li class=\"header-nav-list-item\">\n            <a (click)=\"onMenuOptionClick('about')\" class=\"header-nav-link\">About</a>\n          </li>\n          <li class=\"header-nav-list-item\">\n            <a (click)=\"onMenuOptionClick('experience')\" class=\"header-nav-link\">Experience</a>\n          </li>\n          <li class=\"header-nav-list-item\">\n            <a (click)=\"onMenuOptionClick('projects')\" class=\"header-nav-link\">Projects</a>\n          </li>\n          <li class=\"header-nav-list-item\">\n            <a (click)=\"onMenuOptionClick('contact')\" class=\"header-nav-link\">Contact</a>\n          </li>\n        </div>\n      </ol>\n      <div>\n        <div class=\"resume-button\">\n          <a href=\"../../assets/andre_ferreira_resume.pdf\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">Resume</a>\n        </div>\n      </div>\n    </div>\n  </nav>\n  <div class=\"slider-menu-container\" [@slideInOut]=\"menuOpen\">\n    <nav class=\"slider-menu\">\n      <ol class=\"header-slider-list\">\n        <div>\n          <li class=\"header-slider-list-item\">\n            <a class=\"header-nav-link\" (click)=\"onMenuOptionClick('about')\">About</a>\n          </li>\n          <li class=\"header-slider-list-item\">\n            <a class=\"header-nav-link\" (click)=\"onMenuOptionClick('experience')\">Experience</a>\n          </li>\n          <li class=\"header-slider-list-item\">\n            <a class=\"header-nav-link\" (click)=\"onMenuOptionClick('projects')\">Projects</a>\n          </li>\n          <li class=\"header-slider-list-item\">\n            <a class=\"header-nav-link\" (click)=\"onMenuOptionClick('contact')\">Contact</a>\n          </li>\n        </div>\n      </ol>\n      <a class=\"resume-button\" href=\"../../assets/andre_ferreira_resume.pdf\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">Resume</a>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(renderer, _scrollToService) {
        this.renderer = renderer;
        this._scrollToService = _scrollToService;
        this.menuOpen = false;
        this.fadeInMenu = 'start';
    }
    MenuComponent.prototype.ngOnInit = function () { };
    // detect filter changes
    MenuComponent.prototype.ngOnChanges = function (changes) {
        // if changes @Input() fadeIn = end
        if (changes['fadeIn'].currentValue === 'end') {
            this.fadeInMenu = changes['fadeIn'].currentValue;
        }
    };
    MenuComponent.prototype.onBurgerClick = function () {
        this.menuOpen = !this.menuOpen;
        if (this.menuOpen) {
            this.renderer.addClass(document.body, 'blur');
        }
        else {
            this.renderer.removeClass(document.body, 'blur');
        }
    };
    MenuComponent.prototype.onMenuOptionClick = function (destination) {
        // on logo click do not open the menu
        if (destination !== 'home') {
            this.menuOpen = !this.menuOpen;
            this.renderer.removeClass(document.body, 'blur');
        }
        // smooth scroll config
        var config = {
            target: destination,
            duration: 1050,
            easing: 'easeInOutQuart',
            offset: 0
        };
        this._scrollToService.scrollTo(config);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuComponent.prototype, "fadeIn", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInDown', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateY(-100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('start => end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms 500ms cubic-bezier(0.215, 0.61, 0.355, 1)'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closed <=> open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out'))
                ])
            ],
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding-top: 80px !important;\n  padding-bottom: 20px !important;\n}\nh3 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 36px;\n  margin: 10px 0px 40px;\n}\nh3::before {\n  counter-increment: section 1;\n  content: \"0\" counter(section) \".\";\n  margin-right: 10px;\n  font-weight: normal;\n  color: rgb(111, 111, 252);\n  font-size: 20px;\n  position: relative;\n  bottom: -5px;\n}\nh3::after {\n  content: \"\";\n  display: block;\n  height: 2px;\n  width: 30%;\n  max-width: 300px;\n  background-color: rgb(111, 111, 252);\n  position: relative;\n  top: 5px;\n  margin-left: 20px;\n}\n.featured-container {\n  position: relative;\n}\n.featured-container .featured-project {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  align-items: center;\n  margin-bottom: 100px;\n  gap: 10px 10px;\n}\n.featured-container .featured-project:nth-of-type(2n+1) .featured-content-container {\n  text-align: right;\n  grid-column: 7 / -1;\n}\n.featured-container .featured-project:nth-of-type(2n+1) .featured-skills {\n  justify-content: flex-end;\n}\n.featured-container .featured-project:nth-of-type(2n+1) .featured-skills li {\n  margin-left: 20px;\n  margin-right: 0px;\n}\n.featured-container .featured-project:nth-of-type(2n+1) .featured-links {\n  justify-content: flex-end;\n  margin-left: 0px;\n  margin-right: -10px;\n}\n.featured-container .featured-project:nth-of-type(2n+1) .featured-image-container {\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 7;\n  grid-column: 1 / 8;\n}\n.featured-content-container {\n  position: relative;\n  z-index: 2;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 6;\n  grid-column: 1 / 7;\n  grid-row: 1 / -1;\n}\n.featured-label {\n  font-size: 13px;\n  font-weight: normal;\n  color: rgb(111, 111, 252);\n  margin-top: 10px;\n  padding-top: 0px;\n}\n.featured-name {\n  font-size: 28px;\n  font-weight: 600;\n  color: black;\n  margin: 0px 0px 20px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.featured-name:hover {\n  color: rgb(111, 111, 252);\n}\n.featured-description {\n  background-color: black;\n  color: white;\n  font-size: 18px;\n  padding: 25px;\n  border-radius: 2px;\n}\n.featured-description p {\n  margin: 0px;\n  font-family: 'Lato', sans-serif;\n}\n.featured-skills {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 25px 0px 10px;\n}\n.featured-skills li {\n  font-size: 13px;\n  color: rgb(111, 111, 252);\n  margin-right: 20px;\n  margin-bottom: 7px;\n  white-space: nowrap;\n}\n.featured-links {\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-top: 10px;\n  margin-left: -10px;\n}\n.featured-links a {\n  padding: 10px;\n}\n.featured-links a svg {\n  width: 22px;\n  height: 22px;\n  fill: black;\n  vertical-align: middle;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.featured-links a svg:hover {\n  fill: rgb(111, 111, 252);\n}\n.featured-image-container {\n  position: relative;\n  z-index: 1;\n  background-color: transparent;\n  border-radius: 2px;\n  grid-column: 6 / -1;\n  grid-row: 1 / -1;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.featured-image {\n  width: 100%;\n  max-width: 100%;\n  vertical-align: middle;\n  position: relative;\n  border-radius: 2px;\n}\n.featured-image:hover {\n  cursor: pointer;\n}\n.featured-image img {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center top;\n     object-position: center top;\n  max-width: 100%;\n  vertical-align: middle;\n}\n/*MEDIA SCREENS*/\n@media only screen and (min-width: 1200px) {\n  .featured-container .featured-project:nth-of-type(even) .featured-skills {\n    padding-right: 60px;\n  }\n  .featured-container .featured-project:nth-of-type(2n+1) .featured-skills {\n    padding-left: 60px;\n  }\n  .featured-label, .featured-skills li {\n    font-size: 15px;\n  }\n  .featured-name {\n    font-size: 30px;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .featured-container .featured-project:nth-of-type(even) .featured-skills {\n    padding-right: 50px;\n  }\n  .featured-container .featured-project:nth-of-type(2n+1) .featured-skills {\n    padding-left: 50px;\n  }\n  .featured-label, .featured-skills li {\n    font-size: 15px;\n  }\n  .featured-name {\n    font-size: 29px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  h3 {\n    font-size: 24px;\n  }\n  h3::before {\n    font-size: 18px;\n  }\n  h3::after {\n    width: 100%;\n  }\n  .featured-project {\n    margin-bottom: 70px;\n  }\n  .featured-container .featured-project:nth-of-type(2n+1) .featured-content-container,\n  .featured-container .featured-project .featured-content-container {\n    grid-column: 1 / -1;\n    padding: 40px 40px 30px;\n  }\n  .featured-name {\n    font-size: 26px;\n    color: white;\n  }\n  .featured-name a {\n    display: block;\n  }\n  .featured-description {\n    background-color: transparent;\n    padding: 20px 0px;\n  }\n  .featured-skills li {\n    margin-right: 10px;\n  }\n  .featured-links a svg {\n    fill: white;\n  }\n  .featured-container .featured-project:nth-of-type(2n+1) .featured-image-container,\n  .featured-container .featured-project .featured-image-container {\n    height: 100%;\n    opacity: 0.90;\n    grid-column: 1 / -1;\n  }\n  .featured-image {\n    -o-object-fit: cover;\n       object-fit: cover;\n    width: auto;\n    height: 100%;\n    filter: grayscale(100%) contrast(1) brightness(20%);\n  }\n}\n@media only screen and (max-width: 479px) {\n  h3 {\n    font-size: 18px;\n  }\n  h3::after {\n    margin-left: 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGtCQUFrQjtFQUdsQixhQUFhO0VBR1QsbUJBQW1CO0VBQ3ZCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBRUUsYUFBYTtFQUViLHNFQUFzRTtFQUdsRSxtQkFBbUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUdNLHlCQUF5QjtBQUMvQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBR00seUJBQXlCO0VBQzdCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBR3BCLDZEQUE2RDtBQUMvRDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsK0JBQStCO0FBQ2pDO0FBQ0E7RUFHRSxhQUFhO0VBRVQsZUFBZTtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUdFLGFBQWE7RUFHVCxtQkFBbUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBR3RCLDZEQUE2RDtBQUMvRDtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUdoQiw2REFBNkQ7QUFDL0Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0tBQ2pCLGlCQUFpQjtFQUNwQiw4QkFBOEI7S0FDM0IsMkJBQTJCO0VBQzlCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBOztJQUVFLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7O0lBRUUsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG9CQUFvQjtPQUNqQixpQkFBaUI7SUFDcEIsV0FBVztJQUNYLFlBQVk7SUFFSixtREFBbUQ7RUFDN0Q7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBhZGRpbmctdG9wOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5oMyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luOiAxMHB4IDBweCA0MHB4O1xufVxuaDM6OmJlZm9yZSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBzZWN0aW9uIDE7XG4gIGNvbnRlbnQ6IFwiMFwiIGNvdW50ZXIoc2VjdGlvbikgXCIuXCI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTVweDtcbn1cbmgzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDMwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5mZWF0dXJlZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmVhdHVyZWQtY29udGFpbmVyIC5mZWF0dXJlZC1wcm9qZWN0IHtcbiAgZGlzcGxheTogLW1zLWdyaWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC1tcy1ncmlkLWNvbHVtbnM6IDFmciAxMHB4IDFmciAxMHB4IDFmciAxMHB4IDFmciAxMHB4IDFmciAxMHB4IDFmciAxMHB4IDFmciAxMHB4IDFmciAxMHB4IDFmciAxMHB4IDFmciAxMHB4IDFmciAxMHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBnYXA6IDEwcHggMTBweDtcbn1cbi5mZWF0dXJlZC1jb250YWluZXIgLmZlYXR1cmVkLXByb2plY3Q6bnRoLW9mLXR5cGUoMm4rMSkgLmZlYXR1cmVkLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGdyaWQtY29sdW1uOiA3IC8gLTE7XG59XG4uZmVhdHVyZWQtY29udGFpbmVyIC5mZWF0dXJlZC1wcm9qZWN0Om50aC1vZi10eXBlKDJuKzEpIC5mZWF0dXJlZC1za2lsbHMge1xuICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XG4gIC1tcy1mbGV4LXBhY2s6IGVuZDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmVhdHVyZWQtY29udGFpbmVyIC5mZWF0dXJlZC1wcm9qZWN0Om50aC1vZi10eXBlKDJuKzEpIC5mZWF0dXJlZC1za2lsbHMgbGkge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG4uZmVhdHVyZWQtY29udGFpbmVyIC5mZWF0dXJlZC1wcm9qZWN0Om50aC1vZi10eXBlKDJuKzEpIC5mZWF0dXJlZC1saW5rcyB7XG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cbi5mZWF0dXJlZC1jb250YWluZXIgLmZlYXR1cmVkLXByb2plY3Q6bnRoLW9mLXR5cGUoMm4rMSkgLmZlYXR1cmVkLWltYWdlLWNvbnRhaW5lciB7XG4gIC1tcy1ncmlkLWNvbHVtbjogMTtcbiAgLW1zLWdyaWQtY29sdW1uLXNwYW46IDc7XG4gIGdyaWQtY29sdW1uOiAxIC8gODtcbn1cbi5mZWF0dXJlZC1jb250ZW50LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgLW1zLWdyaWQtY29sdW1uOiAxO1xuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogNjtcbiAgZ3JpZC1jb2x1bW46IDEgLyA3O1xuICBncmlkLXJvdzogMSAvIC0xO1xufVxuLmZlYXR1cmVkLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLmZlYXR1cmVkLW5hbWUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cbi5mZWF0dXJlZC1uYW1lOmhvdmVyIHtcbiAgY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbn1cbi5mZWF0dXJlZC1kZXNjcmlwdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmZlYXR1cmVkLWRlc2NyaXB0aW9uIHAge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbn1cbi5mZWF0dXJlZC1za2lsbHMge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMjVweCAwcHggMTBweDtcbn1cbi5mZWF0dXJlZC1za2lsbHMgbGkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmZlYXR1cmVkLWxpbmtzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG4uZmVhdHVyZWQtbGlua3MgYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZmVhdHVyZWQtbGlua3MgYSBzdmcge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmaWxsOiBibGFjaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuLmZlYXR1cmVkLWxpbmtzIGEgc3ZnOmhvdmVyIHtcbiAgZmlsbDogcmdiKDExMSwgMTExLCAyNTIpO1xufVxuLmZlYXR1cmVkLWltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZ3JpZC1jb2x1bW46IDYgLyAtMTtcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuLmZlYXR1cmVkLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uZmVhdHVyZWQtaW1hZ2U6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmVhdHVyZWQtaW1hZ2UgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIC1vLW9iamVjdC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4vKk1FRElBIFNDUkVFTlMqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZlYXR1cmVkLWNvbnRhaW5lciAuZmVhdHVyZWQtcHJvamVjdDpudGgtb2YtdHlwZShldmVuKSAuZmVhdHVyZWQtc2tpbGxzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICB9XG4gIC5mZWF0dXJlZC1jb250YWluZXIgLmZlYXR1cmVkLXByb2plY3Q6bnRoLW9mLXR5cGUoMm4rMSkgLmZlYXR1cmVkLXNraWxscyB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG4gIC5mZWF0dXJlZC1sYWJlbCwgLmZlYXR1cmVkLXNraWxscyBsaSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5mZWF0dXJlZC1uYW1lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmZlYXR1cmVkLWNvbnRhaW5lciAuZmVhdHVyZWQtcHJvamVjdDpudGgtb2YtdHlwZShldmVuKSAuZmVhdHVyZWQtc2tpbGxzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICB9XG4gIC5mZWF0dXJlZC1jb250YWluZXIgLmZlYXR1cmVkLXByb2plY3Q6bnRoLW9mLXR5cGUoMm4rMSkgLmZlYXR1cmVkLXNraWxscyB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG4gIC5mZWF0dXJlZC1sYWJlbCwgLmZlYXR1cmVkLXNraWxscyBsaSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5mZWF0dXJlZC1uYW1lIHtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBoMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIGgzOjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBoMzo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5mZWF0dXJlZC1wcm9qZWN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICB9XG4gIC5mZWF0dXJlZC1jb250YWluZXIgLmZlYXR1cmVkLXByb2plY3Q6bnRoLW9mLXR5cGUoMm4rMSkgLmZlYXR1cmVkLWNvbnRlbnQtY29udGFpbmVyLFxuICAuZmVhdHVyZWQtY29udGFpbmVyIC5mZWF0dXJlZC1wcm9qZWN0IC5mZWF0dXJlZC1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMzBweDtcbiAgfVxuICAuZmVhdHVyZWQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuZmVhdHVyZWQtbmFtZSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuZmVhdHVyZWQtZGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICB9XG4gIC5mZWF0dXJlZC1za2lsbHMgbGkge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuZmVhdHVyZWQtbGlua3MgYSBzdmcge1xuICAgIGZpbGw6IHdoaXRlO1xuICB9XG4gIC5mZWF0dXJlZC1jb250YWluZXIgLmZlYXR1cmVkLXByb2plY3Q6bnRoLW9mLXR5cGUoMm4rMSkgLmZlYXR1cmVkLWltYWdlLWNvbnRhaW5lcixcbiAgLmZlYXR1cmVkLWNvbnRhaW5lciAuZmVhdHVyZWQtcHJvamVjdCAuZmVhdHVyZWQtaW1hZ2UtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMC45MDtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICB9XG4gIC5mZWF0dXJlZC1pbWFnZSB7XG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgY29udHJhc3QoMSkgYnJpZ2h0bmVzcygyMCUpO1xuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgY29udHJhc3QoMSkgYnJpZ2h0bmVzcygyMCUpO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBoMzo6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"heading\">Some Things I've Made</h3>\n<div class=\"featured-container\">\n  <div id=\"hearthdb\" class=\"featured-project\">\n    <div class=\"featured-content-container\">\n      <h4 class=\"featured-label\">Featured Project</h4>\n      <h5 class=\"featured-name\">\n        <a href=\"https://hearthdb.io\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"External Link\">HearthDB</a>\n      </h5>\n      <div class=\"featured-description\">\n        <p>\n          An open source search engine for the Hearthstone card playing video game. It relies on the HeathstoneJson API\n          for the card information and GitHub repositories for card images.\n        </p>\n      </div>\n      <ul class=\"featured-skills\">\n        <li>Angular 7</li>\n        <li>NgBootstrap</li>\n        <li>Bootstrap 4</li>\n        <li>HearthtoneJson API</li>\n        <li>Google Firebase</li>\n      </ul>\n      <div class=\"featured-links\">\n        <a href=\"https://github.com/andreferreiradlw/HearthDB\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\n          aria-label=\"Github Link\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 438.549 438.549\">\n            <title>Github</title>\n            <path d=\"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z\"></path>\n          </svg>\n        </a>\n        <a href=\"https://hearthdb.io\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"External Link\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 194.818 194.818\">\n            <title>External</title>\n            <g>\n              <path d=\"M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z\"></path>\n              <path d=\"M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z\"></path>\n            </g>\n          </svg>\n        </a>\n      </div>\n    </div>\n    <div class=\"featured-image-container\">\n      <div class=\"featured-image\" (click)=\"openNewTab('https://hearthdb.io')\">\n        <div style=\"width: 100%; padding-bottom: 62.5%;\"></div>\n        <img src=\"../../assets/hearthdb_still.JPG\" alt=\"HearthDB\"\n          onmouseover=\"this.src='../../assets/hearthdb_hover.gif'\"\n          onmouseout=\"this.src='../../assets/hearthdb_still.JPG'\">\n      </div>\n    </div>\n  </div>\n  <div id=\"cssicons\" class=\"featured-project\">\n    <div class=\"featured-content-container\">\n      <h4 class=\"featured-label\">Featured Project</h4>\n      <h5 class=\"featured-name\">\n        <a href=\"https://cssicons.io\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"External Link\">CSS\n          Icons</a>\n      </h5>\n      <div class=\"featured-description\">\n        <p>\n          Full stack web application that displays a large collection of pure CSS icons along with its source\n          code.\n        </p>\n      </div>\n      <ul class=\"featured-skills\">\n        <li>Angular 7</li>\n        <li>Angular Material</li>\n        <li>ExpressJS</li>\n        <li>MongoDB</li>\n        <li>Heroku</li>\n      </ul>\n      <div class=\"featured-links\">\n        <a href=\"https://github.com/andreferreiradlw/CssIcons\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\n          aria-label=\"Github Link\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 438.549 438.549\">\n            <title>Github</title>\n            <path d=\"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z\"></path>\n          </svg>\n        </a>\n        <a href=\"https://cssicons.io\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"External Link\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 194.818 194.818\">\n            <title>External</title>\n            <g>\n              <path d=\"M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z\"></path>\n              <path d=\"M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z\"></path>\n            </g>\n          </svg>\n        </a>\n      </div>\n    </div>\n    <div class=\"featured-image-container\">\n      <div class=\"featured-image\" (click)=\"openNewTab('https://cssicons.io')\">\n        <div style=\"width: 100%; padding-bottom: 62.5%;\"></div>\n        <img src=\"../../assets/cssicons_still.JPG\" alt=\"Css Icons\"\n          onmouseover=\"this.src='../../assets/cssicons_hover.gif'\"\n          onmouseout=\"this.src='../../assets/cssicons_still.JPG'\">\n      </div>\n    </div>\n  </div>\n  <div id=\"pokestats\" class=\"featured-project\">\n    <div class=\"featured-content-container\">\n      <h4 class=\"featured-label\">In Development</h4>\n      <h5 class=\"featured-name\">\n        <a href=\"\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"External Link\">Pokestats</a>\n      </h5>\n      <div class=\"featured-description\">\n        <p>\n          Online encyclopedia of Pokémon species containing information such as Pokédex data, descriptions from previous games, sprites, evolutions, moves and more!\n        </p>\n      </div>\n      <ul class=\"featured-skills\">\n        <li>Angular 7</li>\n        <li>NgBootstrap</li>\n        <li>Bootstrap 4</li>\n        <li>ParticlesJS</li>\n        <li>PokeAPI</li>\n      </ul>\n      <div class=\"featured-links\">\n        <a href=\"https://github.com/andreferreiradlw/Pokestats\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\n          aria-label=\"Github Link\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 438.549 438.549\">\n            <title>Github</title>\n            <path d=\"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z\"></path>\n          </svg>\n        </a>\n        <!--\n        <a href=\"https://pokestats.io\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"External Link\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 194.818 194.818\">\n            <title>External</title>\n            <g>\n              <path d=\"M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z\"></path>\n              <path d=\"M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z\"></path>\n            </g>\n          </svg>\n        </a>\n        -->\n      </div>\n    </div>\n    <div class=\"featured-image-container\">\n      <div class=\"featured-image\">\n        <div style=\"width: 100%; padding-bottom: 62.5%;\"></div>\n        <img src=\"../../assets/pokestats_still.JPG\" alt=\"PokeStats\"\n          onmouseover=\"this.src='../../assets/pokestats_hover.gif'\"\n          onmouseout=\"this.src='../../assets/pokestats_still.JPG'\">\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.openNewTab = function (link) {
        window.open(link, '_blank');
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/repositories/repositories.component.css":
/*!*********************************************************!*\
  !*** ./src/app/repositories/repositories.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding-top: 80px !important;\n  padding-bottom: 20px !important;\n}\nh3 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 36px;\n  margin: 10px 0px 40px;\n}\nh3::before {\n  content: \"03.1\";\n  margin-right: 10px;\n  font-weight: normal;\n  color: rgb(111, 111, 252);\n  font-size: 20px;\n  position: relative;\n  bottom: -5px;\n}\nh3::after {\n  content: \"\";\n  display: block;\n  height: 2px;\n  width: 30%;\n  max-width: 300px;\n  background-color: rgb(111, 111, 252);\n  position: relative;\n  top: 5px;\n  margin-left: 20px;\n}\n.repos-container .repos-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  position: relative;\n  gap: 15px 15px;\n}\n.repo-inner {\n  display: flex;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  height: 100%;\n  background-color: black;\n  padding: 25px;\n  border-radius: 2px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.repo-inner:hover {\n  transform: translateY(-2px);\n  box-shadow: 2px 2px 10px 0px black;\n}\n.repo-inner .repo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.repo-header .repo-folder {\n  color: white;\n}\n.repo-header .repo-folder svg {\n  width: 40px;\n  height: 40px;\n  fill: currentcolor;\n  vertical-align: middle;\n}\n.repo-header .repo-link {\n  margin-right: -10px;\n  color: rgb(111, 111, 252);\n}\n.repo-header .repo-link a {\n  padding: 10px;\n}\n.repo-header .repo-link svg {\n  width: 30px;\n  height: 30px;\n  fill: currentcolor;\n  vertical-align: middle;\n}\n.repo-header .repo-link svg:hover {\n  fill: white;\n}\n.repo-inner .repo-name {\n  font-size: 22px;\n  color: white;\n  margin: 0px 0px 10px;\n}\n.repo-inner .repo-description {\n  font-size: 17px;\n  color: white;\n  font-family: 'Lato', sans-serif;\n}\n.repo-inner .repo-languages {\n  flex-grow: 1;\n  display: flex;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.repo-inner .repo-languages li {\n  font-size: 14px;\n  color: rgb(111, 111, 252);\n  line-height: 1.75;\n  margin-right: 15px;\n}\n.projects-show {\n  color: white;\n  background-color: black;\n  font-size: 14px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n  line-height: 1;\n  margin: 50px auto 0;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgb(111, 111, 252);\n  -o-border-image: initial;\n     border-image: initial;\n  border-radius: 2px;\n  padding: 16px 23px;\n}\n.projects-show:hover {\n  color: white;\n  background-color: rgb(111, 111, 252);\n}\n/*MEDIA SCREENS*/\n@media only screen and (min-width: 991px) {\n  .repos-container .repos-grid {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  }\n}\n@media only screen and (max-width: 767px) {\n  h3 {\n    font-size: 24px;\n  }\n  h3::before {\n    font-size: 18px;\n  }\n  h3::after {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 479px) {\n  h3 {\n    font-size: 18px;\n  }\n  h3::after {\n    margin-left: 10px;\n  }\n  .repo-inner .repo-name {\n    font-size: 18px;\n  }\n  .repo-inner .repo-description {\n    font-size: 14px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3NpdG9yaWVzL3JlcG9zaXRvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0Usa0JBQWtCO0VBR2xCLGFBQWE7RUFHVCxtQkFBbUI7RUFDdkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFFRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFHRSxhQUFhO0VBR1QsOEJBQThCO0VBQ2xDLHlCQUF5QjtFQUlqQixzQkFBc0I7RUFHdEIsdUJBQXVCO0VBQy9CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFHbEIsNkRBQTZEO0FBQy9EO0FBQ0E7RUFHVSwyQkFBMkI7RUFFbkMsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFHRSxhQUFhO0VBR1QsOEJBQThCO0VBRzlCLG1CQUFtQjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7QUFDQTtFQUdNLFlBQVk7RUFHaEIsYUFBYTtFQUdMLHFCQUFxQjtFQUV6QixlQUFlO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFFM0Isd0JBQXdCO0tBQ3JCLHFCQUFxQjtFQUM3QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDO0FBQ0EsZ0JBQWdCO0FBRWhCO0VBQ0U7SUFDRSw0REFBNEQ7RUFDOUQ7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JlcG9zaXRvcmllcy9yZXBvc2l0b3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZy10b3A6IDgwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn1cbmgzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBtYXJnaW46IDEwcHggMHB4IDQwcHg7XG59XG5oMzo6YmVmb3JlIHtcbiAgY29udGVudDogXCIwMy4xXCI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTVweDtcbn1cbmgzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDMwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5yZXBvcy1jb250YWluZXIgLnJlcG9zLWdyaWQge1xuICBkaXNwbGF5OiAtbXMtZ3JpZDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGdhcDogMTVweCAxNXB4O1xufVxuLnJlcG8taW5uZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuLnJlcG8taW5uZXI6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMTBweCAwcHggYmxhY2s7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAwcHggYmxhY2s7XG59XG4ucmVwby1pbm5lciAucmVwby1oZWFkZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnJlcG8taGVhZGVyIC5yZXBvLWZvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5yZXBvLWhlYWRlciAucmVwby1mb2xkZXIgc3ZnIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZmlsbDogY3VycmVudGNvbG9yO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnJlcG8taGVhZGVyIC5yZXBvLWxpbmsge1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICBjb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xufVxuLnJlcG8taGVhZGVyIC5yZXBvLWxpbmsgYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucmVwby1oZWFkZXIgLnJlcG8tbGluayBzdmcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmaWxsOiBjdXJyZW50Y29sb3I7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucmVwby1oZWFkZXIgLnJlcG8tbGluayBzdmc6aG92ZXIge1xuICBmaWxsOiB3aGl0ZTtcbn1cbi5yZXBvLWlubmVyIC5yZXBvLW5hbWUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XG59XG4ucmVwby1pbm5lciAucmVwby1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuLnJlcG8taW5uZXIgLnJlcG8tbGFuZ3VhZ2VzIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnJlcG8taW5uZXIgLnJlcG8tbGFuZ3VhZ2VzIGxpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xuICBsaW5lLWhlaWdodDogMS43NTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnByb2plY3RzLXNob3cge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDUwcHggYXV0byAwO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIC13ZWJraXQtYm9yZGVyLWltYWdlOiBpbml0aWFsO1xuICAgICAgIC1vLWJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMTZweCAyM3B4O1xufVxuLnByb2plY3RzLXNob3c6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExMSwgMjUyKTtcbn1cbi8qTUVESUEgU0NSRUVOUyovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgLnJlcG9zLWNvbnRhaW5lciAucmVwb3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBoMzo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgaDM6OmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgaDM6OmFmdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAucmVwby1pbm5lciAucmVwby1uYW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLnJlcG8taW5uZXIgLnJlcG8tZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/repositories/repositories.component.html":
/*!**********************************************************!*\
  !*** ./src/app/repositories/repositories.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"heading\">Latest Repositories</h3>\n<div class=\"repos-container\">\n  <div class=\"repos-grid\">\n    <div class=\"repo\" *ngFor=\"let repo of repositoryCollection | slice: 0:6\">\n      <div class=\"repo-inner\">\n        <div>\n          <div class=\"repo-header\">\n            <div class=\"repo-folder\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 60 60\"><title>Folder</title>\n                <path d=\"M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z\"></path>\n              </svg>\n            </div>\n            <div class=\"repo-link\">\n              <a href=\"{{repo.html_url}}\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"Github Link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 438.549 438.549\"><title>Github</title>\n                  <path d=\"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z\"></path>\n                </svg>\n              </a>\n            </div>\n          </div>\n          <h5 class=\"repo-name\">{{repo.name}}</h5>\n          <div class=\"repo-description\">\n            <p>{{repo.description}}</p>\n          </div>\n        </div>\n        <div>\n          <ul class=\"repo-languages\">\n            <li *ngFor=\"let language of repo.repoLanguages\">{{language}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<a href=\"https://github.com/andreferreiradlw?tab=repositories\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" class=\"projects-show\">Show More</a>\n"

/***/ }),

/***/ "./src/app/repositories/repositories.component.ts":
/*!********************************************************!*\
  !*** ./src/app/repositories/repositories.component.ts ***!
  \********************************************************/
/*! exports provided: RepositoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoriesComponent", function() { return RepositoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github.service */ "./src/app/github.service.ts");



var RepositoriesComponent = /** @class */ (function () {
    function RepositoriesComponent(githubService) {
        this.githubService = githubService;
    }
    RepositoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.githubService.getRepos();
        // will get initial array of posts from server
        this.reposSub = this.githubService.getReposUpdateListener()
            .subscribe(function (repoData) {
            _this.repositoryCollection = repoData.sort(function (val1, val2) {
                return new Date(val2.created_at).getTime() - new Date(val1.created_at).getTime();
            });
        });
    };
    RepositoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-repositories',
            template: __webpack_require__(/*! ./repositories.component.html */ "./src/app/repositories/repositories.component.html"),
            styles: [__webpack_require__(/*! ./repositories.component.css */ "./src/app/repositories/repositories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]])
    ], RepositoriesComponent);
    return RepositoriesComponent;
}());



/***/ }),

/***/ "./src/app/social/social.component.css":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 40px;\n  position: fixed;\n  bottom: 0px;\n  left: 40px;\n  color: rgb(111, 111, 252);\n}\n.social-item-list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.social-item-list::after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  background-color: rgb(111, 111, 252);\n  margin: 0px auto;\n}\n.social-item-list a {\n  padding: 10px;\n}\n.social-item-list svg {\n  width: 18px;\n  height: 18px;\n  fill: currentcolor;\n  vertical-align: middle;\n}\n.social-item-list svg:hover {\n  transform: translateY(-2px);\n  width: 20px;\n  height: 20px;\n}\n@media only screen and (max-width: 1199px) {\n  :host {\n    left: 10px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  :host {\n    left: 5px;\n  }\n  .social-item-list::after {\n    height: 65px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  :host {\n    display: none;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjtBQUNBO0VBR0UsYUFBYTtFQUlMLHNCQUFzQjtFQUcxQixtQkFBbUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiA0MHB4O1xuICBjb2xvcjogcmdiKDExMSwgMTExLCAyNTIpO1xufVxuLnNvY2lhbC1pdGVtLWxpc3Qge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc29jaWFsLWl0ZW0tbGlzdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMTEsIDI1Mik7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uc29jaWFsLWl0ZW0tbGlzdCBhIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zb2NpYWwtaXRlbS1saXN0IHN2ZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZpbGw6IGN1cnJlbnRjb2xvcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5zb2NpYWwtaXRlbS1saXN0IHN2Zzpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgOmhvc3Qge1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICA6aG9zdCB7XG4gICAgbGVmdDogNXB4O1xuICB9XG4gIC5zb2NpYWwtaXRlbS1saXN0OjphZnRlciB7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@fadeInLeft]=\"fadeIn\">\n  <ul class=\"social-item-list\">\n    <li>\n      <a href=\"https://www.linkedin.com/in/ferreirandre25/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\n        aria-label=\"LinkedIn\" class=\"footer-social-link\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 430.117 430.117\">\n          <title>LinkedIn</title>\n          <path d=\"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z\"></path>\n        </svg>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://github.com/andreferreiradlw\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"Github\"\n        class=\"footer-social-link\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 438.549 438.549\">\n          <title>Github</title>\n          <path d=\"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z\"></path>\n        </svg>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://stackoverflow.com/users/9261332/andre-f?tab=profile\" target=\"_blank\" rel=\"nofollow noopener noreferrer\"\n        aria-label=\"StackOverflow\" class=\"footer-social-link\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <title>Stack Overflow</title>\n          <path d=\"M0 0v24h24v-24h-24zm10.488 8.272l5.531 3.243-.686 1.162-5.532-3.243.687-1.162zm-1.456 3.113l6.185 1.739-.331 1.23-6.204-1.667.35-1.302zm-.672 2.813l6.498.65-.118 1.28-6.504-.586.124-1.344zm-.193 2.469h6.667v1.333h-6.667v-1.333zm8.833 3.333h-11v-7h1v6h9v-6h1v7zm-.852-8.704l-3.56-5.219 1.115-.76 3.559 5.219-1.114.76zm1.356-.841l-1.08-6.224 1.328-.231 1.081 6.224-1.329.231z\" />\n        </svg>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://codepen.io/ferreirandre/\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"Codepen\"\n        class=\"footer-social-link\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" viewBox=\"0 0 31.665 31.665\">\n          <title>Codepen</title>\n          <path d=\"M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444 c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086 v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215 l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215 V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z\"></path>\n        </svg>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://stackblitz.com/@andreferreiradlw\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" aria-label=\"StackBlitz\"\n        class=\"footer-social-link\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <title>StackBlitz</title>\n          <polygon points=\"20.972,0 5.076,15.803 10.972,15.803 6.44,27.793 22.716,11.989 16.819,11.989\" />\n        </svg>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SocialComponent.prototype, "fadeIn", void 0);
    SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'translateX(-50%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('start => end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms 1000ms cubic-bezier(0.215, 0.61, 0.355, 1)'))
                ])
            ],
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/social/social.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andre/Repos/itsjustandre/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map