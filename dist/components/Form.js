import * as React from "react";
;
;
class Form extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            task: '',
        };
        this.handleChange = (e) => {
            this.setState({ task: e.target.value });
        };
        this.handleSubmit = (e, task) => {
            this.props.handleFormSubmit(e, task);
            this.setState({ task: '' });
        };
    }
    render() {
        const { task } = this.state;
        return (React.createElement("form", { onSubmit: (e) => this.handleSubmit(e, task), style: { marginBottom: '15px' } },
            React.createElement("input", { type: "text", name: "task", value: task, onChange: this.handleChange, style: { marginRight: '10px' } }),
            React.createElement("input", { type: "submit", name: "submit", value: "Add To Do" })));
    }
}
export default Form;
//# sourceMappingURL=Form.js.map