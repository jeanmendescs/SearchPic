import React from "react";

//será utilizada class pq serão haverá states para capturar o comportamento do usuario
class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    //impede a pagina de ser atualizada ao apertar enter (comportamento padrão)
    event.preventDefault();
    //prop vinda de App.js (a func q será invocada esta em App.jsx)
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Image Search</label>
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
