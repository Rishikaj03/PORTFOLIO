export const fadeUp = {

    hidden: {
        opacity: 0,
        y: 40
    },

    show: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }

};


export const fadeLeft = {

    hidden: {
        opacity: 0,
        x: -60
    },

    show: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.7
        }
    }

};


export const fadeRight = {

    hidden: {
        opacity: 0,
        x: 60
    },

    show: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.7
        }
    }

};


export const zoomIn = {

    hidden: {
        opacity: 0,
        scale: .9
    },

    show: {
        opacity: 1,
        scale: 1,

        transition: {
            duration: .6
        }
    }

};


/* Wrap a group of children to have them animate in one after another */
export const staggerContainer = {

    hidden: {},

    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }

};


/* Subtle "lift" used on hover for buttons / interactive elements */
export const hoverLift = {

    rest: { y: 0, scale: 1 },

    hover: {
        y: -4,
        scale: 1.03,
        transition: { duration: 0.25, ease: "easeOut" }
    }

};