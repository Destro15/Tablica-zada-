{
    const tasks = [
        {
            content: "pojedź po fure do NL",
            done: true,
        },
        {
            content: "sprzedaj fure",
            done: false,
        },
    ];

    const addNewTask = (newTaskContent) => {

        tasks.push({
            content: newTaskContent,
        });

        render();
    }
    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };


    const render = () => {
        let = htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li>
            <button class="js-remove">usuń zadanie</button>
            ${task.content}

          </li>
            `;


        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });

        });
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        console.log(newTaskContent);

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

    }
    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

    };
    init();

}