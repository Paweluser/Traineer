import { Inbox } from "lucide-react";

export function Messages() {
  return (
    <div className="flex h-64 flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="rounded-full bg-white/5 p-4">
        <Inbox size={40} className="text-gray-500" />
      </div>
      <div>
        <p className="font-bold text-(--text-color)">Nic tu jeszcze nie ma</p>
        <p className="mt-1 text-xs text-gray-500">
          Wróć później, aby zobaczyć powiadomienia o swoich treningach i
          osiągnięciach.
        </p>
      </div>
    </div>
  );
}
