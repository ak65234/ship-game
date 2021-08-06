"use strict";

class Star {
    #minSize = 1;
    #maxSize = 3;

    #pos = {
        x: 0,
        y: 0,
        z: 0
    };

    #w = 0;
    #h = 0;

    constructor() { }

    #randomSize() {
        this.#pos.z = Math.random() * (this.#maxSize - this.#minSize) + this.#minSize;
    }

    #check() {
        if (this.#pos.x + this.#pos.z < 0) {
            this.#pos.x += this.#w;
            this.#randomSize();
        } else if (this.#pos.x > this.#w) {
            this.#randomSize();
            this.#pos.x -= this.#w + this.#pos.z;
        }

        if (this.#pos.y + this.#pos.z < 0) {
            this.#pos.y += this.#h;
            this.#randomSize();
        } else if (this.#pos.y > this.#h) {
            this.#randomSize();
            this.#pos.y -= this.#h + this.#pos.z;
        }
    }

    /**
     * @param {number} width 
     * @param {number} height 
     */
    bounds(width, height) {
        this.#w = width;
        this.#h = height;

        return this;
    }

    random() {
        this.#pos.x = Math.random() * this.#w;
        this.#pos.y = Math.random() * this.#h;
        this.#randomSize();

        return this;
    }

    /**
     * @param {number} x 
     * @param {number} y 
     */
    move(x, y) {
        this.#pos.x += x * this.#pos.z;
        this.#pos.y += y * this.#pos.z;

        this.#check();

        return this;
    }

    /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx) {
        ctx.fillStyle = "#fff";
        ctx.fillRect(this.#pos.x, this.#pos.y, this.#pos.z, this.#pos.z);

        return this;
    }
}

class StarField {
    /** @type {Star[]} */
    #stars = [];

    /**
     * @param {number} numStars 
     * @param {number} width 
     * @param {number} height 
     */
    constructor(numStars, width, height) {
        for (let i = 0; i < numStars; i++)
            this.#stars.push(new Star().bounds(width, height).random());
    }

    /** @param {CanvasRenderingContext2D} ctx */
    draw(ctx) {
        for (const star of this.#stars)
            star.draw(ctx);

        return this;
    }

    /**
     * @param {number} x 
     * @param {number} y 
     */
    move(x, y) {
        for (const star of this.#stars)
            star.move(x, y);

        return this;
    }
}