/* =========================================================
   MECHANICAL ENGINEERING ACADEMIC LIBRARY
   PROGRAMME CATALOGUE ENGINE
   ========================================================= */


/* =========================================================
   01. APPLICATION STATE
   ========================================================= */

const ProgrammeApp = {

    currentLevel: "ND I",

    currentSemester: "Semester I"

};


/* =========================================================
   02. HELPER FUNCTIONS
   ========================================================= */

function getCurriculum() {

    return window.ME_LIBRARY_CURRICULUM || null;

}


function createElement(tag, className = "", text = "") {

    const element = document.createElement(tag);

    if (className) {

        element.className = className;

    }

    if (text) {

        element.textContent = text;

    }

    return element;

}


/* =========================================================
   03. COURSE CARD
   ========================================================= */

function createCourseCard(course) {

    const article =
        createElement(
            "article",
            "course-card"
        );


    const code =
        createElement(
            "span",
            "course-code",
            course.code
        );


    const category =
        createElement(
            "span",
            "course-category",
            course.category
        );


    const title =
        createElement(
            "h3",
            "",
            course.title
        );


    const information =
        createElement(
            "div",
            "course-information"
        );


    const units =
        createElement(
            "span",
            "",
            `${course.creditUnits} Credit Unit${course.creditUnits === 1 ? "" : "s"}`
        );


    const action =
        createElement(
            "button",
            "course-button",
            "Open Course →"
        );


    action.type = "button";


    action.addEventListener(
        "click",
        function () {

            openCoursePreview(course);

        }
    );


    information.appendChild(units);


    article.appendChild(code);

    article.appendChild(category);

    article.appendChild(title);

    article.appendChild(information);

    article.appendChild(action);


    return article;

}


/* =========================================================
   04. COURSE PREVIEW
   ========================================================= */

function openCoursePreview(course) {

    const modal =
        document.getElementById(
            "course-modal"
        );


    if (!modal) {

        return;

    }


    const modalCode =
        document.getElementById(
            "modal-course-code"
        );


    const modalTitle =
        document.getElementById(
            "modal-course-title"
        );


    const modalCategory =
        document.getElementById(
            "modal-course-category"
        );


    const modalUnits =
        document.getElementById(
            "modal-course-units"
        );


    if (modalCode) {

        modalCode.textContent =
            course.code;

    }


    if (modalTitle) {

        modalTitle.textContent =
            course.title;

    }


    if (modalCategory) {

        modalCategory.textContent =
            course.category;

    }


    if (modalUnits) {

        modalUnits.textContent =
            `${course.creditUnits} Credit Unit${course.creditUnits === 1 ? "" : "s"}`;

    }


    modal.classList.add(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* =========================================================
   05. CLOSE COURSE PREVIEW
   ========================================================= */

function closeCoursePreview() {

    const modal =
        document.getElementById(
            "course-modal"
        );


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   06. RENDER ND SEMESTER
   ========================================================= */

function renderNDSemester(semester) {

    const curriculum =
        getCurriculum();


    if (!curriculum) {

        console.error(
            "Mechanical Engineering curriculum database not found."
        );

        return;

    }


    const container =
        document.getElementById(
            "course-catalogue"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    const heading =
        createElement(
            "div",
            "catalogue-heading"
        );


    const label =
        createElement(
            "span",
            "section-kicker",
            `${semester.level} • ${semester.semester}`
        );


    const title =
        createElement(
            "h2",
            "",
            `${semester.level} ${semester.semester}`
        );


    const description =
        createElement(
            "p",
            "",
            "Explore the courses in this academic semester."
        );


    heading.appendChild(label);

    heading.appendChild(title);

    heading.appendChild(description);


    const grid =
        createElement(
            "div",
            "course-grid"
        );


    semester.courses.forEach(
        function (course) {

            grid.appendChild(
                createCourseCard(course)
            );

        }
    );


    container.appendChild(
        heading
    );


    container.appendChild(
        grid
    );

}


/* =========================================================
   07. RENDER HND OPTIONS
   ========================================================= */

function renderHNDOptions() {

    const curriculum =
        getCurriculum();


    if (!curriculum) {

        return;

    }


    const container =
        document.getElementById(
            "hnd-catalogue"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    curriculum.HND.options.forEach(
        function (option, index) {

            const card =
                createElement(
                    "article",
                    "specialization-card"
                );


            const number =
                createElement(
                    "span",
                    "specialization-number",
                    String(index + 1).padStart(2, "0")
                );


            const title =
                createElement(
                    "h3",
                    "",
                    option.title
                );


            const description =
                createElement(
                    "p",
                    "",
                    option.description
                );


            const button =
                createElement(
                    "button",
                    "course-button",
                    "Explore Specialization →"
                );


            button.type = "button";


            button.addEventListener(
                "click",
                function () {

                    showComingSoon(
                        option.title
                    );

                }
            );


            card.appendChild(
                number
            );

            card.appendChild(
                title
            );

            card.appendChild(
                description
            );

            card.appendChild(
                button
            );


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   08. COMING SOON MESSAGE
   ========================================================= */

function showComingSoon(title) {

    const message =
        document.getElementById(
            "programme-message"
        );


    if (!message) {

        return;

    }


    message.textContent =
        `${title} course catalogue will be added in the next academic build stage.`;


    message.classList.add(
        "visible"
    );


    setTimeout(
        function () {

            message.classList.remove(
                "visible"
            );

        },
        4500
    );

}


/* =========================================================
   09. ND SEMESTER BUTTONS
   ========================================================= */

function setupSemesterButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-semester]"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const semesterId =
                        button.dataset.semester;


                    const curriculum =
                        getCurriculum();


                    if (!curriculum) {

                        return;

                    }


                    const selected =
                        curriculum.ND.semesters.find(
                            function (semester) {

                                return (
                                    semester.id ===
                                    semesterId
                                );

                            }
                        );


                    if (!selected) {

                        return;

                    }


                    buttons.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    renderNDSemester(
                        selected
                    );


                    const catalogue =
                        document.getElementById(
                            "course-catalogue"
                        );


                    if (catalogue) {

                        catalogue.scrollIntoView(
                            {
                                behavior: "smooth",
                                block: "start"
                            }
                        );

                    }

                }
            );

        }
    );

}


/* =========================================================
   10. MODAL CONTROLS
   ========================================================= */

function setupModal() {

    const closeButton =
        document.getElementById(
            "close-course-modal"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeCoursePreview
        );

    }


    const modal =
        document.getElementById(
            "course-modal"
        );


    if (modal) {

        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    closeCoursePreview();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeCoursePreview();

            }

        }
    );

}


/* =========================================================
   11. INITIALISE PROGRAMME PAGE
   ========================================================= */

function initialiseProgrammePage() {

    const curriculum =
        getCurriculum();


    if (!curriculum) {

        console.error(
            "Curriculum database unavailable."
        );

        return;

    }


    setupSemesterButtons();

    setupModal();


    const firstSemester =
        curriculum.ND.semesters[0];


    if (firstSemester) {

        renderNDSemester(
            firstSemester
        );

    }


    renderHNDOptions();

}


/* =========================================================
   12. START APPLICATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initialiseProgrammePage
);
