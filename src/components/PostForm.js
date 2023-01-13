import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;
    const newPost = {
      title,
      id: Date.now().toString(),
    };

    this.setState({ title: "" });

    console.log({ newPost });
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => {
      return {
        ...prev,
        ...{
          [event.target.name]: event.target.value,
        },
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}
