/* =========================================================
   MECHANICAL ENGINEERING ACADEMIC LIBRARY

   COURSE DATA
   MEC 122 — THERMODYNAMICS I

   Programme:
   National Diploma in Mechanical Engineering Technology

   Level:
   ND I

   Semester:
   Semester II

   This is the master data structure for the course.
   Academic lesson content will be expanded progressively.
   ========================================================= */


const MEC122_COURSE = {

    /* =====================================================
       COURSE IDENTITY
       ===================================================== */

    code: "MEC 122",

    title: "Thermodynamics I",

    programme:
        "National Diploma in Mechanical Engineering Technology",

    level: "ND I",

    semester: "Semester II",

    creditUnits: 3,

    category: "Professional",


    /* =====================================================
       COURSE DESCRIPTION
       ===================================================== */

    description:
        "An introduction to the fundamental principles of thermodynamics and their application to mechanical engineering systems, energy conversion processes and engineering analysis.",


    overview:
        "Thermodynamics is the study of energy, heat, work and the transformations that occur between different forms of energy. This course introduces students to the fundamental concepts, properties, laws and engineering applications required for further study in thermal and energy systems.",


    /* =====================================================
       LEARNING OBJECTIVES
       ===================================================== */

    objectives: [

        "Explain the fundamental concepts and terminology used in thermodynamics.",

        "Distinguish between thermodynamic systems, surroundings, boundaries and control volumes.",

        "Identify and explain thermodynamic properties and state variables.",

        "Explain thermodynamic processes, cycles and equilibrium.",

        "Differentiate between heat and work as modes of energy transfer.",

        "Apply the First Law of Thermodynamics to suitable engineering systems.",

        "Use appropriate thermodynamic equations in basic engineering calculations.",

        "Interpret thermodynamic tables and property information at an introductory level.",

        "Relate thermodynamic principles to practical mechanical engineering equipment.",

        "Develop a sound foundation for advanced study of thermodynamics and thermal engineering."

    ],


    /* =====================================================
       COURSE MODULES
       ===================================================== */

    modules: [

        /* =================================================
           MODULE 01
           ================================================= */

        {

            id: "mec122-module-1",

            title:
                "Fundamental Concepts of Thermodynamics",

            description:
                "Introduction to thermodynamic systems, surroundings, boundaries, properties, state, equilibrium, processes and cycles.",

            lessons: [

                {

                    id:
                        "mec122-m1-l1",

                    title:
                        "Introduction to Thermodynamics"

                },

                {

                    id:
                        "mec122-m1-l2",

                    title:
                        "Thermodynamic Systems and Surroundings"

                },

                {

                    id:
                        "mec122-m1-l3",

                    title:
                        "Properties of Thermodynamic Systems"

                },

                {

                    id:
                        "mec122-m1-l4",

                    title:
                        "State, Equilibrium and Processes"

                },

                {

                    id:
                        "mec122-m1-l5",

                    title:
                        "Thermodynamic Cycles"

                }

            ]

        },


        /* =================================================
           MODULE 02
           ================================================= */

        {

            id: "mec122-module-2",

            title:
                "Energy, Heat and Work",

            description:
                "Study of energy forms, heat transfer, work transfer and the relationship between these quantities in engineering systems.",

            lessons: [

                {

                    id:
                        "mec122-m2-l1",

                    title:
                        "Forms of Energy"

                },

                {

                    id:
                        "mec122-m2-l2",

                    title:
                        "Heat Transfer"

                },

                {

                    id:
                        "mec122-m2-l3",

                    title:
                        "Work Transfer"

                },

                {

                    id:
                        "mec122-m2-l4",

                    title:
                        "Internal Energy"

                },

                {

                    id:
                        "mec122-m2-l5",

                    title:
                        "Enthalpy"

                }

            ]

        },


        /* =================================================
           MODULE 03
           ================================================= */

        {

            id: "mec122-module-3",

            title:
                "Properties of Pure Substances",

            description:
                "Introduction to pure substances, phases, phase changes and thermodynamic property diagrams and tables.",

            lessons: [

                {

                    id:
                        "mec122-m3-l1",

                    title:
                        "Pure Substances"

                },

                {

                    id:
                        "mec122-m3-l2",

                    title:
                        "Phases of a Substance"

                },

                {

                    id:
                        "mec122-m3-l3",

                    title:
                        "Phase Change Processes"

                },

                {

                    id:
                        "mec122-m3-l4",

                    title:
                        "Thermodynamic Property Tables"

                },

                {

                    id:
                        "mec122-m3-l5",

                    title:
                        "Property Diagrams"

                }

            ]

        },


        /* =================================================
           MODULE 04
           ================================================= */

        {

            id: "mec122-module-4",

            title:
                "First Law of Thermodynamics",

            description:
                "Development of the First Law and its application to closed systems and basic engineering processes.",

            lessons: [

                {

                    id:
                        "mec122-m4-l1",

                    title:
                        "The First Law of Thermodynamics"

                },

                {

                    id:
                        "mec122-m4-l2",

                    title:
                        "Energy Conservation"

                },

                {

                    id:
                        "mec122-m4-l3",

                    title:
                        "First Law for Closed Systems"

                },

                {

                    id:
                        "mec122-m4-l4",

                    title:
                        "Engineering Energy Balances"

                },

                {

                    id:
                        "mec122-m4-l5",

                    title:
                        "Worked First-Law Applications"

                }

            ]

        },


        /* =================================================
           MODULE 05
           ================================================= */

        {

            id: "mec122-module-5",

            title:
                "Engineering Applications of Thermodynamics",

            description:
                "Connection of thermodynamic principles to practical mechanical engineering systems and thermal equipment.",

            lessons: [

                {

                    id:
                        "mec122-m5-l1",

                    title:
                        "Thermodynamics in Mechanical Engineering"

                },

                {

                    id:
                        "mec122-m5-l2",

                    title:
                        "Boilers and Steam Systems"

                },

                {

                    id:
                        "mec122-m5-l3",

                    title:
                        "Internal Combustion Engines"

                },

                {

                    id:
                        "mec122-m5-l4",

                    title:
                        "Refrigeration and Thermal Systems"

                },

                {

                    id:
                        "mec122-m5-l5",

                    title:
                        "Engineering Review and Integration"

                }

            ]

        }

    ]

};


/* =========================================================
   REGISTER CURRENT COURSE
   ========================================================= */

window.ME_LIBRARY_CURRENT_COURSE =
    MEC122_COURSE;
