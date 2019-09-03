import selecthor from "./Selecthor";

describe("Selecthor", () => {
  const data = {
    conversations: [
      {
        archived_state: false,
        archived_timestamp: 0,
        cleared_timestamp: 0,
        ephemeral_timer: null,
        global_message_timer: null,
        id: "f786920e-03bd-4be8-9b1f-576d852f5a9b",
        is_guest: false,
        is_managed: false,
        last_event_timestamp: 1567508807145,
        last_read_timestamp: 1567508807145,
        last_server_timestamp: 1567508807145,
        legal_hold_status: 1,
        muted_state: 0,
        muted_timestamp: 0,
        name: "Benny",
        others: ["6c3d1b7c-8985-418b-9897-739c84c9e2c5"],
        receipt_mode: null,
        status: 0,
        type: 2,
        verification_state: 0
      }
    ],
    events: [
      {
        category: 0,
        conversation: "fbc3a996-cea2-40fa-90e9-3a06ecb8a1b3",
        data: {
          name: "Chatty Chat",
          userIds: [
            "2bde49aa-bdb5-458f-98cf-7d3552b10916",
            "8b497692-7a38-4a5d-8287-e3d1006577d6"
          ]
        },
        from: "532af01e-1e24-4366-aacf-33b67d4ee376",
        id: "4f3bafa3-ffd1-4d24-80d6-ad06f4b87ede",
        primary_key: 1,
        time: "1970-01-01T00:00:00.000Z",
        type: "conversation.group-creation"
      },
      {
        category: 0,
        conversation: "f786920e-03bd-4be8-9b1f-576d852f5a9b",
        data: {
          userIds: ["6c3d1b7c-8985-418b-9897-739c84c9e2c5"]
        },
        from: "6c3d1b7c-8985-418b-9897-739c84c9e2c5",
        id: "7821305a-c5dc-4e9d-a9ba-0d772653792d",
        primary_key: 2,
        time: "1970-01-01T00:00:00.000Z",
        type: "conversation.one2one-creation"
      },
      {
        category: 16,
        conversation: "f786920e-03bd-4be8-9b1f-576d852f5a9b",
        data: {
          content: "Hello Captain Planet!",
          expects_read_confirmation: true,
          legal_hold_status: 1,
          mentions: [],
          previews: [],
          quote: null
        },
        from: "8b497692-7a38-4a5d-8287-e3d1006577d6",
        id: "9d1da189-c0f4-4ef5-8797-7339b6e2dc8f",
        primary_key: 3,
        status: 2,
        time: "2019-09-03T11:06:47.145Z",
        type: "conversation.message-add"
      }
    ]
  };

  it("selects everything", () => {
    const query = "select * from conversations";
    const selection = selecthor(data, query);
    expect(selection).toBe(data.conversations);
  });
});
