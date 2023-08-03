export type Mess = {
  "version": "0.1.0",
  "name": "mess",
  "instructions": [
    {
      "name": "init",
      "accounts": [
        {
          "name": "chat",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global chat account to hold 20 messages"
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "send",
      "accounts": [
        {
          "name": "chat",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "text",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "chat",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "messages",
            "type": {
              "vec": {
                "defined": "Message"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Message",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sender",
            "type": "publicKey"
          },
          {
            "name": "text",
            "type": "string"
          }
        ]
      }
    }
  ]
};

export const IDL: Mess = {
  "version": "0.1.0",
  "name": "mess",
  "instructions": [
    {
      "name": "init",
      "accounts": [
        {
          "name": "chat",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global chat account to hold 20 messages"
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "send",
      "accounts": [
        {
          "name": "chat",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "text",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "chat",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "messages",
            "type": {
              "vec": {
                "defined": "Message"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Message",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "sender",
            "type": "publicKey"
          },
          {
            "name": "text",
            "type": "string"
          }
        ]
      }
    }
  ]
};
