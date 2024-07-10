/// <reference types="../@types/jquery"/>

import { getData } from "./ui.module.js";
 let nav = new getData().GetData('mmorpg')
 document.querySelectorAll('.nav-item .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('.navbar-nav .active').classList.remove('active');
        link.classList.add('active');
    });
});
