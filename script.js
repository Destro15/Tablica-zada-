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

    const render = () => {
        let = htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li>
            ${task.content}
          </li>
            `;


        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const addNewTask = (newTaskContent) => {

        tasks.push({
            content: newTaskContent,
        });

        render();
    }


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