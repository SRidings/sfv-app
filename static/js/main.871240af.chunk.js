(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports=[{id:1,image:"https://vignette.wikia.nocookie.net/streetfighter/images/4/46/Ryurender.png/revision/latest/scale-to-width-down/350?cb=20170728171704",clicked:!1},{id:2,image:"https://vignette.wikia.nocookie.net/streetfighter/images/b/bc/Birdierender.png/revision/latest/scale-to-width-down/350?cb=20170728163110",clicked:!1},{id:3,image:"https://vignette.wikia.nocookie.net/streetfighter/images/1/19/Cammyrender.png/revision/latest/scale-to-width-down/350?cb=20170728163129",clicked:!1},{id:4,image:"https://vignette.wikia.nocookie.net/streetfighter/images/b/b1/Dhalsimrender.png/revision/latest/scale-to-width-down/350?cb=20170728164253",clicked:!1},{id:5,image:"https://vignette.wikia.nocookie.net/streetfighter/images/6/63/Fangrender.png/revision/latest/scale-to-width-down/350?cb=20170728164150",clicked:!1},{id:6,image:"https://vignette.wikia.nocookie.net/streetfighter/images/c/c1/Karinrender.png/revision/latest/scale-to-width-down/350?cb=20170728171306",clicked:!1},{id:7,image:"https://vignette.wikia.nocookie.net/streetfighter/images/b/b4/Kenrender.png/revision/latest/scale-to-width-down/350?cb=20170728171332",clicked:!1},{id:8,image:"https://vignette.wikia.nocookie.net/streetfighter/images/7/76/Laurarender.png/revision/latest/scale-to-width-down/350?cb=20170728171412f",clicked:!1},{id:9,image:"https://vignette.wikia.nocookie.net/streetfighter/images/1/17/Bisonrender.png/revision/latest/scale-to-width-down/350?cb=20170728171523",clicked:!1},{id:10,image:"https://vignette.wikia.nocookie.net/streetfighter/images/5/5f/Nashrender.png/revision/latest/scale-to-width-down/350?cb=20170728163805",clicked:!1},{id:11,image:"https://vignette.wikia.nocookie.net/streetfighter/images/4/41/Necallirender.png/revision/latest/scale-to-width-down/350?cb=20170728171606",clicked:!1},{id:12,image:"https://vignette.wikia.nocookie.net/streetfighter/images/f/f4/Mikarender.png/revision/latest/scale-to-width-down/350?cb=20170728171627",clicked:!1},{id:13,image:"https://vignette.wikia.nocookie.net/streetfighter/images/0/05/Rashidrender.png/revision/latest/scale-to-width-down/350?cb=20170728171646",clicked:!1},{id:14,image:"https://vignette.wikia.nocookie.net/streetfighter/images/b/bf/Vegarender.png/revision/latest/scale-to-width-down/350?cb=20170728171753",clicked:!1},{id:15,image:"https://vignette.wikia.nocookie.net/streetfighter/images/8/88/Zangiefrender.png/revision/latest/scale-to-width-down/350?cb=20170728171808",clicked:!1}]},,,,,,,,function(e,t,i){e.exports=i(27)},,,,,function(e,t,i){},,function(e,t,i){},,function(e,t,i){},,function(e,t,i){},,function(e,t,i){},,function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(4),c=i.n(r),o=i(5),l=i(6),s=i(8),d=i(7),h=i(9),g=(i(15),function(e){return a.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.name,src:e.image})))}),m=(i(17),function(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",{className:"brand animated lightSpeedIn"},a.a.createElement("a",{href:"/sfv-app/"},"Street Fighter Clicky Game")),a.a.createElement("li",{id:"rw"},e.rightWrong),a.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),a.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),u=(i(19),function(e){return a.a.createElement("div",{className:"wrapper"},e.children)}),f=(i(21),function(e){return a.a.createElement("h1",{className:"title"},e.children)}),k=function(e){return a.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},p=function(e){return a.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},w=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return a.a.createElement("div",{className:t},e.children)},v=i(2);i(23);var b=function(e){function t(){var e,i;Object(o.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(i=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={friends:v,currentScore:0,topScore:0,rightWrong:"",clicked:[]},i.handleClick=function(e){-1===i.state.clicked.indexOf(e)?(i.handleIncrement(),i.setState({clicked:i.state.clicked.concat(e)})):i.handleReset()},i.handleIncrement=function(){var e=i.state.currentScore+1;i.setState({currentScore:e,rightWrong:"You clicked a character you haven't already!"}),e>=i.state.topScore?i.setState({topScore:e}):12===e&&i.setState({rightWrong:"You win!"}),i.handleShuffle()},i.handleReset=function(){i.setState({currentScore:0,topScore:i.state.topScore,rightWrong:"You clicked the same character twice! Try again!",clicked:[]}),i.handleShuffle()},i.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),n=[e[i],e[t]];e[t]=n[0],e[i]=n[1]}return e}(v);i.setState({friends:e})},i}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(u,null,a.a.createElement(m,{title:"Street Fighter V Clicky Game",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),a.a.createElement(f,null,"Click on a character, and earn more points for clicking characters you haven't already. Try to beat your high score!"),a.a.createElement(k,null,a.a.createElement(p,null,this.state.friends.map(function(t){return a.a.createElement(w,{size:"md-3 sm-6"},a.a.createElement(g,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))))}}]),t}(n.Component);i(25);c.a.render(a.a.createElement(b,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.871240af.chunk.js.map
