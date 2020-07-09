import React, {Fragment, Component, PureComponent} from 'react';
import Index from "@page/home"
import {createMap} from 'esn';

export const urlCompEnum = createMap([{
    alias: "home",
    component: Index
},{
    alias: "page_1",
    component: One
}], "alias")


export let baseRoutes = [{
    name: "主页",
    path: "/",
    component: Index,
}
];
