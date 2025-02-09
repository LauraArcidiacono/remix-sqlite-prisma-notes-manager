import { Badge } from "./badge";

export type MailFolder =
  | "inbox"
  | "drafts"
  | "sent"
  | "junk"
  | "trash"
  | "archive";

export type MailTag = "work" | "personal" | "family" | "travel" | "others";

export interface User {
  name: string;
  email: string;
}

export interface MessageCardData {
  id: string;
  from: User;
  to: string[];
  subject: string;
  messageBody: string;
  isRead: boolean;
  timestamp: string;
  tags: MailTag[];
  folder: MailFolder;
}

export interface MessageCardProps {
  data: MessageCardData;
}

export default function MessageCard({ data }: MessageCardProps) {
  const messagePreview =
    data.messageBody.length > 80
      ? `${data.messageBody.slice(0, 80)}...`
      : data.messageBody;
  return (
    <div className="hover:shadow-m mb-1 rounded-lg bg-white p-3 shadow-lg transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <div className="inline flex items-center justify-between text-xl font-semibold">
              {data.from.name}
              <div
                className={`ml-2 h-2 w-2 rounded-full ${data.isRead ? "bg-green-500" : "bg-blue-500"}`}
              ></div>
            </div>
            <div className="text-sm text-gray-600">{data.subject}</div>
          </div>
        </div>
        <div className="text-xs text-gray-500">{data.timestamp}</div>
      </div>
      <div className="mt-2 text-gray-600">{messagePreview}</div>
      <div className="mt-2 flex space-x-3">
        {data.tags.map((tag, index) => (
          <Badge
            key={index}
            className="rounded-md bg-primary px-2 py-1 text-xs text-white"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
