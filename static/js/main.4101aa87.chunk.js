(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(7),r=a.n(s),c=(a(17),a(3));var i=class extends n.Component{render(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light"}," ",l.a.createElement("div",{className:"container-fluid"},l.a.createElement(c.b,{className:"navbar-brand",to:"/"},"NewsMonkey"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link",to:"/business",activeClassName:"active"},"Business")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link",to:"/entertainment",activeClassName:"active"},"Entertainment")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link",to:"/general",activeClassName:"active"},"General")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link",to:"/health",activeClassName:"active"},"Health")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link",to:"/science",activeClassName:"active"},"Science")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link",to:"/sports",activeClassName:"active"},"Sports")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{className:"nav-link",to:"/technology",activeClassName:"active"},"Technology"))))))}};var o=class extends n.Component{render(){let{title:e,description:t,imageUrl:a,newsUrl:n,author:s,date:r,source:c}=this.props;return l.a.createElement("div",{className:"my-3"},l.a.createElement("div",{className:"card",style:{width:"100%",height:"100%"}},l.a.createElement("span",{className:"position-absolute top-0 translate-middle badge rounded-pill bg-danger",style:{left:"88%",zIndex:"1"}},c),l.a.createElement("img",{src:a||"path/to/fallback-image.jpg",className:"card-img-top",alt:e,style:{height:"200px",objectFit:"cover"}}),l.a.createElement("div",{className:"card-body d-flex flex-column"},l.a.createElement("h5",{className:"card-title",style:{flex:"1"}},e),l.a.createElement("p",{className:"card-text",style:{flex:"1"}},t,"..."),l.a.createElement("p",{className:"card-text"},l.a.createElement("small",{className:"text-body-secondary"},"by ",s||"unknown"," on"," ",new Date(r).toGMTString())),l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn btn-sm btn-primary"},"Read More"))))}},m=a(8),p=a.n(m);var d=class extends n.Component{render(){return l.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh"}},l.a.createElement("img",{src:p.a,alt:"Loading..."}))}};class g extends n.Component{constructor(){var e;super(),e=this,this.fetchArticles=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.setState({loading:!0});const a=`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${e.props.country}&category=${e.props.category}&apiKey=YOUR_ACTUAL_API_KEY&page=${t}&pageSize=${e.props.pageSize}`;console.log("Fetching articles from:",a);try{let l=await fetch(a);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);let s=await l.json();e.setState({articles:s.articles,totalResults:s.totalResults,loading:!1,page:t})}catch(n){console.error("Error fetching articles:",n),e.setState({loading:!1}),alert("Failed to fetch news articles. Please try again later.")}},this.handlePre=(()=>{const e=this.state.page-1;e>0&&this.fetchArticles(e)}),this.handleNext=(()=>{const e=this.state.page+1;e<=Math.ceil(this.state.totalResults/this.props.pageSize)&&this.fetchArticles(e)}),this.state={articles:[],loading:!1,page:1,totalResults:0,error:null}}async componentDidMount(){this.fetchArticles()}render(){const{loading:e,articles:t,page:a,totalResults:n,error:s}=this.state;return l.a.createElement("div",{className:"container my-3"},l.a.createElement("h1",{className:"text-center",style:{margin:"40px 0px"}},"NewsMonkey - Top Headlines"),e&&l.a.createElement(d,null),s&&l.a.createElement("div",{className:"alert alert-danger"},s),l.a.createElement("div",{className:"row"},!e&&0===t.length&&!s&&l.a.createElement("div",{className:"text-center"},"No articles found!"),!e&&t.map(e=>l.a.createElement("div",{className:"col-md-4 col-sm-8",key:e.url},l.a.createElement(o,{title:e.title?e.title.slice(0,45):"",description:e.description?e.description.slice(0,88):"",imageUrl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt,source:e.source.name})))),l.a.createElement("div",{className:"container d-flex justify-content-between"},l.a.createElement("button",{disabled:a<=1,type:"button",className:"btn btn-dark",onClick:this.handlePre},"\u2190 Previous"),l.a.createElement("button",{disabled:a>=Math.ceil(n/this.props.pageSize),type:"button",className:"btn btn-dark",onClick:this.handleNext},"Next \u2192")))}}g.defaultProps={country:"us",pageSize:8,category:"science"};var u=g,h=(a(6),a(2));class E extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement(c.a,null,l.a.createElement(i,null),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/",element:l.a.createElement(u,{key:"home",pageSize:6,country:"us",category:"general"})}),l.a.createElement(h.a,{path:"/business",element:l.a.createElement(u,{key:"business",pageSize:6,country:"us",category:"business"})}),l.a.createElement(h.a,{path:"/entertainment",element:l.a.createElement(u,{key:"entertainment",pageSize:6,country:"us",category:"entertainment"})}),l.a.createElement(h.a,{path:"/general",element:l.a.createElement(u,{key:"general",pageSize:6,country:"us",category:"general"})}),l.a.createElement(h.a,{path:"/health",element:l.a.createElement(u,{key:"health",pageSize:6,country:"us",category:"health"})}),l.a.createElement(h.a,{path:"/science",element:l.a.createElement(u,{key:"science",pageSize:6,country:"us",category:"science"})}),l.a.createElement(h.a,{path:"/sports",element:l.a.createElement(u,{key:"sports",pageSize:6,country:"us",category:"sports"})}),l.a.createElement(h.a,{path:"/technology",element:l.a.createElement(u,{key:"technology",pageSize:6,country:"us",category:"technology"})}))))}}var v=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:s,getTTFB:r}=t;a(e),n(e),l(e),s(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null))),v()},8:function(e,t,a){e.exports=a.p+"static/media/loader.ce797770.gif"},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.4101aa87.chunk.js.map