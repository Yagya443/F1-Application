import React from "react";
import { useState } from "react";
import BotModel from "../components/BotModel";
import { Bot } from "lucide-react";

const AiChat = () => {
    const [openBotModel, setOpenBotModel] = useState(false);

    // console.log("openBotModel   1", openBotModel);
    // console.log("setOpenBotModel1", setOpenBotModel);

    return (
        <div className="bg-gray-400 ">
            <button
                onClick={() => setOpenBotModel(true)}
                className="fixed right-8 bottom-8 bg-black border-white border-4 rounded-xl p-2"
            >
                <Bot size={40} />
            </button>

            {openBotModel && (
                <BotModel
                    openBotModel={openBotModel}
                    setOpenBotModel={setOpenBotModel}
                />
            )}
        </div>
    );
};

export default AiChat;
