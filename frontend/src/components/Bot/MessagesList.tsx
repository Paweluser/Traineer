import { initialMessages } from "../../constants/messagesData";

export function MessagesList() {
  return (
    <div className="flex flex-col gap-6">
      {initialMessages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`relative max-w-[80%] rounded-2xl p-4 text-sm shadow-lg md:text-base ${
              msg.sender === "user"
                ? "rounded-br-none bg-(--hover-color) text-(--text-color)"
                : "rounded-bl-none border border-(--text-color)/10 bg-(--text-color)/10 text-white backdrop-blur-md"
            }`}
          >
            {msg.content}

            <span
              className={`absolute -bottom-7 text-sm whitespace-nowrap text-(--text-color) opacity-80 ${
                msg.sender === "user" ? "-right-3" : "-left-3"
              }`}
            >
              {msg.sender === "user" ? "Ty" : "Traineer AI"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
