const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API);

const handleAnswer = async (req, res) => {
    try {
        // console.log(inputVal);

        const { inputVal } = req.body;

        const model = genAi.getGenerativeModel({
            model: "gemini-2.5-flash",
        });

        const result = await model.generateContent(`
            ${inputVal}
            anther the question in just 7,10 words not more than that
            `);

        const recommendation = result.response.text();

        res.status(200).json({
            recommendation,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const trackInfo = async (req, res) => {
    try {
        const { answer } = req.body;

        const model = genAi.getGenerativeModel({
            model: "gemini-2.5-flash",
        });

        const result = await model.generateContent(`
                                You are an F1 expert.

                                Generate exactly 4 interesting facts about the Formula 1 track "${answer}".

                                Rules:
                                - Return ONLY a valid JSON array.
                                - Each fact must contain exactly 6 to 7 words.
                                - Facts should be accurate and unique.
                                - Do not number the facts.
                                - Do not include markdown.
                                - Do not include any explanation before or after the array.

                                Example:
                                    [
                                        'Excellent track for aerodynamic testing'.
                                        'Overtaking mainly into Turn 1'.
                                        'Famous for long sweeping corners'.
                                        'Home of the Spanish Grand Prix since'
                                    ]
                                `);

        const response = result.response.text();

        res.status(200).json({
            response,
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = { handleAnswer, trackInfo };
