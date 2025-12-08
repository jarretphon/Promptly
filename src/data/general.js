export default [
    {
        id: 1,
        title: "Problem solving",
        description: "Solve complex problems step-by-step.",
        content: `Role: You are an expert {domain} assistant.
            Task: Help me with the following problem: {insert problem}.
            Instructions:
            - Break the solution into clear, numbered steps.
            - Explain your reasoning concisely.
            - Highlight assumptions if needed.
            - End with a short, actionable final answer.
            - Ensure clarity and conciseness throughout the explanation.
            Output Format:
            1. Understanding
            2. Approach
            3. Step-by-step Solution
            4. Final Answer
        `
    },
    {
        id: 2,
        title: "Brainstorming & Creative Ideation",
        description: "Generate creative ideas, concepts, variantions or alternatives.",
        content: `Role: You are a creative strategist.
            Task: Generate {number} creative ideas for {insert topic}.
            Constraints:
            - Ideas should be unique and diverse.
            - Avoid clichés and common solutions.
            - Provide a brief explanation (2-3 sentences) for each idea.
        `
    },
    {
        id: 3,
        title: "Decision Making",
        description: "Analyze options, make comparisons and provide recommendations.",
        content: `Task: Evaluate the following options and recommend the best one:
            {option 1}
            {option 2}
            {option 3}
            Criteria for Evaluation:
            - Cost vs. Benefit.
            - Risks and uncertainties.
            - Consider short-term and long-term impacts.
            - { other relevant criteria }
            Instructions:
            - Provide a comparative analysis of each option based on the criterias.
            - Conclude with a clear recommendation and justification.
        `
    },
    {
        id: 4,
        title: "Explain",
        description: "Explain concepts, theories or processes in a clear manner.",
        content: `Role: You are an expert {domain} educator.
            Task: Explain the following concept clearly: {insert concept}.
            Instructions:
            - Use simple language and avoid jargon.
            - Use examples or analogies to illustrate key points.
            - Provide a clear and concise explanation.
            - Address potential questions and common misconceptions.
            - Identify links and connections to other concepts in the domain.
            Output Format:
            1. Introduction
            2. Key Concepts
            3. Examples
            4. Common misconceptions
            5. Connections to other concepts
            6. Conclusion and key takeaways
        `
    },
    {
        id: 5,
        title: "Improve Writing",
        description: "Enhance clarity, style, grammar and overall quality of written content.",
        content: `Role: You are a linguistic expert and a professional writer with a wealth of experience in writing {domain}.
            Task: Improve the following text for clarity, style, and grammar:
            Text: {insert text}
            Requirements:
            - Tone: {professional/casual/persuasive/concise/technical/simple}
            - Target Audience: {specify audience}
            - Preserve the original meaning and intent.
            - Enhance readability, structure and flow.
            - Correct grammatical errors and awkward phrasing.
            - Suggest improvements for structure and organization if needed.
        `
    },
    {
        id: 6,
        title: "Summarize",
        description: "Condense information into concise summaries highlighting key points.",
        content: `Role: You are a linguistic expert highly skilled in comprehension and summarisation.
            Task: Provide a {brief/detailed} summary consisting of {constraints} for the following content:
            {insert content}
            Instructions:
            - Identify and highlight the main ideas and key points.
            - Retain essential information {statistics/facts/examples} while omitting unnecessary details and tangential points.
            - Ensure the summary is clear, concise and coherent.
            - Make the summary complete and self-contained, containing all key points a reader needs without referencing the original content.
        `
    },
    {
        id: 7,
        title: "Find Action Items",
        description: "Identify actionable tasks from meetings, discussions or documents.",
        content: `Role: You are a highly skilled personal assistant experienced in task planning and prioritisation.
            Task: Extract actionable items from the following content:
            {insert content}
            Instructions:
            - Focus on identifying specific tasks or actions that can be taken.
            - Each action item should include a description of the task and its associated context.
            - Prioritize clarity and specificity in task descriptions.
            - Include the responsible party and any deadlines mentioned (if provided).
            - Present the output as a clean, numbered list of action items.
        `
    },
    {
        id: 8,
        title: "Draft & Outline",
        description: "Create structured drafts for documents, presentations or projects.",
        content: `Role: You are an expert in {domain}. You also have a wealth of experience in writing and content planning.
            Task: Create a draft or outline for the following topic:
            {insert topic}
            Instructions:
            - Produce a clear, logical structure with sections and subsections.
            - Ensure each section has a clear purpose and flows logically to the next.
            - Include key ideas and supporting points to be covered in each section.
            - Aim for a comprehensive yet concise outline that serves as a solid foundation for further development.
        `
    }
]