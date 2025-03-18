//使用let声明
let task = [];
let currentFilter = "all";

//使用const声明变量
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

const taskInput = document.getElementById("taskInput");
const stastusElement = document.getElementById("status");

//使用数值类型示例
const defaultTaskCount = 0;


function addTask() {
    const currentTaskCount = task.length + 1;
    if (taskInput.value === "") {
        alert("任务不能为空");
    }

    if (){}
    
    const newTask = {
        id: Date.now(),
        text: taskInput.value,
        completed: false,
        createAt: new Date(),
    }

    task.push(newTask)

    taskInput.value = "";
}