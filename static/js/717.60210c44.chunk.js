"use strict";(self.webpackChunkreact_app_01=self.webpackChunkreact_app_01||[]).push([[717],{3717:function(e,s,n){n.r(s),n.d(s,{default:function(){return F}});var r=n(5671),t=n(3144),o=n(136),i=n(5716),a=n(2791),l=n(8687),u="Users_avatar__YVbUt",c="Users_activeTab__YjPo5",p="Users_tab__38yuL",d="Users_cell__VPZ0j",g="Users_arrowBtn__iXA1n",h=n(8137),f=n(3504),j=n(184),x=function(e){var s=e.pages,n=e.currentPage,r=e.updateCurrentPage,t=n,o=t-5<0?0:t+5>s.length?s.length-10:t-5,i=t-5<0?10:t+5>s.length?s.length:t+5,a=s.slice(o,i);return(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:(0,j.jsx)("button",{className:g,disabled:1===n,onClick:function(){return r(1)},children:"<<"})}),(0,j.jsx)("span",{children:(0,j.jsx)("button",{className:g,disabled:1===n,onClick:function(){return r(t-1)},children:"<"})}),a.map((function(e){return(0,j.jsx)("span",{onClick:function(){return r(e)},className:"".concat(p),children:(0,j.jsx)("span",{className:"".concat(d," ").concat(n===e&&c," "),children:e})})})),(0,j.jsx)("span",{children:(0,j.jsx)("button",{className:g,disabled:n===s.length,onClick:function(){return r(t+1)},children:">"})}),(0,j.jsx)("span",{children:(0,j.jsx)("button",{className:g,disabled:n===s.length,onClick:function(){return r(s.length)},children:">>"})})]})},P=function(e){for(var s=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=s;r++)n.push(r);return(0,j.jsxs)("div",{children:[(0,j.jsx)(x,{pages:n,currentPage:e.currentPage,updateCurrentPage:e.updateCurrentPage}),e.usersData.map((function(s){return(0,j.jsxs)("span",{children:[(0,j.jsxs)("span",{children:[(0,j.jsx)("div",{children:(0,j.jsx)(f.OL,{to:"/profile/"+s.id,children:(0,j.jsx)("img",{className:u,src:null!=s.photos.small?s.photos.small:h,alt:"img"})})}),(0,j.jsx)("div",{children:s.followed?(0,j.jsx)("button",{disabled:e.followingElements.some((function(e){return e===s.id})),onClick:function(){e.unfollowUser(s.id)},children:"Unfollow"}):(0,j.jsx)("button",{disabled:e.followingElements.some((function(e){return e===s.id})),onClick:function(){e.followUser(s.id)},children:"Follow"})})]}),(0,j.jsxs)("span",{children:[(0,j.jsxs)("span",{children:[(0,j.jsx)("div",{children:s.name}),(0,j.jsx)("div",{children:s.status})]}),(0,j.jsxs)("span",{children:[(0,j.jsx)("div",{children:"el.location.city"}),(0,j.jsx)("div",{children:"el.location.country"})]})]})]})})),(0,j.jsx)("br",{}),(0,j.jsx)("button",{onClick:e.getFriends,children:"Get friends"}),(0,j.jsx)("div",{children:e.friendsData.map((function(e){return(0,j.jsx)("span",{children:e.id+" "})}))})]})},U=n(946),m=n(1044),w=n(1628),C=n(6713),_=n(1548),b=n(6916),v=function(e){return e.usersPage},k=((0,b.P1)(v,(function(e){return e})),function(e){(0,o.Z)(n,e);var s=(0,i.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=s.call.apply(s,[this].concat(o))).loadUserPage=function(s){m.Z.get("https://social-network.samuraijs.com/api/1.0/users?page="+s).then((function(s){e.props.setUsers(s.data.items)}))},e.loadMoreUsers=function(){m.Z.get("https://social-network.samuraijs.com/api/1.0/users?page="+e.props.usersPage.currentPage).then((function(s){e.props.setUsers(s.data.items)}))},e.updateCurrentPage=function(s){e.props.setCurrentPage(s),e.props.getUsers(e.props.usersPage.pageSize,s)},e.getFriends=function(){(0,C.Cm)().then((function(s){e.props.setFriends(s.items)}))},e}return(0,t.Z)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.usersPage.pageSize,this.props.usersPage.currentPage)}},{key:"render",value:function(){return(0,j.jsxs)(j.Fragment,{children:[this.props.usersPage.isFetching?(0,j.jsx)(w.Z,{}):null,(0,j.jsx)(P,{totalUsersCount:this.props.usersPage.totalUsersCount,pageSize:this.props.usersPage.pageSize,currentPage:this.props.usersPage.currentPage,updateCurrentPage:this.updateCurrentPage,usersData:this.props.usersPage.usersData,setUnfollow:this.props.setUnfollow,setFollow:this.props.setFollow,friendsData:this.props.usersPage.friendsData,getFriends:this.getFriends,setFollowingInProgress:this.props.setFollowingInProgress,followingElements:this.props.usersPage.followingElements,getUsers:this.props.getUsers,followUser:this.props.followUser,unfollowUser:this.props.unfollowUser})]})}}]),n}(a.Component)),F=(0,l.$j)((function(e){return{usersPage:v(e)}}),{setFollow:U.fj,setUnfollow:U.QS,setUsers:U.K_,setUsersTotalCount:U.Eu,setCurrentPage:U._Y,toggleFetching:U.Ks,setFriends:U.Wu,setFollowingInProgress:U.KV,getUsers:U.Uk,followUser:U.V1,unfollowUser:U.gJ})((0,_.D)(k))}}]);
//# sourceMappingURL=717.60210c44.chunk.js.map