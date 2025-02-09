import { MessageCardData } from "~/components/ui/message-card";

export const messagesMock: MessageCardData[] = [
  {
    id: "1",
    from: { name: "William Smith", email: "william.smith@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Meeting Tomorrow",
    messageBody:
      "Hello Laura,\n\n" +
      "We have a scheduled meeting tomorrow to discuss the final details of the project.\n" +
      "Please bring any pending reports and timelines for review.\n\n" +
      "Thanks,\nWilliam",
    isRead: false,
    timestamp: "2025-01-18 18:14:56",
    tags: ["work", "others"],
    folder: "inbox",
  },
  {
    id: "2",
    from: { name: "Jane Doe", email: "jane.doe@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Project Update",
    messageBody:
      "Hello Laura,\n\n" +
      "I'm sending a quick update on the project milestones. The design phase is nearly complete and we're preparing for development.\n" +
      "I'll share more details in our next call.\n\n" +
      "Best regards,\nJane",
    isRead: true,
    timestamp: "2025-01-17 14:22:11",
    tags: ["work"],
    folder: "inbox",
  },
  {
    id: "3",
    from: { name: "John Doe", email: "john.doe@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "New Proposal",
    messageBody:
      "Hi Laura,\n\n" +
      "I have just drafted a new proposal that addresses our main objectives and budget constraints.\n" +
      "Please review it at your earliest convenience and let me know your thoughts.\n\n" +
      "Thanks,\nJohn",
    isRead: false,
    timestamp: "2025-01-15 08:14:11",
    tags: ["work", "others"],
    folder: "trash",
  },
  {
    id: "4",
    from: { name: "Alice Johnson", email: "alice.johnson@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Budget Review",
    messageBody:
      "Team,\n\n" +
      "This is a reminder that the budget review meeting is scheduled for next week.\n" +
      "We need to finalize any outstanding financial allocations before the next quarter.\n\n" +
      "Regards,\nAlice",
    isRead: true,
    timestamp: "2025-01-14 09:30:00",
    tags: ["work"],
    folder: "inbox",
  },
  {
    id: "5",
    from: { name: "Bob Williams", email: "bob.williams@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Team Meeting",
    messageBody:
      "Hello Laura,\n\n" +
      "Just a reminder about our team meeting on Monday at 10 AM.\n" +
      "Please arrive a few minutes early to settle in and grab coffee.\n\n" +
      "Best,\nBob",
    isRead: true,
    timestamp: "2025-01-12 16:45:32",
    tags: ["work"],
    folder: "inbox",
  },
  {
    id: "6",
    from: { name: "Charlie Brown", email: "charlie.brown@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Conference Call",
    messageBody:
      "Good morning,\n\n" +
      "Our next conference call is scheduled for this Friday. We'll discuss the upcoming tasks and assign responsibilities.\n" +
      "Let me know if you have scheduling conflicts.\n\n" +
      "Best regards,\nCharlie",
    isRead: true,
    timestamp: "2025-01-10 08:00:00",
    tags: ["work", "others"],
    folder: "inbox",
  },
  {
    id: "7",
    from: { name: "William Smith", email: "william.smith@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Meeting Tomorrow",
    messageBody:
      "Hey Laura,\n\n" +
      "Just another reminder for tomorrow's meeting to finalize our project scope.\n" +
      "Please update the document with any last-minute details before we meet.\n\n" +
      "Thank you,\nWilliam",
    isRead: false,
    timestamp: "2025-01-18 18:14:56",
    tags: ["work", "others"],
    folder: "inbox",
  },
  {
    id: "8",
    from: { name: "Jane Doe", email: "jane.doe@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Project Update",
    messageBody:
      "Hello Laura,\n\n" +
      "Here is the latest project update. We've resolved most of the pending issues and started preparing the final report.\n" +
      "Let me know if you need further details.\n\n" +
      "Best,\nJane",
    isRead: true,
    timestamp: "2025-01-17 14:22:11",
    tags: ["work"],
    folder: "inbox",
  },
  {
    id: "9",
    from: { name: "William Smith", email: "william.smith@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Meeting Tomorrow",
    messageBody:
      "Hi Laura,\n\n" +
      "The meeting tomorrow will cover any outstanding tasks. We'll also verify the project timeline for deliverables.\n" +
      "Bring your notes and let's finalize this plan.\n\n" +
      "Regards,\nWilliam",
    isRead: true,
    timestamp: "2025-01-18 18:14:56",
    tags: ["work", "others"],
    folder: "junk",
  },
  {
    id: "10",
    from: { name: "Jane Doe", email: "jane.doe@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Project Update",
    messageBody:
      "Hello Laura,\n\n" +
      "I wanted to send an update on the project status. We've completed initial testing and are moving into the final review stage.\n" +
      "We appreciate your patience and will keep you posted.\n\n" +
      "Sincerely,\nJane",
    isRead: true,
    timestamp: "2025-01-17 14:22:11",
    tags: ["work"],
    folder: "inbox",
  },
  {
    id: "11",
    from: { name: "William Smith", email: "william.smith@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Meeting Tomorrow",
    messageBody:
      "Dear Laura,\n\n" +
      "We have a meeting scheduled tomorrow to discuss partnership opportunities and next steps.\n" +
      "Please confirm your availability and feel free to send any topics you'd like to cover.\n\n" +
      "Best,\nWilliam",
    isRead: true,
    timestamp: "2025-01-18 18:14:56",
    tags: ["work", "others"],
    folder: "inbox",
  },
  {
    id: "12",
    from: { name: "Jane Doe", email: "jane.doe@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Project Update",
    messageBody:
      "Hello,\n\n" +
      "Here's another update regarding the project timeline. We've encountered a small delay but are working to resolve it quickly.\n" +
      "I'll inform you once we have the revised schedule.\n\n" +
      "Thanks,\nJane",
    isRead: true,
    timestamp: "2025-01-17 14:22:11",
    tags: ["work"],
    folder: "trash",
  },
  {
    id: "13",
    from: { name: "William Smith", email: "william.smith@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Meeting Tomorrow",
    messageBody:
      "Hello Laura,\n\n" +
      "Tomorrow's meeting will be crucial for clarifying final tasks and responsibilities.\n" +
      "If you have any open questions, please add them to our shared document beforehand.\n\n" +
      "Cheers,\nWilliam",
    isRead: true,
    timestamp: "2025-01-18 18:14:56",
    tags: ["work", "others"],
    folder: "inbox",
  },
  {
    id: "14",
    from: { name: "Jane Doe", email: "jane.doe@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Project Update",
    messageBody:
      "Hi Laura,\n\n" +
      "We have new updates on the project deliverables and testing progress.\n" +
      "Let me know if you need clarifications or want additional resources.\n\n" +
      "Thank you,\nJane",
    isRead: true,
    timestamp: "2025-01-17 14:22:11",
    tags: ["work"],
    folder: "inbox",
  },
  {
    id: "15",
    from: { name: "William Smith", email: "william.smith@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Meeting Tomorrow",
    messageBody:
      "Hey Laura,\n\n" +
      "Don't forget about tomorrow's meeting to finalize our deployment schedule.\n" +
      "We will also address any remaining blockers before launch.\n\n" +
      "Best,\nWilliam",
    isRead: true,
    timestamp: "2025-01-18 18:14:56",
    tags: ["work", "others"],
    folder: "trash",
  },
  {
    id: "16",
    from: { name: "Jane Doe", email: "jane.doe@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Project Update",
    messageBody:
      "Hello Laura,\n\n" +
      "This update includes final notes on the project we've just wrapped up.\n" +
      "All relevant documents are attached, and we can proceed to close the project once you confirm.\n\n" +
      "Regards,\nJane",
    isRead: true,
    timestamp: "2025-01-17 14:22:11",
    tags: ["work"],
    folder: "archive",
  },
  {
    id: "17",
    from: { name: "Emily Johnson", email: "emily.johnson@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Weekend Plans",
    messageBody:
      "Hey Laura,\n\n" +
      "Are you free this weekend? I was thinking we could go hiking or maybe check out that new cafe in town.\n" +
      "Let me know what you think!\n\n" +
      "Cheers,\nEmily",
    isRead: false,
    timestamp: "2025-01-19 09:15:00",
    tags: ["personal"],
    folder: "inbox",
  },
  {
    id: "18",
    from: { name: "Daniel Davis", email: "daniel.davis@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Family Reunion Plans",
    messageBody:
      "Hi Laura,\n\n" +
      "I'm emailing to finalize plans for our family reunion next month. We could meet at the old lake house or consider a small trip.\n" +
      "Let me know what you prefer so I can make reservations.\n\n" +
      "Love,\nDaniel",
    isRead: false,
    timestamp: "2025-01-19 11:30:00",
    tags: ["family"],
    folder: "inbox",
  },
  {
    id: "19",
    from: { name: "Anna Green", email: "anna.green@example.com" },
    to: ["mlaura.arcidiacono@gmail.com"],
    subject: "Summer Trip Itinerary",
    messageBody:
      "Hello Laura,\n\n" +
      "I'm excited about our summer trip! I've been looking up possible destinations and activities.\n" +
      "We could do a beach resort or maybe a city tour—what do you think?\n\n" +
      "Let me know your thoughts so we can start booking.\n\n" +
      "Best,\nAnna",
    isRead: true,
    timestamp: "2025-01-19 13:45:00",
    tags: ["travel"],
    folder: "inbox",
  },
  {
    id: "20",
    from: { name: "Laura Arcidiacono", email: "mlaura.arcidiacono@gmail.com" },
    to: ["boss@example.com"],
    subject: "Update on Our Project",
    messageBody:
      "Hi Boss,\n\n" +
      "Just letting you know that I've updated the project timeline and attached the latest reports.\n" +
      "Please let me know if there's anything else you need.\n\n" +
      "Regards,\nLaura",
    isRead: true,
    timestamp: "2025-01-19 14:00:00",
    tags: ["work"],
    folder: "sent",
  },
  {
    id: "21",
    from: { name: "Laura Arcidiacono", email: "mlaura.arcidiacono@gmail.com" },
    to: ["buddy@example.com"],
    subject: "Quick Catch-Up",
    messageBody:
      "Hey!\n\n" +
      "I wanted to see if you're free to grab coffee next week.\n" +
      "Things have been hectic, but I'd love to catch up.\n\n" +
      "Best,\nLaura",
    isRead: true,
    timestamp: "2025-01-19 14:15:00",
    tags: ["personal"],
    folder: "sent",
  },
];
