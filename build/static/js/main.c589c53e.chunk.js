(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{47:function(e,t,o){},48:function(e,t,o){"use strict";o.r(t);var r=o(21),n=o.n(r),a=o(7),i=o(11),c=o(50),s=o(2),l=o(15),f=o.n(l),u=o(9),h=o(14),d=o(22),m={sections:2,pages:2,zoom:75,paragraphs:[{offset:.27,factor:5,header:"Portfolio",image:"/photo-1515036551567-bf1198cccc35.png",aspect:1.51,text:"Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially."},{offset:1,factor:2,header:"React visual builder",image:"/photo-1519608487953-e999c86e7455.jpeg",aspect:1.5,text:"The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend."},{offset:3,factor:2.25,header:"Catalina",image:"/ph1.jpg",aspect:1.5037,text:"The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from \u2014 back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different."},{offset:4,factor:2,header:"Building 21",image:"/ph3.jpg",aspect:.665,text:"We\u2019ve found that the people whose EEG doesn\u2019t show any alpha-wave activity when they\u2019re relaxed aren\u2019t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation."},{offset:5,factor:1.75,header:"Sector 8",image:"/photo-1533577116850-9cc66cad8a9b.jpeg",aspect:1.55,text:"By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won\u2019t be compelled by one\u2019s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."},{offset:7,factor:1.05,header:"The Factory",image:"/photo-1548191265-cc70d3d45ba1.jpeg",aspect:1.77,text:"Education and enlightenment."}],stripes:[{offset:0,color:"#000",height:13},{offset:6.3,color:"#000",height:20}],diamonds:[{x:0,offset:0,pos:new s.Vector3,scale:14,factor:60},{x:1,offset:0,pos:new s.Vector3,scale:0,factor:40}],top:Object(a.createRef)()},b=o(8),p=["children","size","left","right","top","bottom","color","opacity","height","layers","font"];function v(e){var t=e.children,o=e.size,r=void 0===o?1:o,n=e.left,c=e.right,l=e.top,v=e.bottom,j=e.color,g=void 0===j?"white":j,x=e.opacity,O=void 0===x?1:x,y=e.height,w=void 0===y?.01:y,M=(e.layers,e.font),k=void 0===M?"/MOONGET_Heavy.blob":M,N=Object(h.a)(e,p),D=Object(i.d)(s.FontLoader,k),C=Object(d.a)((function(){return new Promise((function(e){return e(new s.TextBufferGeometry(t,{font:D,size:1,height:w,curveSegments:32}))}))}),[t]),z=Object(a.useCallback)((function(e){var t=new s.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x=n?0:c?-t.x:-t.x/2,e.position.y=l?0:v?-t.y:-t.y/2}),[n,c,l,v]),S=Object(a.useRef)(),T=m.top.current;return Object(i.c)((function(){S.current.shift=f()(S.current.shift,(m.top.current-T)/100,.1),T=m.top.current})),Object(b.jsx)("group",Object(u.a)(Object(u.a)({},N),{},{scale:[r,r,.1],children:Object(b.jsx)("mesh",{geometry:C,onUpdate:z,frustumCulled:!1,children:Object(b.jsx)("customMaterial",{ref:S,color:g,transparent:!0,opacity:O})})}))}var j=o(12),g=o(40),x=o(1),O=o(0),y=o(3),w=o(4),M=function(e){Object(y.a)(o,e);var t=Object(w.a)(o);function o(){return Object(O.a)(this,o),t.call(this,{vertexShader:"varying vec3 worldNormal;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize(modelViewMatrix * transformedNormal).xyz;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"varying vec3 worldNormal;\n      void main() {\n        gl_FragColor = vec4(worldNormal, 1.0);\n      }",side:s.BackSide})}return Object(x.a)(o)}(s.ShaderMaterial),k=function(e){Object(y.a)(o,e);var t=Object(w.a)(o);function o(e){return Object(O.a)(this,o),t.call(this,{vertexShader:"varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;\n        viewDirection = normalize((modelMatrix * vec4( position, 1.0)).xyz - cameraPosition);;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"uniform sampler2D envMap;\n      uniform sampler2D backfaceMap;\n      uniform vec2 resolution;\n      varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {\n        return pow(1.05 + dot(viewDirection, worldNormal), 100.0);\n      }\n      void main() {\n        vec2 uv = gl_FragCoord.xy / resolution;\n        vec3 normal = worldNormal * (1.0 - 0.7) - texture2D(backfaceMap, uv).rgb * 0.7;\n        vec4 color = texture2D(envMap, uv += refract(viewDirection, normal, 1.0/1.5).xy);\n        //gl_FragColor = vec4(mix(color.rgb, vec3(0.15), fresnelFunc(viewDirection, normal)), 1.0);\n        gl_FragColor = vec4(mix(color.rgb, vec3(0.4), fresnelFunc(viewDirection, normal)), 1.0);\n      }",uniforms:{envMap:{value:e.envMap},backfaceMap:{value:e.backfaceMap},resolution:{value:e.resolution}}})}return Object(x.a)(o)}(s.ShaderMaterial),N=["children","offset","factor"],D=Object(a.createContext)(0);function C(e){var t=e.children,o=e.offset,r=e.factor,n=Object(h.a)(e,N),c=z(),s=c.offset,l=c.sectionHeight,d=Object(a.useRef)();return o=void 0!==o?o:s,Object(i.c)((function(){var e=d.current.position.y,t=m.top.current;d.current.position.y=f()(e,t/m.zoom*r,.1)})),Object(b.jsx)(D.Provider,{value:o,children:Object(b.jsx)("group",Object(u.a)(Object(u.a)({},n),{},{position:[0,-l*o*r,0],children:Object(b.jsx)("group",{ref:d,children:t})}))})}function z(){var e=m.sections,t=m.pages,o=m.zoom,r=Object(i.e)(),n=r.size,c=r.viewport,s=Object(a.useContext)(D),l=c.width*o,f=c.height*o,u=l/o,h=f/o,d=n.width<700;return{viewport:c,offset:s,viewportWidth:l,viewportHeight:f,canvasWidth:u,canvasHeight:h,mobile:d,margin:u*(d?.2:.1),contentMaxWidth:u*(d?.8:.6),sectionHeight:h*((t-1)/(e-1)),offsetFactor:(s+1)/e}}var S=new s.Object3D;function T(){var e=Object(i.d)(g.a,"/diamond.glb").nodes;Object(a.useLayoutEffect)((function(){return e.pCone1_lambert1_0.geometry.center()}),[]);var t=Object(i.e)(),o=t.size,r=t.gl,n=t.scene,c=t.camera,l=t.clock,u=z(),h=u.contentMaxWidth,d=u.sectionHeight,p=u.mobile,v=Object(a.useRef)(),x=r.getPixelRatio(),O=Object(a.useMemo)((function(){var e=new s.WebGLRenderTarget(o.width*x,o.height*x),t=new s.WebGLRenderTarget(o.width*x,o.height*x);return[e,t,new M,new k({envMap:e.texture,backfaceMap:t.texture,resolution:[o.width*x,o.height*x]})]}),[o,x]),y=Object(j.a)(O,4),w=y[0],N=y[1],D=y[2],C=y[3];return Object(i.c)((function(){m.diamonds.forEach((function(e,t){var o=l.getElapsedTime()/3,r=e.x,n=e.offset,a=e.scale,i=e.factor,c=h/35*a;e.pos.set(p?0:r,f()(e.pos.y,-d*n*i+m.top.current/m.zoom*i,.1),0),S.position.copy(e.pos),t===m.diamonds.length-1?S.rotation.set(0,o,0):S.rotation.set(o,o,o),S.scale.set(c,c,c),S.updateMatrix(),v.current.setMatrixAt(t,S.matrix),v.current.instanceMatrix.needsUpdate=!0})),r.autoClear=!1,c.layers.set(0),r.setRenderTarget(w),r.clearColor(),r.render(n,c),r.clearDepth(),c.layers.set(1),v.current.material=D,r.setRenderTarget(N),r.clearDepth(),r.render(n,c),c.layers.set(0),r.setRenderTarget(null),r.render(n,c),r.clearDepth(),c.layers.set(1),v.current.material=C,r.render(n,c)}),1),Object(b.jsx)("instancedMesh",{ref:v,layers:1,args:[e.pCone1_lambert1_0.geometry,null,m.diamonds.length],position:[0,0,50]})}var F=function(e){Object(y.a)(o,e);var t=Object(w.a)(o);function o(){return Object(O.a)(this,o),t.call(this,{vertexShader:"uniform float scale;\n      uniform float shift;\n      varying vec2 vUv;\n      void main() {\n        vec3 pos = position;\n        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 2.0) * 0.125);\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n      }",fragmentShader:"uniform sampler2D tex;\n      uniform float hasTexture;\n      uniform float shift;\n      uniform float scale;\n      uniform vec3 color;\n      uniform float opacity;\n      varying vec2 vUv;\n      void main() {\n        float angle = 1.55;\n        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));\n        vec4 cr = texture2D(tex, p + offset);\n        vec4 cga = texture2D(tex, p);\n        vec4 cb = texture2D(tex, p - offset);\n        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        else gl_FragColor = vec4(color, opacity);\n      }",uniforms:{tex:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new s.Color("white")}}})}return Object(x.a)(o,[{key:"scale",get:function(){return this.uniforms.scale.value},set:function(e){this.uniforms.scale.value=e}},{key:"shift",get:function(){return this.uniforms.shift.value},set:function(e){this.uniforms.shift.value=e}},{key:"map",get:function(){return this.uniforms.tex.value},set:function(e){this.uniforms.hasTexture.value=!!e,this.uniforms.tex.value=e}},{key:"color",get:function(){return this.uniforms.color.value}},{key:"opacity",get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms&&(this.uniforms.opacity.value=e)}}]),o}(s.ShaderMaterial);Object(i.b)({CustomMaterial:F});var P=["color","shift","opacity","args","map"],R=Object(a.forwardRef)((function(e,t){var o=e.color,r=void 0===o?"white":o,n=e.shift,c=void 0===n?1:n,s=e.opacity,l=void 0===s?1:s,d=e.args,p=e.map,v=Object(h.a)(e,P),j=z(),g=(j.viewportHeight,j.offsetFactor,Object(a.useRef)()),x=m.top.current;return Object(i.c)((function(){m.pages;var e=m.top;g.current.scale=.015,g.current.shift=f()(g.current.shift,(e.current-x)/c*1.5,.1),x=e.current})),Object(b.jsxs)("mesh",Object(u.a)(Object(u.a)({ref:t},v),{},{children:[Object(b.jsx)("planeBufferGeometry",{args:d}),Object(b.jsx)("customMaterial",{ref:g,color:r,map:p,transparent:!0,opacity:l})]}))}));o(47);function _(){var e=Object(a.useRef)();return Object(i.c)((function(){return e.current.material.opacity=f()(e.current.material.opacity,0,.025)})),Object(b.jsx)(R,{ref:e,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function B(){var e=Object(i.d)(s.TextureLoader,m.paragraphs.map((function(e){return e.image})));Object(a.useMemo)((function(){return e.forEach((function(e){return e.minFilter=s.LinearFilter}))}),[e]);var t=z(),o=t.contentMaxWidth,r=t.sectionHeight;t.canvasWidth,t.canvasHeight,t.mobile;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{factor:2,offset:0,children:Object(b.jsxs)(C,{factor:1.2,children:[Object(b.jsx)(v,{shift:10,left:!0,size:.07*o,position:[-o/1.6,.5,-1],color:"#fff",children:"MILAD MOHAMMADI"}),Object(b.jsx)("group",{position:[.092*o*-.62,-.0197*o+.48,0],children:Object(b.jsx)(R,{map:e[0],args:[1,1,32,32],shift:20,size:.01,aspect:.01,scale:[.07*o,.07*o,1],frustumCulled:!1})}),Object(b.jsx)(C,{factor:3,children:Object(b.jsx)(c.a,{className:"bottom-left",style:{color:"white",width:1e3},position:[-o/1.6,-r/2,0],offset:4,children:"Front-end Developer, Sometimes Creative Developer"})})]})}),Object(b.jsx)(C,{factor:9,offset:.12,children:Object(b.jsxs)(c.a,{onClick:function(){window.location.replace("https://t.me/mmmiladdm")},className:"bottom-left",style:{color:"white",width:1e3},position:[-o/1.6,-4,0],offset:10,children:[Object(b.jsx)("b",{children:"Find me:"}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://t.me/mmmiladdm",onClick:function(){window.location.replace("https://t.me/mmmiladdm")},children:"Telegram"}),Object(b.jsx)("br",{}),"Skype",Object(b.jsx)("br",{}),"LinkedIn",Object(b.jsx)("br",{}),"Github",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"My Projects"}),Object(b.jsx)("br",{}),"React Visual Builder",Object(b.jsx)("br",{}),"Portfolio",Object(b.jsx)("br",{}),"Robo DB",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Download CV",Object(b.jsx)("br",{})]})})]})}function E(){var e=Object(a.useRef)(),t=function(e){return m.top.current=e.target.scrollTop};return Object(a.useEffect)((function(){t({target:e.current})}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{linear:!0,dpr:[1,2],orthographic:!0,camera:{zoom:m.zoom,position:[0,0,500]},children:Object(b.jsxs)(a.Suspense,{fallback:Object(b.jsx)(c.a,{center:!0,className:"loading",children:"Loading..."}),children:[Object(b.jsx)(B,{}),Object(b.jsx)(T,{}),Object(b.jsx)(_,{})]})}),Object(b.jsx)("div",{className:"scrollArea",ref:e,onScroll:t,children:[0,1].map((function(e,t){return Object(b.jsx)("div",{id:"0"+t,style:{height:"56vh"}},t)}))})]})}n.a.render(Object(b.jsx)(E,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.c589c53e.chunk.js.map