(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(98)),c={id:"utils",title:"codeshift/utils",slug:"/utils"},i={unversionedId:"api/utils",id:"api/utils",isDocsHomePage:!1,title:"codeshift/utils",description:"CodeshiftCommunity provides a set of utilities to help perform common codemod operations.",source:"@site/docs/api/codeshift-utils.mdx",slug:"/utils",permalink:"/docs/utils",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/api/codeshift-utils.mdx",version:"current",sidebar:"api",previous:{title:"codeshift/cli",permalink:"/docs/cli"},next:{title:"codeshift/test-utils",permalink:"/docs/test-utils"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Imports",id:"imports",children:[{value:"<code>hasImportDeclaration(j, source, sourcePath)</code>",id:"hasimportdeclarationj-source-sourcepath",children:[]},{value:"<code>getImportDeclaration(j, source, sourcePath)</code>",id:"getimportdeclarationj-source-sourcepath",children:[]},{value:"<code>removeImportDeclaration(j, source, sourcePath)</code>",id:"removeimportdeclarationj-source-sourcepath",children:[]},{value:"<code>getDefaultImportSpecifier(j, source, sourcePath)</code>",id:"getdefaultimportspecifierj-source-sourcepath",children:[]},{value:"<code>getDefaultImportSpecifierName(j, source, sourcePath)</code>",id:"getdefaultimportspecifiernamej-source-sourcepath",children:[]},{value:"<code>hasDefaultImportSpecifier(j, source, sourcePath)</code>",id:"hasdefaultimportspecifierj-source-sourcepath",children:[]},{value:"<code>removeDefaultImportSpecifier(j, source, sourcePath)</code>",id:"removedefaultimportspecifierj-source-sourcepath",children:[]},{value:"<code>hasImportSpecifier(j, source, sourcePath)</code>",id:"hasimportspecifierj-source-sourcepath",children:[]},{value:"<code>getImportSpecifier(j, specifier, source)</code>",id:"getimportspecifierj-specifier-source",children:[]},{value:"<code>getImportSpecifierName(j, specifier, source)</code>",id:"getimportspecifiernamej-specifier-source",children:[]},{value:"<code>insertImportSpecifier(j, source, specifier)</code>",id:"insertimportspecifierj-source-specifier",children:[]}]},{value:"JSX",id:"jsx",children:[{value:"<code>getJSXAttributesByName(j, source, attributeName)</code>",id:"getjsxattributesbynamej-source-attributename",children:[]},{value:"<code>hasJSXAttributesByName(j, source, attributeName)</code>",id:"hasjsxattributesbynamej-source-attributename",children:[]}]},{value:"Comments",id:"comments",children:[{value:"<code>insertCommentBefore(j, source, message, prefix)</code>",id:"insertcommentbeforej-source-message-prefix",children:[]},{value:"<code>insertCommentToStartOfFile(j, source, message)</code>",id:"insertcommenttostartoffilej-source-message",children:[]}]},{value:"Motions",id:"motions",children:[{value:"<code>applyMotions(j, source, motions)</code>",id:"applymotionsj-source-motions",children:[]}]}],s={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"CodeshiftCommunity provides a set of utilities to help perform common codemod operations."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@codeshift/utils")," is pre-bundled with every codemod that is published to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/tree/main/community"},"community folder"),",\nso there's no need to install it manually."),Object(o.b)("p",null,"However, it is also available for use outside of this project and compatible with jscodeshift."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm install --save-dev @codeshift/utils")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add -D @codeshift/utils")),Object(o.b)("h2",{id:"imports"},"Imports"),Object(o.b)("h3",{id:"hasimportdeclarationj-source-sourcepath"},Object(o.b)("inlineCode",{parentName:"h3"},"hasImportDeclaration(j, source, sourcePath)")),Object(o.b)("p",null,"Finds an import declaration by source name"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React from 'react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { hasImportDeclaration } from '@codeshift/utils';\n\nhasImportDeclaration(j, source, 'react'); // True\n")),Object(o.b)("h3",{id:"getimportdeclarationj-source-sourcepath"},Object(o.b)("inlineCode",{parentName:"h3"},"getImportDeclaration(j, source, sourcePath)")),Object(o.b)("p",null,"Returns an import declaration by source name"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Collection"),": Collection containing 1 or more imports"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React from 'react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { getImportDeclaration } from '@codeshift/utils';\n\ngetImportDeclaration(j, source, 'react');\n")),Object(o.b)("h3",{id:"removeimportdeclarationj-source-sourcepath"},Object(o.b)("inlineCode",{parentName:"h3"},"removeImportDeclaration(j, source, sourcePath)")),Object(o.b)("p",null,"Removes an import declaration by source name"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"void")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React from 'react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { removeImportDeclaration } from '@codeshift/utils';\n\nremoveImportDeclaration(j, source, 'react');\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},"// src/App.js\n-import React, { useEffect } from 'react';\n")),Object(o.b)("h3",{id:"getdefaultimportspecifierj-source-sourcepath"},Object(o.b)("inlineCode",{parentName:"h3"},"getDefaultImportSpecifier(j, source, sourcePath)")),Object(o.b)("p",null,"Finds a default import specifier"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Collection"),": Collection containing all matched default import specifiers"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React from 'react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { getDefaultImportSpecifier } from '@codeshift/utils';\n\ngetDefaultImportSpecifier(j, source, 'react'); // Collection containing 'React'\n")),Object(o.b)("h3",{id:"getdefaultimportspecifiernamej-source-sourcepath"},Object(o.b)("inlineCode",{parentName:"h3"},"getDefaultImportSpecifierName(j, source, sourcePath)")),Object(o.b)("p",null,"Finds a default import specifier and returns its name"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"string | null"),": Default import's name"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React from 'react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { getDefaultImportSpecifierName } from '@codeshift/utils';\n\ngetDefaultImportSpecifierName(j, source, 'react'); // Collection containing 'React'\n")),Object(o.b)("h3",{id:"hasdefaultimportspecifierj-source-sourcepath"},Object(o.b)("inlineCode",{parentName:"h3"},"hasDefaultImportSpecifier(j, source, sourcePath)")),Object(o.b)("p",null,"Attempts to find a default import specifier and returns a boolean result"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React from 'react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { hasDefaultImportSpecifier } from '@codeshift/utils';\n\nhasDefaultImportSpecifier(j, source, 'react'); // True\n")),Object(o.b)("h3",{id:"removedefaultimportspecifierj-source-sourcepath"},Object(o.b)("inlineCode",{parentName:"h3"},"removeDefaultImportSpecifier(j, source, sourcePath)")),Object(o.b)("p",null,"Attempts to remove a default import specifier"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"void")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React, { useEffect } from 'react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { removeDefaultImportSpecifier } from '@codeshift/utils';\n\nremoveDefaultImportSpecifier(j, source, 'React');\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},"-import React, { useEffect } from 'react';\n+import { useEffect } from 'react';\n")),Object(o.b)("h3",{id:"hasimportspecifierj-source-sourcepath"},Object(o.b)("inlineCode",{parentName:"h3"},"hasImportSpecifier(j, source, sourcePath)")),Object(o.b)("p",null,"Checks for an import import specifier"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React, { useEffect } from 'react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { hasImportSpecifier } from '@codeshift/utils';\n\nhasImportSpecifier(j, source, 'react', 'useEffect'); // True\n")),Object(o.b)("h3",{id:"getimportspecifierj-specifier-source"},Object(o.b)("inlineCode",{parentName:"h3"},"getImportSpecifier(j, specifier, source)")),Object(o.b)("p",null,"Finds an import specifier by name"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Collection"),": Collection containing all matched import specifiers"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React, { useEffect } from 'react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { getImportSpecifier } from '@codeshift/utils';\n\ngetImportSpecifier(j, source, 'useEffect'); // Collection containing 'useEffect'\n")),Object(o.b)("h3",{id:"getimportspecifiernamej-specifier-source"},Object(o.b)("inlineCode",{parentName:"h3"},"getImportSpecifierName(j, specifier, source)")),Object(o.b)("p",null,"Returns the local name of an import. This is useful for cases where an import specifier is potentially aliased."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"string")," | null: specifier name or null if not found"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React, { useEffect as foo } from 'react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { getImportSpecifierName } from '@codeshift/utils';\n\ngetImportSpecifierName(j, source, 'useEffect', 'react'); // 'foo'\n")),Object(o.b)("h3",{id:"insertimportspecifierj-source-specifier"},Object(o.b)("inlineCode",{parentName:"h3"},"insertImportSpecifier(j, source, specifier)")),Object(o.b)("p",null,"Inserts an import specifier"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"void")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React, { useEffect } from 'react';\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { getImportSpecifier } from '@codeshift/utils';\n\ninsertImportSpecifier(j, source, 'useMemo', 'react'); // Collection containing 'useEffect'\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},"// src/App.js\n-import React, { useEffect } from 'react';\n+import React, { useEffect, useMemo } from 'react';\n")),Object(o.b)("h2",{id:"jsx"},"JSX"),Object(o.b)("h3",{id:"getjsxattributesbynamej-source-attributename"},Object(o.b)("inlineCode",{parentName:"h3"},"getJSXAttributesByName(j, source, attributeName)")),Object(o.b)("p",null,"Finds a JSX attributeName (aka prop) by name"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Collection"),": Collection containing all matched jsx attributes"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React from 'react';\n\nconst App = () => <Button primary>Say hello</Button>;\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { getJSXAttributesByName } from '@codeshift/utils';\n\ngetJSXAttributesByName(j, source, 'primary'); // Collection containing 'primary'\n")),Object(o.b)("h3",{id:"hasjsxattributesbynamej-source-attributename"},Object(o.b)("inlineCode",{parentName:"h3"},"hasJSXAttributesByName(j, source, attributeName)")),Object(o.b)("p",null,"Finds a JSX attributeName (aka prop) by name and returns true if found"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React from 'react';\n\nconst App = () => <Button primary>Say hello</Button>;\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { hasJSXAttributesByName } from '@codeshift/utils';\n\nhasJSXAttributesByName(j, source, 'primary'); // Found!\n")),Object(o.b)("h2",{id:"comments"},"Comments"),Object(o.b)("h3",{id:"insertcommentbeforej-source-message-prefix"},Object(o.b)("inlineCode",{parentName:"h3"},"insertCommentBefore(j, source, message, prefix)")),Object(o.b)("p",null,"Appends a comment before the provided node"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"void")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React from 'react';\n\nconst App = () => <Button primary>Say hello</Button>;\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { insertCommentBefore } from '@codeshift/utils';\n\ninsertCommentBefore(\n  j,\n  path.find(j.ImportDeclaration),\n  'This should be removed in favour of mylib',\n);\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// src/App.js\nimport React from 'react';\n\n// TODO: (@codeshift) This should be removed in favour of mylib\nconst App = () => <Button primary>Say hello</Button>;\n")),Object(o.b)("h3",{id:"insertcommenttostartoffilej-source-message"},Object(o.b)("inlineCode",{parentName:"h3"},"insertCommentToStartOfFile(j, source, message)")),Object(o.b)("p",null,"Appends a comment to the start of a file"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"void")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// src/App.js\nimport React from 'react';\n\nconst App = () => <Button primary>Say hello</Button>;\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { insertCommentToStartOfFile } from '@codeshift/utils';\n\ninsertCommentToStartOfFile(\n  j,\n  path.find(j.ImportDeclaration),\n  'This should be removed in favour of mylib',\n);\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// src/App.js\n// TODO: (Codemod) This should be removed in favour of mylib\nimport React from 'react';\n\nconst App = () => <Button primary>Say hello</Button>;\n")),Object(o.b)("h2",{id:"motions"},"Motions"),Object(o.b)("h3",{id:"applymotionsj-source-motions"},Object(o.b)("inlineCode",{parentName:"h3"},"applyMotions(j, source, motions)")),Object(o.b)("p",null,"Applies an array of motions to your AST"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"void")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { applyMotions } from '@codeshift/utils';\nimport { sortImports } from './motions';\n\napplyMotions(j, j(fileInfo.source), [sortImports, removeVar]);\n")))}l.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,j=b["".concat(c,".").concat(u)]||b[u]||m[u]||o;return r?a.a.createElement(j,i(i({ref:t},s),{},{components:r})):a.a.createElement(j,i({ref:t},s))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);