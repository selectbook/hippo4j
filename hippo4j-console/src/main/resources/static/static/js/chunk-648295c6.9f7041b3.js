(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-648295c6"],{"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,n){var a=r(),i=t-a,s=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=s;var r=Math.easeInOutQuad(u,a,i,e);o(r),u<e?l(t):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(n("e498"),n("2877")),p=Object(d["a"])(c,a,i,!1,null,"6af373ef",null);e["a"]=p.exports},3557:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"租户ID"},model:{value:t.listQuery.tenantId,callback:function(e){t.$set(t.listQuery,"tenantId",e)},expression:"listQuery.tenantId"}}),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.fetchData}},[t._v("\n      搜索\n    ")]),t._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{disabled:t.isEditDisabled,type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("\n      添加\n    ")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"highlight-current-row":"","element-loading-text":"Loading","highlight-current-row":"",stripe:""}},[n("el-table-column",{attrs:{label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"租户ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.tenantId))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"租户名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.tenantName))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"租户简介"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.tenantDesc))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"OWNER"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.owner)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.gmtCreate))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"修改时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.gmtModified))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"100","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{attrs:{type:"text",disabled:t.isEditDisabled,size:"small"},on:{click:function(e){return t.handleUpdate(a)}}},[t._v("\n          编辑\n        ")]),t._v(" "),n("el-button",{attrs:{size:"small",disabled:t.isEditDisabled,type:"text"},on:{click:function(e){return t.handleDelete(a)}}},[t._v("\n          删除\n        ")])]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.listQuery.current,limit:t.listQuery.size},on:{"update:page":function(e){return t.$set(t.listQuery,"current",e)},"update:limit":function(e){return t.$set(t.listQuery,"size",e)},pagination:t.fetchData}}),t._v(" "),n("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,width:"800px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:"租户ID",prop:"tenantId"}},[n("el-input",{staticStyle:{width:"40%"},attrs:{disabled:"create"!==t.dialogStatus,placeholder:"租户ID"},model:{value:t.temp.tenantId,callback:function(e){t.$set(t.temp,"tenantId",e)},expression:"temp.tenantId"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"租户名称",prop:"tenantName"}},[n("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"租户名称"},model:{value:t.temp.tenantName,callback:function(e){t.$set(t.temp,"tenantName",e)},expression:"temp.tenantName"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"OWNER",prop:"owner"}},[n("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"OWNER"},model:{value:t.temp.owner,callback:function(e){t.$set(t.temp,"owner",e)},expression:"temp.owner"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"租户描述",prop:"tenantDesc"}},[n("el-input",{staticStyle:{width:"40%"},attrs:{autosize:{minRows:3,maxRows:6},type:"textarea",placeholder:"租户描述"},model:{value:t.temp.tenantDesc,callback:function(e){t.$set(t.temp,"tenantDesc",e)},expression:"temp.tenantDesc"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("\n        取消\n      ")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("\n        确认\n      ")])],1)],1),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogPluginVisible,title:"Reading statistics"},on:{"update:visible":function(e){t.dialogPluginVisible=e}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pluginData,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"key",label:"Channel"}}),t._v(" "),n("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v("Confirm")])],1)],1)],1)},i=[],l=n("dd71"),o=n("6724"),r=n("333d"),s={name:"JobProject",components:{Pagination:r["a"]},directives:{waves:o["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]},ellipsis:function(t){return t?t.length>26?t.slice(0,26)+"...":t:""}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,tenantId:""},pluginTypeOptions:["reader","writer"],dialogPluginVisible:!1,pluginData:[],isEditDisabled:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{tenantId:[{required:!0,message:"this is required",trigger:"blur"}],tenantName:[{required:!0,message:"this is required",trigger:"blur"}],owner:[{required:!0,message:"this is required",trigger:"blur"}],tenantDesc:[{required:!0,message:"this is required",trigger:"blur"}]},temp:{id:void 0,tenantId:"",tenantName:"",owner:"",tenantDesc:""},visible:!0}},created:function(){this.fetchData()},mounted:function(){this.isEditDisabled="admin"!==this.$cookie.get("userName")},methods:{fetchData:function(){var t=this;this.listLoading=!0,l["c"](this.listQuery).then((function(e){var n=e.records,a=e.total;t.total=a,t.list=n,t.listLoading=!1}))},resetTemp:function(){this.temp={id:void 0,tenantName:"",tenantDesc:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&l["a"](t.temp).then((function(){t.fetchData(),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))}))},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var n=Object.assign({},t.temp);l["d"](n).then((function(){t.fetchData(),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},openDelConfirm:function(t){return this.$confirm("此操作将删除 ".concat(t,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})},handleDelete:function(t){var e=this;this.openDelConfirm(t.tenantId).then((function(){l["b"](t.tenantId).then((function(t){e.fetchData(),e.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))}))}}},u=s,c=n("2877"),d=Object(c["a"])(u,a,i,!1,null,null,null);e["default"]=d.exports},6724:function(t,e,n){"use strict";n("8d41");var a="@@wavesContext";function i(t,e){function n(n){var a=Object.assign({},e.value),i=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),l=i.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),r=l.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",l.appendChild(r)),i.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(n.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(n.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=i.color,r.className="waves-ripple z-active",!1}}return t[a]?t[a].removeHandle=n:t[a]={removeHandle:n},n}var l={bind:function(t,e){t.addEventListener("click",i(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[a].removeHandle,!1),t.addEventListener("click",i(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[a].removeHandle,!1),t[a]=null,delete t[a]}},o=function(t){t.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(o)),l.install=o;e["a"]=l},7456:function(t,e,n){},"8d41":function(t,e,n){},dd71:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var a=n("b775");function i(t){return Object(a["a"])({url:"/hippo4j/v1/cs/tenant/query/page",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/hippo4j/v1/cs/tenant/update",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/hippo4j/v1/cs/tenant/save",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/hippo4j/v1/cs/tenant/delete/"+t,method:"delete"})}},e498:function(t,e,n){"use strict";n("7456")}}]);