import * as React from "react";
import * as ReactDOM from "react-dom";
import { pipeline } from '@xenova/transformers';

interface AppState {
  darkMode?: boolean;
  generatedText?: string;
}

class AppClass extends React.Component<{}, AppState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.onLoadLLM = this.onLoadLLM.bind(this);

    // set initial state
    this.state = {
      darkMode: true,
    };

  }

  async onLoadLLM() {
    this.setState({ generatedText: 'Generating...'});
    let poet = await pipeline('text2text-generation', 'Xenova/LaMini-Flan-T5-783M');
    let result = await poet('Write me a love poem about cheese.', {
        max_new_tokens: 200,
        temperature: 0.9,
        repetition_penalty: 2.0,
        no_repeat_ngram_size: 3,
    });
    this.setState({ generatedText: result[0].generated_text});
  }


  render() {
    return (
      <>
        <div className="grid xs:grid-cols-1 lg:grid-cols-2">
        <button className="btn btn-primary" onClick={this.onLoadLLM}>
            Generate LLM
        </button>

        <h3>{this.state.generatedText}</h3>
        </div>
      </>
    );
  }
}

// Render to #root
ReactDOM.render(
  React.createElement(AppClass, null),
  document.getElementById("llm-renderer"),
);
