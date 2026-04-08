export const buildReviewPrompt = (code: string, language: string) => {
    return `
  You are a senior software engineer acting as a code reviewer.
  
  Analyze the following ${language} code and respond in this structured format:
  
  ## 🐞 Bugs
  - List possible bugs or errors
  
  ## ⚠️ Issues
  - Bad practices or risks
  
  ## 💡 Suggestions
  - Improvements and optimizations
  
  ## 📘 Explanation
  - Explain what the code does in simple terms
  
  Be concise but clear.
  
  CODE:
  ${code}
  `;
  };

  export const buildFixPrompt = (code: string, language: string) => {
    return `
  You are a senior software engineer.
  
  Fix and improve the following ${language} code.
  
  STRICT RULES:
  - Return ONLY valid ${language} code
  - DO NOT include explanations
  - DO NOT include comments
  - DO NOT include markdown (no triple backticks)
  - DO NOT include <think> or reasoning
  - DO NOT describe your process
  - ONLY output pure code
  
  CODE:
  ${code}
  `;
  };