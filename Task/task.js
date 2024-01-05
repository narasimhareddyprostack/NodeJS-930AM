let myTasks = [];
let completedTask = [];
let count = 0;
document.getElementById('add-btn').onclick = () => {
    ++count;
    myTasks.push(
        {
            taskname: `Task-${count}`,
            task: document.getElementById('to-do').value
        }
    );
    showBanner();
    document.getElementById('list').innerHTML += `<p id="list-${count}"><input type="checkbox" id="Task-${count}" value="Task-${count}" onclick="taskChange('Task-${count}')">
    <input type="text" value="${document.getElementById('to-do').value}" readonly></p>`;
    document.getElementById('to-do').value="";
    document.getElementById('to-do').focus();
}
let taskChange = taskname => {
    if (document.getElementById(taskname).checked == true) {
        let listNo = "" + taskname;
        listNo = listNo.replace("Task-", "list-");
        document.getElementById(listNo).remove(this);
        let index = myTasks.findIndex(task => task.taskname === taskname);
        completedTask.push({
            taskname: myTasks[index].taskname,
            task: myTasks[index].task
        })
        let indexCompleteTask = completedTask.findIndex(task => task.taskname == "" + taskname);
        console.log("myTasks=>", myTasks)
        console.log("completedTasks=>", completedTask)
        myTasks.splice(index, 1);
        showBanner();
        document.getElementById('completed-task').innerHTML += `<p id="${listNo}">
        <input type="checkbox" id="${"" + taskname}" value="Task-${count}" onclick="taskChange('${"" + taskname}')" checked>
        <strike>${completedTask[indexCompleteTask].task}</strike></p>
        `;
    }
    else {
        let listNo = "" + taskname;
        listNo = listNo.replace("Task-", "list-");
        document.getElementById(listNo).remove(this);
        let index = completedTask.findIndex(task => task.taskname === taskname);
        myTasks.push({
            taskname: completedTask[index].taskname,
            task: completedTask[index].task
        })
        let indexMyTask = myTasks.findIndex(task => task.taskname == "" + taskname);
        completedTask.splice(index, 1);
        showBanner();
        document.getElementById('list').innerHTML += `<p id="${listNo}">
        <input type="checkbox" id="${"" + taskname}" value="${"" + taskname}" onclick="taskChange('${"" + taskname}')">
        <input type="text" value="${myTasks[indexMyTask].task}" readonly></p>
        `;
    }

}
let showBanner = () => {
    document.getElementById("banner-pending").hidden = (myTasks.length === 0) ? true : false;
    document.getElementById("banner-completed").hidden = (completedTask.length === 0) ? true : false;
}