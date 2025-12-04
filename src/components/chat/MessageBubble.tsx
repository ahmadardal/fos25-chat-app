import type { ChatMessage } from "../../types";
import { useTheme } from '../../../ThemeContext';

type Props = {
  msg: ChatMessage;
  isSelf: boolean;
};

export default function MessageBubble({ msg, isSelf }: Props) {
  const { colorAccents: colors } = useTheme();
  return (
    <div
      className={`flex flex-col max-w-[70%] ${
        isSelf ? "self-end items-end" : "self-start items-start"
      }`}
    >
      {!isSelf && (
        <div className="text-[12px] font-semibold opacity-[0.7] mb-[4px]">
          {msg.sender}
        </div>
      )}
      <div
        className={`max-w-[70%] px-[10px] py-[14px] rounded-[18px] text-[15px] leading-[1.4] break-words ${
          isSelf
            ? `self-end ${colors.bubbleSelf} ${colors.bubbleSelfText} rounded-br-[4px]`
            : `self-start ${colors.bubbleOther} ${colors.bubbleOtherText} rounded-bl-[4px]`
        }`}
      >
        {msg.message}
      </div>
    </div>
  );
}
