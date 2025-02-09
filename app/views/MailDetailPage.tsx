import { useEffect, useState } from "react";

import ReplySection from "../components/replay-section";
import { MessageCardData } from "../components/ui/message-card";
import { messagesMock } from "../mocks/messagesMock";

export default function MailDetailPage({ emailId }: { emailId: string }) {
  const [email, setEmail] = useState<MessageCardData | null>(null);

  useEffect(() => {
    const fetchedEmail = messagesMock.find((msg) => msg.id === emailId) || null;
    setEmail(fetchedEmail);
  }, [emailId]);

  if (!email) return <div>Loading...</div>;

  return (
    <div className="mx-auto w-full max-w-[800px] p-4">
      <h2 className="mb-4 text-2xl font-bold">{email.subject}</h2>
      <div className="mb-4 text-sm text-gray-600">
        <div>From: {email.from.name}</div>
        <div>{email.timestamp}</div>
      </div>
      <div className="mb-6 text-gray-700">{email.messageBody}</div>
      <ReplySection emailId={email.id} />
    </div>
  );
}
