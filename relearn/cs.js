var config = {
        container: "#cs",

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    root = {
        text: {
            name: "CS Knowledge Tree",
        },
    },
    cs_intro = {
        parent: root,
        text: {
            name: "Introduction to Basic CS",
        },
        stackChildren: true,
    },
    cs_intro1 = {
        parent: cs_intro,
        text:{
            name: "UCB: CS 61 A",
            title: {val: "Structure and Interpretation of Computer Programs", href: "https://cs61a.org/"},
        },
    },
    cs_intro2 = {
        parent: cs_intro1,
        text:{
            name: "UCB: CS 61 B",
            title: {val: "Data Structure", href: "https://sp18.datastructur.es/"},
        },
    },
    cs_intro3 = {
        parent: cs_intro2,
        text:{
            name: "UCB: CS 61 C",
            title: {val: "Great Ideas in Computer Architecture ", href: "http://www-inst.eecs.berkeley.edu/~cs61c/su18/"},
        },
    },
    cs_foundation = {
        parent: root,
        text: {
            name: "Some Fundamental CS Courses",
        },
    },
    cs_system = {
        parent: cs_foundation,
        text: {
            name: "System",
        },
        stackChildren: true,
    },
    cs_db = {
        parent: cs_system,
        text: {
            name: "Database",
        },
    },
    cs_network = {
        parent: cs_system,
        text: {
            name: "Networking",
        },
    },
    cs_ops = {
        parent: cs_system,
        text: {
            name: "Operation System",
        },
    },
    cs_pal = {
        parent: cs_system,
        text: {
            name: "Parallelism/Concurrency",
        },
    },
    cs_theory = {
        parent: cs_foundation,
        text: {
            name: "Theory",
        },
    },
    cs_pl = {
        parent: cs_foundation,
        text: {
            name: "Programming Lauguages/Compilers",
        },
    },
    chart_config = [
        config,
        root,
        cs_intro,
        cs_intro1,
        cs_intro2,
        cs_intro3,
        cs_foundation,
        cs_theory,
        cs_system,
        cs_db,
        cs_network,
        cs_ops,
        cs_pal,
        cs_pl,
    ];
