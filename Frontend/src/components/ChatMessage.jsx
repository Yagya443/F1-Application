function ChatMessage({ message, sender }) {
    // console.log("message",message);
    // console.log("sender",sender);

    return (
        <div
            className={`messages flex items-center gap-2  ${sender === "robot" ? "justify-start" : "justify-end"}`}
        >
            {sender === "robot" && (
                <img
                    className="grayscale-100"
                    style={{ height: "40px" }}
                    src="https://cdn-icons-png.flaticon.com/512/1149/1149386.png"
                />
            )}
            <p
                className={`${sender === "robot" ? " rounded-tl-sm max-w-1/2" : " rounded-tr-sm max-w-1/2"} bg-red-600 text-white py-1 px-4 rounded-xl`}
                

            >
                {message}
            </p>
            {sender === "human" && (
                <img
                    style={{ height: "40px" }}
                    className="rounded-full"
                    src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                />
            )}
        </div>
    );
}

export default ChatMessage;
