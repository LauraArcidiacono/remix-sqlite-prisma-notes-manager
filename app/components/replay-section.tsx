import { useState } from "react";

export default function ReplySection({ emailId }: { emailId: string }) {
  const [replyMessage, setReplyMessage] = useState("");

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyMessage(e.target.value);
  };

  const handleSendReply = () => {
    console.log(`Reply to email ${emailId}:`, replyMessage);
  };

  return (
    <div className="mt-6">
      <textarea
        value={replyMessage}
        onChange={handleReplyChange}
        placeholder="Write your reply..."
        className="h-32 w-full rounded-lg border p-4"
      />
      <button
        onClick={handleSendReply}
        className="mt-4 rounded-lg bg-primary px-6 py-2 text-white"
      >
        Send
      </button>
    </div>
  );
}
