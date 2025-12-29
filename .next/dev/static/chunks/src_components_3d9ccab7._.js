(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const variantStyles = {
    primary: `
    bg-gold text-deep
    hover:bg-gold-light
    active:bg-gold-dark
  `,
    secondary: `
    bg-transparent text-gold
    border border-gold
    hover:bg-gold hover:text-deep
  `,
    ghost: `
    bg-transparent text-gold
    hover:text-gold-light
    underline-offset-4 hover:underline
  `
};
const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm"
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ variant = "primary", size = "md", href, external, fullWidth, className = "", children, ...props }, ref)=>{
    const baseStyles = `
      inline-flex items-center justify-center
      font-semibold uppercase tracking-widest
      rounded-sm
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background
      disabled:opacity-50 disabled:cursor-not-allowed
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${fullWidth ? "w-full" : ""}
      ${className}
    `;
    // If href is provided, render as link
    if (href) {
        const linkProps = external ? {
            target: "_blank",
            rel: "noopener noreferrer"
        } : {};
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: baseStyles,
            ...linkProps,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 72,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: baseStyles,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 79,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
};
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283";
    }
    let children;
    let props;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ children, hover: t1, padding: t2, className: t3, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        children = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    const hover = t1 === undefined ? false : t1;
    const padding = t2 === undefined ? "md" : t2;
    const className = t3 === undefined ? "" : t3;
    const t4 = `
        bg-surface rounded-lg
        ${paddingStyles[padding]}
        ${hover ? "transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg" : ""}
        ${className}
      `;
    let t5;
    if ($[7] !== children || $[8] !== props || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = props;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_c = Card;
function CardHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `mb-4 ${className}`;
    let t3;
    if ($[1] !== children || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c1 = CardHeader;
function CardTitle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283";
    }
    const { children, as: t1, className: t2 } = t0;
    const Component = t1 === undefined ? "h3" : t1;
    const className = t2 === undefined ? "" : t2;
    const t3 = `text-heading ${className}`;
    let t4;
    if ($[1] !== Component || $[2] !== children || $[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
            className: t3,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[1] = Component;
        $[2] = children;
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
}
_c2 = CardTitle;
function CardDescription(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `text-body text-sm ${className}`;
    let t3;
    if ($[1] !== children || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 151,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c3 = CardDescription;
function CardContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    if ($[1] !== children || $[2] !== className) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 179,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = className;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c4 = CardContent;
function CardFooter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e23ad1d1f6063699d3ebe450d3f8faff38b3e53529a4791f1b50135aa731e283";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `mt-4 pt-4 border-t border-gold-dark/20 ${className}`;
    let t3;
    if ($[1] !== children || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 208,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
}
_c5 = CardFooter;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardContent");
__turbopack_context__.k.register(_c5, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section,
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const backgroundStyles = {
    default: "bg-background",
    surface: "bg-surface",
    deep: "bg-deep"
};
function Section(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "748c2dd5997135acb014347bd1e53e0205b48ba7b780421a535e417443dfd06c") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "748c2dd5997135acb014347bd1e53e0205b48ba7b780421a535e417443dfd06c";
    }
    let children;
    let props;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== t0) {
        ({ children, background: t1, container: t2, narrow: t3, className: t4, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
    } else {
        children = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
    }
    const background = t1 === undefined ? "default" : t1;
    const container = t2 === undefined ? true : t2;
    const narrow = t3 === undefined ? false : t3;
    const className = t4 === undefined ? "" : t4;
    const t5 = `
        section
        ${backgroundStyles[background]}
        ${className}
      `;
    let t6;
    if ($[8] !== children || $[9] !== container || $[10] !== narrow) {
        t6 = container ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container ${narrow ? "max-w-3xl" : ""}`,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Section.tsx",
            lineNumber: 63,
            columnNumber: 22
        }, this) : children;
        $[8] = children;
        $[9] = container;
        $[10] = narrow;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== props || $[13] !== t5 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t5,
            ...props,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Section.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[12] = props;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    return t7;
}
_c = Section;
function SectionHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "748c2dd5997135acb014347bd1e53e0205b48ba7b780421a535e417443dfd06c") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "748c2dd5997135acb014347bd1e53e0205b48ba7b780421a535e417443dfd06c";
    }
    const { title, subtitle, centered: t1, className: t2 } = t0;
    const centered = t1 === undefined ? false : t1;
    const className = t2 === undefined ? "" : t2;
    const t3 = `
        mb-12
        ${centered ? "text-center" : ""}
        ${className}
      `;
    let t4;
    if ($[1] !== title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-balance",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Section.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    let t5;
    if ($[3] !== centered || $[4] !== subtitle) {
        t5 = subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `mt-4 text-lg text-body max-w-2xl ${centered ? "mx-auto" : ""}`,
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Section.tsx",
            lineNumber: 120,
            columnNumber: 22
        }, this);
        $[3] = centered;
        $[4] = subtitle;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== t3 || $[7] !== t4 || $[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Section.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    return t6;
}
_c1 = SectionHeader;
var _c, _c1;
__turbopack_context__.k.register(_c, "Section");
__turbopack_context__.k.register(_c1, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/HeroMedia.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroMedia",
    ()=>HeroMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroMedia(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "73066a28a08c8ffb2656e57ad560369f4e2778a03eb1eacf412ae03034d480b0") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "73066a28a08c8ffb2656e57ad560369f4e2778a03eb1eacf412ae03034d480b0";
    }
    const { imageSrc, imageAlt, videoSrc, videoPoster, overlayOpacity: t1, className: t2 } = t0;
    const overlayOpacity = t1 === undefined ? 60 : t1;
    const className = t2 === undefined ? "" : t2;
    const [showVideo, setShowVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoLoaded, setVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    let t4;
    if ($[1] !== videoSrc) {
        t3 = ({
            "HeroMedia[useEffect()]": ()=>{
                if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                    return;
                }
                const connection = navigator.connection;
                if (connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") {
                    return;
                }
                if (!videoSrc) {
                    return;
                }
                const observer = new IntersectionObserver((entries)=>{
                    if (entries[0].isIntersecting) {
                        setShowVideo(true);
                        observer.disconnect();
                    }
                }, {
                    threshold: 0.1
                });
                if (containerRef.current) {
                    observer.observe(containerRef.current);
                }
                return ()=>observer.disconnect();
            }
        })["HeroMedia[useEffect()]"];
        t4 = [
            videoSrc
        ];
        $[1] = videoSrc;
        $[2] = t3;
        $[3] = t4;
    } else {
        t3 = $[2];
        t4 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[4] !== showVideo) {
        t5 = ({
            "HeroMedia[useEffect()]": ()=>{
                if (showVideo && videoRef.current) {
                    videoRef.current.play().catch({
                        "HeroMedia[useEffect() > (anonymous)()]": ()=>{
                            setShowVideo(false);
                        }
                    }["HeroMedia[useEffect() > (anonymous)()]"]);
                }
            }
        })["HeroMedia[useEffect()]"];
        $[4] = showVideo;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== showVideo || $[7] !== videoLoaded) {
        t6 = [
            showVideo,
            videoLoaded
        ];
        $[6] = showVideo;
        $[7] = videoLoaded;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    const t7 = `relative w-full h-full overflow-hidden ${className}`;
    const t8 = `
          object-cover
          transition-opacity duration-1000
          ${showVideo && videoLoaded ? "opacity-0" : "opacity-100"}
        `;
    let t9;
    if ($[9] !== imageAlt || $[10] !== imageSrc || $[11] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: imageSrc,
            alt: imageAlt,
            fill: true,
            priority: true,
            className: t8,
            sizes: "100vw"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/HeroMedia.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[9] = imageAlt;
        $[10] = imageSrc;
        $[11] = t8;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== showVideo || $[14] !== videoLoaded || $[15] !== videoPoster || $[16] !== videoSrc) {
        t10 = showVideo && videoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            ref: videoRef,
            className: `
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-1000
            ${videoLoaded ? "opacity-100" : "opacity-0"}
          `,
            poster: videoPoster,
            muted: true,
            loop: true,
            playsInline: true,
            onLoadedData: {
                "HeroMedia[<video>.onLoadedData]": ()=>setVideoLoaded(true)
            }["HeroMedia[<video>.onLoadedData]"],
            children: [
                videoSrc.endsWith(".webm") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: videoSrc,
                    type: "video/webm"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroMedia.tsx",
                    lineNumber: 137,
                    columnNumber: 74
                }, this),
                videoSrc.endsWith(".mp4") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: videoSrc,
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/HeroMedia.tsx",
                    lineNumber: 137,
                    columnNumber: 148
                }, this),
                !videoSrc.endsWith(".webm") && !videoSrc.endsWith(".mp4") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: `${videoSrc}.webm`,
                            type: "video/webm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/HeroMedia.tsx",
                            lineNumber: 137,
                            columnNumber: 255
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: `${videoSrc}.mp4`,
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/HeroMedia.tsx",
                            lineNumber: 137,
                            columnNumber: 308
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/HeroMedia.tsx",
            lineNumber: 131,
            columnNumber: 36
        }, this);
        $[13] = showVideo;
        $[14] = videoLoaded;
        $[15] = videoPoster;
        $[16] = videoSrc;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    const t11 = overlayOpacity / 100;
    let t12;
    if ($[18] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-deep",
            style: {
                opacity: t11
            },
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/HeroMedia.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t10 || $[21] !== t12 || $[22] !== t7 || $[23] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: t7,
            children: [
                t9,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/HeroMedia.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t12;
        $[22] = t7;
        $[23] = t9;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    return t13;
}
_s(HeroMedia, "oHKjBDv+rPuHVFmK7WdGmqaecXI=");
_c = HeroMedia;
var _c;
__turbopack_context__.k.register(_c, "HeroMedia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$HeroMedia$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/HeroMedia.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const BOOKING_URL = "https://timma.no/salong/Rebel";
const navLinks = [
    {
        href: "/tjenester",
        label: "Tjenester"
    },
    {
        href: "/om",
        label: "Om"
    },
    {
        href: "/galleri",
        label: "Galleri"
    },
    {
        href: "/kurs",
        label: "Kurs"
    },
    {
        href: "/kontakt",
        label: "Kontakt"
    }
];
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "c65157a58491c82d6923721e5e02e375387da5835b71b95a9eb026e22a770025") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c65157a58491c82d6923721e5e02e375387da5835b71b95a9eb026e22a770025";
    }
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Header[useEffect()]": ()=>{
                const handleScroll = {
                    "Header[useEffect() > handleScroll]": ()=>{
                        setIsScrolled(window.scrollY > 20);
                    }
                }["Header[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Header[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Header[useEffect()]": ()=>{
                const handleResize = {
                    "Header[useEffect() > handleResize]": ()=>{
                        if (window.innerWidth >= 768) {
                            setIsMobileMenuOpen(false);
                        }
                    }
                }["Header[useEffect() > handleResize]"];
                window.addEventListener("resize", handleResize);
                return ()=>window.removeEventListener("resize", handleResize);
            }
        })["Header[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] !== isMobileMenuOpen) {
        t4 = ({
            "Header[useEffect()]": ()=>{
                if (isMobileMenuOpen) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "";
                }
                return _temp;
            }
        })["Header[useEffect()]"];
        t5 = [
            isMobileMenuOpen
        ];
        $[5] = isMobileMenuOpen;
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const t6 = `
        fixed top-0 left-0 right-0 z-50
        transition-all duration-200
        ${isScrolled ? "bg-deep/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}
      `;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/logo.png",
                alt: "Rebel Barber",
                width: 120,
                height: 48,
                className: "h-10 w-auto",
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 112,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "hidden md:flex items-center gap-8",
            children: navLinks.map(_HeaderNavLinksMap)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            href: BOOKING_URL,
            external: true,
            size: "sm",
            className: "hidden sm:inline-flex",
            children: "Book time"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== isMobileMenuOpen) {
        t10 = ({
            "Header[<button>.onClick]": ()=>setIsMobileMenuOpen(!isMobileMenuOpen)
        })["Header[<button>.onClick]"];
        $[11] = isMobileMenuOpen;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    const t11 = isMobileMenuOpen ? "Lukk meny" : "\xC5pne meny";
    const t12 = `
                    block h-0.5 w-full bg-current transform transition-transform
                    ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}
                  `;
    let t13;
    if ($[13] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t12
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[13] = t12;
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    const t14 = `
                    block h-0.5 w-full bg-current transition-opacity
                    ${isMobileMenuOpen ? "opacity-0" : ""}
                  `;
    let t15;
    if ($[15] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t14
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[15] = t14;
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    const t16 = `
                    block h-0.5 w-full bg-current transform transition-transform
                    ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}
                  `;
    let t17;
    if ($[17] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t16
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[17] = t16;
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] !== t13 || $[20] !== t15 || $[21] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-6 h-5 flex flex-col justify-between",
            children: [
                t13,
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[19] = t13;
        $[20] = t15;
        $[21] = t17;
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    let t19;
    if ($[23] !== isMobileMenuOpen || $[24] !== t10 || $[25] !== t11 || $[26] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center justify-between h-20",
                children: [
                    t7,
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            t9,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden relative z-10 p-2 text-heading",
                                onClick: t10,
                                "aria-label": t11,
                                "aria-expanded": isMobileMenuOpen,
                                children: t18
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 190,
                                columnNumber: 147
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 190,
                        columnNumber: 102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 190,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[23] = isMobileMenuOpen;
        $[24] = t10;
        $[25] = t11;
        $[26] = t18;
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    const t20 = `
          md:hidden fixed inset-0 bg-deep z-40
          transition-all duration-300
          ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `;
    let t21;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = navLinks.map({
            "Header[navLinks.map()]": (link_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link_0.href,
                        className: "block text-2xl font-heading text-heading hover:text-gold transition-colors",
                        onClick: {
                            "Header[navLinks.map() > <Link>.onClick]": ()=>setIsMobileMenuOpen(false)
                        }["Header[navLinks.map() > <Link>.onClick]"],
                        children: link_0.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 207,
                        columnNumber: 65
                    }, this)
                }, link_0.href, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 207,
                    columnNumber: 43
                }, this)
        }["Header[navLinks.map()]"]);
        $[28] = t21;
    } else {
        t21 = $[28];
    }
    let t22;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container h-full flex flex-col justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-6 text-center",
                children: [
                    t21,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "pt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            href: BOOKING_URL,
                            external: true,
                            size: "lg",
                            fullWidth: true,
                            children: "Book time"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 217,
                            columnNumber: 138
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 217,
                        columnNumber: 117
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 217,
                columnNumber: 74
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    let t23;
    if ($[30] !== t20) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t20,
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[30] = t20;
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    let t24;
    if ($[32] !== t19 || $[33] !== t23 || $[34] !== t6) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t6,
            children: [
                t19,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[32] = t19;
        $[33] = t23;
        $[34] = t6;
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    return t24;
}
_s(Header, "xfnk0LjgQWHCVMhWv8swPskaIBc=");
_c = Header;
function _HeaderNavLinksMap(link) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: link.href,
            className: "text-sm uppercase tracking-wider text-heading hover:text-gold transition-colors",
            children: link.label
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 243,
            columnNumber: 30
        }, this)
    }, link.href, false, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 243,
        columnNumber: 10
    }, this);
}
function _temp() {
    document.body.style.overflow = "";
}
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_3d9ccab7._.js.map