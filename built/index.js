import * as React from "react";
import * as ReactDOM from "react-dom";
import Form from "./components/Form.js";
import ToDoList from "./components/ToDoList.js";
import generateRandomColor from './utils';
;
;
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            tasks: [] // TODO: Read about this syntax
        };
        this.handleFormSubmit = (e, task) => {
            e.preventDefault();
            let itemToAdd = { task: task, color: generateRandomColor(new Date()) };
            this.setState(({ tasks }) => ({
                tasks: [...tasks, itemToAdd],
            }));
        };
        this.deleteTask = (idx) => {
            this.setState(({ tasks }) => ({
                tasks: [...tasks.slice(0, idx), ...tasks.slice(idx + 1)],
            }));
        };
    }
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement(Form, { handleFormSubmit: this.handleFormSubmit }),
            React.createElement(ToDoList, { tasks: this.state.tasks, deleteTask: this.deleteTask })));
    }
}
const rootElement = document.getElementById("root");
ReactDOM.render(React.createElement(App, null), rootElement);
//# sourceMappingURL=index.js.map