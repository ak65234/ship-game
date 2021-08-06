"use strict";

(function () {
    const cvs = document.querySelector("canvas");
    const ctx = cvs.getContext("2d");

    const starField = new StarField(500, cvs.width, cvs.height);
    const ship = new Ship();

    const clear = function () {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
    }

    let start = 0;
    const render = function (end) {
        requestAnimationFrame(render);

        const dt = end - start;
        const ds = dt / 1000;
        start = end;

        const cycle = end % 200 > 100;

        clear();

        starField.draw(ctx).move(-ds * 200, 0);
        ship.drawBody(ctx).drawFlames(ctx, cycle);

        document.title = "Ship Game - FPS: " + Math.round(1 / ds);
    };

    requestAnimationFrame(render);
})();