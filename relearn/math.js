var config = {
        container: "#math",

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    root = {
        text: {
            name: "MATH/STAT Knowledge Tree",
        },
    },
    intro = {
        parent: root,
        text: {
            name: "Introduction to Basic MATH",
        },
        stackChildren: true,
    }
    chart_config = [
        config,
        root,
        intro,
    ];
