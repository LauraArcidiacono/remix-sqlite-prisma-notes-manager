import { useState } from "react";

import MessageCard, { MessageCardData } from "../components/ui/message-card";
import Searchbar from "../components/ui/search-bar";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "./ui/pagination";
import { TabsContent } from "./ui/tabs";

interface TabsContentSectionProps {
  tabValue: string;
  messages: MessageCardData[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function TabsContentSection({
  tabValue,
  messages,
  searchTerm,
  setSearchTerm,
}: TabsContentSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 4;

  const filteredMessages = messages.filter(
    (message) =>
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.messageBody.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = filteredMessages.slice(
    indexOfFirstMessage,
    indexOfLastMessage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <TabsContent value={tabValue}>
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="mt-6 space-y-6">
        {currentMessages.map((message) => (
          <MessageCard key={message.id} data={message} />
        ))}
      </div>

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              aria-disabled={
                currentPage * messagesPerPage >= filteredMessages.length
              }
              className={
                currentPage * messagesPerPage >= filteredMessages.length
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </TabsContent>
  );
}
