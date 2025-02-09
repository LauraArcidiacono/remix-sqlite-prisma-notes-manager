import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import TabsContentSection from "../components/tabs-content-section";
import { messagesMock } from "../mocks/messagesMock";

export default function InboxListPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const allMail = messagesMock;
  const unreadMail = messagesMock.filter((m) => !m.isRead);

  return (
    <div className="mx-auto w-full max-w-[800px] p-4">
      <section className="mb-6">
        <h2 className="mb-6 text-2xl font-bold">Inbox</h2>

        <Tabs defaultValue="allMail" className="w-full">
          <TabsList className="mb-6 flex space-x-6">
            <TabsTrigger
              value="allMail"
              className="rounded-lg px-4 py-2 transition-all hover:bg-gray-200"
            >
              All Mail
            </TabsTrigger>
            <TabsTrigger
              value="unread"
              className="rounded-lg px-4 py-2 transition-all hover:bg-gray-200"
            >
              Unread
            </TabsTrigger>
          </TabsList>

          <TabsContentSection
            tabValue="allMail"
            messages={allMail}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <TabsContentSection
            tabValue="unread"
            messages={unreadMail}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Tabs>
      </section>
    </div>
  );
}
