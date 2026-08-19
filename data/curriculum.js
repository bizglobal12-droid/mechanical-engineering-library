/* =========================================================
   MECHANICAL ENGINEERING ACADEMIC LIBRARY
   CURRICULUM DATABASE

   Primary academic reference:
   NBTE Curriculum and Course Specifications
   National Diploma in Mechanical Engineering Technology
   November 2020

   This file stores programme structure separately from
   the HTML interface.
   ========================================================= */


/* =========================================================
   ND PROGRAMME
   ========================================================= */

const ND_CURRICULUM = {

    programme: "National Diploma in Mechanical Engineering Technology",

    duration: "Two academic sessions / Four semesters",

    semesters: [

        /* =================================================
           ND I — SEMESTER I
           ================================================= */

        {
            id: "nd1-sem1",

            level: "ND I",

            semester: "Semester I",

            courses: [

                {
                    code: "GNS 101",
                    title: "Use of English I (Grammar)",
                    category: "General Studies",
                    creditUnits: 2
                },

                {
                    code: "GNS 111",
                    title: "Citizenship Education",
                    category: "General Studies",
                    creditUnits: 2
                },

                {
                    code: "MTH 112",
                    title: "Algebra and Elementary Trigonometry",
                    category: "Foundation",
                    creditUnits: 2
                },

                {
                    code: "EEC 115",
                    title: "Electrical Engineering Science I",
                    category: "Foundation / Engineering Science",
                    creditUnits: 2
                },

                {
                    code: "MEC 111",
                    title: "Technical Drawing",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 112",
                    title: "Engineering Mechanics I (Statics)",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 113",
                    title: "Basic Workshop Technology and Practice",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 114",
                    title: "Introduction to Computing",
                    category: "Professional",
                    creditUnits: 2
                }

            ]

        },


        /* =================================================
           ND I — SEMESTER II
           ================================================= */

        {
            id: "nd1-sem2",

            level: "ND I",

            semester: "Semester II",

            courses: [

                {
                    code: "GNS 201",
                    title: "Use of English II (Essay and Comprehension)",
                    category: "General Studies",
                    creditUnits: 2
                },

                {
                    code: "ENT 126",
                    title: "Introduction to Entrepreneurship I",
                    category: "General Studies",
                    creditUnits: 3
                },

                {
                    code: "MTH 122",
                    title: "Trigonometric and Analytical Geometry",
                    category: "Foundation",
                    creditUnits: 2
                },

                {
                    code: "MEC 121",
                    title: "Engineering Graphics",
                    category: "Professional",
                    creditUnits: 2
                },

                {
                    code: "MEC 122",
                    title: "Thermodynamics I",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 123",
                    title: "Machine Tools Technology and Practice",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 124",
                    title: "Engineering Mechanics II (Dynamics)",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 125",
                    title: "Automotive Technology and Practice I",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 126",
                    title: "Welding Technology and Practice",
                    category: "Professional",
                    creditUnits: 2
                },

                {
                    code: "MEC 127",
                    title: "SIWES",
                    category: "Industrial Training",
                    creditUnits: 0
                }

            ]

        },


        /* =================================================
           ND II — SEMESTER I
           ================================================= */

        {
            id: "nd2-sem1",

            level: "ND II",

            semester: "Semester I",

            courses: [

                {
                    code: "MTH 202",
                    title: "Logic and Linear Algebra",
                    category: "Foundation",
                    creditUnits: 2
                },

                {
                    code: "EEC 125",
                    title: "Electrical Engineering Science II",
                    category: "Engineering Science",
                    creditUnits: 2
                },

                {
                    code: "ENT 216",
                    title: "Introduction to Entrepreneurship II",
                    category: "General Studies",
                    creditUnits: 3
                },

                {
                    code: "MEC 211",
                    title: "Engineering Drawing I",
                    category: "Professional",
                    creditUnits: 2
                },

                {
                    code: "MEC 212",
                    title: "Engineering Measurement",
                    category: "Professional",
                    creditUnits: 2
                },

                {
                    code: "MEC 213",
                    title: "Thermodynamics II",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 214",
                    title: "Fluid Mechanics",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 215",
                    title: "Foundry Technology and Forging Operations",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 216",
                    title: "Introduction to CAD/CAM",
                    category: "Professional",
                    creditUnits: 2
                },

                {
                    code: "MEC 217",
                    title: "Technical Report Writing",
                    category: "Professional",
                    creditUnits: 1
                }

            ]

        },


        /* =================================================
           ND II — SEMESTER II
           ================================================= */

        {
            id: "nd2-sem2",

            level: "ND II",

            semester: "Semester II",

            courses: [

                {
                    code: "MTH 211",
                    title: "Calculus",
                    category: "Foundation",
                    creditUnits: 2
                },

                {
                    code: "MEC 221",
                    title: "Supervisory Management",
                    category: "Management",
                    creditUnits: 2
                },

                {
                    code: "MEC 222",
                    title: "Strength of Materials",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 223",
                    title: "Engineering Drawing II",
                    category: "Professional",
                    creditUnits: 2
                },

                {
                    code: "MEC 224",
                    title: "Properties of Materials",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 225",
                    title: "Refrigeration and Air Conditioning",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 226",
                    title: "Plant Services and Maintenance",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 227",
                    title: "Automotive Technology and Practice II",
                    category: "Professional",
                    creditUnits: 3
                },

                {
                    code: "MEC 200",
                    title: "Final Year Project",
                    category: "Project",
                    creditUnits: 4
                }

            ]

        }

    ]

};


/* =========================================================
   HND PROGRAMME
   ========================================================= */

const HND_CURRICULUM = {

    programme: "Higher National Diploma in Mechanical Engineering Technology",

    curriculumYear: "November 2020",

    options: [

        {
            id: "automotive",

            title: "Automotive Engineering Technology",

            description:
                "Advanced study of automotive systems, vehicle technology, diagnostics, performance and maintenance."

        },

        {
            id: "manufacturing",

            title: "Manufacturing Engineering Technology",

            description:
                "Advanced manufacturing, production systems, materials, machining, design and industrial engineering."

        },

        {
            id: "plant",

            title: "Plant Engineering Technology",

            description:
                "Advanced plant systems, maintenance, power, services, machinery and industrial engineering applications."

        }

    ]

};


/* =========================================================
   ACADEMIC LEARNING MODEL
   ========================================================= */

const COURSE_STRUCTURE = {

    programme: [
        "ND I",
        "ND II",
        "HND I",
        "HND II"
    ],

    semester: [
        "Semester I",
        "Semester II"
    ],

    course: true,

    modules: true,

    topics: true,

    lessons: true,

    calculations: true,

    practicals: true,

    examples: true,

    revision: true,

    quizzes: true,

    examinations: true

};


/* =========================================================
   EXPORT DATABASE
   ========================================================= */

window.ME_LIBRARY_CURRICULUM = {

    ND: ND_CURRICULUM,

    HND: HND_CURRICULUM,

    COURSE_STRUCTURE: COURSE_STRUCTURE

};
