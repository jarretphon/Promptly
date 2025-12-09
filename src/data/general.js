export default [
  {
    id: 1,
    title: "Problem solving",
    description: "Solve complex problems step-by-step.",
    content:
      "Role: You are an expert {domain} assistant.\n" +
      "Task: Help me with the following problem: {insert problem}.\n" +
      "Instructions:\n" +
      "- Break the solution into clear, numbered steps.\n" +
      "- Explain your reasoning concisely.\n" +
      "- Highlight assumptions if needed.\n" +
      "- End with a short, actionable final answer.\n" +
      "- Ensure clarity and conciseness throughout the explanation.\n" +
      "Output Format:\n" +
      "1. Understanding\n" +
      "2. Approach\n" +
      "3. Step-by-step Solution\n" +
      "4. Final Answer\n",
  },
  {
    id: 2,
    title: "Brainstorming & Creative Ideation",
    description:
      "Generate creative ideas, concepts, variantions or alternatives.",
    content:
      "Role: You are a creative strategist.\n" +
      "Task: Generate {number} creative ideas for {insert topic}.\n" +
      "Constraints:\n" +
      "- Ideas should be unique and diverse.\n" +
      "- Avoid clichés and common solutions.\n" +
      "- Provide a brief explanation (2-3 sentences) for each idea.\n",
  },
  {
    id: 3,
    title: "Decision Making",
    description:
      "Analyze options, make comparisons and provide recommendations.",
    content:
      "Task: Evaluate the following options and recommend the best one:\n" +
      "{option 1}\n" +
      "{option 2}\n" +
      "{option 3}\n" +
      "Criteria for Evaluation:\n" +
      "- Cost vs. Benefit.\n" +
      "- Risks and uncertainties.\n" +
      "- Consider short-term and long-term impacts.\n" +
      "- { other relevant criteria }\n" +
      "Instructions:\n" +
      "- Provide a comparative analysis of each option based on the criterias.\n" +
      "- Conclude with a clear recommendation and justification.\n",
  },
  {
    id: 4,
    title: "Explain",
    description: "Explain concepts, theories or processes in a clear manner.",
    content:
      "Role: You are an expert {domain} educator.\n" +
      "Task: Explain the following concept clearly: {insert concept}.\n" +
      "Instructions:\n" +
      "- Use simple language and avoid jargon.\n" +
      "- Use examples or analogies to illustrate key points.\n" +
      "- Provide a clear and concise explanation.\n" +
      "- Address potential questions and common misconceptions.\n" +
      "- Identify links and connections to other concepts in the domain.\n" +
      "Output Format:\n" +
      "1. Introduction\n" +
      "2. Key Concepts\n" +
      "3. Examples\n" +
      "4. Common misconceptions\n" +
      "5. Connections to other concepts\n" +
      "6. Conclusion and key takeaways\n",
  },
  {
    id: 5,
    title: "Improve Writing",
    description:
      "Enhance clarity, style, grammar and overall quality of written content.",
    content:
      "Role: You are a linguistic expert and a professional writer with a wealth of experience in writing {domain}.\n" +
      "Task: Improve the following text for clarity, style, and grammar:\n" +
      "Text: {insert text}\n" +
      "Requirements:\n" +
      "- Tone: {professional/casual/persuasive/concise/technical/simple}\n" +
      "- Target Audience: {specify audience}\n" +
      "- Preserve the original meaning and intent.\n" +
      "- Enhance readability, structure and flow.\n" +
      "- Correct grammatical errors and awkward phrasing.\n" +
      "- Suggest improvements for structure and organization if needed.\n",
  },
  {
    id: 6,
    title: "Summarize",
    description:
      "Condense information into concise summaries highlighting key points.",
    content:
      "Role: You are a linguistic expert highly skilled in comprehension and summarisation.\n" +
      "Task: Provide a {brief/detailed} summary consisting of {constraints} for the following content:\n" +
      "{insert content}\n" +
      "Instructions:\n" +
      "- Identify and highlight the main ideas and key points.\n" +
      "- Retain essential information {statistics/facts/examples}\n" +
      "- Omit unnecessary details and tangential points.\n" +
      "- Ensure the summary is clear, concise and coherent.\n" +
      "- Make the summary complete and self-contained, " +
      " containing all key points a reader needs without referencing the original content.\n",
  },
  {
    id: 7,
    title: "Find Action Items",
    description:
      "Identify actionable tasks from meetings, discussions or documents.",
    content:
      "Role: You are a highly skilled personal assistant experienced in task planning and prioritisation.\n" +
      "Task: Extract actionable items from the following content:\n" +
      "{insert content}\n" +
      "Instructions:\n" +
      "- Focus on identifying specific tasks or actions that can be taken.\n" +
      "- Each action item should include a description of the task and its associated context.\n" +
      "- Prioritize clarity and specificity in task descriptions.\n" +
      "- Include the responsible party and any deadlines mentioned (if provided).\n" +
      "- Present the output as a clean, numbered list of action items.\n",
  },
  {
    id: 8,
    title: "Draft & Outline",
    description:
      "Create structured drafts for documents, presentations or projects.",
    content:
      "Role: You are an expert in {domain}. You also have a wealth of experience in writing and content planning.\n" +
      "Task: Create a draft or outline for the following topic:\n" +
      "{insert topic}\n" +
      "Instructions:\n" +
      "- Produce a clear, logical structure with sections and subsections.\n" +
      "- Ensure each section has a clear purpose and flows logically to the next.\n" +
      "- Include key ideas and supporting points to be covered in each section.\n" +
      "- Aim for a comprehensive yet concise outline that serves as a solid foundation for further development.\n",
  },
];
