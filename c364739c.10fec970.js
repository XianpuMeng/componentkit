(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{191:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return m}));var i=t(2),a=t(11),o=(t(0),t(206)),s={title:"Animation"},r={id:"animation",title:"Animation",description:"ComponentKit exposes three ways to perform animations on a component.",source:"@site/docs/animation.md",permalink:"/docs/animation"},l=[{value:"Animations on initial mount",id:"animations-on-initial-mount",children:[]},{value:"Animations froms previous component",id:"animations-froms-previous-component",children:[]},{value:"Bounds Animations from previous component",id:"bounds-animations-from-previous-component",children:[]},{value:"Notes",id:"notes",children:[]},{value:"In-depth",id:"in-depth",children:[{value:"UIKit Animations",id:"uikit-animations",children:[]}]},{value:"Animations in ComponentKit",id:"animations-in-componentkit",children:[{value:"Goals of animation support",id:"goals-of-animation-support",children:[]},{value:"What makes animations difficult in CK?",id:"what-makes-animations-difficult-in-ck",children:[]},{value:"CKComponentAnimation",id:"ckcomponentanimation",children:[]}]},{value:"Types of animations",id:"types-of-animations",children:[{value:"Initial animations",id:"initial-animations",children:[]},{value:"Lifecycle-based animations",id:"lifecycle-based-animations",children:[]},{value:"Bounds animations",id:"bounds-animations",children:[]}]}],c={rightToc:l};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ComponentKit exposes three ways to perform animations on a component."),Object(o.b)("h2",{id:"animations-on-initial-mount"},"Animations on initial mount"),Object(o.b)("p",null,"Override this method to specify how to animate the initial appearance of a component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),'- (std::vector<CKComponentAnimation>)animationsOnInitialMount\n{\n    return { {self, fadeToAppear()} };\n}\n\nstatic CAAnimation *fadeToAppear()\n{\n  CABasicAnimation *fade = [CABasicAnimation animationWithKeyPath:@"opacity"];\n  fade.fromValue = @(0);\n  fade.timingFunction = [CAMediaTimingFunction functionWithName:kCAMediaTimingFunctionEaseOut];\n  fade.duration = 0.5;\n  return fade;\n}\n')),Object(o.b)("h2",{id:"animations-froms-previous-component"},"Animations froms previous component"),Object(o.b)("p",null,"Override this method to specify how to animate between two versions of a component. Here's an example from the example app:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),'- (std::vector<CKComponentAnimation>)animationsFromPreviousComponent:(InteractiveQuoteComponent *)previousComponent\n{\n  if (previousComponent->_overlay == nil && _overlay != nil) {\n    return { {_overlay, scaleToAppear()} }; // Scale the overlay in when it appears.\n  } else {\n    return {};\n  }\n}\n\nstatic CAAnimation *scaleToAppear()\n{\n  CABasicAnimation *scale = [CABasicAnimation animationWithKeyPath:@"transform"];\n  scale.fromValue = [NSValue valueWithCATransform3D:CATransform3DMakeScale(0.0, 0.0, 0.0)];\n  scale.timingFunction = [CAMediaTimingFunction functionWithName:kCAMediaTimingFunctionEaseOut];\n  scale.duration = 0.2;\n  return scale;\n}\n')),Object(o.b)("h2",{id:"bounds-animations-from-previous-component"},"Bounds Animations from previous component"),Object(o.b)("p",null,"Override this method to specify how the top-level bounds of a component should animate inside a ",Object(o.b)("inlineCode",{parentName:"p"},"UICollectionView"),". For example, if you were implementing an expandable article component that changes its height, you could specify a spring animation for changing the cell bounds:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"- (CKComponentBoundsAnimation)boundsAnimationFromPreviousComponent:(ArticleComponent *)previousComponent\n{\n  if (previousComponent->_state == ArticleComponentStateCollapsed && _state == ArticleComponentStateExpanded) {\n    return {\n      .mode = CKComponentBoundsAnimationModeSpring,\n      .duration = 0.5,\n      .springDampingRatio = 0.7,\n      .springInitialVelocity = 1.0,\n    };\n  } else {\n    return {};\n  }\n}\n")),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"If you implement either method, your component must have a ",Object(o.b)("a",Object(i.a)({parentName:"strong"},{href:"/docs/scopes"}),"scope"),".")),Object(o.b)("p",null,"If updating your component's ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/state"}),"state")," changes it's bounds, both ",Object(o.b)("inlineCode",{parentName:"p"},"boundsAnimationFromPreviousComponent")," and ",Object(o.b)("inlineCode",{parentName:"p"},"animationsFromPreviousComponent")," will be called."),Object(o.b)("h2",{id:"in-depth"},"In-depth"),Object(o.b)("h3",{id:"uikit-animations"},"UIKit Animations"),Object(o.b)("p",null,"Engineers on iOS are used to the simple UIView block-based animations. Here\u2019s what they look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"UIView *view = ...;\n[UIView animateWithDuration:0.3 animations:^{\n    view.frame = CGRectMake(50, 50, view.frame.size.width, view.frame.size.height);\n}];\n")),Object(o.b)("p",null,"With this little bit of code, we\u2019ve taken a UIView and changed its frame\u2019s origin to be (50, 50), and animate it along a straight line to the new position. By making the change within a block, UIKit is able to record mutations to its model data and forms a transaction that it bundles into an animation for the render server lasting 300 ms. from the view\u2019s current position to its new position."),Object(o.b)("p",null,"There are all kinds of properties the developer can animate with this API: alpha, scale, rotation, Z position. Implicit animations can control their durations, easing curves, and can specify that the animated property should begin at its current display or model properties."),Object(o.b)("p",null,"This API is used for the majority of animations that you see in apps on iOS."),Object(o.b)("h4",{id:"coreanimation"},"CoreAnimation"),Object(o.b)("p",null,"CoreAnimation is the underlying rendering engine that is used on iOS and most of Mac OS to render contents on the screen using Metal. It operates in a different process from our app. It has its own representations of all the layers on the screen, and their current properties, as displayed to the user. Mutations to the views and layers inside our app get packaged into a transaction which are transmitted to the render server through a special-purpose IPC bridge."),Object(o.b)("p",null,"This architecture is largely responsible for the \u201csmoothness\u201d of iOS apps. Animations are packaged into a declaration of the intended effects, and are usually conducted on the render server directly. This means that although our main thread may be blocked, we can still animate content around the screen."),Object(o.b)("p",null,"Of course, this only works without our process\u2019 involvement if there isn\u2019t active user input that triggers the animation. For instance, scroll animations are triggered and can be interrupted at every frame by the user. This means that the animation actually has to be marshaled by the UIThread within our process, and what makes scroll performance such a difficult challenge."),Object(o.b)("h4",{id:"calayer"},"CALayer"),Object(o.b)("p",null,"UIKit uses UIView as its fundamental drawing object. This view can have child views, and manages their positioning. Views are responsible for handling touches and events, and form part of the chain of responders for things like text entry or accessibility gestures."),Object(o.b)("p",null,"These views don\u2019t really know that much about rendering though. There is the convenience drawRect: method that is exposed to subclasses of UIView, but its use is discouraged. Instead, each UIView is paired with a CALayer which actually hosts its content for consumption by the render server. These CALayers form the in-process representation of the data being displayed to the user."),Object(o.b)("h4",{id:"caanimation"},"CAAnimation"),Object(o.b)("p",null,"CAAnimation is the base-class that explicit CoreAnimation animations use to declare what effects they have on CALayers. There are a number of default animation types: property animations, basic animations, keyframe animations, spring animations, transition animations, and grouped animations. Each serves its own purpose, and can be combined together to achieve extremely complex effects."),Object(o.b)("p",null,"Animations are stringly-typed transformations which can keyframe and change any exposed property that is used by the render server to display content to the user. The use of these animations are much more verbose than the UIView variants, but they are declarative and explicit instead of implicit. Ultimately UIView implicit animations are translated into CAAnimations under the hood, so they both do the same things on the render server."),Object(o.b)("h4",{id:"pop"},"POP"),Object(o.b)("p",null,"POP was a framework we wrote for Paper which manages in-process animations using a CAAnimation-like API. It\u2019s specifically designed for user-interruptible animations that are managed using a display link which lets us alter display properties at the natural refresh rate of the screen. The use of POP animations looks almost identical to CAAnimations, but are designed from the start to be interruptible and alterable."),Object(o.b)("p",null,"Use of POP requires a free main thread since it animates the layers on what is basically a timer. If the main thread is blocked while an animation is active, the updates will just be dropped until the main thread is freed up. To the user, this means the animation stutters, frames are dropped."),Object(o.b)("h2",{id:"animations-in-componentkit"},"Animations in ComponentKit"),Object(o.b)("p",null,"Now that the basics are covered, let\u2019s talk about what we wanted to achieve with animations in ComponentKit, then we\u2019ll talk about what makes this such a difficult proposition."),Object(o.b)("h3",{id:"goals-of-animation-support"},"Goals of animation support"),Object(o.b)("p",null,"The initial goal of the animations support in ComponentKit was to allow implementation of the simple animations present in feeds of content. The API that we wanted should:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Allow animation of any view-based component."),Object(o.b)("li",{parentName:"ol"},"Allow animations in bounds changes."),Object(o.b)("li",{parentName:"ol"},"Be similar enough to standard animation practices in iOS to be familiar to iOS engineers."),Object(o.b)("li",{parentName:"ol"},"Support arbitrary animation types."),Object(o.b)("li",{parentName:"ol"},"Be managed by the framework, such that reuse errors are rare.")),Object(o.b)("h3",{id:"what-makes-animations-difficult-in-ck"},"What makes animations difficult in CK?"),Object(o.b)("p",null,"Before I dig into the internals of CKComponentAnimation and the APIs on CKComponent, let\u2019s just take a step back and understand why this is so difficult."),Object(o.b)("p",null,"CKComponent forms a declarative mapping from model to view configuration. This mapping is computed and laid out on a background thread, then the resulting transaction is applied on the main thread. Generally, you do not directly configure your views, instead you build a configuration you want applied, and views are reused for you in an optimal manner."),Object(o.b)("p",null,"Initially we said that animations should be handled fully in the view layer instead of inside Components (and that\u2019s still a good rule of thumb for complex animations), but eventually people started wanting to do simple animations without having to build a custom view."),Object(o.b)("p",null,"With the ComponentKit model, there is no good place for you to do your imperative animations inside the components. Components themselves are not long-lived, which means that they are constantly recycled. Of course you could do it in your CKComponentController, but if you forget to un-apply the animation, then you could easily leave it animating around the screen when the view is reused, resulting in a maddening reuse problem (goal 5 above)."),Object(o.b)("h3",{id:"ckcomponentanimation"},"CKComponentAnimation"),Object(o.b)("p",null,"The core of the ComponentKit animation API is a declaration of the animations you would like to conduct in response to some action. This declaration is encapsulated in a ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponentAnimation"),", which is a C++ struct that contains either:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A packaged CAAnimation, and a target component."),Object(o.b)("li",{parentName:"ol"},"A completely custom animation.")),Object(o.b)("p",null,"The first type allows a component to apply a CAAnimation to the view (really, its layer) that backs a CKComponent. This means that components that wish to animate (in other words, they are the target of a CKComponentAnimation) must have a view, or in the case of a CKCompositeComponent, must render to a component that has a view."),Object(o.b)("p",null,"The second type of animation allows you to configure any type of animation that you like, so long as it understands how to apply, un-apply, and update the animation in response to component changes. This is the escape hatch that allows things like POP to work with component animations."),Object(o.b)("h2",{id:"types-of-animations"},"Types of animations"),Object(o.b)("p",null,"The framework divides animations into these three groupings:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Initial animations. These are for things like a fade in when the component first appears."),Object(o.b)("li",{parentName:"ol"},"Lifecycle-based animations. Used to transition a component to a new state from an old one."),Object(o.b)("li",{parentName:"ol"},"Bounds animations. Since sizing of cells is managed by the ComponentKit infrastructure, anything that alters the bounds of your component in relation to its parent will force a reflow of the collection view. This means it has to be managed via a special API.")),Object(o.b)("p",null,"Each of these animation types is supported through a separate method that subclasses of CKComponent may override to return a declarative list of its animations."),Object(o.b)("h3",{id:"initial-animations"},"Initial animations"),Object(o.b)("p",null,"Initial animations are probably the simplest conceptually. A CKComponent may provide initial animations by overriding to this method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"- (std::vector<CKComponentAnimation>)animationsOnInitialMount;\n")),Object(o.b)("p",null,"A component may return ",Object(o.b)("em",{parentName:"p"},"multiple")," animations. So for instance, it could provide a fade-in in addition to a spring effect."),Object(o.b)("p",null,"Returning to the example above:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"- (std::vector<CKComponentAnimation>)animationsOnInitialMount\n{\n    return { {self, fadeToAppear()} };\n}\n")),Object(o.b)("p",null,"This returns a single fade-in animation that will apply to the component when it is mounted ",Object(o.b)("em",{parentName:"p"},"for the first time"),"."),Object(o.b)("h3",{id:"lifecycle-based-animations"},"Lifecycle-based animations"),Object(o.b)("p",null,"Let's say that you have a button that needs to bounce a little bit when it is selected. This is a great example of where you'd want to use a lifecycle-based animation. These animations allow you to animate a transition from one component state to another. They differ from initial animations, since the component ",Object(o.b)("em",{parentName:"p"},"has")," to already exist and be mounted to animate."),Object(o.b)("p",null,"Here's the method you override to return your animations:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"- (std::vector<CKComponentAnimation>)animationsFromPreviousComponent:(CKComponent *)previousComponent;\n")),Object(o.b)("p",null,"Again, the component may return multiple animations from the previous version of the component. The key thing here is that you're given the previous version of the component to compare with, and only if you want to animate the change should you return something."),Object(o.b)("p",null,"Returning to the example above:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"- (std::vector<CKComponentAnimation>)animationsFromPreviousComponent:(InteractiveQuoteComponent *)previousComponent\n{\n  if (previousComponent->_overlay == nil && _overlay != nil) {\n    return { {_overlay, scaleToAppear()} }; // Scale the overlay in when it appears.\n  } else {\n    return {};\n  }\n}\n")),Object(o.b)("p",null,"What has happened here is that the InteractiveQuoteComponent has called ",Object(o.b)("inlineCode",{parentName:"p"},"updateState:mode:")," in reaction to an action. Here we can see that the state of the previous component is inspected to determine if a fade animation is warranted. Otherwise, no animation is provided."),Object(o.b)("h3",{id:"bounds-animations"},"Bounds animations"),Object(o.b)("p",null,"As I mentioned, bounds animations have to be handled specially because they actually change how changes to the UICollectionView are processed. Here's how a component would animate a bounds change:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"- (CKComponentBoundsAnimation)boundsAnimationFromPreviousComponent:(CKComponent *)previousComponent;\nAn astute observer would note that bounds animations are not `CKComponentAnimation`. They are instead `CKComponentBoundsAnimation`. This is a different struct that has the following members:\nstruct CKComponentBoundsAnimation {\n  NSTimeInterval duration;\n  NSTimeInterval delay;\n  CKComponentBoundsAnimationMode mode;\n  UIViewAnimationOptions options;\n\n  /** Ignored unless mode is Spring, in which case it specifies the damping ratio passed to UIKit. */\n  CGFloat springDampingRatio;\n  /** Ignored unless mode is Spring, in which case it specifies the initial velocity passed to UIKit. */\n  CGFloat springInitialVelocity;\n};\n")),Object(o.b)("p",null,"These allow configuration of implicit UIView animations that wrap the mutations to the collection view. This means that if a component wants to do something like expand in height, and have the collection view animate as it conducts its animation, it can return a bounds animation in addition to its normal component animation to trigger the overall change intended."),Object(o.b)("p",null,"You may note that you can only return one bounds animation. This is intentional, since the bounds animation will apply to the application of the changeset in which the new component is mounted, and apply not just to the component that specifies the bounds animation, but to the entire component hierarchy."),Object(o.b)("p",null,"Since bounds animations have this global scope, it is impossible for the framework to satisfy multiple bounds animation requests simultaneously. Thus, if more than one bounds animation is specified by different components in the same tree, the behavior is undefined. One of the animations will be selected, and you can't tell which one."),Object(o.b)("p",null,"Returning to the example above:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"- (CKComponentBoundsAnimation)boundsAnimationFromPreviousComponent:(ArticleComponent *)previousComponent\n{\n  if (previousComponent->_state == ArticleComponentStateCollapsed && _state == ArticleComponentStateExpanded) {\n    return {\n      .mode = CKComponentBoundsAnimationModeSpring,\n      .duration = 0.5,\n      .springDampingRatio = 0.7,\n      .springInitialVelocity = 1.0,\n    };\n  } else {\n    return {};\n  }\n}\n")),Object(o.b)("p",null,"This code animates a change in the size of a component within a larger component tree, and properly animates both the cells within the collection view, and also the size and positioning of elements within the component hierarchy that change."))}m.isMDXComponent=!0},206:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),m=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r({},n,{},e)),t},p=function(e){var n=m(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(t),h=i,d=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return t?a.a.createElement(d,r({ref:n},c,{components:t})):a.a.createElement(d,r({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=h;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=t[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);