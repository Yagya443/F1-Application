import { X, Send, Bot } from "lucide-react";
import { useState } from "react";
import ChatMessage from "./ChatMessage";
import axios from "axios";

const BotModel = ({ openBotModel, setOpenBotModel }) => {
    // if (!openBotModel) return null;

    // console.log("openBotModel   ",openBotModel);
    // console.log("setOpenBotModel",setOpenBotModel);
    // const [aiAnswer, setAiAnswer] = useState("");

    const [inputVal, setInputVal] = useState("");
    const [messageArr, setMessageArr] = useState([
        {
            message: "Ask me anything about races, drivers or teams",
            sender: "robot",
        },
    ]);

    const handleSubmit = async () => {
        if (!inputVal) return;

        try {
            const response = await axios.post(
                "http://localhost:3000/api/answer",
                {
                    inputVal,
                },
            );

            setMessageArr([
                ...messageArr,
                { message: inputVal, sender: "human" },
                { message: response.data.recommendation, sender: "robot" },
            ]);
            setInputVal("");
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };

    // console.log(messageArr);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="w-[95%] max-w-md h-[600px] bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-700 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-700 bg-neutral-950">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center">
                            <Bot size={22} className="text-white" />
                        </div>

                        <div>
                            <h2 className="text-white font-semibold text-lg">
                                F1 AI Assistant
                            </h2>
                            <p className="text-neutral-400 text-sm">
                                Ask anything about Formula 1
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setOpenBotModel(false)}
                        className="text-neutral-400 hover:text-white transition"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-neutral-900">
                    {/* Bot Message */}
                    <div className="flex gap-3">
                        {/* <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                            <Bot size={18} className="text-white" />
                        </div>

                        <div className="bg-neutral-800 text-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%]">
                            👋 Hello! I'm your F1 assistant.
                            <br />
                            Ask me anything about races, drivers or teams.
                        </div> */}
                        {/* <ChatMessage 
                                
                            /> */}

                        <div className={`flex flex-col gap-4 w-full  }`}>
                            {messageArr?.map((mes, idx) => (
                                <ChatMessage
                                    key={idx}
                                    message={mes.message}
                                    sender={mes.sender}
                                />
                            ))}
                        </div>
                    </div>

                    {/* User Message */}
                    {/* <div className="flex justify-end">
                        <div className="bg-red-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                            When is the next race?
                        </div>
                    </div> */}
                </div>

                {/* Input */}
                <div className="border-t border-neutral-700 px-4 pt-3 pb-0 bg-neutral-950">
                    <div className="flex gap-3">
                        <input
                            onChange={(e) => setInputVal(e.target.value)}
                            value={inputVal}
                            type="text"
                            placeholder="Ask your question..."
                            className="flex-1 bg-neutral-800 text-white placeholder:text-neutral-500 px-4 py-3 rounded-xl outline-none border border-neutral-700 focus:border-red-600 transition"
                        />

                        <button
                            onClick={handleSubmit}
                            className="bg-red-600 hover:bg-red-700 transition px-4 rounded-xl flex items-center justify-center"
                        >
                            <Send size={20} className="text-white" />
                        </button>
                    </div>
                    <p className="text-xs text-center text-gray-400 py-1">
                        This response is generated by Gemini and may be
                        incorrect.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BotModel;
