/* =========================================================
   MECHANICAL ENGINEERING ACADEMIC LIBRARY
   UNIVERSAL COURSE ENGINE

   This engine controls the universal course page.
   Course information will be supplied by individual
   course data files.
   ========================================================= */


/* =========================================================
   01. APPLICATION STATE
   ========================================================= */

const CourseApp = {

    currentCourse: null,

    currentModule: null,

    currentLesson: null,

    completedLessons: new Set()

};


/* =========================================================
   02. COURSE DATA ACCESS
   ========================================================= */

function getCurrentCourse() {

    return window.ME_LIBRARY_CURRENT_COURSE || null;

}


/* =========================================================
   03. ELEMENT HELPER
   ========================================================= */

function courseElement(
    tag,
    className = "",
    text = ""
) {

    const element =
        document.createElement(tag);


    if (className) {

        element.className =
            className;

    }


    if (text) {

        element.textContent =
            text;

    }


    return element;

}


/* =========================================================
   04. COURSE HEADER
   ========================================================= */

function renderCourseHeader(course) {

    const code =
        document.getElementById(
            "course-code"
        );


    const title =
        document.getElementById(
            "course-title"
        );


    const category =
        document.getElementById(
            "course-category"
        );


    const description =
        document.getElementById(
            "course-description"
        );


    const level =
        document.getElementById(
            "course-level"
        );


    const semester =
        document.getElementById(
            "course-semester"
        );


    const units =
        document.getElementById(
            "course-units"
        );


    if (code) {

        code.textContent =
            course.code;

    }


    if (title) {

        title.textContent =
            course.title;

    }


    if (category) {

        category.textContent =
            course.category;

    }


    if (description) {

        description.textContent =
            course.description;

    }


    if (level) {

        level.textContent =
            course.level;

    }


    if (semester) {

        semester.textContent =
            course.semester;

    }


    if (units) {

        units.textContent =
            course.creditUnits;

    }


    document.title =
        `${course.code} — ${course.title} | Mechanical Engineering Academic Library`;

}


/* =========================================================
   05. COURSE OVERVIEW
   ========================================================= */

function renderCourseOverview(course) {

    const container =
        document.getElementById(
            "course-overview-content"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    const paragraph =
        course.overview ||
        course.description ||
        "Course overview will be provided.";


    const text =
        courseElement(
            "p",
            "",
            paragraph
        );


    container.appendChild(
        text
    );

}


/* =========================================================
   06. LEARNING OBJECTIVES
   ========================================================= */

function renderLearningObjectives(course) {

    const container =
        document.getElementById(
            "course-objectives"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    const objectives =
        course.objectives || [];


    objectives.forEach(
        function (objective) {

            const item =
                courseElement(
                    "li",
                    "",
                    objective
                );


            container.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   07. MODULE NAVIGATION
   ========================================================= */

function renderModuleNavigation(course) {

    const container =
        document.getElementById(
            "module-navigation"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    const modules =
        course.modules || [];


    modules.forEach(
        function (module, index) {

            const button =
                courseElement(
                    "button",
                    "module-nav-button",
                    `${String(index + 1).padStart(2, "0")}  ${module.title}`
                );


            button.type =
                "button";


            button.addEventListener(
                "click",
                function () {

                    showModule(
                        module.id
                    );

                }
            );


            container.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   08. MODULE LIST
   ========================================================= */

function renderModuleList(course) {

    const container =
        document.getElementById(
            "module-list"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    const modules =
        course.modules || [];


    modules.forEach(
        function (module, index) {

            const article =
                courseElement(
                    "article",
                    "module-card"
                );


            const number =
                courseElement(
                    "span",
                    "module-number",
                    String(index + 1).padStart(2, "0")
                );


            const title =
                courseElement(
                    "h3",
                    "",
                    module.title
                );


            const description =
                courseElement(
                    "p",
                    "",
                    module.description ||
                    "Structured engineering lessons."
                );


            const lessonCount =
                courseElement(
                    "span",
                    "module-lesson-count",
                    `${(module.lessons || []).length} Lesson${(module.lessons || []).length === 1 ? "" : "s"}`
                );


            const button =
                courseElement(
                    "button",
                    "module-open-button",
                    "Open Module →"
                );


            button.type =
                "button";


            button.addEventListener(
                "click",
                function () {

                    showModule(
                        module.id
                    );

                }
            );


            article.appendChild(
                number
            );

            article.appendChild(
                title
            );

            article.appendChild(
                description
            );

            article.appendChild(
                lessonCount
            );

            article.appendChild(
                button
            );


            container.appendChild(
                article
            );

        }
    );

}


/* =========================================================
   09. SHOW MODULE
   ========================================================= */

function showModule(moduleId) {

    const course =
        CourseApp.currentCourse;


    if (!course) {

        return;

    }


    const module =
        (course.modules || []).find(
            function (item) {

                return item.id === moduleId;

            }
        );


    if (!module) {

        return;

    }


    CourseApp.currentModule =
        module;


    const navigationButtons =
        document.querySelectorAll(
            ".module-nav-button"
        );


    navigationButtons.forEach(
        function (button) {

            button.classList.remove(
                "active"
            );

        }
    );


    const lessonViewer =
        document.getElementById(
            "lesson-viewer"
        );


    if (lessonViewer) {

        lessonViewer.scrollIntoView(
            {
                behavior: "smooth",
                block: "start"
            }
        );

    }


    renderModuleLessons(
        module
    );

}


/* =========================================================
   10. MODULE LESSONS
   ========================================================= */

function renderModuleLessons(module) {

    const content =
        document.getElementById(
            "lesson-content"
        );


    const title =
        document.getElementById(
            "lesson-title"
        );


    const label =
        document.getElementById(
            "lesson-module-label"
        );


    if (!content) {

        return;

    }


    content.innerHTML = "";


    if (label) {

        label.textContent =
            `MODULE ${String(
                (CourseApp.currentCourse.modules || [])
                    .indexOf(module) + 1
            ).padStart(2, "0")}`;

    }


    if (title) {

        title.textContent =
            module.title;

    }


    const lessons =
        module.lessons || [];


    if (!lessons.length) {

        const message =
            courseElement(
                "p",
                "",
                "Lessons for this module will be added during the academic content build."
            );


        content.appendChild(
            message
        );


        return;

    }


    const lessonList =
        courseElement(
            "div",
            "lesson-list"
        );


    lessons.forEach(
        function (lesson) {

            const button =
                courseElement(
                    "button",
                    "lesson-button",
                    lesson.title
                );


            button.type =
                "button";


            button.addEventListener(
                "click",
                function () {

                    showLesson(
                        module,
                        lesson
                    );

                }
            );


            lessonList.appendChild(
                button
            );

        }
    );


    content.appendChild(
        lessonList
    );

}


/* =========================================================
   11. SHOW LESSON
   ========================================================= */

function showLesson(
    module,
    lesson
) {

    CourseApp.currentModule =
        module;


    CourseApp.currentLesson =
        lesson;


    const title =
        document.getElementById(
            "lesson-title"
        );


    const label =
        document.getElementById(
            "lesson-module-label"
        );


    const content =
        document.getElementById(
            "lesson-content"
        );


    if (label) {

        const moduleNumber =
            (CourseApp.currentCourse.modules || [])
                .indexOf(module) + 1;


        label.textContent =
            `MODULE ${String(moduleNumber).padStart(2, "0")}`;

    }


    if (title) {

        title.textContent =
            lesson.title;

    }


    if (!content) {

        return;

    }


    content.innerHTML = "";


    const lessonBody =
        courseElement(
            "div",
            "lesson-body"
        );


    if (lesson.introduction) {

        const intro =
            courseElement(
                "p",
                "lesson-introduction",
                lesson.introduction
            );


        lessonBody.appendChild(
            intro
        );

    }


    if (lesson.content) {

        const paragraphs =
            Array.isArray(
                lesson.content
            )
                ? lesson.content
                : [lesson.content];


        paragraphs.forEach(
            function (paragraph) {

                const text =
                    courseElement(
                        "p",
                        "",
                        paragraph
                    );


                lessonBody.appendChild(
                    text
                );

            }
        );

    }


    if (
        lesson.equations &&
        lesson.equations.length
    ) {

        renderEquations(
            lessonBody,
            lesson.equations
        );

    }


    if (
        lesson.examples &&
        lesson.examples.length
    ) {

        renderExamples(
            lessonBody,
            lesson.examples
        );

    }


    if (lesson.practical) {

        const practical =
            courseElement(
                "div",
                "lesson-practical"
            );


        const heading =
            courseElement(
                "h3",
                "",
                "Engineering Application"
            );


        const text =
            courseElement(
                "p",
                "",
                lesson.practical
            );


        practical.appendChild(
            heading
        );

        practical.appendChild(
            text
        );


        lessonBody.appendChild(
            practical
        );

    }


    if (
        lesson.mistakes &&
        lesson.mistakes.length
    ) {

        const mistakes =
            courseElement(
                "div",
                "lesson-mistakes"
            );


        const heading =
            courseElement(
                "h3",
                "",
                "Common Mistakes"
            );


        mistakes.appendChild(
            heading
        );


        const list =
            courseElement(
                "ul"
            );


        lesson.mistakes.forEach(
            function (mistake) {

                list.appendChild(
                    courseElement(
                        "li",
                        "",
                        mistake
                    )
                );

            }
        );


        mistakes.appendChild(
            list
        );


        lessonBody.appendChild(
            mistakes
        );

    }


    const completeButton =
        courseElement(
            "button",
            "lesson-complete-button",
            "Mark Lesson Complete ✓"
        );


    completeButton.type =
        "button";


    completeButton.addEventListener(
        "click",
        function () {

            markLessonComplete(
                lesson.id
            );

        }
    );


    lessonBody.appendChild(
        completeButton
    );


    content.appendChild(
        lessonBody
    );


    updateCourseProgress();

}


/* =========================================================
   12. EQUATIONS
   ========================================================= */

function renderEquations(
    parent,
    equations
) {

    const section =
        courseElement(
            "div",
            "equation-section"
        );


    const heading =
        courseElement(
            "h3",
            "",
            "Engineering Equations"
        );


    section.appendChild(
        heading
    );


    equations.forEach(
        function (equation) {

            const box =
                courseElement(
                    "div",
                    "equation-box"
                );


            const expression =
                courseElement(
                    "strong",
                    "",
                    equation.formula || ""
                );


            box.appendChild(
                expression
            );


            if (equation.variables) {

                const variables =
                    courseElement(
                        "p",
                        "",
                        equation.variables
                    );


                box.appendChild(
                    variables
                );

            }


            section.appendChild(
                box
            );

        }
    );


    parent.appendChild(
        section
    );

}


/* =========================================================
   13. WORKED EXAMPLES
   ========================================================= */

function renderExamples(
    parent,
    examples
) {

    const section =
        courseElement(
            "div",
            "worked-example-section"
        );


    const heading =
        courseElement(
            "h3",
            "",
            "Worked Engineering Examples"
        );


    section.appendChild(
        heading
    );


    examples.forEach(
        function (example, index) {

            const article =
                courseElement(
                    "article",
                    "worked-example"
                );


            const title =
                courseElement(
                    "h4",
                    "",
                    `Example ${index + 1}: ${example.title || "Engineering Problem"}`
                );


            article.appendChild(
                title
            );


            if (example.problem) {

                article.appendChild(
                    courseElement(
                        "p",
                        "",
                        example.problem
                    )
                );

            }


            if (example.solution) {

                const solution =
                    courseElement(
                        "div",
                        "example-solution"
                    );


                solution.appendChild(
                    courseElement(
                        "strong",
                        "",
                        "Solution"
                    )
                );


                solution.appendChild(
                    courseElement(
                        "p",
                        "",
                        example.solution
                    )
                );


                article.appendChild(
                    solution
                );

            }


            section.appendChild(
                article
            );

        }
    );


    parent.appendChild(
        section
    );

}


/* =========================================================
   14. LESSON COMPLETION
   ========================================================= */

function markLessonComplete(
    lessonId
) {

    CourseApp.completedLessons.add(
        lessonId
    );


    updateCourseProgress();


    const button =
        document.querySelector(
            ".lesson-complete-button"
        );


    if (button) {

        button.textContent =
            "Lesson Completed ✓";

        button.classList.add(
            "completed"
        );

    }

}


/* =========================================================
   15. COURSE PROGRESS
   ========================================================= */

function updateCourseProgress() {

    const course =
        CourseApp.currentCourse;


    if (!course) {

        return;

    }


    let totalLessons = 0;


    (course.modules || []).forEach(
        function (module) {

            totalLessons +=
                (module.lessons || []).length;

        }
    );


    const completed =
        CourseApp.completedLessons.size;


    const percentage =
        totalLessons > 0
            ? Math.round(
                (completed / totalLessons) * 100
            )
            : 0;


    const progressBar =
        document.getElementById(
            "course-progress-bar"
        );


    const progressText =
        document.getElementById(
            "course-progress-text"
        );


    if (progressBar) {

        progressBar.style.width =
            `${percentage}%`;

    }


    if (progressText) {

        progressText.textContent =
            `${percentage}% Complete`;

    }

}


/* =========================================================
   16. COURSE INITIALISATION
   ========================================================= */

function initialiseCoursePage() {

    const course =
        getCurrentCourse();


    if (!course) {

        console.warn(
            "No course data has been loaded yet."
        );

        return;

    }


    CourseApp.currentCourse =
        course;


    renderCourseHeader(
        course
    );


    renderCourseOverview(
        course
    );


    renderLearningObjectives(
        course
    );


    renderModuleNavigation(
        course
    );


    renderModuleList(
        course
    );


    updateCourseProgress();

}


/* =========================================================
   17. START COURSE APPLICATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initialiseCoursePage
);
