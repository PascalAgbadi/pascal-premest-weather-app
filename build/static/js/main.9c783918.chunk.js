(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{33:function(e,a,t){e.exports=t(61)},55:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(27),l=t.n(r),s=t(32),i=t(10),o=t(11),m=t(8),d=t(13),u=t(12),h=t(30),p=t(1),g=t(28),E=t.n(g);var v=function(){return n.a.createElement("div",{className:"site-header"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{href:"index.html",className:"branding"},n.a.createElement("img",{src:"images/logo.png",alt:"",className:"logo"}),n.a.createElement("div",{className:"logo-type"},n.a.createElement("h1",{className:"site-title"},"NitroWeather"),n.a.createElement("small",{className:"site-description"},"Rain, Sun and Snow ... ",n.a.createElement("em",null,"In your  Pocket")))),n.a.createElement("div",{className:" main-navigation"},"Login")))};var N=function(e){var a=e.recentList;return n.a.createElement("main",{className:"main-content"},n.a.createElement("div",{className:"fullwidth-block"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"section-title"},"Recent Searches"),n.a.createElement("div",{className:"row"},a.map((function(e){return n.a.createElement("div",{className:"col-md-3 col-sm-6",key:e},n.a.createElement("div",{className:"live-camera"},n.a.createElement("figure",{className:"live-camera-cover"},n.a.createElement("img",{src:"images/live-camera-1.jpg",alt:""})),n.a.createElement("h3",{className:"location"},e),n.a.createElement("small",{className:"date"})))}))))))};var f=function(){return n.a.createElement("footer",{className:"site-footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8"},n.a.createElement("form",{action:"#",className:"subscribe-form"},n.a.createElement("input",{type:"text",placeholder:"Enter your email to subscribe..."}),n.a.createElement("input",{type:"submit",value:"Subscribe"})))),n.a.createElement("center",null,n.a.createElement("p",{className:"colophon"},"Copyright 2020 PreMEST - Weather App Project."),n.a.createElement("p",{className:"colophon"},"Designed by Arnold Kofi  ",n.a.createElement("em",null,"(Nitro)"),". All rights reserved"))))},b=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"forecast-table"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"forecast-container"},n.a.createElement("div",{className:"today forecast"},n.a.createElement("div",{className:"forecast-header"},n.a.createElement("div",{className:"day"},this.props.getWeatherLocation.localtime),n.a.createElement("div",{className:"date"}," ")),n.a.createElement("div",{className:"forecast-content"},n.a.createElement("div",{className:"location"}," ",this.props.getWeatherLocation.name,", ",this.props.getWeatherLocation.country," "),n.a.createElement("div",{className:"degree"},n.a.createElement("div",{className:"num"},this.props.getWeatherCurrent.temperature,n.a.createElement("sup",null,"o"),"C"),n.a.createElement("div",{className:"forecast-icon"},n.a.createElement("img",{src:"images/icons/icon-1.svg",alt:"",width:"90"}))))),n.a.createElement("div",{className:"forecast"},n.a.createElement("div",{className:"forecast-header"},n.a.createElement("div",{className:"day"},"Weather Details")),n.a.createElement("div",{className:"location"},n.a.createElement("div",{className:"forecast-icon"},n.a.createElement("img",{src:"images/icons/icon-3.svg",alt:"",width:"48"})),n.a.createElement("p",{className:"detail-title"},"Rainfall: ",n.a.createElement("img",{src:"images/icon-umberella.png",alt:""})," ",this.props.getWeatherCurrent.precip),n.a.createElement("p",{className:"detail-title"},"Wind Speed: ",n.a.createElement("img",{src:"images/icon-wind.png",alt:""}),this.props.getWeatherCurrent.wind_speed,"km/h"),n.a.createElement("p",{className:"detail-title"},"Wind Rirection: ",n.a.createElement("img",{src:"images/icon-compass.png",alt:""}),this.props.getWeatherCurrent.wind_dir),n.a.createElement("p",{className:"detail-title"},"Pressure: ",n.a.createElement("img",{src:"images/icon-compass.png",alt:""}),this.props.getWeatherCurrent.pressure),n.a.createElement("p",{className:"detail-title"},"Cloudcover: ",n.a.createElement("img",{src:"images/icon-compass.png",alt:""}),this.props.getWeatherCurrent.cloudcover))),n.a.createElement("div",{className:"forecast"},n.a.createElement("div",{className:"forecast-header"},n.a.createElement("div",{className:"day"},"Location Details ")),n.a.createElement("div",{className:""},n.a.createElement("div",{className:"forecast-icon"},n.a.createElement("img",{src:"images/icons/icon-3.svg",alt:"",width:"48"})),n.a.createElement("p",{className:"detail-title"},"Time Zone: ",n.a.createElement("img",{to:"./images/icon-umberella.png",alt:""})," ",this.props.getWeatherLocation.timezone_id),n.a.createElement("p",{className:"detail-title"},"Latitude:",n.a.createElement("img",{src:"images/icon-wind.png",alt:""}),this.props.getWeatherLocation.lat,n.a.createElement("sup",null,"o")),n.a.createElement("p",{className:"detail-title"},"Longitude: ",n.a.createElement("img",{src:"images/icon-compass.png",alt:""}),this.props.getWeatherLocation.lon,n.a.createElement("sup",null,"o")),n.a.createElement("p",{className:"detail-title"},"Region: ",n.a.createElement("img",{src:"images/icon-compass.png",alt:""}),this.props.getWeatherLocation.region),n.a.createElement("p",{className:"detail-title"},"Local Time: ",n.a.createElement("img",{src:"images/icon-compass.png",alt:""}),this.props.getWeatherLocation.localtime))))))}}]),t}(n.a.Component),W=t(29),S=t.n(W),y=(t(55),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).getWeather=function(){var a=""===e.state.value||void 0===e.state.value?"Accra":e.state.value;S.a.get("getWeather/"+a).then((function(t){console.log(t),!1===t.data.success?(E.a.fire("Invalid Request","your location <b>"+a+"</b> is invalid"),e.setState({value:"Accra"})):e.setState({getWeatherLocation:t.data.location,getWeatherCurrent:t.data.current})}))},e.handleSubmit=function(a){a.preventDefault();var t=a.target[0].value;e.setState({value:t})},e.recordRecentSearch=function(){console.log(e.state.recentSearch),e.state.recentSearch.length<5&&-1!==e.state.recentSearch.indexOf(e.state.value)&&e.setState({recentSearch:[].concat(Object(s.a)(e.state.recentSearch),[e.state.value])})},e.state={value:"Accra",getWeatherLocation:[],getWeatherCurrent:[],recentSearch:["Accra"],isLoading:!0},e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e.getWeather=e.getWeather.bind(Object(m.a)(e)),e.recordRecentSearch=e.recordRecentSearch.bind(Object(m.a)(e)),e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoading:!1})}),2500),this.getWeather()}},{key:"componentDidUpdate",value:function(e,a){this.state.value!==a.value&&(this.setState({value:this.state.value}),this.getWeather(),this.recordRecentSearch())}},{key:"render",value:function(){var e=this;return n.a.createElement(h.a,null,n.a.createElement(v,null),n.a.createElement("div",{className:"hero form-bg"},n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:this.handleSubmit,name:"SearchForm",className:"find-location"},n.a.createElement("input",{type:"text",name:"town",placeholder:"Find your location...",required:!0}),n.a.createElement("input",{type:"submit",value:"Find Location"})))),this.state.isLoading?n.a.createElement("center",null,n.a.createElement("h1",null,"Loading...")):n.a.createElement(p.a,{exact:!0,path:"/",component:function(){return n.a.createElement(b,{getWeatherLocation:e.state.getWeatherLocation,getWeatherCurrent:e.state.getWeatherCurrent})}}),n.a.createElement(N,{recentList:this.state.recentSearch}),n.a.createElement(f,null))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9c783918.chunk.js.map