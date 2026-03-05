import { useState } from "react";
import { TabBtn } from "./TabBtn";
import { BellBtn } from "./BellBtn";
import { Messages } from "./Messages";

export function NotificationPanel() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"unread" | "read">("unread");

  return (
    <div className="relative z-auto mb-10 flex items-center justify-center">
      <BellBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="absolute bottom-0 left-16 z-50 w-80 overflow-hidden rounded-2xl border border-(--text-color)/10 bg-[#1C1C1E] backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-(--text-color)/10 bg-black/20 p-4">
            <h3 className="font-bold text-(--text-color)">Powiadomienia</h3>
          </div>
          <div className="flex border-b border-(--text-color)/10 px-4">
            <TabBtn
              label="Nieprzeczytane"
              isActive={activeTab === "unread"}
              onClick={() => setActiveTab("unread")}
            />
            <TabBtn
              label="Przeczytane"
              isActive={activeTab === "read"}
              onClick={() => setActiveTab("read")}
            />
          </div>
          <Messages />
        </div>
      )}
    </div>
  );
}
