(this["webpackJsonpbasic-ts"]=this["webpackJsonpbasic-ts"]||[]).push([[0],{140:function(e,t){},142:function(e,t){},152:function(e,t){},154:function(e,t){},181:function(e,t){},183:function(e,t){},184:function(e,t){},189:function(e,t){},191:function(e,t){},197:function(e,t){},199:function(e,t){},218:function(e,t){},230:function(e,t){},233:function(e,t){},237:function(e,t,l){"use strict";l.r(t);var n=l(3),i=l.n(n),s=l(127),a=l.n(s),c=l(36),o=l(43),r=l(28),d=l(17),h=l(72),u=l(71),j=l(129),p=l(29),b=l(30),R=l(73),x=l(239),O=l(0),f=function(e){for(var t=[],l=0,n=function(n){var i=e.diceCounts.get(n)||0;l+=i;var s=e.isExactResult?i:l,a=e.isExactResult?"s":"+",c=void 0!==e.pipsToReroll&&e.pipsToReroll.has(n),o=e.isExactResult?Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"checkbox",id:"reroll"+n,checked:c,onChange:function(){void 0!==e.pipsToRerollChangeHandler&&e.pipsToRerollChangeHandler(n,!c)}})}):Object(O.jsx)(O.Fragment,{});n<=e.displayMax&&t.push(Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[n,a]}),Object(O.jsx)("td",{children:s}),o]},n))},i=6;i>=e.displayMin;i--)n(i);t.reverse();var s=e.isExactResult?"Exact":"Stat",a=e.isExactResult?Object(O.jsx)("th",{children:"Reroll?"}):Object(O.jsx)(O.Fragment,{});return Object(O.jsxs)(x.a,{striped:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:s}),Object(O.jsx)("th",{children:"Qty"}),a]})}),Object(O.jsx)("tbody",{children:t})]})},C=l(70),y=l(128),v=(i.a.Component,function(e){Object(h.a)(l,e);var t=Object(u.a)(l);function l(e){var n;return Object(r.a)(this,l),(n=t.call(this,e)).state={rng:new C.b(C.a.autoSeed()),diceQuantity:600,rolledDiceCounts:new Map,pipsToReroll:new Set},n.handleRollClick=n.handleRollClick.bind(Object(d.a)(n)),n.handleRerollClick=n.handleRerollClick.bind(Object(d.a)(n)),n.handleDiceQuantityChange=n.handleDiceQuantityChange.bind(Object(d.a)(n)),n.handlePipsToRerollChange=n.handlePipsToRerollChange.bind(Object(d.a)(n)),n}return Object(c.a)(l,[{key:"randomRollResult",value:function(e,t){var l,n=e.dice(6,t),i=new Map,s=Object(o.a)(n);try{for(s.s();!(l=s.n()).done;){var a=l.value;i.set(a,(i.get(a)||0)+1)}}catch(c){s.e(c)}finally{s.f()}return i}},{key:"combineRollResults",value:function(e,t){var l,n=y.union(Array.from(e.keys()),Array.from(t.keys())),i=new Map,s=Object(o.a)(n);try{for(s.s();!(l=s.n()).done;){var a,c,r=l.value;i.set(r,(null!==(a=e.get(r))&&void 0!==a?a:0)+(null!==(c=t.get(r))&&void 0!==c?c:0))}}catch(d){s.e(d)}finally{s.f()}return i}},{key:"handleDiceQuantityChange",value:function(e){this.setState({diceQuantity:e.target.value})}},{key:"handleRollClick",value:function(){var e=this;this.setState((function(t){return{rolledDiceCounts:e.randomRollResult(t.rng,t.diceQuantity)}}))}},{key:"handlePipsToRerollChange",value:function(e,t){this.setState((function(l){return t?l.pipsToReroll.add(e):l.pipsToReroll.delete(e),{pipsToReroll:l.pipsToReroll}}))}},{key:"handleRerollClick",value:function(){for(var e=0,t=new Map,l=1;l<=6;l++){var n,i=null!==(n=this.state.rolledDiceCounts.get(l))&&void 0!==n?n:0;this.state.pipsToReroll.has(l)?(e+=i,t.set(l,0)):t.set(l,i)}t=this.combineRollResults(t,this.randomRollResult(this.state.rng,e)),this.setState({rolledDiceCounts:t})}},{key:"render",value:function(){return Object(O.jsxs)(j.a,{className:"p-3",children:[Object(O.jsx)("h1",{className:"header",children:"MassDiceRoller"}),Object(O.jsx)(p.a,{children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)("input",{placeholder:"Dice Quantity",value:this.state.diceQuantity,onChange:this.handleDiceQuantityChange}),Object(O.jsx)(R.a,{className:"m-2",onClick:this.handleRollClick,children:"Roll"})]})}),Object(O.jsxs)(p.a,{children:[Object(O.jsx)(b.a,{children:Object(O.jsx)(f,{isExactResult:!1,displayMin:1,displayMax:3,diceCounts:this.state.rolledDiceCounts})}),Object(O.jsx)(b.a,{children:Object(O.jsx)(f,{isExactResult:!1,displayMin:4,displayMax:6,diceCounts:this.state.rolledDiceCounts})})]}),Object(O.jsxs)(p.a,{children:[Object(O.jsx)(b.a,{children:Object(O.jsx)(f,{isExactResult:!0,displayMin:1,displayMax:3,diceCounts:this.state.rolledDiceCounts,pipsToReroll:this.state.pipsToReroll,pipsToRerollChangeHandler:this.handlePipsToRerollChange})}),Object(O.jsx)(b.a,{children:Object(O.jsx)(f,{isExactResult:!0,displayMin:4,displayMax:6,diceCounts:this.state.rolledDiceCounts,pipsToReroll:this.state.pipsToReroll,pipsToRerollChangeHandler:this.handlePipsToRerollChange})})]}),Object(O.jsx)(p.a,{children:Object(O.jsx)(R.a,{className:"m-2",onClick:this.handleRerollClick,children:"Reroll"})}),Object(O.jsx)(p.a,{children:Object(O.jsx)("a",{href:"https://github.com/KatyAHG/MassDiceRoller",children:"GitHub repo"})})]})}}]),l}(i.a.Component));l(236);a.a.render(Object(O.jsx)(v,{}),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.fea51e59.chunk.js.map