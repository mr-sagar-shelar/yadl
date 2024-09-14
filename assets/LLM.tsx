import * as React from "react";
import ReactDOM from "react-dom";
import { pipeline } from "@xenova/transformers";

let llmObject = undefined;
export default function LLMApp() {
  const [message, setMessage] = React.useState<string>("");
  const [inputText, setInputText] = React.useState<string>("Write me a love poem about cheese.");

  React.useEffect(() => {
    loadLLM();
  }, []);

  const loadLLM = async () => {
    setMessage("Loading LLM...");
    const LLMObject = await pipeline(
      "text2text-generation",
      "Xenova/LaMini-Flan-T5-783M",
    );
    llmObject = LLMObject;
    setMessage("");
  };

  const generateResult = async () => {
    let result = await llmObject(inputText, {
      max_new_tokens: 200,
      temperature: 0.9,
      repetition_penalty: 2.0,
      no_repeat_ngram_size: 3,
    });
    setMessage(result[0].generated_text);
  };

  const onGenerateClick= () => {
    setMessage("Generating...");
    generateResult();
  }

  return (
    <div>
      {llmObject && (
        <>
          <div className="mb-6">
            <label htmlFor="name" className="form-label">
              Input <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter text for LLM"
              type="text"
              value={inputText}
              onChange={(event) => {
                setInputText(event.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={onGenerateClick}
          >
            Generate
          </button>
        </>
      )}
      <h3>{message}</h3>
    </div>
  );
}

ReactDOM.render(
  React.createElement(LLMApp, null),
  document.getElementById("llm-renderer"),
);
