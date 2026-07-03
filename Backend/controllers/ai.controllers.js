const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API);

const handleAnswer = async (req, res) => {
    try {
        const { answer } = req.body;

        const model = genAi.getGenerativeModel({
            model: "gemini-2.5-flash",
        });

        const result = await model.generateContent(`
            ${answer}
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
                give me 4 facts of ${"answer"} this track and make sure that each fact hav=s 4,5 words in it 
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
