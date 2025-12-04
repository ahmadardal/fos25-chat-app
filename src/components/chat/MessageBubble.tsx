import type { ChatMessage } from "../../types";

type Props = {
  msg: ChatMessage;
  isSelf: boolean;
};

export default function MessageBubble({ msg, isSelf }: Props) {
  return (
    <div
      className={`flex flex-col max-w[70%] ${
        isSelf ? "self-end items-end" : "self-start items-start"
      }`}
    >
      {!isSelf && (
        <div className="text-[12px] font-semibold opacity-[0.7] mb-[4px]">
          {msg.sender}
        </div>
      )}
      <div
        className="px-[10px] py-[14px] rounded-[18px] bg-[var(--tg-bubble-self)] text-[var(--tg-bubble-self-text)]
wrap-break-word text-[15px] leading-[1.4]"
      >
        {msg.message}
      </div>
    </div>
  );
}
