"use strict";(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[2544],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=n(3117),l=n(102),o=(n(7294),n(3905)),i=["components"],r={id:"cli",title:"codeshift/cli",slug:"/cli"},p=void 0,s={unversionedId:"api/cli",id:"api/cli",title:"codeshift/cli",description:"To download and run codemods, we provide a CLI tool called @codeshift/cli.",source:"@site/docs/api/codeshift-cli.mdx",sourceDirName:"api",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/api/codeshift-cli.mdx",tags:[],version:"current",frontMatter:{id:"cli",title:"codeshift/cli",slug:"/cli"},sidebar:"api",next:{title:"codeshift/utils",permalink:"/docs/utils"}},u={},c=[{value:"Usage/Installation",id:"usageinstallation",level:2},{value:"default",id:"default",level:2},{value:"--transform, -t",id:"--transform--t",level:3},{value:"--packages",id:"--packages",level:3},{value:"--parser, -p",id:"--parser--p",level:3},{value:"--extensions, -e",id:"--extensions--e",level:3},{value:"--sequence, -s",id:"--sequence--s",level:3},{value:"--ignore-pattern",id:"--ignore-pattern",level:3},{value:"--verbose",id:"--verbose",level:3},{value:"--version, -v",id:"--version--v",level:3},{value:"--help",id:"--help",level:3},{value:"list",id:"list",level:2},{value:"init",id:"init",level:2},{value:"--config-only (optional)",id:"--config-only-optional",level:3},{value:"--version (optional)",id:"--version-optional",level:3},{value:"--preset (optional)",id:"--preset-optional",level:3},{value:"validate",id:"validate",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To download and run codemods, we provide a CLI tool called ",(0,o.kt)("inlineCode",{parentName:"p"},"@codeshift/cli"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@codeshift/cli")," is responsible for running the provided transform against your entire codebase.\nUnder the hood, it is a wrapper of jscodeshift's CLI, which provides additional functionality"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ability to run community codemods hosted on npm"),(0,o.kt)("li",{parentName:"ol"},"Runs versioned codemods in sequence"),(0,o.kt)("li",{parentName:"ol"},"Always runs the latest version of a codemod")),(0,o.kt)("p",null,"The CLI allows you to run transforms either from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/tree/main/community"},"the public registry")," or on your local machine as per the original implementation of jscodeshift"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Codemods will be designed to do the heavy lifting, but they'll often not be perfect so some manual work may still be required in order to successfully migrate."),(0,o.kt)("h2",{id:"usageinstallation"},"Usage/Installation"),(0,o.kt)("p",null,"We recommend running the CLI with ",(0,o.kt)("inlineCode",{parentName:"p"},"$ npx")," to ensure you always have the latest version."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ npx @codeshift/cli --packages mylib@1.0.0 /project/src")),(0,o.kt)("p",null,"But it can also be installed globally:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ npm install -g @codeshift/cli")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn global add @codeshift/cli")),(0,o.kt)("p",null,"and run with:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$ codeshift")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"$ codeshift-cli")),(0,o.kt)("h2",{id:"default"},"default"),(0,o.kt)("p",null,"The default CLI command (when no subcommand is specified,) will attempt to download and run transform(s) against the specified file path."),(0,o.kt)("p",null,"In the majority of cases you want to be sure to either provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"--packages")," flag for running remote codemods, or the ",(0,o.kt)("inlineCode",{parentName:"p"},"--transform, -t")," flag to run a local transform file."),(0,o.kt)("p",null,"For running codemods as an end-user it's recommend to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--packages")," flag, which accepts the following format: ",(0,o.kt)("inlineCode",{parentName:"p"},"--packages [package-name]@[semver-version]"),". For example, running the codemod to migrate your codebase to ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," version ",(0,o.kt)("inlineCode",{parentName:"p"},"18.0.0")," you would specify the following ",(0,o.kt)("inlineCode",{parentName:"p"},"--packages react@18.0.0"),"."),(0,o.kt)("p",null,'In special cases, codeshift package authors may choose to also expose codemod "presets", which can be considered as utility codemods for that package. Presets are also run via the ',(0,o.kt)("inlineCode",{parentName:"p"},"--packages")," flag like so: ",(0,o.kt)("inlineCode",{parentName:"p"},"--packages react#remove-spread-props"),".\nNotice that we have switched to a hash ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," here to denote that we want to run a preset."),(0,o.kt)("p",null,"Codeshift will then attempt to locate codemods from both ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/tree/main/community"},"the public registry")," and the primary npm package ie ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react"},"React \u2013 NPM"),".\n(Note: Some packages wont have any codemods, you can use the ",(0,o.kt)("a",{parentName:"p",href:"#list"},"list")," subcommand to check if they exist.)"),(0,o.kt)("p",null,"Lastly, when authoring a package, it's possible to test your transforms by omitting both the ",(0,o.kt)("inlineCode",{parentName:"p"},"--packages")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--transform")," flags. In this interactive mode, the ",(0,o.kt)("inlineCode",{parentName:"p"},"codeshift/cli")," will attempt to locate\na local ",(0,o.kt)("inlineCode",{parentName:"p"},"codeshift.config.js")," from the current or parent directories and present an interactive prompt for you to choose from."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("p",null,'Run a transform for "@mylib/button" version 3.0.0 only'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --packages @mylib/button@3.0.0 /project/src"))),(0,o.kt)("p",null,'Run a transform for "@mylib/button" preset ',(0,o.kt)("inlineCode",{parentName:"p"},"foo-bar")," only"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --packages @mylib/button#foo-bar /project/src"))),(0,o.kt)("p",null,'Run all transforms for "@mylib/button" greater than version 3.0.0 and @mylib/range greater than 4.0.0'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --sequence --packages @mylib/button@3.0.0,@mylib/range@4.0.0 /project/src"))),(0,o.kt)("p",null,'Run the "my-custom-transform" transform'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift -t path/to/my-custom-transform /project/src"))),(0,o.kt)("p",null,"Display a prompt with a list of codemods from my local ",(0,o.kt)("inlineCode",{parentName:"p"},"codeshift.config.js")," file(s)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift /project/src"))),(0,o.kt)("h3",{id:"--transform--t"},"--transform, -t"),(0,o.kt)("p",null,"Allows you to execute local transform file(s)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can be provided with a comma-separated list (see example below)."),(0,o.kt)("li",{parentName:"ul"},'Transforms can be either a single file or directory containing an "index" file.')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --transform codemods/my-special-mod /project/src/file.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --transform codemods/my-special-mod/index.ts /project/src/file.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --transform path/to/transform1.ts,path/to/transform2.ts,path/to/transform3.ts /project/src/file.js"))),(0,o.kt)("h3",{id:"--packages"},"--packages"),(0,o.kt)("p",null,"Runs transforms for the specified comma separated list of packages, optionally include a version for each package to run all transforms since that version"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --packages @atlaskit/button /project/src")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --packages @atlaskit/button@3.0.0,@atlaskit/range@4.0.0 /project/src"))),(0,o.kt)("h3",{id:"--parser--p"},"--parser, -p"),(0,o.kt)("p",null,"Parser to use for parsing the source files you are code modding."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"options:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"babel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"babylon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"flow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tsx")," (default)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tsx")),(0,o.kt)("p",null,"tsx is a superset of JavaScript + JSX and should be the most sensible default for modern codebases."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --parser tsx /project/src/file.ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift -p babel /project/src/file.js"))),(0,o.kt)("h3",{id:"--extensions--e"},"--extensions, -e"),(0,o.kt)("p",null,"Transform files with these file extensions (comma separated list)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"js, jsx, ts, tsx")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --extensions ts,tsx /project/src/file.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift -e js /project/src/file.js"))),(0,o.kt)("h3",{id:"--sequence--s"},"--sequence, -s"),(0,o.kt)("p",null,"If the package flag is provided, runs all transforms from the provided version to the latest."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --packages @atlaskit/button@3.0.0 --sequence /project/src"))),(0,o.kt)("h3",{id:"--ignore-pattern"},"--ignore-pattern"),(0,o.kt)("p",null,"Ignore files that match a provided glob expression"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"**/node_modules/**"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --ignore-pattern node_modules /project/src/file.js"))),(0,o.kt)("h3",{id:"--verbose"},"--verbose"),(0,o.kt)("p",null,"Show more information about the transform process"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --verbose 2 /project/src/file.js"))),(0,o.kt)("h3",{id:"--version--v"},"--version, -v"),(0,o.kt)("p",null,"Get current version number"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift -v"))),(0,o.kt)("h3",{id:"--help"},"--help"),(0,o.kt)("p",null,"Print all help text to the command line"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift --help"))),(0,o.kt)("h2",{id:"list"},"list"),(0,o.kt)("p",null,"Subcommand that lists available codemods for the provided packages"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("p",null,"Print a list of available codemods for a single package"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift list mylib"))),(0,o.kt)("p",null,"Print a list of available codemods for multiple packages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift list @atlaskit/avatar @emotion/monorepo"))),(0,o.kt)("h2",{id:"init"},"init"),(0,o.kt)("p",null,"Subcommand that generates a new codemod at your desired path"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("p",null,"Create a new codeshift package called foobar with a transform for version 10\non the Desktop"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'$ codeshift init --version="10.0.0" ~/Desktop/foobar'))),(0,o.kt)("p",null,"Create an empty codeshift package called on the Desktop"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift init ~/Desktop/foobar"))),(0,o.kt)("p",null,"Create an empty codeshift package called foobar in the current directory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift init"))),(0,o.kt)("p",null,"Create a 'config only' codeshift package in the current directory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift init --config-only ."))),(0,o.kt)("h3",{id:"--config-only-optional"},"--config-only (optional)"),(0,o.kt)("p",null,"Only output a configuration file."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("p",null,"Initializes a configuration file only"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"`$ codeshift init --config-only path/to/src``")),(0,o.kt)("p",null,"Initializes a configuration file and preset source code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"`$ codeshift init --config-only --preset update-imports path/to/src``")),(0,o.kt)("h3",{id:"--version-optional"},"--version (optional)"),(0,o.kt)("p",null,"A semver-compatible string. Will be used to generate mock transform files and configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("p",null,"Create a codemod package called foobar with a versioned transform."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'$ codeshift init --package-name="foobar" --version="10.0.0" ~/Desktop'))),(0,o.kt)("h3",{id:"--preset-optional"},"--preset (optional)"),(0,o.kt)("p",null,"A kebab-cased string. Will be used to generate mock transform files and configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("p",null,"Create a codemod package called foobar with a preset."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'$ codeshift init --package-name="foobar" --preset="sort-imports" ~/Desktop'))),(0,o.kt)("h2",{id:"validate"},"validate"),(0,o.kt)("p",null,"Subcommand that validates a codemod package at the desired path."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("p",null,'Validate a codemod package called "my-codemods".'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift validate ./codemods/my-codemods"))),(0,o.kt)("p",null,"Validate a codemod package from the current working directory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$ codeshift validate"))))}m.isMDXComponent=!0}}]);