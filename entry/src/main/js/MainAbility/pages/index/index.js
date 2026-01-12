import app from '@system.app';

export default {
    rotateImage() {
        this.animationName = `rotate` + this.index;
        this.index = (this.index + 1) % 4;
    },

    swipe(e) {
        if (e.direction === "right") {
            app.terminate();
        }
    },

    data: {
        animationName: 'rotate0',
        index: 0
    }
}