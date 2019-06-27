(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return c}),a.d(t,"rightToc",function(){return s}),a.d(t,"default",function(){return d});a(0);var n=a(133),o=a(134),i=a.n(o);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c={title:"Overview"},s=[{value:"Automatic reuse",id:"automatic-reuse",children:[]},{value:"Scroll performance",id:"scroll-performance",children:[]},{value:"The data sources",id:"the-data-sources",children:[{value:"CKDataSource",id:"ckdatasource",children:[]},{value:"CKCollectionViewTransactionalDataSource",id:"ckcollectionviewtransactionaldatasource",children:[]}]}],b={rightToc:s},p="wrapper";function d(e){var t=e.components,a=l(e,["components"]);return Object(n.b)(p,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"ComponentKit really shines when used with a ",Object(n.b)("inlineCode",{parentName:"p"},"UICollectionView"),"."),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"automatic-reuse"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#automatic-reuse"}),"#"),"Automatic reuse"),Object(n.b)("p",null,"Who hasn't had bugs with cell reuse? In ComponentKit, the declarative nature of a Component makes it so you don't have to worry about reuse anymore! ",Object(n.b)("a",r({parentName:"p"},{href:"http://www.objc.io/issue-22/facebook.html"}),"This article in objc.io")," explains in great detail how we achieve ",Object(n.b)("strong",{parentName:"p"},"automatic reuse and reconfiguration")," with ComponentKit."),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"scroll-performance"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#scroll-performance"}),"#"),"Scroll performance"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"ComponentKit addresses common scroll performance issues holistically"),". Putting cells on screen is usually very performance sensitive. Cells are dequeued during scrolling, so any frame drop will be immediately visible."),Object(n.b)("p",null,"Automatic and optimized reuse is already great for performance. But also, because generating a component and laying it out is just a ",Object(n.b)("strong",{parentName:"p"},"succession of pure functions working with immutable data")," this operation can be very ",Object(n.b)("strong",{parentName:"p"},"easily moved to the background"),"."),Object(n.b)("p",null,"As a result, the list view infrastructure provided by ComponentKit only spends a minimal amount of time in the main thread. No more stutters due to complex view hierarchies or expensive text layout!"),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"the-data-sources"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#the-data-sources"}),"#"),"The data sources"),Object(n.b)("p",null,"ComponentKit includes a standard data source stack dedicated to render components directly in a ",Object(n.b)("inlineCode",{parentName:"p"},"UICollectionView"),", and with a bit more effort, in a ",Object(n.b)("inlineCode",{parentName:"p"},"UITableView"),"."),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"ckdatasource"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#ckdatasource"}),"#"),"CKDataSource"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"CKDataSource")," is at the core of the list view infrastructure. Instances of this class are agnostic to the ",Object(n.b)("inlineCode",{parentName:"p"},"UICollectionView")," API. The role of a ",Object(n.b)("inlineCode",{parentName:"p"},"CKDataSource")," is to:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Take as input changesets containing commands and models.\n","*",'e.g: "Insert at index 0 in section 1 the item representing ModelA".'),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Generate and layout in the background")," the components associated to those changes."),Object(n.b)("li",{parentName:"ol"},"Output a changeset along with handles to the generated components so that it can be used with a ",Object(n.b)("inlineCode",{parentName:"li"},"UITableView")," or a ",Object(n.b)("inlineCode",{parentName:"li"},"UICollectionView"))),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"ckcollectionviewtransactionaldatasource"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#ckcollectionviewtransactionaldatasource"}),"#"),"CKCollectionViewTransactionalDataSource"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"CKCollectionViewTransactionalDataSource")," is a thin wrapper around ",Object(n.b)("inlineCode",{parentName:"p"},"CKDataSource")," that implements the ",Object(n.b)("inlineCode",{parentName:"p"},"UICollectionViewDataSource")," API."),Object(n.b)("p",null,"It can be used to easily bootstrap a ",Object(n.b)("inlineCode",{parentName:"p"},"UICollectionView")," using components. See how to ",Object(n.b)("a",r({parentName:"p"},{href:"datasource-basics"}),"display components in a collection view.")),Object(n.b)("h4",null,Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"philosophy"})),Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#philosophy"}),"#"),"Philosophy"),Object(n.b)("p",null,"The UIKit way to add content to a collection view is:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Tell the ",Object(n.b)("inlineCode",{parentName:"li"},"UICollectionView")," to add/insert/update rows or sections."),Object(n.b)("li",{parentName:"ol"},"Synchronously, the ",Object(n.b)("inlineCode",{parentName:"li"},"UICollectionView")," asks its data source for number of rows, sections and layout info."),Object(n.b)("li",{parentName:"ol"},"Depending on whether or not the updated index paths are visible the ",Object(n.b)("inlineCode",{parentName:"li"},"UICollectionView")," will synchronously call ",Object(n.b)("inlineCode",{parentName:"li"},"cellForItemAtIndexPath:"),"."),Object(n.b)("li",{parentName:"ol"},"Finally, the data source returns a configured cell for this index path.")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"CKCollectionViewTransactionalDataSource"),' uses an idiom that is more "reactive":'),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Tell the ",Object(n.b)("inlineCode",{parentName:"li"},"CKCollectionViewTransactionalDataSource")," to add/insert/update rows or sections."),Object(n.b)("li",{parentName:"ol"},"Asynchronously, and in the background, computes the corresponding components."),Object(n.b)("li",{parentName:"ol"},"When the computation is done, apply the changes to the ",Object(n.b)("inlineCode",{parentName:"li"},"UICollectionView"),".")),Object(n.b)("p",null,"Conceptually, we now have a one directional data flow. Obviously the back and forth between the ",Object(n.b)("inlineCode",{parentName:"p"},"UICollectionView")," and the ",Object(n.b)("inlineCode",{parentName:"p"},"CKCollectionViewTransactionalDataSource")," still happens but it is now hidden."),Object(n.b)("img",{src:i()("assets/datasource-overview.png"),alt:"CKCollectionViewTransactionalDataSource overview",width:"518",height:"180"}))}d.isMDXComponent=!0}}]);