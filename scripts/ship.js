class Ship {
    #pos = {
        x: 0,
        y: 0,
        z: 10
    };

    constructor() {
    }

    /** @param {CanvasRenderingContext2D} ctx */
    drawBody(ctx) {
        ctx.fillStyle = "#0f0";

        for (let i = 0; i < 3; i++)
            ctx.fillRect(this.#pos.x + this.#pos.z * (i + 0.5), this.#pos.y + this.#pos.z * i, this.#pos.z, this.#pos.z * (5 - 2 * i));

        return this;
    }

    /**
     * @param {CanvasRenderingContext2D} ctx
     * @param {boolean} cycle
     */
    drawFlames(ctx, cycle) {
        ctx.fillStyle = cycle ? "#f90" : "#ff0";

        for (let i = 0; i < 2; i++)
            ctx.fillRect(this.#pos.x, this.#pos.y + this.#pos.z * (1 + 2 * i), this.#pos.z / 2, this.#pos.z);

        return this;
    }
}